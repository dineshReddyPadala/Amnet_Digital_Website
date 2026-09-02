import type { CaseStudy } from '@/lib/types';

export function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="case grid grid-cols-[1.1fr_0.9fr] tablet:grid-cols-1 rounded-[18px] overflow-hidden bg-carbon-2 border border-line-dark text-[#E9EEF6]">
      <div className="py-10 px-10 mobile:px-7">
        <span className="font-mono text-xs tracking-[0.16em] text-gold uppercase">{caseStudy.client}</span>
        <h3 className="text-white text-2xl mt-3 mb-3">{caseStudy.title}</h3>
        <p className="text-[#A9B5C8] text-[15.5px]">{caseStudy.body}</p>
        <div className="flex gap-2 flex-wrap mt-5">
          {caseStudy.chips.map((chip) => (
            <span key={chip} className="font-mono text-[11.5px] py-1.5 px-3 rounded-full border border-line-dark text-[#AFC5DD]">
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div
        className="relative min-h-[300px] grid place-items-center"
        style={{ background: 'radial-gradient(circle at 60% 40%, rgba(109,92,255,.2), transparent 60%), #0B1424' }}
      >
        <div className="text-center">
          <b className="font-display text-[clamp(52px,6vw,84px)] font-extrabold bg-molten bg-clip-text text-transparent tracking-[-0.04em] block leading-none">
            {caseStudy.metric}
          </b>
          <span className="font-mono text-xs tracking-[0.18em] uppercase text-[#8FA0B8]">{caseStudy.metricLabel}</span>
        </div>
      </div>
    </div>
  );
}
