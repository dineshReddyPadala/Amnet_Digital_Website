'use client';

import Link from 'next/link';
import { MOBILE_MENU_LINKS } from '@/data/nav';

export function MobileMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  return (
    <div
      className={`mobile-menu hidden mobile:block fixed inset-x-0 top-[74px] bottom-0 bg-[#FBFBFE] z-[190] p-7 overflow-auto ${open ? 'open' : ''}`}
    >
      {MOBILE_MENU_LINKS.map((link) => (
        <Link
          key={link.href + link.label}
          href={link.href}
          onClick={onNavigate}
          className={`block py-[15px] px-1.5 font-display text-[19px] font-semibold border-b border-line ${
            link.sub ? 'text-[15px] text-muted font-body font-medium pl-[22px]' : 'text-ink'
          } ${link.highlight ? 'text-gold' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
