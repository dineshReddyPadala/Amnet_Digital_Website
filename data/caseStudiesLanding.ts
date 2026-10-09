import type { CaseStudyTeaser } from '@/lib/types';

/**
 * Cards on the /case-studies-v2 landing page, copied verbatim from the Magic Patterns export
 * (placeholder titles, tags and teaser). Replace entries as real case studies are written.
 * Every card shows "Continue reading", but only cards with an `href` link; the others have no detail page yet.
 */
const IMG = '/assets/img/case-studies/landing';
const CHIPS = ['Future Ready', 'Future Ready'];
const BODY =
  'This case study showcases how organizations evolve through strategic digital initiatives to modernize operations and enhance efficiency.';

const card = (title: string, thumbnail: string, href?: string): CaseStudyTeaser => ({ title, thumbnail, href, chips: CHIPS, body: BODY });

export const RECENT_CASE_CARDS: CaseStudyTeaser[] = [
  card(
    'Document Digitization Scale',
    '/assets/img/case-studies/documents-digitized-at-scale/thumb.jpg',
    '/case-studies/documents-digitized-at-scale',
  ),
  card('Digital Transformation Journey', `${IMG}/digital-transformation-journey.jpg`,'/case-studies/documents-digitized-at-scale'),
];

export const ALL_CASE_CARDS: CaseStudyTeaser[] = [
  card('Breaking Data Silos', `${IMG}/breaking-data-silos.jpg`),
  card('Cloud Leap', `${IMG}/cloud-leap.jpg`),
  card('Smart Evolution', `${IMG}/smart-evolution.jpg`),
  card('DataForge', `${IMG}/dataforge.jpg`),
  card('Intelligent Systems', `${IMG}/intelligent-systems.jpg`),
  card('Process Reinvented', `${IMG}/process-reinvented.jpg`),
];
