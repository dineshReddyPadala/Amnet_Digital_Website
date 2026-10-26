import Link from 'next/link';
import { ReactNode } from 'react';
import type { CaseStudyTeaser } from '@/lib/types';
import { caseHref } from '@/data/caseStudies';

/**
 * The detail page's "Recent case studies": photo beside a large title, grey tags and teaser.
 * On hover the title turns gradient and underlines; a hovered chip lifts, as on the landing cards. Text is clamped to sit within the 300px photo.
 * Cards with a detail page link as a whole.
 */
export function RecentCaseCards({ cases, className = '' }: { cases: CaseStudyTeaser[]; className?: string }) {
  return (
    <div className={`grid grid-cols-2 tablet:grid-cols-1 ${className}`}>
      {cases.map((c) => {
        const href = c.href ?? caseHref(c);
        const card: ReactNode = (
          <>
            {c.thumbnail ? (
              <img src={c.thumbnail} alt="" className="w-[236px] h-[300px] object-cover shrink-0 mobile:w-full" />
            ) : (
              <div
                aria-hidden
                className="w-[236px] h-[300px] shrink-0 mobile:w-full"
                style={{ background: 'radial-gradient(circle at 30% 30%, rgba(109,92,255,.35), transparent 60%), #16243C' }}
              />
            )}
            <div className="min-w-0 pt-2">
              <h3 className="line-clamp-3 font-body text-[22px] font-semibold leading-tight tracking-normal text-ink decoration-bronze decoration-2 underline-offset-4 group-hover:underline group-hover:bg-molten group-hover:bg-clip-text group-hover:text-transparent">
                {c.title}
              </h3>
              <div className="flex gap-2 flex-wrap mt-6">
                {c.chips.map((chip, j) => (
                  <span key={`${chip}-${j}`} className="text-[11px] leading-none py-[7px] px-3 rounded-full border border-[#D1D5DB] text-[#6B7280] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_14px_-6px_rgba(86,70,229,0.55)]">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="line-clamp-5 text-[15px] leading-snug mt-5 text-ink">{c.body}</p>
            </div>
          </>
        );
        const layout = 'group flex gap-8 mobile:flex-col mobile:gap-5';
        return href ? (
          <Link key={c.title} href={href} className={layout}>
            {card}
          </Link>
        ) : (
          <article key={c.title} className={layout}>
            {card}
          </article>
        );
      })}
    </div>
  );
}
