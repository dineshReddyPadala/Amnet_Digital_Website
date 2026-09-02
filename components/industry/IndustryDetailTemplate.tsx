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

  const pipeSteps: [string, string][] = industry.pipe.map((p, i) => [
    p.length > 26 ? `${p.slice(0, 26)}…` : p,
    `Step ${i + 1}`,
  ]);

  return (
    <>
      <PageHero
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
          <SectionHead eyebrow="Industry challenges" heading="What's holding growth back" />
          <PainList light items={challengeItems} className="grid-cols-2 tablet:grid-cols-1 grid" />
        </Wrap>
      </Section>

      <Section dark>
        <Wrap>
          <SectionHead
            eyebrow="How intelligence translates to growth"
            heading="Three engines, tuned to your domain"
            lede={industry.growth}
          />
          <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[22px]">
            {industry.engines.map((engine, i) => (
              <Reveal key={engine.title}>
                <Card icon={ENGINE_ICONS[i]} title={`${engine.title} Engine`}>
                  <p>{engine.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead eyebrow="How it works" heading="From your data to your outcomes" />
          <div className="bg-carbon rounded py-7 px-7">
            <PipelineSteps steps={pipeSteps} />
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
