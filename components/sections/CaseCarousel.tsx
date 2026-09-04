'use client';

import { useEffect, useState } from 'react';
import { CASES } from '@/data/cases';
import { CaseCard } from './CaseCard';

export function CaseCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % CASES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CaseCard
      caseStudy={CASES[index]}
      index={index}
      total={CASES.length}
      onPrev={() => setIndex((i) => (i - 1 + CASES.length) % CASES.length)}
      onNext={() => setIndex((i) => (i + 1) % CASES.length)}
    />
  );
}
