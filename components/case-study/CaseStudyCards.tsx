'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import type { CaseStudyTeaser } from '@/lib/types';
import { caseHref } from '@/data/caseStudies';
import { useHoverHighlight } from '@/hooks/useHoverHighlight';

type CaseStudyCardsProps = {
  cases: CaseStudyTeaser[];
  /** The gradient title highlight follows hover and rests on the first card. */
  highlight?: boolean;
  /**
   * `lg` is the detail page's "Recent" card. `md` is the landing card, where only "Continue reading" links (it is a plain
   * label until the card has a link). Each part reacts only to its own hover: gradient title, lifted chip, gradient arrow box.
   */
  size?: 'md' | 'lg';
  className?: string;
};

const SIZES = {
  md: { image: 'w-[240px] rounded-md shadow-sm', title: 'text-[20px] font-medium leading-snug', body: 'text-[14px] leading-[1.45] mt-6' },
  lg: { image: 'w-[236px]', title: 'text-[26px] font-semibold leading-tight', body: 'text-[15px] leading-snug mt-5' },
};

/** Two-column grid of case-study cards: photo beside title, tags and teaser. Cards with a detail page link to it. */
export function CaseStudyCards({ cases, highlight = false, size = 'md', className = '' }: CaseStudyCardsProps) {
  const { active, groupProps, itemProps } = useHoverHighlight();
  const s = SIZES[size];

  return (
    <div className={`grid grid-cols-2 tablet:grid-cols-1 ${className}`} {...(highlight ? groupProps : {})}>
      {cases.map((c, i) => {
        const on = highlight && i === active;
        const href = c.href ?? caseHref(c);
        const card: ReactNode = (
          <>
            {c.thumbnail ? (
              <img src={c.thumbnail} alt="" className={`h-[300px] object-cover shrink-0 mobile:w-full ${s.image}`} />
            ) : (
              <div
                aria-hidden
                className={`h-[300px] shrink-0 mobile:w-full ${s.image}`}
                style={{ background: 'radial-gradient(circle at 30% 30%, rgba(109,92,255,.35), transparent 60%), #16243C' }}
              />
            )}
            <div className={`flex flex-col pt-4 ${size === 'md' ? 'max-w-[300px] mobile:max-w-none' : ''}`}>
              <h3
                className={`font-body tracking-normal transition-colors ${s.title} ${
                  on
                    ? 'bg-molten bg-clip-text text-transparent'
                    : `text-ink ${size === 'md' ? 'self-start hover:bg-molten hover:bg-clip-text hover:text-transparent' : ''}`
                }`}
              >
                {c.title}
              </h3>
              <div className="flex gap-2 flex-wrap mt-5">
                {c.chips.map((chip, j) => (
                  <span
                    key={`${chip}-${j}`}
                    className={`text-[11px] leading-none py-[7px] px-2.5 rounded-full border transition-all ${
                      size === 'md'
                        ? 'border-gold-2 text-bronze hover:-translate-y-0.5 hover:shadow-[0_6px_14px_-6px_rgba(86,70,229,0.55)]'
                        : on
                          ? 'border-gold-2 text-bronze'
                          : 'border-[#E5E7EB] text-[#9AA0AA]'
                    }`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <p className={`line-clamp-5 transition-colors ${s.body} ${size === 'lg' && on ? 'text-ink' : 'text-muted'}`}>
                {c.body}
              </p>
              {size === 'md' &&
                (() => {
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
                  return href ? (
                    <Link href={href} aria-label={`Continue reading: ${c.title}`} className={ctaClass}>
                      {cta}
                    </Link>
                  ) : (
                    <span className={ctaClass}>{cta}</span>
                  );
                })()}
            </div>
          </>
        );
        const layout = 'group flex gap-8 mobile:flex-col mobile:gap-5';
        // Landing (`md`) cards link only from "Continue reading"; detail-page (`lg`) cards link as a whole.
        return href && size === 'lg' ? (
          <Link key={c.title} href={href} className={layout} {...(highlight ? itemProps(i) : {})}>
            {card}
          </Link>
        ) : (
          <article key={c.title} className={layout} {...(highlight ? itemProps(i) : {})}>
            {card}
          </article>
        );
      })}
    </div>
  );
}
