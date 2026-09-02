import Link from 'next/link';
import type { Industry } from '@/lib/types';
import { Reveal } from '@/components/ui/Reveal';

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Reveal as="div">
      <Link
        href={`/industries/${industry.slug}`}
        tabIndex={0}
        className="ind-card relative rounded-[18px] overflow-hidden min-h-[250px] p-7 flex flex-col justify-end text-white border border-line-dark isolate transition-transform duration-200 hover:-translate-y-1.5"
      >
        <span className="ind-bg absolute inset-0 -z-20" style={{ background: industry.gradient }} />
        <span className="text-[30px] mb-auto">{industry.glyph}</span>
        <h3 className="text-xl text-white">{industry.name}</h3>
        <span className="ind-reveal text-sm text-[#C9D3E2]">{industry.short}</span>
        <span className="go font-mono text-[11.5px] tracking-[0.16em] text-gold mt-3 uppercase">Explore solution →</span>
      </Link>
    </Reveal>
  );
}
