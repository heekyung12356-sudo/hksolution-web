'use client';

import { useState } from 'react';
import Link from 'next/link';
import { locales, type Locale } from '@/i18n';

const LOCALE_LABELS: Record<Locale, string> = { ko: 'KR', en: 'EN', ja: 'JP' };

type Props = {
  locale: string;
  nav: { services: string; about: string; partners: string; contact: string; cta: string };
};

export default function MobileMenu({ locale, nav }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="menu"
      >
        <span className={`block w-5 h-0.5 bg-slate-600 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 px-6 py-8 flex flex-col gap-6">
          <a href="#services" onClick={() => setOpen(false)} className="text-lg font-semibold text-[var(--navy)] hover:text-[var(--primary)]">{nav.services}</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-lg font-semibold text-[var(--navy)] hover:text-[var(--primary)]">{nav.about}</a>
          <a href="#partners" onClick={() => setOpen(false)} className="text-lg font-semibold text-[var(--navy)] hover:text-[var(--primary)]">{nav.partners}</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-lg font-semibold text-[var(--navy)] hover:text-[var(--primary)]">{nav.contact}</a>

          <div className="flex gap-2 mt-2">
            {locales.map(l => (
              <Link key={l} href={`/${l}`} className={`px-3 py-1.5 rounded text-sm ${l === locale ? 'bg-[var(--primary)] text-white' : 'bg-slate-100 text-slate-500'} font-semibold`}>
                {LOCALE_LABELS[l]}
              </Link>
            ))}
          </div>

          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded text-center text-sm">
            {nav.cta}
          </a>
        </div>
      )}
    </>
  );
}
