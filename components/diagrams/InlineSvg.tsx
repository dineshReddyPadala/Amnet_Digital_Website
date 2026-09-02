/**
 * Renders a pre-authored, build-time-only SVG string verbatim. Used only for
 * the site's hand-tuned architecture diagrams (Fig. 01-07) — content is never
 * derived from user input, so dangerouslySetInnerHTML is safe here and avoids
 * hand-transcribing hundreds of SVG attributes into JSX (a real source of
 * pixel/typo drift for markup this dense).
 */
export function InlineSvg({ html, className = '' }: { html: string; className?: string }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
