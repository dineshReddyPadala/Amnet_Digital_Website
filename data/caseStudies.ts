import type { CaseStudy } from '@/lib/types';

/**
 * Case studies for /case-studies-v2 and the /case-studies/[slug] detail pages.
 * Each gets a detail page once it has a `detail`. The landing page's cards come from data/caseStudiesLanding.ts.
 * (`CASES` in data/cases.ts still feeds the v1 /case-studies page and the home carousel until cutover.)
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    client: 'Global Information Leader',
    metric: '100M+',
    metricLabel: 'Images digitized in weeks',
    title: 'Documents digitized at scale, made usable by AI',
    body: 'Legacy paper archives across 60+ countries brought into one AI-ready platform — with end-to-end chain of custody, AI-driven classification and metadata extraction, and real-time reporting with full auditability.',
    chips: ['Document Digitization', 'AI Classification', 'Information Management'],
    thumbnail: '/assets/img/case-studies/documents-digitized-at-scale/thumb.jpg',
    detail: {
      slug: 'documents-digitized-at-scale',
      heroTitle: 'Documents Digitized at Scale for a Global Information Leader',
      heroLede:
        'Explore how we solve real business challenges through innovative digital and AI-driven solutions, delivering measurable impact across industries.',
      heroImage: '/assets/img/case-studies/documents-digitized-at-scale/hero.jpg',
      overview:
        'An enterprise operating at significant scale, managing complex information systems across multiple regions and industries.',
      overviewStats: [
        {
          icon: 'globe',
          title: '60+ Countries',
          body: 'No real-time tracking of documents across the global supply chain.',
        },
        {
          icon: 'shield',
          title: '95%+ of Fortune 1000',
          body: "Trusted partner to the world's leading enterprises.",
        },
        {
          icon: 'building',
          title: 'Multi-Billion-Dollar Enterprise',
          body: 'Driving large-scale, secure, and high-volume operations.',
        },
      ],
      challengesIntro:
        'Bridging the analog-to-digital gap, legacy paper-based systems lacked real-time visibility, with siloed workflows and no end-to-end lifecycle tracking.',
      challenges: [
        {
          icon: 'globe',
          title: 'No Visibility',
          body: 'No real-time tracking of documents across the global supply chain.',
        },
        {
          icon: 'globe',
          title: 'Fragmented Processes',
          body: 'Manual workflow that were slow, disconnected, and highly error-prone.',
        },
        {
          icon: 'globe',
          title: 'Dark Data',
          body: 'Millions of unstructured, non-searchable documents locked in physical formats.',
        },
        {
          icon: 'globe',
          title: 'No Operational Insight',
          body: 'Lack of reporting, auditability, and clear ROI visibility for stakeholders.',
        },
      ],
      solutionIntro:
        'A unified, scalable, and efficient framework for centralized document digitization and management.',
      solutionLayers: [
        {
          title: 'Tracking Layer',
          body: 'End-to-end visibility and secure chain of custody for physical assets.',
        },
        {
          title: 'Intelligence Layer',
          body: 'AI-driven classification, metadata extraction, and content routing.',
        },
        {
          title: 'Analytics Layer',
          body: 'Real-time reporting, operational insights, and full auditability.',
        },
      ],
      impactIntro:
        'Delivering measurable transformation through scalable digitization and intelligent workflows, enabling greater efficiency, transparency, and long term operational reliability across the entire lifecycle.',
      impact: [
        { icon: 'shield-check', value: 100, suffix: 'M+', label: 'Images digitized in weeks' },
        { icon: 'building', value: 5, suffix: 'B+', label: 'Scalable pipeline capacity' },
        { icon: 'users', value: 100, suffix: ' %', label: 'Auditability across lifecycle' },
      ],
      insight: "Digitization at scale isn't about speed—it's about creating usable, trusted intelligence",
      insightImage: '/assets/img/case-studies/documents-digitized-at-scale/insight.jpg',
    },
  },
  {
    client: 'Global B2B Enterprise',
    metric: '40x',
    metricLabel: 'Faster monthly and e-commerce reporting',
    title: 'Turning Fragmented Enterprise Data into Scalable AI-Ready Business Intelligence',
    body: 'Consolidated 15+ global data sources into a unified platform, accelerating reporting, improving trust, and enabling scalable AI initiatives.',
    chips: ['Unified Analytics', 'Conversational Analytics', 'AI / ML Enablement'],
  },
  {
    client: 'Globally Established Enterprise',
    metric: '15x',
    metricLabel: 'Valuations reduced from hours to seconds',
    title: '15x Faster, Scalable AI-Driven Property Valuation at Enterprise Scale',
    body: 'Transforming traditional, manual valuation processes into a scalable, AI-driven system that enhances accuracy, and consistency while enabling intelligent, data-backed decision-making at scale.',
    chips: ['Data Foundation', 'Intelligence Engine', 'Scalable Delivery'],
  },
  {
    client: 'Globally Recognized Enterprise',
    metric: '20x',
    metricLabel: 'Faster enterprise insights',
    title: 'Delivering AI-Powered Enterprise Insights 20x Faster Across Global Business Operations',
    body: 'Unifying fragmented enterprise data to enable scalable AI-driven decisions, intelligence, and operational transformation.',
    chips: ['Data Integration', 'AI Intelligence Engine', 'Self-Service Analytics'],
  },
  {
    client: 'Global Digital Experience Platform',
    metric: '70%',
    metricLabel: 'Lower user friction',
    title: 'Helping Platforms Achieve 70% Lower Friction and 3x Faster Content Creation',
    body: 'Leveraged AI-powered personalization, geo-contextual intelligence, and automated content workflows to enhance engagement and operational efficiency.',
    chips: ['Visual Understanding', 'Personalization Engine', 'Scalable Platform'],
  },
];

export function getCaseBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.detail?.slug === slug);
}

/** Detail page URL, or undefined for a teaser-only Case Study. */
export function caseHref(caseStudy: Pick<CaseStudy, 'detail'>) {
  return caseStudy.detail ? `/case-studies/${caseStudy.detail.slug}` : undefined;
}

/** Up to `count` other Case Studies, preferring ones that have a detail page. */
export function getRecentCases(current: CaseStudy, count = 2) {
  const others = CASE_STUDIES.filter((c) => c !== current);
  return [...others.filter((c) => c.detail), ...others.filter((c) => !c.detail)].slice(0, count);
}
