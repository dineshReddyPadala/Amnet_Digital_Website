'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { MOBILE_NAV } from '@/data/nav';

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 11 7"
      fill="none"
      className={`flex-none transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MobileMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  // Portal to document.body: `header` has backdrop-blur, which (like transform
  // or filter) creates a containing block for `position: fixed` descendants.
  // Left in place, this panel would be positioned/sized relative to the
  // 74px-tall header instead of the viewport, collapsing it to a sliver.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [openGroup, setOpenGroup] = useState<string | null>(null);

  // Collapse any open accordion section whenever the whole menu closes, so it
  // doesn't reopen already-expanded next time.
  useEffect(() => {
    if (!open) setOpenGroup(null);
  }, [open]);

  const panel = (
    <div
      className={`mobile-menu hidden navCollapse:block fixed inset-x-0 top-[74px] bottom-0 bg-[#FBFBFE] z-[190] p-7 overflow-auto ${open ? 'open' : ''}`}
    >
      {MOBILE_NAV.map((entry) => {
        if (entry.type === 'link') {
          return (
            <Link
              key={entry.href}
              href={entry.href}
              onClick={onNavigate}
              className={`block py-[15px] px-1.5 font-display text-[19px] font-semibold border-b border-line ${
                entry.highlight ? 'text-gold' : 'text-ink'
              }`}
            >
              {entry.label}
            </Link>
          );
        }

        const isOpen = openGroup === entry.label;
        return (
          <div key={entry.label} className="border-b border-line">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenGroup(isOpen ? null : entry.label)}
              className="w-full flex items-center justify-between gap-3 py-[15px] px-1.5 font-display text-[19px] font-semibold text-ink"
            >
              {entry.label}
              <ChevronIcon open={isOpen} />
            </button>
            {isOpen && (
              <div className="pb-3 grid gap-1">
                {entry.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className="flex gap-3 py-2.5 px-1.5 pl-[22px] items-start rounded-lg hover:bg-black/[0.03]"
                  >
                    <span className="ic w-8 h-8 flex-none rounded-lg grid place-items-center text-sm bg-gold/[0.14] text-gold mt-0.5">
                      {item.icon}
                    </span>
                    <span>
                      <b className="block text-[15px] text-ink font-semibold font-body">{item.title}</b>
                      <span className="block text-[12.5px] text-muted leading-[1.4]">{item.description}</span>
                    </span>
                  </Link>
                ))}
                {entry.allHref && entry.allLabel && (
                  <Link
                    href={entry.allHref}
                    onClick={onNavigate}
                    className="block py-2.5 px-1.5 pl-[22px] text-[15px] font-semibold text-gold"
                  >
                    {entry.allLabel} →
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  if (!mounted) return null;
  return createPortal(panel, document.body);
}
