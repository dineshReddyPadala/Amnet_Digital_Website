import type { CaseStudyTeaser } from '@/lib/types';

/**
 * Cards on the /case-studies-v2 landing page, one per case-study PDF: the PDF's name is the title, its headline is the
 * teaser and the first two "Solution & Approach" pillars are the tags. Photos are still the Magic Patterns placeholders.
 * Every card links to its /case-studies/[slug] page. The detail pages' "Recent case studies" also draw from these cards.
 */
const IMG = '/assets/img/case-studies/landing';

const card = (title: string, chips: string[], body: string, thumbnail: string, href?: string): CaseStudyTeaser => ({
  title,
  chips,
  body,
  thumbnail,
  href,
});

/** Newest first. "All case studies" lists every card, including the recent ones. */
export const ALL_CASE_CARDS: CaseStudyTeaser[] = [
  card(
    'Data Transformation',
    ['Tracking Layer', 'Intelligence Layer'],
    '100M+ Documents Digitized at Scale for a Global Information Leader',
    '/assets/img/case-studies/documents-digitized-at-scale/thumb.jpg',
    '/case-studies/enterprise-document-digitization-ai',
  ),
  card(
    'AI Personalization',
    ['Visual Understanding', 'Personalization Engine'],
    'Helping Platforms Achieve 70% Lower Friction and 3x Faster Content Creation',
    `${IMG}/digital-transformation-journey.jpg`,
    '/case-studies/ai-powered-digital-experience-personalization',
  ),
  card(
    'Enterprise Intelligence',
    ['Data Integration Layer', 'AI Intelligence Engine'],
    'Delivering AI-Powered Enterprise Insights 20x Faster Across Global Business Operations',
    `${IMG}/breaking-data-silos.jpg`,
    '/case-studies/ai-powered-enterprise-analytics',
  ),
  card(
    'Scalable Intelligence',
    ['Unified Analytics', 'Conversational Analytics'],
    'Turning Fragmented Enterprise Data into Scalable AI-Ready Business Intelligence',
    `${IMG}/cloud-leap.jpg`,
    '/case-studies/aws-data-lake-enterprise-analytics',
  ),
  card(
    'Smart Valuation',
    ['Data Foundation', 'Intelligence Engine'],
    '15x Faster, Scalable AI-Driven Property Valuation at Enterprise Scale',
    `${IMG}/smart-evolution.jpg`,
    '/case-studies/ai-driven-property-valuation-automation',
  ),
  card(
    'Smart Audit',
    ['Data Foundation', 'Intelligence Engine'],
    '15x Faster, Scalable AI-Driven Property Valuation at Enterprise Scale',
    `${IMG}/dataforge.jpg`,
    '/case-studies/ai-powered-audit-automation',
  ),
];

export const RECENT_CASE_CARDS: CaseStudyTeaser[] = ALL_CASE_CARDS.slice(0, 2);
