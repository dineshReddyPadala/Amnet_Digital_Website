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
    link: 'Explore Amnet Data Foundry',
    cool: false,
  },
  {
    href: '/agent-foundry',
    step: '02 · The Intelligence',
    title: 'Amnet Agent Foundry',
    tag: 'decision & execution platform',
    body: 'Specialized AI agents analyze enterprise signals, recommend next-best actions, and securely execute approved workflows across CRM, ERP, and operational systems — humans in control where it matters.',
    link: 'Explore Amnet Agent Foundry',
    cool: true,
  },
  {
    href: '/aidlc',
    step: '03 · The Discipline',
    title: 'AIDLC',
    tag: 'ai development lifecycle',
    body: 'Our industrialized delivery methodology: architecture, agent engineering, AI-native testing, governance, and continuous evaluation — the reliability of mission-critical software at the speed of AI.',
    link: 'Explore AIDLC',
    cool: false,
  },
];

export function TrinityCards() {
  return (
    <div className="relative -mt-[2px] bg-porcelain pt-2 pb-6 border-t border-line">
      <Wrap>
        <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[22px]">
          {CARDS.map((card) => (
            <Reveal key={card.href} as="div">
              <Link
                href={card.href}
                className={`tcard ${card.cool ? 'cool' : ''} relative overflow-hidden flex flex-col bg-paper border border-line rounded-[18px] py-[34px] px-[30px] shadow-card transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-24px_rgba(12,19,34,0.35)]`}
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-muted-2 uppercase">{card.step}</span>
                <h3 className="text-[23px] mt-2.5 mb-1">{card.title}</h3>
                <span className={`font-mono text-xs mb-3.5 block ${card.cool ? 'text-signal-deep' : 'text-bronze'}`}>
                  {card.tag}
                </span>
                <p className="text-muted text-[15.5px] flex-1">{card.body}</p>
                <span className="mt-5 font-semibold font-display text-[14.5px] inline-flex gap-2 items-center text-ink hover:text-bronze">
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
