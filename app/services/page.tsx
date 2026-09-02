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
    title: 'AI & Machine Learning',
    items: [
      'Conversational & Generative AI',
      'Agentic frameworks & orchestration',
      'OCR / intelligent document processing',
      'NLP/NLU — summarization, sentiment',
      'Computer vision & anomaly detection',
      'Search, recommendations, Customer 360',
      'Forecasting & supply-chain optimization',
    ],
  },
  {
    title: 'Data Engineering & Analytics',
    items: [
      'Big data & lakehouse solutions',
      'Data management & governance',
      'BI, ETL & data visualization',
      'Marketing, pricing & clickstream analytics',
      'Sales channel & fraud analytics',
    ],
  },
  {
    title: 'Product Development',
    items: [
      'UX & design thinking',
      'Web & mobile application engineering',
      'Architecture & infrastructure',
      'AIMLOps & payment integrations',
      'MVPs & POCs in weeks, not quarters',
    ],
  },
  {
    title: 'Cloud Services',
    items: [
      'Cloud consulting & assessment',
      'Migration & deployment',
      'Cloud data management as a service',
      'Serverless computing',
      'Security assessment & planning',
    ],
  },
  {
    title: 'DevOps & Automation QA',
    items: [
      'DevOps & continuous delivery',
      'Test automation at scale',
      'Cloud performance & security testing',
      'Accessibility & firmware testing',
      'AI-system evaluation (AIDLC)',
    ],
  },
  {
    title: 'Strategy & Consulting',
    items: [
      'Digital, data & AI strategy',
      'Business process evolution',
      'Product development strategy',
      'Technology strategy & security',
      'Scalable operations & service desks',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
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
          <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[22px]">
            {SERVICES.map((s) => (
              <Reveal key={s.title}>
                <ServiceCard title={s.title} items={s.items} />
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section tight className="bg-porcelain">
        <Wrap>
          <SectionHead
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
            center
            eyebrow="The Amnet ADvantage"
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
