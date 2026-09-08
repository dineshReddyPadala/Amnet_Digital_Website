import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { ArchDiagram } from '@/components/diagrams/ArchDiagram';
import { damPipelineSvg } from '@/components/diagrams/damPipeline.svg';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { PlainStats } from '@/components/ui/PlainStats';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'AI-Powered Digital Asset Management',
  description:
    'Speech-to-text, OCR, face & object detection, and GenAI summaries make every asset searchable — natural-language discovery at petabyte scale.',
};

const CHALLENGE_CARDS = [
  { icon: '🎞', title: 'AI Metadata Enrichment', body: 'Speech-to-text, OCR, face & object detection, logo detection, and GenAI video summarization — automatically.' },
  { icon: '⌕', title: 'Natural Language Search', body: 'Conversational, intelligent search across every asset — including image-similarity discovery.' },
  { icon: '✂', title: 'Playback, Proxies & Clips', body: 'Snappy proxy-based navigation, video playback, and point-in/point-out clip creation.' },
  { icon: '🛡', title: 'Governance & Sharing', body: 'Role-based access, multi-tenant support, secure distribution, open APIs, and enterprise integrations.' },
];

export default function DamPage() {
  return (
    <>
      <PageHero
        fullWidth
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Platforms' }, { label: 'AI-Powered DAM' }]}
        eyebrow="Digital asset management, reimagined"
        heading={
          <>
            Every asset, <span className="grad-text">searchable, governed, AI-ready</span>
          </>
        }
        lede="Organize, enrich, discover, and distribute digital assets through an intelligent platform built for enterprise scale. Transform images, videos, audio, and documents into searchable, AI-ready business assets — beyond storage, into strategy."
      >
        <Button href="/contact" variant="molten">
          Request a Demo
        </Button>
      </PageHero>

      <Section>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="The challenge"
            heading="Traditional DAM manages files. It doesn't unlock their value."
            lede="As digital content grows, enterprises struggle with fragmented storage, manual tagging, duplicate assets, inconsistent governance, and slow search."
          />
          <div className="eq-grid eq-grid-4">
            {CHALLENGE_CARDS.map((c) => (
              <Reveal key={c.title} asChild>
                <Card equal icon={c.icon} title={c.title}>
                  <p>{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section tight className="bg-porcelain">
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="Under the hood"
            heading="Every asset becomes searchable intelligence"
            lede="From raw media to natural-language discovery: AI models enrich every frame, page, and soundbite — indexed once, findable forever."
          />
          <ArchDiagram
            svg={damPipelineSvg}
            captionTitle="Fig. 05 — AI-Powered DAM processing pipeline"
            captionNote="petabyte-scale · cloud-native"
          />
        </Wrap>
      </Section>

      <Section dark>
        <Wrap>
          <SectionHead center eyebrow="Business impact" heading="From content chaos to strategic asset" />
          <PlainStats
            stats={[
              ['90%', 'Faster asset discovery'],
              ['70%', 'Less manual tagging effort'],
              ['1000s', 'Hours of video, AI-enriched'],
              ['100%', 'Governed & auditable access'],
            ]}
          />
        </Wrap>
      </Section>

      <Section tight>
        <Wrap>
          <CtaBand
            heading="Unlock more value from every digital asset."
            paragraph="See how AI-powered DAM simplifies content operations across brand, media, archives, and compliance."
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
