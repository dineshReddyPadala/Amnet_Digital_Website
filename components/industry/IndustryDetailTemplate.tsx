import type { Industry } from '@/lib/types';
import { PageHero } from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { PainList } from '@/components/ui/PainList';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { PipelineSteps } from '@/components/ui/PipelineSteps';
import { CheckList } from '@/components/ui/CheckList';
import { ArchDiagram } from '@/components/diagrams/ArchDiagram';
import { industryBlueprintSvg } from '@/components/diagrams/industryBlueprint.svg';
import { CtaBand } from '@/components/ui/CtaBand';

const ENGINE_ICONS = ['⌕', '⚡', '↗'];

export function IndustryDetailTemplate({ industry }: { industry: Industry }) {
  const challengeItems = industry.challenges.map((c, i) => ({
    n: String(i + 1).padStart(2, '0'),
    bold: '',
    rest: c,
  }));

  const pipeSteps: [string, string][] = industry.pipe.map((p, i) => [p, `Step ${i + 1}`]);

  return (
    <>
      <PageHero
        fullWidth
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: industry.name }]}
        eyebrow={industry.eyebrow}
        heading={industry.title}
        lede={industry.sub}
      >
        <Button href="/contact" variant="molten">
          Request a Demo
        </Button>
      </PageHero>

      <Section>
        <Wrap>
          <SectionHead fullWidth eyebrow="Industry challenges" heading="What's holding growth back" />
          <PainList light items={challengeItems} className="grid-cols-2 tablet:grid-cols-1 grid" />
        </Wrap>
      </Section>

      <Section dark>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="How intelligence translates to growth"
            heading="Three engines, tuned to your domain"
            lede={industry.growth}
          />
          <div className="eq-grid">
            {industry.engines.map((engine, i) => (
              <Reveal key={engine.title} asChild>
                <Card equal icon={ENGINE_ICONS[i]} title={`${engine.title} Engine`}>
                  <p>{engine.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead fullWidth eyebrow="How it works" heading="From your data to your outcomes" />
          <div className="relative overflow-hidden rounded-[22px] border border-line-dark bg-carbon py-8 px-5 mobile:px-4">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{
                background:
                  'radial-gradient(600px 280px at 10% 0%, rgba(109,92,255,.18), transparent 55%), radial-gradient(500px 240px at 90% 100%, rgba(76,195,255,.12), transparent 50%)',
              }}
            />
            <PipelineSteps className="relative z-[1]" steps={pipeSteps} />
          </div>
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-[22px] mt-14">
            <div>
              <h3 className="text-[clamp(24px,2.8vw,32px)] mb-[18px]">Business impact</h3>
              <CheckList items={industry.impact} />
            </div>
            <div>
              <h3 className="text-[clamp(24px,2.8vw,32px)] mb-[18px]">Why Amnet</h3>
              <CheckList items={industry.why} />
            </div>
          </div>
        </Wrap>
      </Section>

      <Section tight className="bg-porcelain !pt-0">
        <Wrap>
          <ArchDiagram
            svg={industryBlueprintSvg}
            captionTitle="Fig. 07 — Industry solution blueprint"
            captionNote="adapted to your data, workflows & regulations"
          />
        </Wrap>
      </Section>

      <Section tight>
        <Wrap>
          <CtaBand heading={industry.ctaHeading} paragraph={industry.ctaParagraph}>
            <Button href="/contact" variant="molten">
              Request a Demo
            </Button>
          </CtaBand>
        </Wrap>
      </Section>
    </>
  );
}
