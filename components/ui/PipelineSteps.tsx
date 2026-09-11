export function PipelineSteps({ steps, className = '' }: { steps: [string, string][]; className?: string }) {
  return (
    <div className={`flex items-stretch gap-0 overflow-x-auto py-2 px-0.5 ${className}`}>
      {steps.map(([title, sub], i) => (
        <div
          key={i}
          className="pn group relative flex flex-1 min-w-[130px] flex-col items-center justify-center text-center py-[22px] px-3 border border-line bg-white rounded-[14px] shadow-[0_10px_26px_-18px_rgba(16,24,38,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_14px_32px_-14px_rgba(109,92,255,0.28)]"
        >
          <b className="block min-h-[1.3em] w-full font-body text-[14.5px] leading-[1.3] text-ink">
            {title}
          </b>
          <span className="mt-1.5 block w-full font-body text-[10.5px] text-muted-2 tracking-[0.1em] uppercase">
            {sub}
          </span>
        </div>
      ))}
    </div>
  );
}
