import Link from 'next/link';
import { ReactNode } from 'react';
import { Wrap } from '@/components/ui/Wrap';

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  crumbs: Crumb[];
  eyebrow: string;
  eyebrowClassName?: string;
  heading: ReactNode;
  lede: ReactNode;
  children?: ReactNode;
  center?: boolean;
};

export function PageHero({ crumbs, eyebrow, eyebrowClassName, heading, lede, children, center = false }: PageHeroProps) {
  return (
    <div className="phero-bg relative overflow-hidden text-ink pt-[100px] pb-[84px] border-b border-line">
      <Wrap className={center ? 'text-center' : ''}>
        <span className={`font-mono text-xs tracking-[0.16em] text-[#8B93A1] uppercase mb-5 block ${center ? 'text-center' : ''}`}>
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {i > 0 && ' / '}
              {c.href ? (
                <Link href={c.href} className="hover:text-gold">
                  {c.label}
                </Link>
              ) : (
                c.label
              )}
            </span>
          ))}
        </span>
        <span className={`eyebrow ${eyebrowClassName ?? ''} ${center ? 'justify-center' : ''}`}>{eyebrow}</span>
        <h1 className={`text-[clamp(34px,4.6vw,56px)] font-extrabold mt-[26px] mb-5 ${center ? 'max-w-none' : 'max-w-[19ch]'}`}>
          {heading}
        </h1>
        <p className={`text-muted my-5 mb-[34px] max-w-[64ch] ${center ? 'mx-auto' : ''}`}>{lede}</p>
        {children}
      </Wrap>
    </div>
  );
}
