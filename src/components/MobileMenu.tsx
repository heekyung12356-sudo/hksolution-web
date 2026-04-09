'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  const overlay = open && typeof document !== 'undefined' ? createPortal(
    <div
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999, backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}
    >
      {/* Top bar */}
      <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', borderBottom: '1px solid #f1f5f9', flexShrink: 0 }}>
        <img src="/logo.svg" alt="HK Solution" style={{ height: 28 }} />
        <button onClick={close} style={{ padding: 8, background: 'none', border: 'none', cursor: 'pointer' }} aria-label="close">
          <svg width="24" height="24" fill="none" stroke="#475569" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
        {/* Services accordion */}
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', fontSize: 16, fontWeight: 600, color: '#111111', background: 'none', border: 'none', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', textAlign: 'left' }}
        >
          {nav.services}
          <svg width="16" height="16" fill="none" stroke="#94a3b8" strokeWidth={2} viewBox="0 0 24 24" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {servicesOpen && serviceCategories && (
          <div style={{ padding: '8px 0 8px 16px', borderBottom: '1px solid #f1f5f9' }}>
            {serviceCategories.map(cat => (
              <a key={cat.category} href="#services" onClick={close} style={{ display: 'block', padding: '10px 0', textDecoration: 'none' }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#111111' }}>{cat.category}</span>
                <span style={{ display: 'block', fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{cat.tagline}</span>
              </a>
            ))}
          </div>
        )}

        <a href="#about" onClick={close} style={{ display: 'block', padding: '16px 0', fontSize: 16, fontWeight: 600, color: '#111111', textDecoration: 'none', borderBottom: '1px solid #f1f5f9' }}>
          {nav.about}
        </a>
        <a href="#partners" onClick={close} style={{ display: 'block', padding: '16px 0', fontSize: 16, fontWeight: 600, color: '#111111', textDecoration: 'none', borderBottom: '1px solid #f1f5f9' }}>
          {nav.partners}
        </a>
        <a href="#contact" onClick={close} style={{ display: 'block', padding: '16px 0', fontSize: 16, fontWeight: 600, color: '#111111', textDecoration: 'none', borderBottom: '1px solid #f1f5f9' }}>
          {nav.contact}
        </a>
      </div>

      {/* Bottom fixed */}
      <div style={{ flexShrink: 0, padding: '20px 24px', borderTop: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {locales.map(l => (
            <Link key={l} href={`/${l}`} style={{ padding: '8px 16px', borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none', ...(l === locale ? { backgroundColor: '#0047AB', color: '#fff' } : { backgroundColor: '#fff', color: '#64748b', border: '1px solid #e2e8f0' }) }}>
              {LOCALE_LABELS[l]}
            </Link>
          ))}
        </div>
        <a href="#contact" onClick={close} style={{ display: 'block', width: '100%', padding: '12px 0', backgroundColor: '#0047AB', color: '#fff', fontWeight: 600, borderRadius: 6, textAlign: 'center', fontSize: 14, textDecoration: 'none' }}>
          {nav.cta}
        </a>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      {/* Hamburger - only visible on mobile */}
      <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" style={{ position: 'relative', zIndex: 100000 }} aria-label="menu">
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>
      {overlay}
    </>
  );
}
