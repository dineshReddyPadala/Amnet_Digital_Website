import { Hero } from '@/components/sections/Hero';
import { TrinityCards } from '@/components/sections/TrinityCards';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { MedallionExplorer } from '@/components/sections/MedallionExplorer';
import { EngineGrid } from '@/components/sections/EngineGrid';
import { CaseCarousel } from '@/components/sections/CaseCarousel';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { WhyAmnetGrid } from '@/components/sections/WhyAmnetGrid';
import { QuoteBlock } from '@/components/sections/QuoteBlock';
import { ArchDiagram } from '@/components/diagrams/ArchDiagram';
import { InlineSvg } from '@/components/diagrams/InlineSvg';
import { homeArchStackSvg } from '@/components/diagrams/homeArchStack.svg';
import { foundryFlowSvg } from '@/components/diagrams/foundryFlow.svg';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { CtaBand } from '@/components/ui/CtaBand';
import { CheckList } from '@/components/ui/CheckList';
import { PainList } from '@/components/ui/PainList';

const PAIN_ITEMS = [
  { n: '01', bold: 'Multiple versions of truth', rest: 'across hundreds of systems — time lost reconciling data instead of using it.' },
  { n: '02', bold: "Dashboards that don't translate into decisions", rest: '— insight without execution, value left on the table.' },
  { n: '03', bold: 'AI pilots that never reach production', rest: '— copilots and POCs stall without an industrialized path to scale.' },
  { n: '04', bold: 'Slow, expensive data programs', rest: 'with low ROI and limited executive trust in the numbers.' },
  { n: '05', bold: 'Governance, security & compliance as afterthoughts', rest: '— retrofitted late, at the highest possible cost.' },
  { n: '06', bold: 'No repeatable AI delivery methodology', rest: '— every initiative reinvents quality, testing, and operations.' },
];

const EXEC_QUESTIONS = [
  'How do we become genuinely AI-ready?',
  'How do we trust what AI recommends?',
  'How do we scale AI safely, with governance?',
  'How do we measure business value — not activity?',
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section tight className="!pt-16 !pb-[30px] bg-white">
        <Wrap>
          <Reveal className="font-body text-xs tracking-[0.2em] text-center mb-[26px] text-[#707B8E]">
            DATA · AI · DECISION INTELLIGENCE · PRODUCT ENGINEERING · CLOUD · DEVOPS · AUTOMATION QA
          </Reveal>
          <Reveal className="fv-panel">
            <InlineSvg html={foundryFlowSvg} />
          </Reveal>
        </Wrap>
      </Section>

      <TrinityCards />

      <Section tight>
        <Wrap>
          <StatsStrip />
        </Wrap>
      </Section>

      <Section dark>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="The executive challenge"
            heading={
              <>
                Enterprise AI doesn&apos;t fail for lack of models.
                <br />
                It fails for lack of <span className="grad-text">trusted data and disciplined delivery.</span>
              </>
            }
            lede="Data isn't the problem. Trust and action are. Most data initiatives stop at data — not decisions."
          />
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-20 tablet:gap-10 mobile:gap-6">
            <Reveal>
              <PainList items={PAIN_ITEMS} />
            </Reveal>
            <Reveal className="flex flex-col justify-start gap-[22px]">
              <p className="font-body text-[22px] text-white leading-[1.4]">
                The questions every executive is asking:
              </p>
              <CheckList icon="?" items={EXEC_QUESTIONS} />
              <p className="text-[#9AA9BF] text-[14px]">
                Enterprise AI requires more than models. It requires an end-to-end platform — and a partner who has
                industrialized its delivery.
              </p>
              <Button href="/contact" variant="molten" className="self-start">
                Get an AI-Readiness Assessment
              </Button>
            </Reveal>
          </div>
        </Wrap>
      </Section>

      <Section tight>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="The answer, engineered"
            heading="One connected stack — from raw data to autonomous outcomes"
            lede="Amnet Data Foundry forges trusted data. Amnet Agent Foundry turns it into governed decisions and actions. AIDLC industrializes how it all ships. Three platforms, one closed loop."
          />
          <ArchDiagram
            className="arch-home"
            svg={homeArchStackSvg}
            captionTitle="Fig. 01 — The AI enterprise, end to end"
            captionNote="the trinity in one architecture"
          />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="Inside Amnet Data Foundry"
            heading="From raw ore to Gold: the Medallion, built by agents"
            lede="Explore how autonomous data engineering agents forge fragmented enterprise data into decision-ready business intelligence. Click each layer."
          />
          <MedallionExplorer />
        </Wrap>
      </Section>

      <Section className="bg-paper border-t border-b border-line">
        <Wrap>
          <SectionHead
            fullWidth
            center
            eyebrow="The Trinity Growth Framework"
            heading="Three engines. One closed loop of growth."
            lede="Interconnected AI decision engines that discover opportunity, accelerate execution, and maximize revenue — powered by trusted data from Amnet Data Foundry."
          />
          <EngineGrid />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead fullWidth eyebrow="Proof, not promises" heading="Outcomes we've engineered" />
          <CaseCarousel />
        </Wrap>
      </Section>

      <Section dark>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="Industries"
            heading="Decision intelligence, tuned to your domain"
            lede="Powered by Amnet Data Foundry, our platforms adapt to industry-specific data, workflows, and challenges. Hover to preview, click to explore."
          />
          <IndustryGrid exploreWhite />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead fullWidth center eyebrow="Why CTOs call Amnet Digital" heading="AI-first DNA. Full-stack execution. Startup speed." />
          <WhyAmnetGrid />
        </Wrap>
      </Section>

      <Section tight className="!pt-0">
        <Wrap>
          <QuoteBlock
            quote="In a world where innovation often outpaces application, we have chosen to stay grounded in what truly matters: solving real problems. Every solution we deliver must create tangible value — not just promise."
            initials="KR"
            name="Krishna Reddy"
            role="Founder & CEO, Amnet Digital"
          />
        </Wrap>
      </Section>

      <Section tight className="!pt-0">
        <Wrap>
          <CtaBand
            heading="Ready to turn your data into decisions?"
            paragraph="Build a unified, AI-ready foundation in weeks — not months. Talk to our architects about your data estate, your AI ambitions, and the fastest path between them."
          >
            <Button href="/contact" variant="molten">
              Talk to Experts
            </Button>
            <Button href="/industries" variant="ghost-dark">
              Explore Industry Solutions
            </Button>
          </CtaBand>
        </Wrap>
      </Section>
    </>
  );
}
