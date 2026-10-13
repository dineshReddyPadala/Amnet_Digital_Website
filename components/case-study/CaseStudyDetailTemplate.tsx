import Link from 'next/link';
import { ReactNode } from 'react';
import type { CaseStudyDetail, CaseStudyTeaser } from '@/lib/types';
import { ALL_CASE_CARDS } from '@/data/caseStudiesLanding';
import { DataDecisionsCta } from '@/components/sections/DataDecisionsCta';
import { PhotoHero } from '@/components/sections/PhotoHero';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';
import { CaseIcon } from './CaseIcon';
import { CaseSectionNav, type CaseSection } from './CaseSectionNav';
import { CaseTileGrid } from './CaseTileGrid';
import { SolutionTimeline } from './SolutionTimeline';
import { StrategicInsightBand } from './StrategicInsightBand';
import { RecentCaseCards } from './RecentCaseCards';

const SECTIONS: CaseSection[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'solution', label: 'The Solution' },
  { id: 'impact', label: 'Business Impact' },
  { id: 'insight', label: 'Strategic Insight' },
];

/** Full-width rows below the story (recent cases, CTA). */
const WIDE = 'max-w-[1440px] mx-auto tablet:px-7';

/** Two /case-studies-v2 cards other than this case: its `related` cases first, then the newest. */
function relatedCards(detail: CaseStudyDetail): CaseStudyTeaser[] {
  const hrefOf = (slug: string) => `/case-studies/${slug}`;
  const others = ALL_CASE_CARDS.filter((c) => c.href !== hrefOf(detail.slug));
  const related = (detail.related ?? []).flatMap((slug) => others.find((c) => c.href === hrefOf(slug)) ?? []);
  return [...related, ...others.filter((c) => !related.includes(c))].slice(0, 2);
}

function StorySection({
  id,
  heading,
  intro,
  className = '',
  children,
}: {
  id: string;
  heading: string;
  intro: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-[74px] px-24 tablet:px-7 ${className}`}>
      <h2 className="text-[26px] font-medium tracking-normal text-ink">{heading}</h2>
      <p className="text-[15px] leading-relaxed text-[#1F2937] mt-6">{intro}</p>
      <Reveal className="mt-12">{children}</Reveal>
    </section>
  );
}

export function CaseStudyDetailTemplate({ detail }: { detail: CaseStudyDetail }) {
  const headings = detail.headings ?? {};
  return (
    <div className="bg-paper">
      <PhotoHero heading={detail.heroTitle} lede={detail.heroLede} image={detail.heroImage} />

      {/* Story: sticky section nav + sections */}
      <div className="grid grid-cols-[220px_1fr] tablet:grid-cols-1">
        <aside className="tablet:hidden">
          <CaseSectionNav sections={SECTIONS} />
        </aside>

        <div className="min-w-0">
          <StorySection id="overview" heading="Client Overview" intro={detail.overview} className="py-20">
            <CaseTileGrid variant="overview" tiles={detail.overviewStats} />
          </StorySection>

          <div className="bg-[#F4F4F7]">
            <StorySection id="challenges" heading={headings.challenges ?? 'Challenges'} intro={detail.challengesIntro} className="py-14">
              <CaseTileGrid variant="challenge" tiles={detail.challenges} />
            </StorySection>

            <StorySection id="solution" heading={headings.solution ?? 'The Solution'} intro={detail.solutionIntro} className="pt-6 pb-20">
              <SolutionTimeline layers={detail.solutionLayers} />
            </StorySection>

            <StorySection id="impact" heading={headings.impact ?? 'Business Impact'} intro={detail.impactIntro} className="pt-24 pb-40 mobile:pb-24">
              <div className="grid grid-cols-3 mobile:grid-cols-1 gap-12 text-center">
                {detail.impact.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center">
                    <span className="w-24 h-24 rounded-full border border-silver grid place-items-center text-ink">
                      <CaseIcon name={stat.icon} size={20} />
                    </span>
                    <span className="font-display text-[40px] font-semibold leading-none mt-6">
                      {typeof stat.value === 'number' ? (
                        <Counter target={stat.value} suffix={stat.suffix} />
                      ) : (
                        <em className="not-italic bg-molten bg-clip-text text-transparent">{stat.value}</em>
                      )}
                    </span>
                    <span className="text-[15px] text-ink mt-3">{stat.label}</span>
                  </div>
                ))}
              </div>
            </StorySection>
          </div>

          <section id="insight" className="scroll-mt-[74px]">
            <StrategicInsightBand compact statement={detail.insight} image={detail.insightImage} />
          </section>
        </div>
      </div>

      {/* Recent case studies */}
      <div className={`${WIDE} px-[120px] pt-32 pb-20 mobile:pt-20`}>
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-body text-[22px] font-normal tracking-normal text-ink">Recent case studies</h2>
          <Link
            href="/case-studies-v2"
            className="border border-bronze rounded-[4px] py-2 px-4 text-[14px] font-medium text-ink transition-colors hover:bg-bronze hover:text-white"
          >
            View All
          </Link>
        </div>
        <RecentCaseCards cases={relatedCards(detail)} className="mt-12 gap-10" />
      </div>

      <div className={`${WIDE} px-[132px] pb-20`}>
        <DataDecisionsCta />
      </div>
    </div>
  );
}
