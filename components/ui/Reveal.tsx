'use client';

import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
};

export function Reveal({ children, className = '', as = 'div' }: RevealProps) {
  const { ref, isIn } = useReveal<HTMLDivElement>();
  const Tag = as as any;
  return (
    <Tag ref={ref} className={`rv ${isIn ? 'in' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
