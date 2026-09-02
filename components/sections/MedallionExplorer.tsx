'use client';

import { useState } from 'react';
import { MEDALLION } from '@/data/medallion';
import type { MedallionLayerKey } from '@/lib/types';
import { Reveal } from '@/components/ui/Reveal';

const TABS: { key: MedallionLayerKey; coin: string; title: string; sub: string }[] = [
  { key: 'bronze', coin: 'coin-bronze', title: 'Bronze — Raw', sub: 'Full-fidelity ingestion' },
  { key: 'silver', coin: 'coin-silver', title: 'Silver — Conformed', sub: 'Cleansed & standardized' },
  { key: 'gold', coin: 'coin-gold', title: 'Gold — AI-Ready', sub: 'Business models & KPIs' },
  { key: 'semantic', coin: 'coin-semantic', title: 'Semantic Layer', sub: 'Business-friendly intelligence' },
];

export function MedallionExplorer() {
  const [layer, setLayer] = useState<MedallionLayerKey>('bronze');
  const data = MEDALLION[layer];

  return (
    <Reveal className="grid grid-cols-[340px_1fr] tablet:grid-cols-1 gap-[34px] items-start">
      <div className="flex flex-col gap-3" role="tablist" aria-label="Medallion layers">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={layer === tab.key}
            onClick={() => setLayer(tab.key)}
            className={`flex gap-4 items-center text-left py-[18px] px-5 rounded-[14px] border-[1.5px] bg-paper transition-all duration-150 ${
              layer === tab.key
                ? 'border-gold shadow-[0_12px_30px_-14px_rgba(109,92,255,0.5)] translate-x-1.5'
                : 'border-line'
            }`}
          >
            <span className={`coin ${tab.coin} w-11 h-11 rounded-full flex-none shadow-[inset_0_-5px_10px_rgba(0,0,0,0.24),inset_0_4px_8px_rgba(255,255,255,0.45)]`} />
            <span>
              <b className="font-display block text-base">{tab.title}</b>
              <span className="text-[13px] text-muted">{tab.sub}</span>
            </span>
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        className="med-panel bg-carbon-2 text-[#E8EDF5] rounded relative overflow-hidden border border-line-dark py-9 px-[38px] min-h-[380px]"
      >
        <span className="eyebrow text-gold">Layer · {layer.toUpperCase()}</span>
        <h3 className="text-white text-[26px] mt-3 mb-3">{data.title}</h3>
        <p className="text-[#AEB9CB] max-w-[56ch]">{data.paragraph}</p>
        <ul className="mt-5 list-none grid gap-[11px]">
          {data.points.map((point) => (
            <li key={point} className="flex gap-[11px] text-[15px] text-[#D4DCE9]">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
