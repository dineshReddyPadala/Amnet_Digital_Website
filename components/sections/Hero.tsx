import { Button } from '@/components/ui/Button';

const FOUNDRY_NODES = [
  { label: 'Data', sub: 'Fragmented' },
  { label: 'Truth', sub: 'Governed' },
  { label: 'Insight', sub: 'Semantic' },
  { label: 'Decision', sub: 'Recommended' },
  { label: 'Action', sub: 'Executed' },
  { label: 'Impact', sub: 'Measured' },
];

export function Hero() {
  return (
    <div className="hero-bg relative overflow-hidden text-ink pt-24 pb-0">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative text-center max-w-[940px] mx-auto px-7">
        <span className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase text-[#414B5E] border border-line rounded-full py-2.5 px-[18px] bg-white/75 shadow-[0_6px_20px_-12px_rgba(16,24,38,0.25)]">
          <i className="hero-badge-dot w-[7px] h-[7px] rounded-full bg-gold shadow-[0_0_12px_#6D5CFF]" />
          The AI Enterprise, Engineered
        </span>
        <h1 className="text-[clamp(38px,5.4vw,64px)] font-extrabold my-[26px] mt-[26px] mb-3">
          From enterprise data to <span className="grad-text">autonomous business outcomes</span>
        </h1>
        <h2 className="text-[clamp(19px,1.9vw,24px)] font-semibold leading-[1.4] tracking-[-0.015em] text-ink mx-auto mb-5 max-w-[46ch]">
          We help enterprises turn fragmented data, applications and workflows into intelligent systems
          that predict, decide and act — powered by Data, AI and Agentic Automation.
        </h2>
        <p className="text-[clamp(17px,1.5vw,20px)] text-muted mx-auto mb-5 max-w-[56ch]">
          Most AI initiatives stall at insights. Amnet Digital closes the loop — Amnet Data Foundry builds trusted,
          AI-ready data; Amnet Agent Foundry turns it into decisions and actions; AIDLC delivers it all with
          mission-critical engineering rigor.
        </p>
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#414B5E] mx-auto mb-9">
          Data + AI + Agentic AI + Digital Engineering
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-[26px]">
          <Button href="/services" variant="molten" arrow>
            Explore Our AI Solutions
          </Button>
          <Button href="/contact" variant="ghost">
            Book an AI Strategy Session
          </Button>
        </div>
        <span className="font-mono text-xs text-[#8B93A1] tracking-[0.08em]">
          TRUSTED BY FORTUNE 500 & HIGH-GROWTH ENTERPRISES · US · UK · UAE · INDIA
        </span>
      </div>

      <div className="relative mt-16 mx-auto max-w-[1100px] px-7 pb-[84px]" aria-label="Amnet value pipeline">
        <div className="fl-track grid grid-cols-6 tablet:grid-cols-3 tablet:gap-y-[34px] relative">
          {FOUNDRY_NODES.map((node, i) => (
            <div key={node.label} className="text-center relative">
              <span
                className={`block w-4 h-4 rounded-full mx-auto mt-[19px] mb-3.5 relative z-[2] ${
                  i >= 4
                    ? 'bg-signal shadow-[0_0_0_6px_rgba(76,195,255,0.15),0_0_18px_rgba(76,195,255,0.6)]'
                    : 'bg-gold shadow-[0_0_0_6px_rgba(109,92,255,0.15),0_0_18px_rgba(109,92,255,0.6)]'
                }`}
              />
              <b className="font-display text-[15px] block text-ink">{node.label}</b>
              <span className="font-mono text-[10.5px] tracking-[0.14em] text-[#8B93A1] uppercase">{node.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
