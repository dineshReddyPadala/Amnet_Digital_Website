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
  fullWidth?: boolean;
};

export function PageHero({
  crumbs,
  eyebrow,
  eyebrowClassName,
  heading,
  lede,
  children,
  center = false,
  fullWidth = false,
}: PageHeroProps) {
  return (
    <div className="phero-bg relative overflow-hidden text-ink pt-[100px] pb-[84px] border-b border-line">
      <Wrap className={center ? 'text-center' : ''}>
        <span className={`font-body text-xs tracking-[0.16em] text-[#62666B] uppercase mb-5 block ${center ? 'text-center' : ''}`}>
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
        <h1
          className={`text-[clamp(34px,4.6vw,56px)] font-extrabold mt-[26px] mb-5 ${
            fullWidth || center ? 'max-w-none w-full' : 'max-w-[19ch]'
          }`}
        >
          {heading}
        </h1>
        <p
          className={`text-[clamp(17px,1.5vw,18px)] text-muted my-5 mb-[34px] ${
            fullWidth ? 'max-w-none w-full' : 'max-w-[64ch]'
          } ${center ? 'mx-auto' : ''}`}
        >
          {lede}
        </p>
        {children}
      </Wrap>
    </div>
  );
}
