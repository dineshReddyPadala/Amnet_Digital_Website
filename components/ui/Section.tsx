import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  dark?: boolean;
  tight?: boolean;
  className?: string;
  id?: string;
};

export function Section({ children, dark = false, tight = false, className = '', id }: SectionProps) {
  const padding = tight ? 'py-[76px]' : 'py-[104px] mobile:py-[72px]';
  const tone = dark ? 'dark bg-carbon text-[#EDF1F7]' : '';
  return (
    <div id={id} className={`${padding} ${tone} ${className}`}>
      {children}
    </div>
  );
}
