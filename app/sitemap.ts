import type { MetadataRoute } from 'next';
import { INDUSTRIES } from '@/data/industries';
import { JOBS } from '@/data/jobs';
import { LEGAL_DOCS } from '@/data/legal';
import { CASE_STUDIES, caseHref } from '@/data/caseStudies';

const BASE_URL = 'https://www.amnetdigital.com';

const STATIC_ROUTES = [
  '/',
  '/data-foundry',
  '/agent-foundry',
  '/aidlc',
  '/dam',
  '/services',
  '/industries',
  '/case-studies',
  '/about',
  '/careers',
  '/contact',
  '/legal-resources',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const industryRoutes = Object.keys(INDUSTRIES).map((slug) => `/industries/${slug}`);
  const careerRoutes = JOBS.map((job) => `/careers/${job.slug}`);
  const caseRoutes = CASE_STUDIES.flatMap((c) => {
    const href = caseHref(c);
    return href ? [href] : [];
  });
  const legalRoutes = LEGAL_DOCS.map((doc) => `/legal-resources/${doc.slug}`);
  return [...STATIC_ROUTES, ...industryRoutes, ...caseRoutes, ...careerRoutes, ...legalRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
  }));
}
