import Link from 'next/link';
import { ReactNode } from 'react';

type Variant = 'molten' | 'ghost' | 'ghost-dark' | 'ink';
type Size = 'md' | 'sm';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
};

const base =
  'inline-flex items-center gap-2.5 rounded-full font-semibold tracking-[0.01em] transition-all duration-150 group';

const variants: Record<Variant, string> = {
  molten: 'bg-molten text-white shadow-[0_12px_30px_-10px_rgba(86,70,229,0.5)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-10px_rgba(109,92,255,0.65)]',
  ghost:
    'border-[1.5px] border-black/[0.28] text-ink bg-white/60 hover:bg-ink hover:text-white hover:-translate-y-0.5',
  'ghost-dark':
    'border-[1.5px] border-white/30 text-white bg-transparent hover:bg-white/10 hover:-translate-y-0.5',
  ink: 'border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white hover:-translate-y-0.5',
};

const sizes: Record<Size, string> = {
  md: 'py-[15px] px-7 text-[14px]',
  sm: 'py-2.5 px-5 text-sm',
};

export function Button({ href, children, variant = 'molten', size = 'md', arrow, className = '' }: ButtonProps) {
  // Primary (molten) and CTA-style dark ghost always show → unless arrow={false}
  const showArrow = arrow ?? (variant === 'molten' || variant === 'ghost-dark');

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
      {showArrow && (
        <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
