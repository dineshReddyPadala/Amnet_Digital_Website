'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PLATFORM_LINKS, INDUSTRY_LINKS, PRIMARY_NAV } from '@/data/nav';
import { NavDropdown } from './NavDropdown';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) =>
    `flex items-center gap-1.5 py-2.5 px-3.5 text-[14.5px] font-medium rounded-[10px] transition-colors hover:text-ink hover:bg-black/5 whitespace-nowrap ${
      pathname === href ? 'text-ink bg-black/5' : 'text-[#3E4757]'
    }`;

  return (
    <header className="sticky top-0 z-[200] bg-[#FAFAFD]/85 backdrop-blur-[16px] border-b border-line">
      <nav className="flex items-center gap-[34px] h-[74px] max-w-wrap mx-auto px-7" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5 flex-none">
          <img src="/assets/img/amnet-logo.png" alt="Amnet Digital" style={{ height: 30, width: 'auto' }} />
        </Link>
        <ul className="flex navCollapse:hidden gap-1 ml-auto items-center flex-none">
          <NavDropdown label="Platforms" items={PLATFORM_LINKS} />
          <li className="list-none flex-none">
            <Link href="/services" className={linkClass('/services')}>
              Services
            </Link>
          </li>
          <NavDropdown label="Industries" items={INDUSTRY_LINKS} allHref="/industries" allLabel="All industries" />
          {PRIMARY_NAV.filter((n) => n.href !== '/services').map((n) => (
            <li key={n.href} className="list-none flex-none">
              <Link href={n.href} className={linkClass(n.href)}>
                {n.label}
              </Link>
            </li>
          ))}
          <li className="list-none ml-2 flex-none">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full font-semibold font-body py-2.5 px-5 text-sm bg-molten text-white shadow-[0_12px_30px_-10px_rgba(86,70,229,0.5)] hover:-translate-y-0.5 transition-transform whitespace-nowrap"
            >
              Talk to an Expert
            </Link>
          </li>
        </ul>
        <button
          className="hidden navCollapse:grid place-items-center ml-auto w-11 h-11 text-ink"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" width={26} height={26}>
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
      <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  );
}
