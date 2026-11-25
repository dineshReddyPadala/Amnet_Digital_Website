import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { createVtigerLeadFromContactForm, type VtigerRestConfig } from '../../../lib/vtiger/create-lead';
import type { ContactFormPayload } from '../../../lib/vtiger/contact-form-payload';

type VtigerSecret = VtigerRestConfig;

const REQUIRED_FIELDS: (keyof ContactFormPayload)[] = ['name', 'company', 'email', 'service', 'message'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let cachedVtigerSecret: VtigerSecret | null = null;
const secretsClient = new SecretsManagerClient({});

async function getVtigerSecret(): Promise<VtigerSecret> {
  if (cachedVtigerSecret) return cachedVtigerSecret;
  const secretArn = process.env.VTIGER_SECRET_ARN;
  if (!secretArn) throw new Error('VTIGER_SECRET_ARN environment variable is not set');
  const result = await secretsClient.send(new GetSecretValueCommand({ SecretId: secretArn }));
  if (!result.SecretString) throw new Error('Vtiger secret has no string value');
  cachedVtigerSecret = JSON.parse(result.SecretString) as VtigerSecret;
  return cachedVtigerSecret;
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

  const formPayload = payload as ContactFormPayload;
  if (formPayload.website?.trim()) {
    return jsonResponse(200, requestOrigin, { ok: true, skipped: true });
  }

  const validationError = validate(payload);
  if (validationError) {
    return jsonResponse(400, requestOrigin, { error: validationError });
  }

  try {
    const config = await getVtigerSecret();
    const result = await createVtigerLeadFromContactForm(formPayload, config);

    if (!result.ok) {
      if (result.skipped) {
        return jsonResponse(200, requestOrigin, { ok: true, skipped: true });
      }
      console.error(
        JSON.stringify({
          event: 'vtiger_lead_failed',
          error: result.error,
          timestamp: new Date().toISOString(),
        }),
      );
      return jsonResponse(502, requestOrigin, { error: 'Failed to create lead' });
    }

    console.log(
      JSON.stringify({
        event: 'vtiger_lead_created',
        leadId: result.leadId,
        timestamp: new Date().toISOString(),
      }),
    );
    return jsonResponse(200, requestOrigin, { ok: true, leadId: result.leadId });
  } catch (err) {
    console.error(JSON.stringify({ event: 'vtiger_lead_failed', timestamp: new Date().toISOString() }));
    return jsonResponse(502, requestOrigin, { error: 'Failed to create lead' });
  }
}