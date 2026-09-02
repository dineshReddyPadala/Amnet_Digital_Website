'use client';

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

export function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const { ref, value } = useAnimatedCounter<HTMLElement>(target);
  return (
    <em ref={ref as any} className="not-italic bg-molten bg-clip-text text-transparent">
      {value}
      {suffix}
    </em>
  );
}
