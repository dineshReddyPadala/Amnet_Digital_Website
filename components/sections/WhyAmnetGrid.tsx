import { Reveal } from '@/components/ui/Reveal';
import { Card } from '@/components/ui/Card';

const ITEMS = [
  {
    icon: '▣',
    title: 'Amnet Data Foundry Methodology',
    body: 'Our proven framework transforms raw, disconnected data into AI-ready assets — a trusted foundation for faster insights and enterprise-wide intelligence.',
  },
  {
    icon: '◈',
    title: 'Agentic AI Expertise',
    body: 'We design and deploy intelligent agents powered by trusted, enterprise-grade data — automating complex workflows and unlocking measurable value with confidence.',
  },
  {
    icon: '⬡',
    title: 'Industry Accelerators',
    body: 'Pre-built solutions, frameworks, and a cross-vertical use-case library that compress implementation timelines and reduce time-to-value.',
  },
  {
    icon: '◬',
    title: 'Deep AI-First DNA',
    body: 'Built from the ground up as an AI/ML-centric company — not a legacy IT firm that added AI later. Our core has always been intelligence.',
  },
  {
    icon: '◇',
    title: 'End-to-End Full Stack',
    body: 'Data engineering, AI/ML, cloud, product development, DevOps, UX, and QA in one embedded model — no silos, complete ownership.',
  },
  {
    icon: '◆',
    title: 'Enterprise Governance',
    body: 'Security, compliance, quality, and responsible-AI governance engineered across the entire data, analytics, and AI lifecycle.',
  },
];

export function WhyAmnetGrid() {
  return (
    <div className="eq-grid">
      {ITEMS.map((item) => (
        <Reveal key={item.title} asChild>
          <Card equal icon={item.icon} title={item.title}>
            <p>{item.body}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
