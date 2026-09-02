import { INDUSTRY_LIST } from '@/data/industries';
import { IndustryCard } from './IndustryCard';

export function IndustryGrid() {
  return (
    <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-5">
      {INDUSTRY_LIST.map((industry) => (
        <IndustryCard key={industry.slug} industry={industry} />
      ))}
    </div>
  );
}
