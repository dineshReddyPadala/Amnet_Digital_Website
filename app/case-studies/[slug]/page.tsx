import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { CaseStudyDetail } from '@/lib/types';
import { CASE_STUDIES, getCaseBySlug } from '@/data/caseStudies';
import { CaseStudyDetailTemplate } from '@/components/case-study/CaseStudyDetailTemplate';

const BASE_URL = 'https://www.amnetdigital.com';

const path = (slug: string) => `/case-studies/${slug}/`;

export function generateStaticParams() {
  return CASE_STUDIES.flatMap((c) => (c.detail ? [{ slug: c.detail.slug }] : []));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const detail = getCaseBySlug(params.slug)?.detail;
  if (!detail) return {};
  return {
    title: detail.seoTitle,
    description: detail.metaDescription,
    alternates: { canonical: path(detail.slug) },
  };
}

/** WebPage + BreadcrumbList structured data (Home > Case Studies > this). */
function structuredData(detail: CaseStudyDetail) {
  const url = `${BASE_URL}${path(detail.slug)}`;
  const crumbs: [string, string][] = [
    ['Home', `${BASE_URL}/`],
    ['Case Studies', `${BASE_URL}/case-studies/`],
    [detail.breadcrumbName, url],
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    name: detail.heroTitle,
    description: detail.metaDescription,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseBySlug(params.slug);
  if (!caseStudy?.detail) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(caseStudy.detail)).replace(/</g, '\\u003c') }}
      />
      <CaseStudyDetailTemplate detail={caseStudy.detail} />
    </>
  );
}
