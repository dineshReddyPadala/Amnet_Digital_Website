/**
 * Client helpers for Vtiger Websense (website tracking).
 * @see https://help.vtiger.com/article/150253682-Website-Tracking
 */

export type WebsenseConvertPayload = {
  email: string;
  name?: string;
};

declare global {
  interface Window {
    websense?: {
      convert: (payload: WebsenseConvertPayload) => void;
      event: (eventName: string) => void;
    };
  }
}

/** Link anonymous visit history to a CRM Contact when the visitor shares an email. */
export function vtigerConvertVisitor(payload: WebsenseConvertPayload): void {
  if (typeof window === 'undefined') return;
  window.websense?.convert(payload);
}

/** Record a custom visitor action (e.g. form submit, CTA click). */
export function vtigerTrackEvent(eventName: string): void {
  if (typeof window === 'undefined') return;
  window.websense?.event(eventName);
}

/** Split a display name into first / last for optional CRM fields. */
export function splitVisitorName(fullName: string): { first: string; last: string } {
  const trimmed = fullName.trim();
  if (!trimmed) return { first: '', last: '' };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: parts[0] };
  return { first: parts[0], last: parts.slice(1).join(' ') };
}