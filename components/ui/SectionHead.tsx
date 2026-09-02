import { ReactNode } from 'react';

type SectionHeadProps = {
  eyebrow: string;
  eyebrowClassName?: string;
  heading: ReactNode;
  lede?: ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionHead({ eyebrow, eyebrowClassName = '', heading, lede, center = false, className = '' }: SectionHeadProps) {
  return (
    <div className={`max-w-[820px] mb-14 ${center ? 'mx-auto text-center' : ''} ${className}`}>
      <span className={`eyebrow ${eyebrowClassName} ${center ? 'justify-center' : ''}`}>{eyebrow}</span>
      <h2 className="text-[clamp(30px,3.8vw,46px)] my-3.5 mb-4">{heading}</h2>
      {lede && (
        <p className={`text-[clamp(17px,1.5vw,20px)] text-muted max-w-[64ch] dark:text-[#B9C2D0] ${center ? 'mx-auto' : ''}`}>
          {lede}
        </p>
      )}
    </div>
  );
}
