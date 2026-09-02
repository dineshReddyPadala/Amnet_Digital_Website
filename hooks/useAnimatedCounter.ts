'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Ports the count-up behaviour from assets/js/main.js's `cio` observer:
 * counts from 0 to `target` over 1.4s with a cubic ease-out, starting once
 * the host element crosses 40% into the viewport, once only.
 */
export function useAnimatedCounter<T extends HTMLElement>(target: number) {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let started = false;
    const duration = 1400;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const t0 = performance.now();
            const step = (t: number) => {
              const progress = Math.min(1, (t - t0) / duration);
              setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return { ref, value };
}
