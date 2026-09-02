import { ReactNode } from 'react';

export function Wrap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-wrap mx-auto px-7 ${className}`}>{children}</div>;
}
