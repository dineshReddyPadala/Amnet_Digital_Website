import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { Wrap } from '@/components/ui/Wrap';

const CARDS = [
  {
    href: '/data-foundry',
    step: '01 · The Foundation',
    title: 'Amnet Data Foundry',
    tag: 'agentic data engineering platform',
    body: 'Autonomous AI agents ingest, cleanse, govern, and model fragmented enterprise data into a Medallion architecture with trusted Gold business models — reducing months of engineering to days.',
    link: 'Explore',
    cool: false,
  },
  {
    href: '/agent-foundry',
    step: '02 · The Intelligence',
    title: 'Amnet Agent Foundry',
    tag: 'decision & execution platform',
    body: 'Specialized AI agents analyze enterprise signals, recommend next-best actions, and securely execute approved workflows across CRM, ERP, and operational systems — humans in control where it matters.',
    link: 'Explore',
    cool: true,
  },
  {
    href: '/aidlc',
    step: '03 · The Discipline',
    title: 'AIDLC',
    tag: 'ai development lifecycle',
    body: 'Our industrialized delivery methodology: architecture, agent engineering, AI-native testing, governance, and continuous evaluation — the reliability of mission-critical software at the speed of AI.',
    link: 'Explore',
    cool: false,
  },
];

export function TrinityCards() {
  return (
    <div className="relative bg-white py-16 mobile:py-12">
      <Wrap>
        <div className="eq-grid">
          {CARDS.map((card) => (
            <Reveal key={card.href} asChild>
              <Link
                href={card.href}
                className={`tcard ${card.cool ? 'cool' : ''} eq-card eq-card-rows-3 relative overflow-hidden bg-white rounded-[18px] py-[34px] px-[30px] shadow-card transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-24px_rgba(12,19,34,0.35)]`}
              >
                <div>
                  <span className="text-[11px] tracking-[0.2em] text-muted-2 uppercase block">{card.step}</span>
                  <h3 className="text-[19px] leading-snug mt-2.5 mb-1">{card.title}</h3>
                  <span className={`text-xs mb-3.5 block ${card.cool ? 'text-signal-deep' : 'text-bronze'}`}>
                    {card.tag}
                  </span>
                </div>
                <p className="text-muted text-[14px]">{card.body}</p>
                <span className="mt-5 font-semibold text-[14.5px] inline-flex gap-2 items-center text-ink hover:text-bronze">
                  {card.link} <span>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </div>
  );
}
