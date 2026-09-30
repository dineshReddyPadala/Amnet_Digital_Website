import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { getJob, JOBS, type JobBullet } from '@/data/jobs';

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const job = getJob(params.slug);
  if (!job) return {};
  return {
    title: `${job.title} — Careers at Amnet Digital`,
    description: job.summary,
  };
}

function BulletList({ items }: { items: JobBullet[] }) {
  return (
    <ul className="grid gap-3 list-none">
      {items.map((item) => (
        <li key={item.text} className="text-[15.5px] text-ink">
          <div className="flex gap-3 items-start">
            <i className="flex-none w-[22px] h-[22px] rounded-[7px] bg-molten text-white grid place-items-center not-italic text-xs font-bold mt-0.5">
              ✓
            </i>
            <span>{item.text}</span>
          </div>
          {item.children && (
            <ul className="mt-2 ml-[34px] grid gap-1.5 list-disc pl-4 text-muted">
              {item.children.map((child) => (
                <li key={child}>{child}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function CareerRolePage({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug);
  if (!job) notFound();

  const applyHref = `/contact/?role=${encodeURIComponent(job.title)}`;

  return (
    <>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: job.title },
        ]}
        eyebrow={`${job.experience} · Full-time`}
        heading={job.title}
        lede={job.summary}
      >
        <div className="flex gap-4 flex-wrap items-center">
          <Button href={applyHref} variant="molten" arrow>
            Apply for this role
          </Button>
          <span className="font-mono text-xs tracking-[0.08em] uppercase text-muted">{job.tags.join(' · ')}</span>
        </div>
      </PageHero>

      <Section>
        <Wrap>
          <div className="max-w-[760px] grid gap-12">
            {job.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-[clamp(24px,2.8vw,32px)] mb-5">{section.heading}</h2>
                <div className="grid gap-4">
                  {section.blocks.map((block, i) =>
                    block.kind === 'text' ? (
                      <p key={i} className="text-muted text-[16.5px]">
                        {block.text}
                      </p>
                    ) : (
                      <BulletList key={i} items={block.items} />
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-14">
            <Button href={applyHref} variant="molten" arrow>
              Apply for this role
            </Button>
          </div>
        </Wrap>
      </Section>
    </>
  );
}
