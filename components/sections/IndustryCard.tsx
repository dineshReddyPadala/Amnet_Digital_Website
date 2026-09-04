import Link from 'next/link';
import type { Industry } from '@/lib/types';
import { Reveal } from '@/components/ui/Reveal';

export function IndustryCard({ industry, exploreWhite = false }: { industry: Industry; exploreWhite?: boolean }) {
  return (
    <Reveal as="div" className="h-full">
      <Link
        href={`/industries/${industry.slug}`}
        tabIndex={0}
        className="ind-card relative rounded-[18px] overflow-hidden h-full min-h-[250px] p-7 flex flex-col justify-end text-white border border-line-dark isolate transition-transform duration-200 hover:-translate-y-1.5"
      >
        <span className="ind-bg absolute inset-0 -z-20" style={{ background: industry.gradient }} />
        <span className="text-[30px] mb-auto">{industry.glyph}</span>
        <h3 className="text-xl leading-snug text-white">{industry.name}</h3>
        <span className="ind-reveal text-sm text-[#C9D3E2] font-body">{industry.short}</span>
        <span
          className={`go font-body text-[11.5px] tracking-[0.16em] mt-3 uppercase ${
            exploreWhite ? 'text-white' : 'text-gold'
          }`}
        >
          Explore solution →
        </span>
      </Link>
    </Reveal>
  );
}
