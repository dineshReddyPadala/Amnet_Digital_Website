import Link from 'next/link';
import type { CaseStudyTeaser } from '@/lib/types';
import { caseHref } from '@/data/caseStudies';

type CaseStudyCardsProps = {
  cases: CaseStudyTeaser[];
  className?: string;
};

/**
 * Two-column grid of case-study cards: photo beside title, tags and teaser. Used by the landing page lists.
 * Only "Continue reading" links (it is a plain label until the card has a link); it opens the detail page at its
 * Overview section, past the hero.
 * Each part reacts only to its own hover: gradient title, lifted chip, gradient arrow box.
 */
export function CaseStudyCards({ cases, className = '' }: CaseStudyCardsProps) {
  return (
    <div className={`grid grid-cols-2 tablet:grid-cols-1 ${className}`}>
      {cases.map((c) => {
        const href = c.href ?? caseHref(c);
        const cta = (
          <>
            <span aria-hidden className={`w-7 h-7 grid place-items-center bg-carbon text-white transition-transform group-hover/cta:bg-molten ${href ? 'group-hover/cta:translate-x-0.5' : ''}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
            <span className={href ? 'group-hover/cta:underline' : ''}>Continue reading</span>
          </>
        );
        const ctaClass = 'group/cta mt-auto pt-6 self-start flex items-center gap-3 text-[14px] text-bronze';

        return (
          <article key={c.title} className="flex gap-8 mobile:flex-col mobile:gap-5">
            {c.thumbnail ? (
              <img src={c.thumbnail} alt="" className="w-[240px] h-[300px] rounded-md shadow-sm object-cover shrink-0 mobile:w-full" />
            ) : (
              <div
                aria-hidden
                className="w-[240px] h-[300px] rounded-md shadow-sm shrink-0 mobile:w-full"
                style={{ background: 'radial-gradient(circle at 30% 30%, rgba(109,92,255,.35), transparent 60%), #16243C' }}
              />
            )}
            <div className="flex flex-col pt-4 max-w-[300px] mobile:max-w-none">
              <h3 className="self-start font-body tracking-normal text-[20px] font-medium leading-snug text-ink transition-colors hover:bg-molten hover:bg-clip-text hover:text-transparent">
                {c.title}
              </h3>
              <div className="flex gap-2 flex-wrap mt-5">
                {c.chips.map((chip, j) => (
                  <span
                    key={`${chip}-${j}`}
                    className="text-[11px] leading-none py-[7px] px-2.5 rounded-full border border-gold-2 text-bronze transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_14px_-6px_rgba(86,70,229,0.55)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <p className="line-clamp-5 text-[14px] leading-[1.45] mt-6 text-muted">{c.body}</p>
              {href ? (
                <Link href={`${href}#overview`} aria-label={`Continue reading: ${c.title}`} className={ctaClass}>
                  {cta}
                </Link>
              ) : (
                <span className={ctaClass}>{cta}</span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
