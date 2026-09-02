export function PipelineSteps({ steps, className = '' }: { steps: [string, string][]; className?: string }) {
  return (
    <div className={`flex items-stretch gap-0 overflow-x-auto py-2 px-0.5 ${className}`}>
      {steps.map(([title, sub], i) => (
        <div
          key={i}
          className="pn relative flex-1 min-w-[130px] text-center py-[22px] px-3 border border-line bg-white/85 rounded-[14px] shadow-[0_10px_26px_-18px_rgba(16,24,38,0.25)]"
        >
          <b className="block font-display text-[14.5px] text-ink">{title}</b>
          <span className="block font-mono text-[10.5px] text-muted-2 tracking-[0.1em] uppercase">{sub}</span>
        </div>
      ))}
    </div>
  );
}
