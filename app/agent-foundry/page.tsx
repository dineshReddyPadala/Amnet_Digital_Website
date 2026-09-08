import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { PipelineSteps } from '@/components/ui/PipelineSteps';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { ArchDiagram } from '@/components/diagrams/ArchDiagram';
import { agentFoundryArchSvg } from '@/components/diagrams/agentFoundryArch.svg';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { CheckList } from '@/components/ui/CheckList';
import { DecorativeArtPanel } from '@/components/ui/DecorativeArtPanel';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'Amnet Agent Foundry — Enterprise Decision & Execution Platform',
  description:
    'AI agents that monitor signals, recommend next-best actions, and execute governed workflows across CRM, ERP and ITSM — humans in control where it matters.',
};

const WHY_CARDS = [
  { icon: '◉', title: 'Continuously monitors', body: 'Business operations watched in real time across every connected system.' },
  { icon: '◈', title: 'Builds understanding', body: 'Domain-specific business context, not generic pattern-matching.' },
  { icon: '⚑', title: 'Detects & prioritizes', body: 'Opportunities, risks, and anomalies surfaced with explainable reasoning.' },
  { icon: '⇢', title: 'Executes & learns', body: 'Approved actions executed across enterprise systems; outcomes feed the next decision.' },
];

const ENGINE_CARDS = [
  { icon: '⌕', title: 'Opportunity Discovery Engine', body: 'Uncovers hidden growth by analyzing customer, operational, and market data — emerging demand, buying signals, and unmet needs surfaced continuously. Typical result: 10–20% pipeline growth.' },
  { icon: '⚡', title: 'Deal Acceleration Engine', body: 'AI-driven prioritization, next-best actions, and predictive insights that reduce delays and improve win rates. Typical result: 30–50% faster deal cycles.' },
  { icon: '↗', title: 'Revenue Acceleration Engine', body: 'Continuous optimization of pricing, promotions, channels, and allocation with full visibility into decision logic. Typical result: 8–15% revenue uplift with no additional spend.' },
];

const GOVERNANCE_ITEMS = [
  'Configurable approval gates & policy controls',
  'Explainable reasoning behind every recommendation',
  'Full audit trails for every agent action',
  'Secure integration across CRM, ERP, ITSM, finance & marketing',
  'Continuous learning from real outcomes',
];

export default function AgentFoundryPage() {
  return (
    <>
      <PageHero
        fullWidth
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Platforms' }, { label: 'Amnet Agent Foundry' }]}
        eyebrow="Enterprise decision & execution platform"
        eyebrowClassName="!text-signal-deep"
        heading={
          <>
            From AI-powered decisions to{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(100deg,#0284C7,#38BDF8)' }}
            >
              autonomous execution
            </span>
          </>
        }
        lede="Amnet Agent Foundry doesn't stop at insights — it closes the loop. Specialized AI agents analyze business data, reason across enterprise context, recommend next-best actions, and securely execute approved workflows across CRM, ERP, ITSM, marketing, finance, and collaboration platforms. Humans stay in control where it matters."
      >
        <div className="flex gap-3.5 flex-wrap">
          <Button href="/contact" variant="molten">
            Talk to an AI Expert
          </Button>
          <Button href="/data-foundry" variant="ghost">
            Built on Amnet Data Foundry
          </Button>
        </div>
        <PipelineSteps
          className="mt-14"
          steps={[
            ['Business Data', 'AI-ready · Governed'],
            ['Monitor', 'Enterprise signals'],
            ['Reason', 'Business context'],
            ['Recommend', 'Prioritized actions'],
            ['Approve', 'Human-in-loop'],
            ['Execute', 'CRM · ERP · ITSM'],
          ]}
        />
      </PageHero>

      <Section tight>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="Under the hood"
            eyebrowClassName="!text-signal-deep"
            heading="Perceive → reason → plan → act, with humans in the loop"
            lede="Agents ground every decision in trusted data, carry evidence for every recommendation, and execute only through governed, auditable connectors."
          />
          <ArchDiagram
            svg={agentFoundryArchSvg}
            captionColor="#7FD4FF"
            captionTitle="Fig. 03 — Amnet Agent Foundry reference architecture"
            captionNote="closed-loop: outcomes feed back into context"
          />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="Why Amnet Agent Foundry"
            heading="No more dashboards that stop at insights. We automate execution."
            lede="Organizations generate enormous business data, but turning insight into timely action remains the gap. Amnet Agent Foundry bridges it — continuously analyzing signals, recommending next-best actions, and orchestrating intelligent workflows across your systems."
          />
          <div className="eq-grid eq-grid-4">
            {WHY_CARDS.map((c) => (
              <Reveal key={c.title} asChild>
                <Card equal icon={c.icon} title={c.title}>
                  <p>{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section dark>
        <Wrap>
          <SectionHead eyebrow="The Trinity Growth Framework" heading="Three decision engines, one growth loop" />
          <div className="eq-grid">
            {ENGINE_CARDS.map((c) => (
              <Reveal key={c.title} asChild>
                <Card equal icon={c.icon} title={c.title}>
                  <p>{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-[60px] tablet:gap-9 items-center">
            <div>
              <span className="eyebrow">Governance by design</span>
              <h2 className="text-[clamp(24px,2.8vw,32px)] my-3.5 mt-3.5 mb-[18px]">
                Autonomous where it&apos;s safe.
                <br />
                Human where it matters.
              </h2>
              <p className="text-[clamp(17px,1.5vw,18px)] text-muted mb-[22px] max-w-[64ch]">
                Routine, low-risk decisions are automated end-to-end. High-impact decisions route through
                configurable approval workflows with explainable recommendations, policies, and full auditability.
              </p>
              <CheckList items={GOVERNANCE_ITEMS} />
            </div>
            <DecorativeArtPanel
              background="radial-gradient(circle at 40% 30%, rgba(76,195,255,.2), transparent 60%), #0C1322"
              kicker="THE CLOSED LOOP"
              heading={
                <>
                  Data → Decisions → Actions
                  <br />→ Outcomes → Learning ↺
                </>
              }
              sub={
                <>
                  Powered by trusted Gold data
                  <br />
                  from Amnet Data Foundry
                </>
              }
            />
          </div>
        </Wrap>
      </Section>

      <Section tight>
        <Wrap>
          <CtaBand
            heading="Move beyond insights. Start driving intelligent action."
            paragraph="Empower your teams with AI that analyzes, recommends, and executes — faster decisions, measurable growth, humans in control."
          >
            <Button href="/contact" variant="molten">
              Request a Consultation
            </Button>
          </CtaBand>
        </Wrap>
      </Section>
    </>
  );
}
