import Script from 'next/script';

/** Amnet Digital Websense tracker (Settings → Websense → Trackers). */
const VTIGER_WEBSENSE_TRACKER_SRC =
  process.env.NEXT_PUBLIC_VTIGER_TRACKER_SRC ??
  'https://websense.vtiger.com/load/widgets.js?id=VWT-xh9qfmhpWXqfj3DAWQWKW9';

/**
 * Loads the Vtiger Websense tracker site-wide.
 * Override with NEXT_PUBLIC_VTIGER_TRACKER_SRC when the CRM tracker is regenerated.
 */
export function VtigerWebsense() {
  return (
    <Script id="vtiger-websense-tracker" src={VTIGER_WEBSENSE_TRACKER_SRC} strategy="afterInteractive" />
  );
}