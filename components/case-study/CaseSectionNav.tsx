'use client';

import { useEffect, useRef, useState } from 'react';

export type CaseSection = { id: string; label: string };

/** Quiet time after the last scroll event that counts as the click's smooth scroll having ended. */
const SCROLL_SETTLE_MS = 150;

/**
 * Sticky left-hand section nav; the active item follows the section in the middle of the viewport.
 * A clicked item stays active while the page smooth-scrolls to it, so sections passed on the way don't flash active.
 */
export function CaseSectionNav({ sections }: { sections: CaseSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);
  const clickScrolling = useRef(false);
  const settleTimer = useRef<number>();

  const settleSoon = () => {
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      clickScrolling.current = false;
    }, SCROLL_SETTLE_MS);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (clickScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScroll = () => {
      if (clickScrolling.current) settleSoon();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(settleTimer.current);
    };
  }, [sections]);

  return (
    <nav aria-label="Case study sections" className="sticky top-[74px] py-2">
      <ul className="list-none">
        {sections.map(({ id, label }) => {
          const on = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => {
                  clickScrolling.current = true;
                  settleSoon();
                  setActive(id);
                }}
                aria-current={on ? 'true' : undefined}
                className={`flex items-center gap-3 py-3 px-4 text-[13px] transition-colors ${
                  on ? 'bg-molten text-white' : 'text-[#9AA0AA] hover:text-ink'
                }`}
              >
                <i aria-hidden className={`w-[5px] h-[5px] rounded-full ${on ? 'bg-white' : 'bg-[#C9CDD3]'}`} />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
