import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { CaseList } from '@/components/sections/CaseList';
import { Button } from '@/components/ui/Button';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'Case Studies & Outcomes',
  description: 'Real enterprise outcomes: unified commerce data in six weeks, 90% faster asset discovery, 8–15% revenue uplift with agentic allocation.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        fullWidth
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]}
        eyebrow="Client outcomes"
        heading={
          <>
            We&apos;re entrusted with <span className="grad-text">mission-critical objectives</span>
          </>
        }
        lede="Representative engagements from Fortune 500 and high-growth enterprises. Client identities protected under NDA; outcomes verified with our delivery teams."
      />

      <Section>
        <Wrap>
          <CaseList />
        </Wrap>
      </Section>

      <Section tight className="!pt-0">
        <Wrap>
          <CtaBand
            heading="Your challenge could be the next story here."
            paragraph="Bring us a mission-critical problem. We'll bring an architecture, an accelerator, and a working proof in weeks."
          >
            <Button href="/contact" variant="molten">
              Start Your Engagement
            </Button>
          </CtaBand>
        </Wrap>
      </Section>
    </>
  );
}
