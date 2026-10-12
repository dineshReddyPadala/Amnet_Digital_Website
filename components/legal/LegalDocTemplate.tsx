import { Fragment } from 'react';
import type { LegalBlock, LegalDoc } from '@/lib/types';
import { Wrap } from '@/components/ui/Wrap';
import { LegalToc } from '@/components/legal/LegalToc';

// Emails, and URLs starting with http(s):// or www. (a trailing full stop or comma stays text).
const LINKABLE = /([\w.+-]+@[\w-]+\.[\w.]*\w|(?:https?:\/\/|www\.)[^\s]*[^\s.,)])/g;

const linkClass =
  'font-medium text-gold underline decoration-gold/30 underline-offset-4 hover:decoration-gold [overflow-wrap:anywhere]';

function linkHref(text: string) {
  if (text.includes('@') && !text.includes('/')) return `mailto:${text}`;
  return text.startsWith('http') ? text : `https://${text}`;
}

/** A policy paragraph; email addresses and URLs in the text become links. */
function Paragraph({ text }: { text: string }) {
  return (
    <p className="text-[16px] leading-[1.5] text-ink/80">
      {text.split(LINKABLE).map((part, i) => {
        if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
        const href = linkHref(part);
        const external = !href.startsWith('mailto:');
        return (
          <a
            key={i}
            href={href}
            className={linkClass}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {part}
          </a>
        );
      })}
    </p>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === 'string') return <Paragraph text={block} />;

  switch (block.type) {
    case 'subheading':
      return (
        <h3 className="flex items-center gap-3 pt-4 text-[18px] font-semibold tracking-normal">
          <span aria-hidden className="w-2 h-2 shrink-0 rounded-full bg-gold" />
          {block.text}
        </h3>
      );

    case 'subsections':
      return (
        <div className="mt-4 grid gap-8 border-l-2 border-gold/20 pl-6 mobile:pl-5">
          {block.items.map((sub) => (
            <div key={sub.id} id={sub.id} className="scroll-mt-[110px]">
              <h3 className="text-[18px] font-semibold tracking-normal">{sub.title}</h3>
              <div className="mt-3 grid gap-4">
                {sub.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case 'links':
      return (
        <div className="mt-4 rounded-[12px] bg-ink/[0.05] p-7 mobile:p-6">
          <h3 className="text-[18px] font-semibold tracking-normal">{block.title}</h3>
          <ul className="list-none mt-4 grid grid-cols-2 mobile:grid-cols-1 gap-x-6 gap-y-1">
            {block.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 py-1.5 text-[15px] font-medium text-gold hover:text-bronze transition-colors"
                >
                  {link.label}
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'example':
      return (
        <div className="rounded-[8px] border-l-2 border-gold bg-gold/[0.07] px-5 py-4">
          <p className="text-[14px] text-muted">
            The following is an example of a <strong className="font-semibold text-ink">{block.kind}</strong> cookie:
          </p>
          <p className="mt-1.5 text-[15px] leading-[1.75] text-ink/80">
            <strong className="font-semibold text-ink">{block.name}</strong> — {block.text}
          </p>
        </div>
      );

    case 'table':
      return (
        <>
          <div className="mobile:hidden overflow-hidden rounded-[12px] border border-line">
            <table className="w-full border-collapse text-left text-[14px]">
              <caption className="sr-only">{block.caption}</caption>
              <thead className="bg-gold/[0.07]">
                <tr>
                  {block.head.map((h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className={`px-5 py-3.5 font-semibold text-ink ${i === 0 ? 'w-[28%]' : i === 2 ? 'w-[14%]' : ''}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map(([name, purpose, validity]) => (
                  <tr key={name} className="border-t border-line align-top">
                    <td className="px-5 py-4 font-mono text-[13px] text-ink [overflow-wrap:anywhere]">{name}</td>
                    <td className="px-5 py-4 leading-6 text-ink/80">{purpose}</td>
                    <td className="px-5 py-4 whitespace-nowrap text-ink/80">{validity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="hidden mobile:block list-none rounded-[12px] border border-line divide-y divide-line">
            {block.rows.map(([name, purpose, validity]) => (
              <li key={name} className="grid gap-2 p-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[13px] font-medium text-ink [overflow-wrap:anywhere]">{name}</span>
                  <span className="shrink-0 rounded-full bg-gold/[0.1] px-2.5 py-0.5 text-[12px] font-medium text-bronze">
                    {validity}
                  </span>
                </div>
                <p className="text-[14px] leading-6 text-ink/80">{purpose}</p>
              </li>
            ))}
          </ul>
        </>
      );
  }
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

        <article className="min-w-0 max-w-[724px] grid gap-12">
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
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </div>
            </section>
          ))}
        </article>
      </Wrap>
    </>
  );
}
