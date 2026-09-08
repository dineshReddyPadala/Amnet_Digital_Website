import { forwardRef, ReactNode } from 'react';

type CardProps = {
  icon?: ReactNode;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Participate in an `.eq-grid` so headers & bodies align across cards. */
  equal?: boolean;
};

const chrome =
  'bg-paper border border-line rounded-[18px] p-[30px] transition-all duration-200 hover:-translate-y-1 hover:shadow-card dark:bg-carbon-2 dark:border-line-dark';

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { icon, title, children, className = '', equal = false },
  ref,
) {
  if (equal) {
    return (
      <div ref={ref} className={`eq-card ${chrome} ${className}`}>
        <div>
          {icon && (
            <span
              className="w-11 h-11 rounded-xl grid place-items-center text-xl text-bronze"
              style={{ background: 'linear-gradient(135deg,rgba(86,70,229,.14),rgba(109,92,255,.16))' }}
            >
              {icon}
            </span>
          )}
          {title && (
            <h3 className={`text-[19px] leading-snug mb-2 dark:text-white ${icon ? 'mt-3.5' : 'mt-0'}`}>
              {title}
            </h3>
          )}
        </div>
        <div className="text-muted text-[14px] dark:text-[#A6B1C2]">{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`h-full flex flex-col ${chrome} ${className}`}>
      {(icon || title) && (
        <div className="shrink-0">
          {icon && (
            <span
              className="w-11 h-11 rounded-xl grid place-items-center text-xl text-bronze"
              style={{ background: 'linear-gradient(135deg,rgba(86,70,229,.14),rgba(109,92,255,.16))' }}
            >
              {icon}
            </span>
          )}
          {title && (
            <h3 className={`text-[19px] leading-snug mb-2 dark:text-white ${icon ? 'mt-3.5' : 'mt-0'}`}>
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="text-muted text-[14px] flex-1 dark:text-[#A6B1C2]">{children}</div>
    </div>
  );
});
