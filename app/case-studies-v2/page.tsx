import type { Metadata } from 'next';
import { CASE_STUDIES } from '@/data/caseStudies';
import { ALL_CASE_CARDS, RECENT_CASE_CARDS } from '@/data/caseStudiesLanding';
import { PhotoHero } from '@/components/sections/PhotoHero';
import { ContactPanel } from '@/components/sections/ContactPanel';
import { CaseStudyCards } from '@/components/case-study/CaseStudyCards';
import { StrategicInsightBand } from '@/components/case-study/StrategicInsightBand';

// v2 of /case-studies, under review. Once approved it replaces app/case-studies/page.tsx and v1 is removed.
export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'How we solve real business challenges through digital and AI-driven solutions, with measurable impact across industries.',
  robots: { index: false },
};

export default function CaseStudiesV2Page() {
  const latestDetail = CASE_STUDIES.find((c) => c.detail)?.detail;

  return (
    <div className="bg-paper">
      <PhotoHero
        variant="landing"
        heading="Case studies"
        lede="Explore how we solve real business challenges through innovative digital and AI-driven solutions, delivering measurable impact across industries."
        image="/assets/img/case-studies/landing-hero.jpg"
      />

      <div className="max-w-[1440px] mx-auto px-[85px] pb-24 tablet:px-7">
        <h2 className="text-[clamp(28px,2.9vw,41px)] font-semibold leading-tight tracking-[-0.5px] text-ink max-w-[1000px] pt-16">
          Gain insights from our experts on the latest trends and innovations in your industry
        </h2>

        <section aria-labelledby="recent-heading" className="mt-16">
          <h3 id="recent-heading" className="font-body text-[19px] font-medium tracking-normal text-ink">
            Recent case studies
          </h3>
          <CaseStudyCards cases={RECENT_CASE_CARDS} className="mt-8 gap-14" />
        </section>

        {ALL_CASE_CARDS.length > 0 && (
          <section aria-labelledby="all-heading" className="mt-20">
            <h3 id="all-heading" className="font-body text-[19px] font-medium tracking-normal text-ink">
              All case studies
            </h3>
            <CaseStudyCards cases={ALL_CASE_CARDS} className="mt-8 gap-x-14 gap-y-16" />
          </section>
        )}
      </div>

      {latestDetail && <StrategicInsightBand statement={latestDetail.insight} image={latestDetail.insightImage} />}
      <ContactPanel />
    </div>
  );
}
