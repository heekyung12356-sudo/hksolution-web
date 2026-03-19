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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => { setOpen(false); setServicesOpen(false); };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2 relative z-[10001]"
        aria-label="menu"
      >
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Backdrop */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/20 z-[9998]" onClick={close} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white z-[9999] shadow-2xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        {/* Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100 shrink-0">
          <img src="/logo.svg" alt="HK Solution" className="h-7" />
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Services with sub-categories */}
          <div className="mb-2">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-3 text-base font-semibold text-[var(--navy)]"
            >
              {nav.services}
              <svg className={`w-4 h-4 text-slate-400 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && serviceCategories && (
              <div className="pl-4 pb-2 flex flex-col gap-1">
                {serviceCategories.map(cat => (
                  <a
                    key={cat.category}
                    href="#services"
                    onClick={close}
                    className="py-2 text-sm text-slate-500 hover:text-[var(--primary)] transition-colors"
                  >
                    {cat.category}
                    <span className="block text-xs text-slate-400">{cat.tagline}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#about" onClick={close} className="block py-3 text-base font-semibold text-[var(--navy)] hover:text-[var(--primary)] border-t border-slate-50">
            {nav.about}
          </a>
          <a href="#partners" onClick={close} className="block py-3 text-base font-semibold text-[var(--navy)] hover:text-[var(--primary)] border-t border-slate-50">
            {nav.partners}
          </a>
          <a href="#contact" onClick={close} className="block py-3 text-base font-semibold text-[var(--navy)] hover:text-[var(--primary)] border-t border-slate-50">
            {nav.contact}
          </a>
        </div>

        {/* Bottom: Language + CTA */}
        <div className="shrink-0 px-6 py-5 border-t border-slate-100 bg-slate-50">
          <div className="flex gap-2 mb-4">
            {locales.map(l => (
              <Link key={l} href={`/${l}`} className={`px-3 py-1.5 rounded text-sm ${l === locale ? 'bg-[var(--primary)] text-white' : 'bg-white text-slate-500 border border-slate-200'} font-semibold transition-colors`}>
                {LOCALE_LABELS[l]}
              </Link>
            ))}
          </div>
          <a href="#contact" onClick={close} className="block w-full px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded text-center text-sm hover:bg-[var(--primary-dark)] transition-colors">
            {nav.cta}
          </a>
        </div>
      </div>
    </>
  );
}
