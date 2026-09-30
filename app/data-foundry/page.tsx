import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { PipelineSteps } from '@/components/ui/PipelineSteps';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { ArchDiagram } from '@/components/diagrams/ArchDiagram';
import { dataFoundryArchSvg } from '@/components/diagrams/dataFoundryArch.svg';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { CheckList } from '@/components/ui/CheckList';
import { DecorativeArtPanel } from '@/components/ui/DecorativeArtPanel';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'Amnet Data Foundry — Agentic Data Engineering Platform',
  description:
    'Autonomous AI agents build your Medallion architecture and AI-ready Gold data models — 50–60% faster implementation, 70% less manual engineering effort.',
};

const PROBLEM_CARDS = [
  { icon: '⊘', title: 'Multiple versions of truth', body: 'Conflicting numbers across systems erode executive confidence in every report.' },
  { icon: '◷', title: 'Reconciling, not deciding', body: 'Teams burn weeks reconciling data instead of using it to move the business.' },
  { icon: '▢', title: 'Dashboards without decisions', body: 'Insight is generated; action never follows. The loop stays open.' },
  { icon: '$', title: 'Slow, expensive programs', body: 'Multi-year data initiatives with low ROI and mounting data debt.' },
  { icon: '⚠', title: 'Limited trust at the top', body: "Executives hesitate to make calls on data they can't verify or trace." },
  { icon: '◍', title: 'Not built for AI', body: 'Legacy estates were never structured for GenAI, RAG, or autonomous agents.' },
];

const PLATFORM_CARDS = [
  { icon: '⌕', title: 'Auto Schema Discovery', body: 'Agents understand and map source systems — ERP, CRM, HCM, SCM, streaming, files, mainframes — automatically.' },
  { icon: '⇄', title: 'Smart Data Mapping', body: 'Automated mappings and transformations from Bronze to Silver to Gold, with minimal manual effort.' },
  { icon: '✓', title: 'Data Quality Agents', body: 'Detect, fix, and continuously monitor quality — validation as a living system, not a one-time project.' },
  { icon: '⛓', title: 'Lineage Agents', body: 'End-to-end lineage and impact analysis, so every number can be traced to its source.' },
  { icon: '⚙', title: 'Pipeline Agents', body: 'Auto-build and optimize ETL/ELT pipelines; onboard new sources in days, not quarters.' },
  { icon: '◉', title: 'Entity Resolution 360', body: 'Customer, Product, and Account 360 resolved across systems into single trusted entities.' },
];

const IMPACT_STATS: [string, string][] = [
  ['50–60%', 'Faster implementation vs. traditional builds'],
  ['70%', 'Reduction in manual engineering effort'],
  ['Days', 'To onboard new data sources'],
  ['Lower', 'Cost to scale, govern, and evolve'],
];

const DIFFERENTIATORS = [
  { bold: 'Built for trust', rest: '— automated data quality, lineage, governance, and PII detection engineered in from the first ingestion.' },
  { bold: 'Built for business, not just data teams', rest: '— KPI-aligned models and a semantic layer that translates technical data into decision language.' },
  { bold: 'Built for AI from the start', rest: '— structured for GenAI, RAG, automation, and decision systems; your Gold layer is your AI foundation.' },
  { bold: 'Continuously synchronized', rest: '— the foundation evolves as your enterprise systems evolve, without re-platforming.' },
];

export default function DataFoundryPage() {
  return (
    <>
      <PageHero
        fullWidth
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Platforms' }, { label: 'Amnet Data Foundry' }]}
        eyebrow="Agentic data engineering platform"
        heading={
          <>
            Stop building data lakes.
            <br />
            Start building <span className="grad-text">AI-ready enterprises</span>
          </>
        }
        lede="Amnet Data Foundry uses autonomous AI agents to ingest, understand, transform, and govern enterprise data — automatically building a Medallion architecture and trusted Gold business models that power analytics, copilots, decision intelligence, and enterprise AI. Months of engineering effort, reduced to days."
      >
        <div className="flex gap-3.5 flex-wrap">
          <Button href="/contact" variant="molten">
            Request a Demo
          </Button>
          <Button href="/case-studies" variant="ghost">
            See it in Production
          </Button>
        </div>
        <PipelineSteps
          className="mt-14"
          steps={[
            ['Data Sources', 'ERP · CRM · IoT · Files'],
            ['Amnet Data Foundry', 'Agents · Medallion'],
            ['AI Agents', 'Analyze · Reason'],
            ['Decisions', 'Recommended'],
            ['Actions', 'Executed'],
            ['Outcomes', 'Measured'],
          ]}
        />
      </PageHero>

      <Section tight className="bg-porcelain">
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="Under the hood"
            heading="One agentic pipeline, from raw sources to AI-ready consumption"
            lede="Autonomous agents operate every stage — ingestion, transformation, modeling, and governance — so the architecture below builds and maintains itself."
          />
          <ArchDiagram
            svg={dataFoundryArchSvg}
            captionTitle="Fig. 02 — Amnet Data Foundry reference architecture"
            captionNote="agents build & operate every layer"
          />
        </Wrap>
      </Section>

      <Section className="!pt-0">
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="The problem"
            heading="&ldquo;Data isn't the problem. Trust and action are.&rdquo;"
            lede="Enterprises don't struggle with a lack of data — they struggle to make it usable, reliable, and actionable. Most data initiatives fail because they stop at data, not decisions."
          />
          <div className="eq-grid">
            {PROBLEM_CARDS.map((c) => (
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
          <SectionHead
            fullWidth
            eyebrow="The platform"
            heading="Autonomous agents that do the data engineering"
            lede="Amnet Data Foundry's agents continuously connect, discover, cleanse, resolve, validate, and govern — building and maintaining your Medallion architecture as your enterprise evolves."
          />
          <div className="eq-grid">
            {PLATFORM_CARDS.map((c) => (
              <Reveal key={c.title} asChild>
                <Card equal icon={c.icon} title={c.title}>
                  <p>{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-11">
            <div className="eq-grid eq-grid-4">
              {IMPACT_STATS.map(([value, label]) => (
                <Card key={value} equal title={<span className="text-gold">{value}</span>}>
                  <p>{label}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-[60px] tablet:gap-9 items-center">
            <div>
              <span className="eyebrow">Built for trust from day one</span>
              <h2 className="text-[clamp(24px,2.8vw,32px)] my-3.5 mt-3.5 mb-[18px]">What makes it different</h2>
              <CheckList items={DIFFERENTIATORS} />
            </div>
            <DecorativeArtPanel
              background="radial-gradient(circle at 50% 30%, rgba(109,92,255,.22), transparent 60%), #0C1322"
              kicker="OUTCOME"
              heading={
                <>
                  A single, trusted view
                  <br />
                  across the enterprise
                </>
              }
              sub={
                <>
                  Faster analytics · Consistent outcomes
                  <br />
                  Foundation for AI-driven growth
                </>
              }
            />
          </div>
        </Wrap>
      </Section>

      <Section tight className="!pt-0">
        <Wrap>
          <CtaBand
            fullWidth
            heading="From raw enterprise data to AI-ready business knowledge — in days, not months."
            paragraph="Talk to an Amnet Data Foundry architect about your current estate and see a working Medallion build against your own sample data."
          >
            <Button href="/contact" variant="molten">
              Request a Demo
            </Button>
            <Button href="/industries" variant="ghost-dark">
              Industry Solutions
            </Button>
          </CtaBand>
        </Wrap>
      </Section>
    </>
  );
}
