import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { PipelineSteps } from '@/components/ui/PipelineSteps';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { ArchDiagram } from '@/components/diagrams/ArchDiagram';
import { aidlcLifecycleSvg } from '@/components/diagrams/aidlcLifecycle.svg';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { CheckList } from '@/components/ui/CheckList';
import { Card } from '@/components/ui/Card';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'AIDLC — AI Development Lifecycle',
  description:
    "Amnet's industrialized AI delivery methodology: agent engineering, AI-native testing, governance, and continuous evaluation for mission-critical reliability.",
};

const CAPABILITIES = [
  { title: 'Strategy & Architecture', items: ['AI opportunity assessment', 'Solution architecture & platform selection', 'Business case & roadmap'] },
  { title: 'Data Foundation', items: ['Data engineering & quality', 'AI-ready data & knowledge modeling', 'RAG readiness'] },
  { title: 'AI Engineering', items: ['Agent development & GenAI apps', 'Prompt & workflow orchestration', 'Model integration'] },
  { title: 'Enterprise Integration', items: ['CRM, ERP & data platforms', 'APIs, security & identity', 'Workflow automation'] },
  { title: 'Governance & Compliance', items: ['Responsible AI policies', 'Security & auditability', 'Risk & compliance frameworks'] },
  { title: 'Continuous Optimization', items: ['Monitoring & observability', 'Model & agent evaluation', 'Cost & performance tuning'] },
];

const VALIDATES_LEFT = ['Data quality & completeness', 'Data lineage', 'Semantic correctness', 'Hallucination detection'];
const VALIDATES_RIGHT = ['Groundedness & accuracy', 'Business-rule compliance', 'Safety & policy adherence', 'Operational reliability'];

const OUTCOMES = [
  { title: 'Faster', body: 'Accelerated AI implementation with predictable quality' },
  { title: 'Safer', body: 'Reduced delivery risk & responsible-AI governance' },
  { title: 'Trusted', body: 'Reliability engineered throughout the lifecycle' },
  { title: 'Scalable', body: 'Scale AI initiatives with confidence and measurable value' },
];

export default function AidlcPage() {
  return (
    <>
      <PageHero
        fullWidth
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Platforms' }, { label: 'AIDLC' }]}
        eyebrow="AI Development Lifecycle"
        heading={
          <>
            We&apos;ve <span className="grad-text">industrialized</span> enterprise AI delivery
          </>
        }
        lede="Enterprise AI success requires more than great models — it requires disciplined engineering. AIDLC is our delivery methodology: proven software engineering, MLOps, LLMOps, agent engineering, AI-native testing, governance, and continuous evaluation — the speed of innovation with the reliability of mission-critical software."
      >
        <div className="flex gap-3.5 flex-wrap">
          <Button href="/contact" variant="molten">
            Talk to an AI Expert
          </Button>
          <Button href="/services" variant="ghost">
            Our Services
          </Button>
        </div>
        <PipelineSteps
          className="mt-14"
          steps={[
            ['Strategize', 'Assess · Roadmap'],
            ['Architect', 'Design · Select'],
            ['Build', 'Agents · GenAI'],
            ['Validate', 'AI-native QA'],
            ['Deploy', 'Govern · Secure'],
            ['Evolve', 'Monitor · Optimize'],
          ]}
        />
      </PageHero>

      <Section tight className="bg-porcelain">
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="The lifecycle"
            heading="Six phases. One continuous loop. Quality gates at every turn."
            lede="AIDLC treats AI delivery as an engineering discipline: each phase has defined entry criteria, exit criteria, and AI-native quality gates that conventional QA can't provide."
          />
          <ArchDiagram
            svg={aidlcLifecycleSvg}
            captionTitle="Fig. 04 — The AIDLC lifecycle"
            captionNote="repeatable across every AI initiative"
          />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead fullWidth eyebrow="Core capabilities" heading="Every discipline enterprise AI demands, in one repeatable model" />
          <div className="eq-grid">
            {CAPABILITIES.map((c) => (
              <Reveal key={c.title} asChild>
                <ServiceCard title={c.title} items={c.items} />
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section dark>
        <Wrap>
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-[60px] tablet:gap-9">
            <div>
              <span className="eyebrow">Where we differentiate</span>
              <h2 className="text-[clamp(24px,2.8vw,32px)] my-3.5 mt-3.5 mb-[18px]">
                We treat AI testing as a first-class engineering discipline
              </h2>
              <p className="text-[clamp(17px,1.5vw,18px)] text-[#B9C2D0] mb-6 max-w-[64ch]">
                Traditional QA is not enough. Unlike conventional software, AI systems require continuous validation
                beyond functionality. Our framework validates:
              </p>
              <div className="grid grid-cols-2 mobile:grid-cols-1 gap-3">
                <CheckList items={VALIDATES_LEFT} />
                <CheckList items={VALIDATES_RIGHT} />
              </div>
            </div>
            <div className="eq-grid eq-grid-2">
              {OUTCOMES.map((o) => (
                <Card key={o.title} equal title={<span className="text-gold">{o.title}</span>}>
                  <p>{o.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Wrap>
      </Section>

      <Section tight>
        <Wrap>
          <CtaBand
            heading="Deliver AI with speed, quality, and confidence."
            paragraph="We don't treat AI as an experiment — we engineer it as an enterprise capability. Let's scope your first production-grade AI initiative."
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
