import Link from 'next/link';
import { ReactNode } from 'react';

type PhotoHeroProps = {
  heading: ReactNode;
  lede: ReactNode;
  /** Full-bleed background photo; a dark gradient renders without one. */
  image?: string;
  /** `landing` is the taller list-page hero with larger type. */
  variant?: 'detail' | 'landing';
  /** Optional outline button shown before "Let's Talk". */
  secondaryAction?: { label: string; href: string };
};

const SIZES = {
  detail: {
    box: 'h-[540px] px-[118px]',
    heading: 'text-[clamp(34px,3.6vw,52px)] leading-[1.1] max-w-[920px]',
    lede: 'text-[clamp(17px,1.5vw,20px)] leading-snug mt-8 max-w-[1000px]',
  },
  landing: {
    box: 'h-[560px] px-[100px]',
    heading: 'text-[clamp(40px,4.2vw,60px)] leading-[1.05]',
    lede: 'text-[clamp(20px,2.2vw,31px)] leading-[1.25] mt-10 max-w-[820px]',
  },
};

/** Dark full-bleed photo hero with heading, lede and a "Let's Talk" button. */
export function PhotoHero({ heading, lede, image, variant = 'detail', secondaryAction }: PhotoHeroProps) {
  const size = SIZES[variant];
  return (
    <div className="relative overflow-hidden bg-[#0D0F13] text-white">
      {image ? (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-right" />
          <div aria-hidden className="absolute inset-0 bg-black/45" />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(700px 420px at 72% 45%, rgba(76,195,255,.10), transparent 60%), radial-gradient(900px 500px at 20% 20%, rgba(109,92,255,.12), transparent 60%)',
          }}
        />
      )}
      <div className={`relative max-w-[1440px] mx-auto pt-32 ${size.box} tablet:px-7 mobile:h-auto mobile:pt-20 mobile:pb-16`}>
        <h1 className={`text-white tracking-[-0.5px] ${size.heading}`}>{heading}</h1>
        <p className={size.lede}>{lede}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className="inline-block border border-white rounded-[6px] py-[7px] px-3 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
            >
              {secondaryAction.label}
            </Link>
          )}
          <Link
            href="/contact"
            className="inline-block bg-molten rounded-[6px] py-2 px-3 text-[14px] font-semibold text-white shadow-[0_10px_26px_-6px_rgba(86,70,229,0.75)] transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
