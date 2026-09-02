'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { NavDropdownItem } from '@/lib/types';

type NavDropdownProps = {
  label: string;
  items: NavDropdownItem[];
  allHref?: string;
  allLabel?: string;
};

export function NavDropdown({ label, items, allHref, allLabel }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const liRef = useRef<HTMLLIElement>(null);

  // Close whenever the route changes (client-side nav doesn't remount this component).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on click outside and on Escape, for mouse/keyboard robustness beyond hover.
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(e: MouseEvent) {
      if (liRef.current && !liRef.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <li
      ref={liRef}
      className="nav-item relative list-none flex-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1.5 py-2.5 px-3.5 text-[#3E4757] text-[14.5px] font-medium rounded-[10px] bg-transparent border-none transition-colors hover:text-ink hover:bg-black/5 whitespace-nowrap"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
      >
        {label}
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
          <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
      <div className={`dd ${open ? 'dd-open' : ''}`}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="flex gap-3 p-3 rounded-[11px] items-start hover:bg-gold/[0.07]"
          >
            <span className="ic w-[34px] h-[34px] flex-none rounded-[9px] grid place-items-center text-[15px] bg-gold/[0.14] text-gold">
              {item.icon}
            </span>
            <span>
              <b className="block text-ink text-[14.5px] font-semibold">{item.title}</b>
              <span className="block text-[12.5px] text-muted leading-[1.4]">{item.description}</span>
            </span>
          </Link>
        ))}
        {allHref && allLabel && (
          <Link
            href={allHref}
            onClick={() => setOpen(false)}
            className="flex gap-3 p-3 rounded-[11px] items-start hover:bg-gold/[0.07] border-t border-line-dark mt-1.5"
          >
            <span className="ic w-[34px] h-[34px] flex-none rounded-[9px] grid place-items-center text-[15px] bg-gold/[0.14] text-gold">
              ＋
            </span>
            <span>
              <b className="block text-ink text-[14.5px] font-semibold">{allLabel}</b>
              <span className="block text-[12.5px] text-muted leading-[1.4]">Explore the full landscape</span>
            </span>
          </Link>
        )}
      </div>
    </li>
  );
}
