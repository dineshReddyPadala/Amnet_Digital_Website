import { INDUSTRY_LIST } from '@/data/industries';
import { IndustryCard } from './IndustryCard';

export function IndustryGrid({ exploreWhite = false }: { exploreWhite?: boolean }) {
  return (
    <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-5">
      {INDUSTRY_LIST.map((industry) => (
        <IndustryCard key={industry.slug} industry={industry} exploreWhite={exploreWhite} />
      ))}
    </div>
  );
}
