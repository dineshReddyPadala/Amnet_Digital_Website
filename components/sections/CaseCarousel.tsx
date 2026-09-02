'use client';

import Link from 'next/link';
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
    <div>
      <CaseCard caseStudy={CASES[index]} />
      <div className="flex gap-2.5 mt-[26px] items-center">
        <button
          aria-label="Previous case study"
          onClick={() => setIndex((i) => (i - 1 + CASES.length) % CASES.length)}
          className="w-[42px] h-[42px] rounded-full border border-line bg-paper grid place-items-center transition-colors hover:bg-ink hover:text-white"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M6 11L1 6l5-5M1 6h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <button
          aria-label="Next case study"
          onClick={() => setIndex((i) => (i + 1) % CASES.length)}
          className="w-[42px] h-[42px] rounded-full border border-line bg-paper grid place-items-center transition-colors hover:bg-ink hover:text-white"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M10 1l5 5-5 5M15 6H1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <div className="flex gap-[7px] ml-2">
          {CASES.map((_, i) => (
            <i key={i} className={`case-dot ${i === index ? 'on' : ''}`} />
          ))}
        </div>
        <Link href="/case-studies" className="ml-auto font-semibold font-display text-[14.5px]">
          All case studies →
        </Link>
      </div>
    </div>
  );
}
