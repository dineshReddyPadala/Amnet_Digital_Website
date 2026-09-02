import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { SectionHead } from '@/components/ui/SectionHead';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Timeline } from '@/components/ui/Timeline';
import { QuoteBlock } from '@/components/sections/QuoteBlock';
import { Button } from '@/components/ui/Button';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'About Amnet Digital — AI-First Since 2019',
  description:
    '350+ technologists across US, India, UK and Dubai. Fortune 500 clients. An AI/ML-centric company from day one — not a legacy firm that added AI later.',
};

const VALUES = [
  { icon: '⚗', title: 'Innovation', body: 'We embed AI, data, and autonomous intelligence into everything we build — experimenting beyond conventional solutions to deliver measurable impact.' },
  { icon: '◆', title: 'Excellence', body: 'Deep data expertise, agentic AI capability, and strong engineering practice — constantly challenging the status quo for best-in-class outcomes.' },
  { icon: '⚖', title: 'Integrity', body: 'The highest standards of ethics, transparency, and responsible AI — secure, compliant, accountable solutions, always doing what is right.' },
  { icon: '♡', title: 'Empathy', body: 'Technology is most powerful when human-centered. We design practical, inclusive solutions that serve people — not the other way around.' },
];

const MILESTONES = [
  { year: '2026', title: 'The AI Enterprise, complete', body: '350+ technologists worldwide. AIDLC formalized as our enterprise delivery methodology; Amnet Data Foundry + Amnet Agent Foundry deployed as a unified decision-intelligence platform.' },
  { year: '2025', title: 'Amnet Agent Foundry & AI-Powered DAM', body: 'Launched our enterprise agentic decision & execution platform, and an AI-powered digital asset management platform enriching thousands of hours of enterprise media.' },
  { year: '2024', title: 'Amnet Data Foundry launched', body: 'Introduced our agentic data engineering platform — autonomous Medallion architecture builds, cutting implementation time by 50–60%.' },
  { year: '2023', title: 'GenAI Center of Excellence', body: 'Established dedicated GenAI and agentic-AI CoEs; expanded our cross-vertical use-case library across retail, media, and information management.' },
  { year: '2022', title: 'Swift Insights & Dubai expansion', body: 'Launched Swift Insights, our AI-based advanced-analytics platform for retail & e-commerce, and entered the UAE market — 300 associates serving customers globally.' },
  { year: '2021', title: '100+ associates', body: 'Crossed 100 technology associates across the globe as part of our expansion strategy.' },
  { year: '2020', title: 'Three Fortune 1000 wins', body: 'Won our first three Fortune 1000 customers; recognized by Silicon India as one of the best startups to work for in Hyderabad.' },
  { year: '2019', title: 'Founded', body: "Registered and launched Amnet Digital's first delivery operation centre in Hyderabad." },
];

