import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { ArchDiagram } from '@/components/diagrams/ArchDiagram';
import { servicesStackSvg } from '@/components/diagrams/servicesStack.svg';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Services — Data, AI, Cloud, Product & QA',
  description:
    'End-to-end capability: AI/ML, data engineering, product development, cloud, DevOps and automation QA — one embedded team, complete ownership.',
};

const SERVICES = [
  {
    icon: '✦',
    title: 'AI & Machine Learning',
    items: [
      'Generative AI',
      'Agentic AI',
      'Document AI / OCR',
      'NLP & sentiment',
      'Search & recommendations',
      'Forecasting',
    ],
  },
  {
    icon: '◈',
    title: 'Data Engineering & Analytics',
    items: [
      'Lakehouse & big data',
      'Data governance',
      'BI & visualization',
      'Marketing analytics',
      'Fraud analytics',
    ],
  },
  {
    icon: '⬡',
    title: 'Product Development',
    items: [
      'UX & design',
      'Web & mobile apps',
      'Architecture',
      'AIMLOps',
      'MVP & POC delivery',
    ],
  },
  {
    icon: '☁',
    title: 'Cloud Services',
    items: [
      'Cloud consulting',
      'Migration',
      'Data management',
      'Serverless',
      'Cloud security',
    ],
  },
  {
    icon: '⚙',
    title: 'DevOps & Automation QA',
    items: [
      'CI/CD',
      'Test automation',
      'Performance testing',
      'Security testing',
      'AI evaluation',
    ],
  },
  {
    icon: '◎',
    title: 'Strategy & Consulting',
    items: [
      'AI strategy',
      'Process redesign',
      'Product strategy',
      'Tech & security',
      'Managed operations',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        fullWidth
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        eyebrow="End-to-end capability"
        heading={
          <>
            One partner, from <span className="grad-text">idea to autonomous operations</span>
          </>
        }
        lede="From ideation to ongoing support, Amnet Digital takes complete ownership of the entire lifecycle — data engineering, AI/ML, product development, cloud, DevOps, QA, and strategy — wrapped around Agentic AI and accelerated by our proprietary platforms."
      >
        <Button href="/contact" variant="molten">
          Discuss Your Roadmap
        </Button>
      </PageHero>

      <Section>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="What we deliver"
            heading="Six practice areas. One embedded team."
            lede="Every engagement draws from the same stack — AI, data, product, cloud, quality, and strategy — so delivery stays coherent from first workshop to production."
          />
          <div className="eq-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} asChild>
                <ServiceCard title={s.title} items={s.items} icon={s.icon} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section tight className="bg-porcelain">
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="How it fits together"
            heading="Fifty competencies, one architecture"
            lede="Our services aren't a menu — they're layers of a single delivery stack, with DevOps, quality, and strategy engineered across every layer."
          />
          <ArchDiagram
            svg={servicesStackSvg}
            captionTitle="Fig. 06 — Full-stack delivery model"
            captionNote="one team, end-to-end ownership"
          />
        </Wrap>
      </Section>

      <Section dark tight>
        <Wrap>
          <SectionHead
            fullWidth
            center
            eyebrow="The Amnet Advantage"
            heading="Ideate → Build → Deploy → Maintain → Support"
            lede="Complete ownership of the entire lifecycle — accelerating delivery and driving continuous value as your trusted technology partner. Enterprise-grade solutions with startup speed and innovation."
          />
          <div className="text-center">
            <Button href="/contact" variant="molten">
              Start a Conversation
            </Button>
          </div>
        </Wrap>
      </Section>
    </>
  );
}
