import { ReactNode } from 'react';
import { Reveal } from './Reveal';

type CtaBandProps = {
  heading: ReactNode;
  paragraph: ReactNode;
  children: ReactNode;
  fullWidth?: boolean;
};

export function CtaBand({ heading, paragraph, children, fullWidth = false }: CtaBandProps) {
  return (
    <Reveal
      className="cta-band relative overflow-hidden flex items-center gap-10 justify-between flex-wrap text-white rounded-[26px] border border-line-dark py-16 px-14 mobile:py-11 mobile:px-7"
      as="div"
    >
      <div
        className="absolute inset-0 -z-10 bg-carbon rounded-[26px]"
        style={{ background: 'radial-gradient(700px 400px at 85% 0%, rgba(76,195,255,.14), transparent 60%), #0C1322' }}
      />
      <div className={fullWidth ? 'w-full max-w-none' : ''}>
        <h2 className={`text-[clamp(26px,3vw,38px)] text-white ${fullWidth ? 'max-w-none w-full' : 'max-w-[22ch]'}`}>
          {heading}
        </h2>
        <p
          className={`text-[#AAB7CB] mt-2.5 text-[clamp(17px,1.5vw,18px)] ${
            fullWidth ? 'max-w-none w-full' : 'max-w-[52ch]'
          }`}
        >
          {paragraph}
        </p>
      </div>
      <div className="flex gap-3.5 flex-wrap">{children}</div>
    </Reveal>
  );
}
