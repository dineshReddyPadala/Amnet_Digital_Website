'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Mirrors the original IntersectionObserver-based `.rv`/`.in` scroll reveal
 * from assets/js/main.js: elements start hidden/offset, then fade+rise into
 * place the first time they cross the viewport, and stay revealed after.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isIn };
}
