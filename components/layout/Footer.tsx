import Link from 'next/link';
import { FOOTER_COLUMNS, LOCATIONS, SITE_TAGLINE } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-carbon text-[#9AA7BC] pt-[76px] pb-[34px] border-t border-line-dark">
      <div className="max-w-wrap mx-auto px-7">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] tablet:grid-cols-3 mobile:grid-cols-2 gap-9">
          <div>
            <Link href="/" className="inline-flex mb-[18px]">
              <img src="/assets/img/amnet-logo-white.png" alt="Amnet Digital" style={{ height: 28, width: 'auto' }} />
            </Link>
            <p className="text-sm max-w-[34ch] mt-4">{SITE_TAGLINE}</p>
            <div className="font-mono text-xs flex gap-[18px] flex-wrap text-[#7B89A0] mt-5">
              {LOCATIONS.map((loc) => (
                <span key={loc.code}>
                  <b className="text-gold font-medium">{loc.code}</b> {loc.name}
                </span>
              ))}
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm mb-4 font-mono tracking-[0.16em] uppercase font-medium">{col.title}</h4>
              <ul className="list-none grid gap-2.5">
                {col.links.map((link, i) => (
                  <li key={link.href + i}>
                    <Link href={link.href} className="text-sm text-[#93A1B7] hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-[26px] border-t border-line-dark flex justify-between gap-5 flex-wrap text-[13px] text-[#66748C]">
          <span>© 2026 Amnet Digital. All rights reserved.</span>
          <span>Founded 2019 · Trusted by Fortune 500 & growing companies alike</span>
        </div>
      </div>
    </footer>
  );
}
