'use client';

import { useEffect, useState } from 'react';

export type LegalTocItem = { id: string; label: string };

/** Sticky "On this page" list; the active item follows the section near the top of the viewport. */
export function LegalToc({ items }: { items: LegalTocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -70% 0px' },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-[110px]">
      <p className="text-sm font-semibold text-ink">On this page</p>
      <ul className="list-none mt-4 grid gap-1 border-l border-line">
        {items.map(({ id, label }) => {
          const on = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setActive(id)}
                aria-current={on ? 'location' : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-[13px] leading-snug transition-colors ${
                  on ? 'border-gold text-gold font-medium' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
