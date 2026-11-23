import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LEGAL_DOCS } from '@/data/legal';
import { LegalDocTemplate } from '@/components/legal/LegalDocTemplate';

export function generateStaticParams() {
  return LEGAL_DOCS.map((doc) => ({ slug: doc.slug }));
}

function getDoc(slug: string) {
  return LEGAL_DOCS.find((doc) => doc.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doc = getDoc(params.slug);
  if (!doc) return {};
  return { title: doc.title };
}

export default function LegalDocPage({ params }: { params: { slug: string } }) {
  const doc = getDoc(params.slug);
  if (!doc) notFound();
  return <LegalDocTemplate doc={doc} />;
}
