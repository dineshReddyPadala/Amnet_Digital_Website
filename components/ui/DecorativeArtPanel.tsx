import { ReactNode } from 'react';

type DecorativeArtPanelProps = {
  background: string;
  kicker: string;
  heading: ReactNode;
  sub: ReactNode;
};

export function DecorativeArtPanel({ background, kicker, heading, sub }: DecorativeArtPanelProps) {
  return (
    <div
      className="rounded-[18px] overflow-hidden relative min-h-[340px] border border-line grid place-items-center"
      style={{ background }}
    >
      <div className="text-center p-10">
        <span className="text-xs tracking-[0.2em] text-[#8FA0B8] uppercase">{kicker}</span>
        <h3 className="font-extrabold text-[clamp(22px,2.6vw,34px)] text-white my-3.5 leading-[1.5]">{heading}</h3>
        <p className="text-[#A9B5C8] text-[14px]">{sub}</p>
      </div>
    </div>
  );
}
