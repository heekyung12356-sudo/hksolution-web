'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { locales, type Locale } from '@/i18n';

const LOCALE_LABELS: Record<Locale, string> = { ko: 'KR', en: 'EN', ja: 'JP' };

type ServiceCategory = { category: string; tagline: string };

type Props = {
  locale: string;
  nav: { services: string; about: string; partners: string; contact: string; cta: string };
  serviceCategories?: ServiceCategory[];
};

export default function MobileMenu({ locale, nav, serviceCategories }: Props) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => { setOpen(false); setServicesOpen(false); };

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} className="relative z-[10001] flex flex-col gap-1.5 p-2" aria-label="menu">
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-white">
          {/* Top bar */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
            <img src="/logo.svg" alt="HK Solution" className="h-7" />
            <button onClick={close} className="p-2" aria-label="close">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable menu content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {/* Services accordion */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-4 text-base font-semibold text-[var(--navy)] border-b border-slate-100"
            >
              {nav.services}
              <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && serviceCategories && (
              <div className="py-2 pl-4 border-b border-slate-100">
                {serviceCategories.map(cat => (
                  <a key={cat.category} href="#services" onClick={close} className="block py-2.5">
                    <span className="text-sm font-medium text-[var(--navy)]">{cat.category}</span>
                    <span className="block text-xs text-slate-400 mt-0.5">{cat.tagline}</span>
                  </a>
                ))}
              </div>
            )}

            <a href="#about" onClick={close} className="block py-4 text-base font-semibold text-[var(--navy)] border-b border-slate-100">{nav.about}</a>
            <a href="#partners" onClick={close} className="block py-4 text-base font-semibold text-[var(--navy)] border-b border-slate-100">{nav.partners}</a>
            <a href="#contact" onClick={close} className="block py-4 text-base font-semibold text-[var(--navy)] border-b border-slate-100">{nav.contact}</a>
          </div>

          {/* Fixed bottom */}
          <div className="shrink-0 px-6 py-5 border-t border-slate-100 bg-slate-50">
            <div className="flex gap-2 mb-4">
              {locales.map(l => (
                <Link key={l} href={`/${l}`} className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${l === locale ? 'bg-[var(--primary)] text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                  {LOCALE_LABELS[l]}
                </Link>
              ))}
            </div>
            <a href="#contact" onClick={close} className="block w-full py-3 bg-[var(--primary)] text-white font-semibold rounded text-center text-sm">
              {nav.cta}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
