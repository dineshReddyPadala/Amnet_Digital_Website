import type { CaseStudy } from '@/lib/types';
import Link from 'next/link';

type CaseCardProps = {
  caseStudy: CaseStudy;
  index?: number;
  total?: number;
  onPrev?: () => void;
  onNext?: () => void;
  showAllLink?: boolean;
};

export function CaseCard({
  caseStudy,
  index = 0,
  total = 0,
  onPrev,
  onNext,
  showAllLink = true,
}: CaseCardProps) {
  const showNav = total > 0 && onPrev && onNext;

  return (
    <div className="case grid grid-cols-[1.1fr_0.9fr] tablet:grid-cols-1 rounded-[18px] overflow-hidden bg-carbon-2 border border-line-dark text-[#E9EEF6]">
      <div className="py-10 px-10 mobile:px-7">
        <span className="text-xs tracking-[0.16em] text-gold uppercase">{caseStudy.client}</span>
        <h3 className="text-white text-2xl mt-3 mb-3">{caseStudy.title}</h3>
        <p className="text-[#A9B5C8] text-[14px]">{caseStudy.body}</p>
        <div className="flex gap-2 flex-wrap mt-5">
          {caseStudy.chips.map((chip) => (
            <span key={chip} className="text-[11.5px] py-1.5 px-3 rounded-full border border-line-dark text-[#AFC5DD]">
              {chip}
            </span>
          ))}
        </div>
        {(showNav || showAllLink) && (
          <div className="flex items-center gap-2.5 mt-5 flex-wrap">
            {showNav && (
              <>
                <button
                  type="button"
                  aria-label="Previous case study"
                  onClick={onPrev}
                  className="w-[42px] h-[42px] rounded-full border border-line-dark bg-transparent text-[#E9EEF6] grid place-items-center transition-colors hover:bg-white/10"
                >
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M6 11L1 6l5-5M1 6h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next case study"
                  onClick={onNext}
                  className="w-[42px] h-[42px] rounded-full border border-line-dark bg-transparent text-[#E9EEF6] grid place-items-center transition-colors hover:bg-white/10"
                >
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M10 1l5 5-5 5M15 6H1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="flex gap-[7px] ml-2">
                  {Array.from({ length: total }).map((_, i) => (
                    <i key={i} className={`case-dot ${i === index ? 'on' : ''}`} />
                  ))}
                </div>
              </>
            )}
            {showAllLink && (
              <Link href="/case-studies" className="ml-auto font-semibold font-body text-[14.5px]">
                All case studies →
              </Link>
            )}
          </div>
        )}
      </div>
      <div
        className="relative min-h-[300px] grid place-items-center"
        style={{ background: 'radial-gradient(circle at 60% 40%, rgba(109,92,255,.2), transparent 60%), #0B1424' }}
      >
        <div className="text-center">
          <h3 className="text-[clamp(52px,6vw,84px)] font-extrabold bg-molten bg-clip-text text-transparent tracking-[-0.04em] leading-none m-0">
            {caseStudy.metric}
          </h3>
          <span className="text-xs tracking-[0.18em] uppercase text-[#8FA0B8]">{caseStudy.metricLabel}</span>
        </div>
      </div>
    </div>
  );
}
