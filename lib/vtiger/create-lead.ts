import type { ContactFormPayload } from './contact-form-payload';
import { isHoneypotSubmission, mapContactFormToLeadElement } from './map-contact-form-to-lead';

/**
 * Server-side only — use from Lambda (not the Next.js browser bundle).
 * @see https://help.vtiger.com/article/147111249-Rest-API-Manual
 */

export type VtigerRestConfig = {
  /** e.g. https://your_instance.od1.vtiger.com/restapi/v1/vtiger/default */
  baseUrl: string;
  username: string;
  accessKey: string;
  /** Often mandatory on Leads — user id from GET .../me */
  assignedUserId?: string;
  leadSource?: string;
};

export type CreateLeadResult =
  | { ok: true; leadId: string; raw: unknown }
  | { ok: false; skipped?: boolean; error: string; raw?: unknown };

function basicAuthHeader(username: string, accessKey: string): string {
  if (typeof Buffer !== 'undefined') {
    return `Basic ${Buffer.from(`${username}:${accessKey}`, 'utf8').toString('base64')}`;
  }
  return `Basic ${btoa(`${username}:${accessKey}`)}`;
}

export async function fetchVtigerMe(config: VtigerRestConfig): Promise<string | undefined> {
  const base = config.baseUrl.replace(/\/$/, '');
  const res = await fetch(`${base}/me`, {
    headers: { Authorization: basicAuthHeader(config.username, config.accessKey) },
  });
  const body = (await res.json()) as { success?: boolean; result?: { id?: string } };
  if (!res.ok || !body.success) return undefined;
  return body.result?.id;
}

/** Create a Lead from the same JSON payload the website posts to Lambda. */
export async function createVtigerLeadFromContactForm(
  payload: ContactFormPayload,
  config: VtigerRestConfig,
): Promise<CreateLeadResult> {
  if (isHoneypotSubmission(payload)) {
    return { ok: false, skipped: true, error: 'Honeypot filled' };
  }

  const email = String(payload.email ?? '').trim();
  if (!email) {
    return { ok: false, error: 'Missing email' };
  }

  let assignedUserId = config.assignedUserId;
  if (!assignedUserId) {
    assignedUserId = await fetchVtigerMe(config);
  }

  const element = mapContactFormToLeadElement(payload, {
    assignedUserId,
    leadSource: config.leadSource,
  });

  const base = config.baseUrl.replace(/\/$/, '');
  const url = new URL(`${base}/create`);
  url.searchParams.set('elementType', 'Leads');
  url.searchParams.set('element', JSON.stringify(element));

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: { Authorization: basicAuthHeader(config.username, config.accessKey) },
  });

  let body: { success?: boolean; result?: { id?: string }; error?: { message?: string } };
  try {
    body = (await res.json()) as typeof body;
  } catch {
    return { ok: false, error: `Vtiger returned non-JSON (HTTP ${res.status})` };
  }

  if (!res.ok || !body.success) {
    const msg = body.error?.message ?? `HTTP ${res.status}`;
    return { ok: false, error: msg, raw: body };
  }

  const leadId = body.result?.id;
  if (!leadId) {
    return { ok: false, error: 'Lead created but no id in response', raw: body };
  }

  return { ok: true, leadId, raw: body };
}