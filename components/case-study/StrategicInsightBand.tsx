type StrategicInsightBandProps = {
  statement: string;
  image?: string;
  /** Compact sits inside the case-study content column; the full band spans the page. */
  compact?: boolean;
};

/** Dark photo band: "Strategic Insight" beside one statement. */
export function StrategicInsightBand({ statement, image, compact = false }: StrategicInsightBandProps) {
  return (
    <div className="relative overflow-hidden bg-carbon">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: image
            ? 'rgba(12,19,34,.6)'
            : 'radial-gradient(600px 300px at 30% 40%, rgba(109,92,255,.16), transparent 65%)',
        }}
      />
      <div
        className={`relative max-w-[1440px] mx-auto grid grid-cols-2 tablet:grid-cols-1 items-center gap-8 tablet:px-7 ${
          compact ? 'py-16 px-20' : 'py-24 px-36'
        }`}
      >
        <h2 className={`text-white tracking-[-0.5px] ${compact ? 'text-[clamp(34px,3.4vw,44px)]' : 'text-[clamp(34px,3.6vw,48px)]'}`}>
          Strategic Insight
        </h2>
        <p className="font-display text-[clamp(22px,2.3vw,30px)] font-medium leading-tight text-white max-w-[540px]">
          {statement}
        </p>
      </div>
    </div>
  );
}
