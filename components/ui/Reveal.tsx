'use client';

import { Children, cloneElement, isValidElement, ReactElement, ReactNode, Ref } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
  /** Merge reveal classes onto the single child so it can participate in CSS subgrid. */
  asChild?: boolean;
};

export function Reveal({ children, className = '', as = 'div', asChild = false }: RevealProps) {
  const { ref, isIn } = useReveal<HTMLDivElement>();
  const rv = `rv ${isIn ? 'in' : ''}`;

  if (asChild) {
    const child = Children.only(children);
    if (isValidElement(child)) {
      const el = child as ReactElement<{ className?: string; ref?: Ref<HTMLElement> }>;
      return cloneElement(el, {
        ref,
        className: [rv, className, el.props.className].filter(Boolean).join(' '),
      });
    }
  }

  const Tag = as as 'div';
  return (
    <Tag ref={ref} className={`${rv} ${className}`}>
      {children}
    </Tag>
  );
}
