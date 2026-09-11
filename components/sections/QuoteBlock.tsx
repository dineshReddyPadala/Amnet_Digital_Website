import { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';

type QuoteBlockProps = {
  quote: ReactNode;
  initials: string;
  name: string;
  role: string;
};

export function QuoteBlock({ quote, initials, name, role }: QuoteBlockProps) {
  return (
    <Reveal
      className="quote-mark relative overflow-hidden bg-carbon-2 text-[#E7EDF6] rounded-[18px] border border-line-dark py-[52px] px-[52px] mobile:py-[34px] mobile:px-[26px]"
      as="div"
    >
      <p className="text-[clamp(17px,1.5vw,18px)] text-[#CBD5E4] max-w-[70ch] relative">{quote}</p>
      <div className="mt-[26px] flex items-center gap-3.5">
        <span className="w-[52px] h-[52px] rounded-full bg-molten grid place-items-center font-extrabold text-white">
          {initials}
        </span>
        <span>
          <b className="block text-white">{name}</b>
          <span className="text-[13px] text-[#8FA0B8]">{role}</span>
        </span>
      </div>
    </Reveal>
  );
}
