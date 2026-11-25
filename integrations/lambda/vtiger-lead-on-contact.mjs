/**
 * @deprecated Use infra/contact-lambda (AmnetVtigerLeadLambdaStack) + NEXT_PUBLIC_VTIGER_LEAD_API_URL instead.
 * Drop-in helpers for AmnetContactLambdaStack — call AFTER email is sent (or in parallel).
 * Env (AWS Lambda configuration, not the public website):
 *   VTIGER_API_BASE_URL, VTIGER_USERNAME, VTIGER_ACCESS_KEY
 *   VTIGER_LEAD_ASSIGNED_USER_ID (optional; otherwise uses /me)
 *   VTIGER_LEAD_SOURCE (optional, default "Web Site")
 *
 * REST: https://help.vtiger.com/article/147111249-Rest-API-Manual
 */

function splitFullName(fullName) {
  const trimmed = String(fullName ?? '').trim();
  if (!trimmed) return { first: 'Unknown', last: 'Unknown' };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: parts[0] };
  return { first: parts[0], last: parts.slice(1).join(' ') };
}

function mapToLead(payload, { assignedUserId, leadSource }) {
  const { first, last } = splitFullName(payload.name);
  const lines = [];
  if (payload.service) lines.push(`Required service: ${payload.service}`);
  if (payload.message) lines.push(String(payload.message).trim());

  const element = {
    firstname: first,
    lastname: last || first,
    email: String(payload.email ?? '').trim(),
    company: String(payload.company ?? '').trim(),
    leadsource: leadSource ?? 'Web Site',
    description: lines.filter(Boolean).join('\n\n'),
  };

  const phone = String(payload.phone ?? '').trim();
  if (phone) element.phone = phone;

  const title = String(payload.title ?? '').trim();
  if (title) element.designation = title;

  if (assignedUserId) element.assigned_user_id = assignedUserId;

  return element;
}

function authHeader(username, accessKey) {
  return `Basic ${Buffer.from(`${username}:${accessKey}`, 'utf8').toString('base64')}`;
}

async function vtigerMe(baseUrl, username, accessKey) {
  const res = await fetch(`${baseUrl.replace(/\/$/, '')}/me`, {
    headers: { Authorization: authHeader(username, accessKey) },
  });
  const body = await res.json();
  return body?.success ? body.result?.id : undefined;
}

/**
 * @param {object} payload Contact form JSON from API Gateway
 * @returns {Promise<{ ok: boolean, leadId?: string, error?: string, skipped?: boolean }>}
 */
export async function createVtigerLeadFromContactPayload(payload) {
  if (String(payload.website ?? '').trim()) {
    return { ok: false, skipped: true, error: 'Honeypot' };
  }

  const baseUrl = process.env.VTIGER_API_BASE_URL;
  const username = process.env.VTIGER_USERNAME;
  const accessKey = process.env.VTIGER_ACCESS_KEY;

  if (!baseUrl || !username || !accessKey) {
    return { ok: false, error: 'Vtiger env not configured' };
  }

  let assignedUserId = process.env.VTIGER_LEAD_ASSIGNED_USER_ID;
  if (!assignedUserId) assignedUserId = await vtigerMe(baseUrl, username, accessKey);

  const element = mapToLead(payload, {
    assignedUserId,
    leadSource: process.env.VTIGER_LEAD_SOURCE,
  });

  const url = new URL(`${baseUrl.replace(/\/$/, '')}/create`);
  url.searchParams.set('elementType', 'Leads');
  url.searchParams.set('element', JSON.stringify(element));

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: { Authorization: authHeader(username, accessKey) },
  });

  const body = await res.json();
  if (!res.ok || !body.success) {
    return { ok: false, error: body?.error?.message ?? `HTTP ${res.status}`, raw: body };
  }

  return { ok: true, leadId: body.result?.id };
}

// Example inside existing handler:
// export async function handler(event) {
//   const payload = JSON.parse(event.body);
//   ... sendEmail(payload);
//   const vtiger = await createVtigerLeadFromContactPayload(payload);
//   if (!vtiger.ok && !vtiger.skipped) console.error('Vtiger lead failed', vtiger);
//   return { statusCode: 200, body: JSON.stringify({ ok: true }) };
// }