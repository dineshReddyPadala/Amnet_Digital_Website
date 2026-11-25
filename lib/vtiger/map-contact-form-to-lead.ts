import type { ContactFormPayload } from './contact-form-payload';

function splitFullName(fullName: string): { first: string; last: string } {
  const trimmed = fullName.trim();
  if (!trimmed) return { first: '', last: '' };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: parts[0] };
  return { first: parts[0], last: parts.slice(1).join(' ') };
}

/**
 * Maps website contact JSON to Vtiger Leads REST `element` fields.
 * Confirm field API names with GET .../describe?elementType=Leads on your instance.
 */
export function mapContactFormToLeadElement(
  payload: ContactFormPayload,
  options?: { assignedUserId?: string; leadSource?: string },
): Record<string, string> {
  const name = String(payload.name ?? '').trim();
  const { first, last } = splitFullName(name);

  const descriptionParts = [
    payload.service ? `Required service: ${payload.service}` : '',
    payload.message ? String(payload.message).trim() : '',
  ].filter(Boolean);

  const element: Record<string, string> = {
    firstname: first || 'Unknown',
    lastname: last || first || 'Unknown',
    email: String(payload.email ?? '').trim(),
    company: String(payload.company ?? '').trim(),
    leadsource: options?.leadSource ?? 'Web Site',
    description: descriptionParts.join('\n\n'),
  };

  const phone = String(payload.phone ?? '').trim();
  if (phone) element.phone = phone;

  const title = String(payload.title ?? '').trim();
  if (title) element.designation = title;

  if (options?.assignedUserId) element.assigned_user_id = options.assignedUserId;

  return element;
}

export function isHoneypotSubmission(payload: ContactFormPayload): boolean {
  return Boolean(String(payload.website ?? '').trim());
}