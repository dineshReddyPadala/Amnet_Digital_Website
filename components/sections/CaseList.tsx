import { CASES } from '@/data/cases';
import { Reveal } from '@/components/ui/Reveal';
import { CaseCard } from './CaseCard';

export function CaseList() {
  return (
    <div className="grid gap-[26px]">
      {CASES.map((caseStudy) => (
        <Reveal key={caseStudy.title}>
          <CaseCard caseStudy={caseStudy} showAllLink={false} />
        </Reveal>
      ))}
    </div>
  );
}
