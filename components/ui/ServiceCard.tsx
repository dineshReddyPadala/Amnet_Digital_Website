import { forwardRef, ReactNode } from 'react';

type ServiceCardProps = {
  title: string;
  items: string[];
  icon?: ReactNode;
  index?: number;
};

export const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(function ServiceCard(
  { title, items, icon, index },
  ref,
) {
  return (
    <div
      ref={ref}
      className="eq-card group relative overflow-hidden h-full bg-paper py-7 px-6 pl-7 rounded-[18px] border border-line transition-all duration-200 hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_22px_44px_-22px_rgba(12,19,34,0.28)]"
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-molten opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
      <div className="flex items-start gap-3 mb-3.5 min-h-[2.6em]">
        {icon != null && (
          <span className="grid h-10 w-10 flex-none place-items-center rounded-[12px] bg-gold/[0.1] text-[18px] text-gold transition-colors duration-200 group-hover:bg-gold/[0.16]">
            {icon}
          </span>
        )}
        <div className="min-w-0 flex-1">
          {/* {index != null && (
            <span className="mb-1.5 block font-body text-[10px] tracking-[0.18em] text-gold tabular-nums">
              {String(index).padStart(2, '0')}
            </span>
          )} */}
          <h3 className="text-[19px] leading-snug m-0">{title}</h3>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-1 content-start">
        {items.map((item) => (
          <span
            key={item}
            className="font-body text-[12px] leading-snug py-1.5 px-3 rounded-full border border-line text-muted bg-white/70 transition-colors duration-200 group-hover:border-gold/30"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
});