const TECH_LOGOS = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Databricks', 'Snowflake', 'NVIDIA NIM', 'OpenAI', 'Anthropic', 'MS AutoGen', 'LangChain'];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        eyebrow="Who we are"
        heading={
          <>
            Intelligence that <span className="grad-text">works for you</span>
          </>
        }
        lede="A fast-growing global AI, data, and digital transformation company — founded in 2019, headquartered in Austin, Texas, with a strong presence across the US, India, UK, and Dubai. We serve Fortune 500 organizations and large enterprises with advanced data engineering, AI, and analytics."
      />

      <Section>
        <Wrap>
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-[60px] tablet:gap-9 items-center">
            <div>
              <span className="eyebrow">Our approach</span>
              <h2 className="text-[clamp(24px,2.8vw,32px)] my-3.5 mt-3.5 mb-[18px]">
                AI-first. Data-driven. Outcome-obsessed.
              </h2>
              <p className="text-muted mb-4">
                We combine AI, data, and autonomous intelligence to help organizations become smarter, faster, and
                more adaptive. Through agentic AI, advanced analytics, and intelligent automation, we transform raw
                data into actionable insight, better decisions, and operational efficiency.
              </p>
              <p className="text-muted">
                Through continuous learning systems and autonomous decision capabilities, we empower enterprises to
                move toward self-optimizing, insight-led growth.
              </p>
            </div>
            <div className="grid grid-cols-2 mobile:grid-cols-1 gap-3.5">
              <Reveal>
                <Card icon="◎" title="Mission">
                  <p>Engineer the path from enterprise data to autonomous, measurable business outcomes.</p>
                </Card>
              </Reveal>
              <Reveal>
                <Card icon="✦" title="Vision">
                  <p>Make every enterprise an AI enterprise — powered by trusted data and accountable AI.</p>
                </Card>
              </Reveal>
            </div>
          </div>
        </Wrap>
      </Section>

      <Section dark>
        <Wrap>
          <SectionHead center eyebrow="Our values" heading="What we refuse to compromise on" />
          <div className="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-[22px]">
            {VALUES.map((v) => (
              <Reveal key={v.title}>
                <Card icon={v.icon} title={v.title}>
                  <p>{v.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-[60px] tablet:gap-9 items-start">
            <div>
              <span className="eyebrow">Key milestones</span>
              <h2 className="text-[clamp(24px,2.8vw,32px)] mt-3.5 mb-2">Seven years, four countries, one obsession</h2>
              <Timeline entries={MILESTONES} />
            </div>
            <div className="tablet:static sticky top-[100px] grid gap-[22px]">
              <QuoteBlock
                quote="At Amnet Digital, we started with a clear and enduring belief: technology must create meaningful, measurable impact. Our ambition remains steadfast — to be a trusted partner for enterprises navigating complexity, unlocking the full potential of data and AI, and shaping a future driven by intelligent, confident decisions."
                initials="KR"
                name="Krishna Reddy"
                role="Founder & CEO"
              />
              <Reveal>
                <Card icon="🌍" title="Global footprint">
                  <p className="mb-3.5">Delivering around the clock from four countries:</p>
                  <div className="font-mono text-xs flex gap-[18px] flex-wrap text-muted">
                    <span>
                      <b>US</b> Austin, TX (HQ)
                    </span>
                    <span>
                      <b>IN</b> Hyderabad
                    </span>
                    <span>
                      <b>UK</b> London
                    </span>
                    <span>
                      <b>AE</b> Dubai
                    </span>
                  </div>
                </Card>
              </Reveal>
              <Reveal>
                <Card icon="♥" title="We care — our commitment to CSR">
                  <p>
                    We create impact beyond business — enabling education, digital inclusion, and community
                    development through skill-building programs, innovation support, and employee-led volunteering.
                    Our AI and data expertise helps bridge opportunity gaps toward a more inclusive, digitally enabled
                    future.
                  </p>
                </Card>
              </Reveal>
            </div>
          </div>
        </Wrap>
      </Section>

      <Section dark tight>
        <Wrap>
          <SectionHead center eyebrow="Technology ecosystem" heading="A partner ecosystem that keeps evolving" />
          <Reveal className="flex gap-3.5 flex-wrap justify-center">
            {TECH_LOGOS.map((logo) => (
              <span
                key={logo}
                className="font-mono text-[12.5px] tracking-[0.1em] py-3 px-[22px] rounded-full border border-line-dark bg-carbon-2 text-[#AFC0D8]"
              >
                {logo}
              </span>
            ))}
          </Reveal>
        </Wrap>
      </Section>

      <Section tight>
        <Wrap>
          <CtaBand heading="Let's build what's next, together." paragraph="Whether you're a Fortune 500 or a high-growth disruptor, our doors — in four countries — are open.">
            <Button href="/contact" variant="molten">
              Contact Us
            </Button>
          </CtaBand>
        </Wrap>
      </Section>
    </>
  );
}
