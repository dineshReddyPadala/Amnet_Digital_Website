import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INDUSTRIES } from '@/data/industries';
import type { IndustrySlug } from '@/lib/types';
import { IndustryDetailTemplate } from '@/components/industry/IndustryDetailTemplate';

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

function getIndustry(slug: string) {
  return INDUSTRIES[slug as IndustrySlug];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) return {};
  return {
    title: `${industry.name} AI Solutions`,
    description: industry.short,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
