import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import nodemailer, { type Transporter } from 'nodemailer';

type SmtpSecret = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
};

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  title?: string;
  service: string;
  message: string;
  // Honeypot field: real visitors never see or fill this (see ContactForm.tsx).
  // Bots that fill every field trip it; the request still returns 200 so the
  // bot has no signal it was dropped.
  website?: string;
};

const REQUIRED_FIELDS: (keyof ContactPayload)[] = ['name', 'company', 'email', 'service', 'message'];
const MAX_LENGTH: Partial<Record<keyof ContactPayload, number>> = {
  name: 100,
  company: 100,
  email: 200,
  phone: 40,
  title: 100,
  service: 100,
  message: 4000,
};
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Cached across warm Lambda invocations so the secret is only fetched, and
// the SMTP connection only established, once per container lifetime.
let cachedSecret: SmtpSecret | null = null;
let cachedTransporter: Transporter | null = null;
const secretsClient = new SecretsManagerClient({});

async function getSmtpSecret(): Promise<SmtpSecret> {
  if (cachedSecret) return cachedSecret;
  const secretArn = process.env.SMTP_SECRET_ARN;
  if (!secretArn) throw new Error('SMTP_SECRET_ARN environment variable is not set');
  const result = await secretsClient.send(new GetSecretValueCommand({ SecretId: secretArn }));
  if (!result.SecretString) throw new Error('SMTP secret has no string value');
  cachedSecret = JSON.parse(result.SecretString) as SmtpSecret;
  return cachedSecret;
}

async function getTransporter(): Promise<Transporter> {
  if (cachedTransporter) return cachedTransporter;
  const secret = await getSmtpSecret();
  cachedTransporter = nodemailer.createTransport({
    host: secret.host,
    port: secret.port,
    secure: secret.port === 465,
    auth: { user: secret.user, pass: secret.pass },
  });
  return cachedTransporter;
}

function validate(body: unknown): string | null {
  if (!body || typeof body !== 'object') return 'Invalid payload';
  const payload = body as Record<string, unknown>;

  for (const field of REQUIRED_FIELDS) {
    const value = payload[field];
    if (typeof value !== 'string' || !value.trim()) {
      return `Missing required field: ${field}`;
    }
  }
  if (!EMAIL_PATTERN.test(payload.email as string)) {
    return 'Invalid email address';
  }
  for (const [field, max] of Object.entries(MAX_LENGTH)) {
    const value = payload[field];
    if (typeof value === 'string' && value.length > max) {
      return `Field too long: ${field}`;
    }
  }
  return null;
}

function allowedOrigins(): string[] {
  return (process.env.ALLOWED_ORIGIN || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function corsHeaders(requestOrigin: string | undefined): Record<string, string> {
  const allowed = allowedOrigins();
  const origin = requestOrigin && allowed.includes(requestOrigin) ? requestOrigin : allowed[0] ?? '';
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

function jsonResponse(statusCode: number, origin: string | undefined, body: unknown): APIGatewayProxyResultV2 {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    body: JSON.stringify(body),
  };
}

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  const requestOrigin = event.headers?.origin ?? event.headers?.Origin;
  const method = event.requestContext.http.method;

  if (method === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(requestOrigin) };
  }
  if (method !== 'POST') {
    return jsonResponse(405, requestOrigin, { error: 'Method not allowed' });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return jsonResponse(400, requestOrigin, { error: 'Invalid JSON body' });
  }

  // Honeypot tripped: pretend success, don't send, don't tell the bot why.
  if ((payload as ContactPayload)?.website) {
    return jsonResponse(200, requestOrigin, { ok: true });
  }

  const validationError = validate(payload);
  if (validationError) {
    return jsonResponse(400, requestOrigin, { error: validationError });
  }

  const body = payload as ContactPayload;

  try {
    const secret = await getSmtpSecret();
    const transporter = await getTransporter();
    await transporter.sendMail({
      from: secret.from,
      to: secret.to,
      replyTo: body.email,
      subject: `New "Talk to an Expert" submission — ${body.name} (${body.company})`,
      text: [
        `Name: ${body.name}`,
        `Company: ${body.company}`,
        `Email: ${body.email}`,
        `Phone: ${body.phone || '-'}`,
        `Job title: ${body.title || '-'}`,
        `Requested service: ${body.service}`,
        '',
        'Message:',
        body.message,
      ].join('\n'),
    });
    // Operational status only — never log message bodies or PII.
    console.log(JSON.stringify({ event: 'contact_email_sent', timestamp: new Date().toISOString() }));
    return jsonResponse(200, requestOrigin, { ok: true });
  } catch (err) {
    console.error(JSON.stringify({ event: 'contact_email_failed', timestamp: new Date().toISOString() }));
    return jsonResponse(502, requestOrigin, { error: 'Failed to send message' });
  }
}
