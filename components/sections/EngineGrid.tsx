import { Reveal } from '@/components/ui/Reveal';

type EngineCardData = {
  num: string;
  title: string;
  body: string;
  impact: [string, string][];
};

const ENGINES: EngineCardData[] = [
  {
    num: 'ENGINE / 01',
    title: 'Opportunity Discovery',
    body: "There's a strong chance 10–20% more pipeline is hidden in your data. AI analyzes customer, operational, and market signals to surface emerging demand, buying intent, and unmet needs your dashboards miss.",
    impact: [
      ['10–20%', 'pipeline growth uncovered'],
      ['Real-time', 'demand & risk signals'],
    ],
  },
  {
    num: 'ENGINE / 02',
    title: 'Deal Acceleration',
    body: 'Agentic AI prioritizes high-value opportunities, guides teams with next-best actions across the conversion journey, and orchestrates engagement — removing delays and manual dependencies.',
    impact: [
      ['30–50%', 'faster deal cycles'],
      ['Higher', 'win rates & margin control'],
    ],
  },
  {
    num: 'ENGINE / 03',
    title: 'Revenue Acceleration',
    body: 'Most enterprises silently lose 15–25% of revenue to inefficient allocation across channels, regions, and SKUs. AI agents dynamically optimize pricing, promotions, and spend in real time — with full visibility into decision logic.',
    impact: [
      ['8–15%', 'revenue uplift, no added spend'],
      ['Explainable', 'allocation decisions'],
    ],
  },
];

export function EngineGrid() {
  return (
    <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[22px]">
      {ENGINES.map((engine) => (
        <Reveal key={engine.num} as="div">
          <div className="rounded-[18px] py-[34px] px-[30px] bg-paper border border-line relative flex flex-col transition-all duration-200 hover:shadow-card hover:-translate-y-1 h-full">
            <span className="font-mono text-xs text-muted-2 tracking-[0.18em]">{engine.num}</span>
            <h3 className="text-[21px] mt-3 mb-2.5">{engine.title}</h3>
            <p className="text-muted text-[15px] flex-1">{engine.body}</p>
            <div className="mt-5 pt-[18px] border-t border-dashed border-line grid gap-[7px]">
              {engine.impact.map(([b, rest]) => (
                <span key={b} className="text-sm flex gap-2.5 items-baseline">
                  <b className="font-display text-bronze text-[17px] whitespace-nowrap">{b}</b> {rest}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
