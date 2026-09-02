import { ReactNode } from 'react';

type CardProps = {
  icon?: ReactNode;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Card({ icon, title, children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-paper border border-line rounded-[18px] p-[30px] transition-all duration-200 hover:-translate-y-1 hover:shadow-card dark:bg-carbon-2 dark:border-line-dark ${className}`}
    >
      {icon && (
        <span className="w-11 h-11 rounded-xl grid place-items-center text-xl text-bronze" style={{ background: 'linear-gradient(135deg,rgba(86,70,229,.14),rgba(109,92,255,.16))' }}>
          {icon}
        </span>
      )}
      {title && <h3 className="text-[19px] mt-3.5 mb-2 dark:text-white">{title}</h3>}
      <div className="text-muted text-[15px] dark:text-[#A6B1C2]">{children}</div>
    </div>
  );
}
