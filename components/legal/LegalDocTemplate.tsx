import { Fragment } from 'react';
import type { LegalDoc } from '@/lib/types';
import { Wrap } from '@/components/ui/Wrap';
import { LegalToc } from '@/components/legal/LegalToc';

const EMAIL = /([\w.+-]+@[\w-]+\.[\w.]+)/g;

/** A policy paragraph; email addresses in the text become mailto links. */
function Paragraph({ text }: { text: string }) {
  return (
    <p className="text-[16px] leading-[1.5] text-ink/80">
      {text.split(EMAIL).map((part, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={`mailto:${part}`}
            className="font-medium text-gold underline decoration-gold/30 underline-offset-4 hover:decoration-gold"
          >
            {part}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </p>
  );
}

export function LegalDocTemplate({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <div className="bg-gold/[0.06] border-b border-line">
        <Wrap className="py-[72px] mobile:py-12">
          <h1 className="text-[44px] mobile:text-[32px] leading-tight font-semibold">{doc.title}</h1>
          <p className="mt-3 text-[15px] font-medium text-gold">{doc.updated}</p>
        </Wrap>
      </div>

      <Wrap className="py-20 mobile:py-12 grid grid-cols-[220px_minmax(0,1fr)] tablet:grid-cols-1 gap-16">
        <aside className="tablet:hidden">
          <LegalToc items={doc.sections.map((s) => ({ id: s.id, label: s.navLabel }))} />
        </aside>

        <article className="max-w-[724px] grid gap-12">
          {doc.sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className={`scroll-mt-[110px] ${i > 0 ? 'border-t border-line pt-12' : ''}`}
            >
              <h2
                id={`${section.id}-heading`}
                className={`${i === 0 ? 'text-[26px]' : 'text-[22px]'} mobile:text-[20px] leading-snug font-semibold tracking-normal`}
              >
                {section.title}
              </h2>
              <div className="mt-4 grid gap-4">
                {section.paragraphs.map((p, j) => (
                  <Paragraph key={j} text={p} />
                ))}
              </div>

              {section.subsections && (
                <div className="mt-8 grid gap-8 border-l-2 border-gold/20 pl-6 mobile:pl-5">
                  {section.subsections.map((sub) => (
                    <div key={sub.id} id={sub.id} className="scroll-mt-[110px]">
                      <h3 className="text-[18px] font-semibold tracking-normal">{sub.title}</h3>
                      <div className="mt-3 grid gap-4">
                        {sub.paragraphs.map((p, j) => (
                          <Paragraph key={j} text={p} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>
      </Wrap>
    </>
  );
}
