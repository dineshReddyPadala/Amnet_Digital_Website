import type { CaseStudyTeaser } from '@/lib/types';

/**
 * Cards on the /case-studies-v2 landing page, one per case-study PDF: the PDF's name is the title, its headline is the
 * teaser and the first two "Solution & Approach" pillars are the tags. Photos are still the Magic Patterns placeholders.
 * Every card shows "Continue reading", but only cards with an `href` link; the others have no detail page yet.
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
    '/case-studies/documents-digitized-at-scale',
  ),
  card(
    'AI Personalization',
    ['Vision AI', 'Personalization Engine'],
    'Helping Platforms Achieve 70% Lower Friction and 3x Faster Content Creation',
    `${IMG}/digital-transformation-journey.jpg`,
  ),
  card(
    'Enterprise Intelligence',
    ['Data Integration', 'AI Insights'],
    'Delivering AI-Powered Enterprise Insights 20x Faster Across Global Business Operations',
    `${IMG}/breaking-data-silos.jpg`,
  ),
  card(
    'Scalable Intelligence',
    ['Unified Analytics', 'Conversational Analytics'],
    'Turning Fragmented Enterprise Data into Scalable AI-Ready Business Intelligence',
    `${IMG}/cloud-leap.jpg`,
  ),
  card(
    'Smart Valuation',
    ['Data Foundation', 'Intelligence Engine'],
    '15x Faster, Scalable AI-Driven Property Valuation at Enterprise Scale',
    `${IMG}/smart-evolution.jpg`,
  ),
  card(
    'Smart Audit',
    ['Data Foundation', 'Intelligence Engine'],
    '15x Faster, Scalable AI-Driven Property Valuation at Enterprise Scale',
    `${IMG}/dataforge.jpg`,
  ),
];

export const RECENT_CASE_CARDS: CaseStudyTeaser[] = ALL_CASE_CARDS.slice(0, 2);
