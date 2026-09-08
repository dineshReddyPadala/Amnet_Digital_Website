import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { PlainStats } from '@/components/ui/PlainStats';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'AI decision intelligence adapted to Retail, CPG, Media, Logistics, Information Management, and Travel — powered by Amnet Data Foundry.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        fullWidth
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
        eyebrow="Industry solutions"
        heading={
          <>
            AI solutions built for <span className="grad-text">every industry</span>
          </>
        }
        lede="Powered by Amnet Data Foundry, we combine unified data with AI agents to transform how businesses analyze, decide, and act — adapted to industry-specific data, workflows, and challenges."
      >
        <Button href="/contact" variant="molten">
          Talk to Experts
        </Button>
      </PageHero>

      <Section>
        <Wrap>
          <SectionHead fullWidth eyebrow="Industries we serve" heading="Choose your battlefield" />
          <IndustryGrid />
        </Wrap>
      </Section>

      <Section dark>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="How we help"
            heading="Data → Intelligence → Action → Outcomes"
            lede="Every industry solution combines Amnet Data Foundry (unified, trusted data) with AI agents (insights, recommendations, and actions) through the Trinity Growth Framework."
          />
          <PlainStats
            stats={[
              ['10–20%', 'Pipeline growth discovered'],
              ['30–50%', 'Faster deal cycles'],
              ['8–15%', 'Revenue uplift, no new spend'],
              ['Full', 'Visibility into decision logic'],
            ]}
          />
        </Wrap>
      </Section>

      <Section tight>
        <Wrap>
          <CtaBand
            heading="Don't see your industry?"
            paragraph="Our cross-vertical use-case library and adaptable platform mean we've likely solved a problem shaped like yours. Let's compare notes."
          >
            <Button href="/contact" variant="molten">
              Request a Demo
            </Button>
          </CtaBand>
        </Wrap>
      </Section>
    </>
  );
}
