import type { MetadataRoute } from 'next';
import { INDUSTRIES } from '@/data/industries';

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const industryRoutes = Object.keys(INDUSTRIES).map((slug) => `/industries/${slug}`);
  return [...STATIC_ROUTES, ...industryRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
  }));
}
