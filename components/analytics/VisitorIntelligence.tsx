import Script from 'next/script';

/** LeadOnion / DS360 + Zymplify visitor intelligence (intent & company identification). */
const DS360_TRACKING_CODE = 'DS-17295-4424-982';
const ZYMPLIFY_PIXEL_ID = '7f361060-48cf-4049-8b55-fd7550fb9413';

export function VisitorIntelligence() {
  return (
    <>
      <Script id="ds360-tracking-code" strategy="afterInteractive">
        {`var t_code = "${DS360_TRACKING_CODE}";`}
      </Script>
      <Script src="https://ds360.co/track/script.js" strategy="afterInteractive" />
      <Script
        id="zym-pixel-src"
        src={`https://cdn.pixel.zymplify.com/pixels/${ZYMPLIFY_PIXEL_ID}/p.js`}
        strategy="afterInteractive"
        async
      />
    </>
  );
}
