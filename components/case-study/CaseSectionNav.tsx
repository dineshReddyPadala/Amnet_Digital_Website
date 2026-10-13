'use client';

import { useEffect, useState } from 'react';

export type CaseSection = { id: string; label: string };

/** Sticky left-hand section nav; the active item follows the section in the middle of the viewport. */
export function CaseSectionNav({ sections }: { sections: CaseSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
    return () => observer.disconnect();
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
                onClick={() => setActive(id)}
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
