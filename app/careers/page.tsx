import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'Careers at Amnet Digital — Build the AI Enterprise',
  description: 'Work on agentic AI in production. Explore openings across data engineering, AI engineering, quality, design, cloud and DevOps.',
};

const PERKS = [
  { em: '🤝', title: 'We believe in inclusivity', body: 'Great ideas come from diverse perspectives. Every voice is valued, every background respected, and everyone gets equal opportunity to participate and celebrate.' },
  { em: '⚖️', title: 'All work, no play makes Jack a dull boy', body: 'Doing your best work starts with feeling your best — a supportive culture, flexible thinking, and respect for your time inside and outside of work.' },
  { em: '🏆', title: 'Earned. Seen. Celebrated.', body: 'Every effort matters and every achievement is celebrated. Talent, dedication, and impact never go unnoticed here.' },
  { em: '🚀', title: 'Exposure that expands horizons', body: 'Hands-on cutting-edge AI and data projects, plus seminars, events, and industry summits that keep you ahead of the curve.' },
  { em: '🎈', title: 'The Amnet way', body: "We don't follow a rule book to acknowledge your personal wins and celebrations — we have our own unique ways to celebrate you." },
  { em: '🎂', title: 'SYNERGY! Our years-old tradition', body: 'Month-end cake cuttings and team rituals — yes, we believe in celebrating your inner child.' },
];

const JOBS = [
  { title: 'Senior Data Engineer — Amnet Data Foundry', location: 'Hyderabad / Remote', experience: '5+ yrs', stack: 'Databricks · Spark · Medallion' },
  { title: 'Agentic AI Engineer — Amnet Agent Foundry', location: 'Hyderabad', experience: '3+ yrs', stack: 'LLMs · AutoGen · LangChain' },
  { title: 'AI Quality Engineer — AIDLC', location: 'Hyderabad / Remote', experience: '4+ yrs', stack: 'Evals · Hallucination testing · Automation' },
  { title: 'Product Designer — Enterprise AI Platforms', location: 'Hyderabad', experience: '3+ yrs', stack: 'UX · Design systems · Data viz' },
  { title: 'Cloud & DevOps Engineer', location: 'Hyderabad / Dubai', experience: '4+ yrs', stack: 'AWS/Azure · K8s · CI/CD' },
];

const TESTIMONIALS = [
  { initial: 'S', quote: "I joined as a trainee and now lead a Amnet Data Foundry pod for a Fortune 500 client. The growth curve here is real — and so is the cake tradition.", name: 'Data Engineering Lead', tenure: '5 years at Amnet' },
  { initial: 'A', quote: "Working on agentic AI in production — not slideware — is why I'm here. Every quarter I ship something I couldn't have built anywhere else.", name: 'Senior AI Engineer', tenure: '3 years at Amnet' },
  { initial: 'P', quote: 'My ideas made it into a client demo within my first month. Here, contribution is measured by impact, not tenure.', name: 'Product Analyst', tenure: '1 year at Amnet' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        fullWidth
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
        eyebrow="Join us"
        heading={
          <>
            Work on possibilities powered by <span className="grad-text">AI, data & autonomous intelligence</span>
          </>
        }
        lede="Whether you're starting your journey or taking the next big leap, you'll find an environment that challenges you, supports you, and helps you evolve. Every day at Amnet is an opportunity to create real impact alongside some of the brightest minds in data and technology."
      >
        <Button href="#openings" variant="molten">
          View Open Roles
        </Button>
      </PageHero>

      <Section>
        <Wrap>
          <SectionHead
            fullWidth
            eyebrow="Why us"
            heading="The Amnet Advantage"
            lede="At Amnet, your ideas matter, your contributions are recognized, and your growth journey is taken seriously. If you want to challenge yourself with autonomous and agentic AI in a future-focused organization — you belong here."
          />
          <div className="eq-grid">
            {PERKS.map((perk) => (
              <Reveal key={perk.title} asChild>
                <div className="eq-card bg-paper border border-line rounded-[18px] p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
                  <div>
                    <span className="text-[26px] leading-none block h-[26px]">{perk.em}</span>
                    <h3 className="text-[19px] leading-snug mt-3 mb-1.5">{perk.title}</h3>
                  </div>
                  <p className="text-[14px] text-muted">{perk.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section dark id="openings">
        <Wrap>
          <SectionHead eyebrow="Current openings" heading="Find your next challenge" />
          <div className="grid gap-3.5">
            {JOBS.map((job) => (
              <Reveal key={job.title}>
                <div className="flex mobile:flex-col mobile:items-start items-center gap-[18px] bg-carbon-2 border border-line-dark rounded-2xl py-5 px-6 transition-transform duration-150 hover:translate-x-1.5">
                  <div>
                    <b className="text-[16.5px] text-white">{job.title}</b>
                    <div className="text-xs text-[#8FA0B8] flex gap-4 mt-1 flex-wrap">
                      <span>{job.location}</span>
                      <span>{job.experience}</span>
                      <span>{job.stack}</span>
                    </div>
                  </div>
                  <Button href="/contact" variant="ghost-dark" size="sm" className="ml-auto mobile:ml-0">
                    Apply
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-[22px] text-[#8FA0B8] text-sm">
            Don&apos;t see your role? Write to <b className="text-gold">careers@amnetdigital.com</b> — exceptional people
            always have a seat here.
          </p>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead center eyebrow="Life at Amnet" heading="Voices from the team" />
          <div className="eq-grid eq-grid-stack-tablet">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name} asChild>
                <div className="eq-card bg-paper border border-line rounded-[18px] p-[30px]">
                  <p className="text-[14px]">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex gap-3 mt-[18px] items-center">
                    <span className="w-11 h-11 rounded-full bg-molten grid place-items-center font-bold text-white">
                      {t.initial}
                    </span>
                    <span>
                      <b className="block">{t.name}</b>
                      <span className="text-[13px] text-muted">{t.tenure}</span>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center mt-7 text-[13.5px] text-muted-2">
            Full employee testimonials with photos coming from our HR team — placeholders shown.
          </p>
        </Wrap>
      </Section>

      <Section tight className="!pt-0">
        <Wrap>
          <CtaBand heading="Ready to build the autonomous enterprise?" paragraph="Send us your story. We hire for curiosity, ownership, and craft.">
            <Button href="/contact" variant="molten">
              Apply Now
            </Button>
          </CtaBand>
        </Wrap>
      </Section>
    </>
  );
}
