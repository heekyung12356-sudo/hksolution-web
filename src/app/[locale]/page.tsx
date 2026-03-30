import Link from 'next/link';
import { getDict, locales, type Locale } from '@/i18n';
import MobileMenu from '@/components/MobileMenu';
import ScrollToTop from '@/components/ScrollToTop';
import HackerTerminal from '@/components/HackerTerminal';

const TECH_STACK = [
  { name: 'React', desc: 'Frontend Framework' },
  { name: 'Next.js', desc: 'Full-Stack React Framework' },
  { name: 'TypeScript', desc: 'Type-Safe JavaScript' },
  { name: 'Node.js', desc: 'Server Runtime' },
  { name: 'PostgreSQL', desc: 'Relational Database' },
  { name: 'Supabase', desc: 'Database, Auth, Realtime' },
  { name: 'Redis', desc: 'In-Memory Cache & Queue' },
  { name: 'WebSocket', desc: 'Real-Time Communication' },
  { name: 'WebRTC', desc: 'Video Conferencing (SFU)' },
  { name: 'Electron', desc: 'Desktop Applications' },
  { name: 'Three.js', desc: '3D Graphics & WebGL' },
  { name: 'Tailwind', desc: 'Utility-First CSS' },
  { name: 'OpenAI', desc: 'GPT-4o / AI Agents' },
  { name: 'Vercel', desc: 'Deployment & Edge' },
  { name: 'Cloudflare', desc: 'CDN, DNS, WAF, DDoS' },
  { name: 'Docker', desc: 'Containerization' },
];

const LOCALE_LABELS: Record<Locale, string> = { ko: 'KR', en: 'EN', ja: 'JP' };

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDict(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center">
            <img src="/logo.svg" alt="HK Solution" className="h-8" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-slate-500 hover:text-[var(--primary)] transition-colors font-medium">{t.nav.services}</a>
            <a href="#about" className="text-sm text-slate-500 hover:text-[var(--primary)] transition-colors font-medium">{t.nav.about}</a>
            <a href="#partners" className="text-sm text-slate-500 hover:text-[var(--primary)] transition-colors font-medium">{t.nav.partners}</a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-[var(--primary)] transition-colors font-medium">{t.nav.contact}</a>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-xs">
              {locales.map(l => (
                <Link key={l} href={`/${l}`} className={`px-2 py-1 rounded ${l === locale ? 'bg-[var(--primary)] text-white' : 'text-slate-400 hover:text-[var(--primary)]'} transition-colors font-semibold`}>
                  {LOCALE_LABELS[l]}
                </Link>
              ))}
            </div>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded hover:bg-[var(--primary-dark)] transition-colors">
            {t.nav.cta}
          </a>
          <MobileMenu locale={locale} nav={t.nav} serviceCategories={t.services.categories.map(c => ({ category: c.category, tagline: c.tagline }))} />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[var(--navy)] via-[#1a2d5a] to-[var(--navy)] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full mb-6">
                <div className="w-1.5 h-1.5 bg-[var(--primary-light)] rounded-full animate-pulse" />
                <span className="text-[var(--primary-light)] text-xs font-semibold tracking-wide uppercase">{t.hero.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                {t.hero.title1}<br />
                <span className="text-[var(--primary-light)]">{t.hero.title2}</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                {t.hero.desc}
                <span className="text-white font-medium"> {t.hero.descBold}</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://securefirst.dev/en#contact" className="px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded hover:bg-[var(--primary-light)] transition-colors text-sm">
                  {t.hero.ctaPrimary}
                </a>
                <a href="#services" className="px-6 py-3 bg-white/10 text-white font-semibold rounded border border-white/20 hover:bg-white/20 transition-colors text-sm">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <HackerTerminal />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map(s => (
              <div key={s.label} className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-[var(--primary-light)]">{s.value}</div>
                <div className="text-sm text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--primary)] text-xs font-semibold tracking-wider uppercase">{t.services.label}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)] whitespace-pre-line">{t.services.title}</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">{t.services.desc}</p>
          </div>
          {t.services.categories.map((cat, ci) => (
            <div key={cat.category} className={ci > 0 ? 'mt-16' : ''}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[var(--primary)] rounded-full" />
                <div>
                  <h3 className="text-lg font-bold text-[var(--navy)]">{cat.category}</h3>
                  <p className="text-sm text-slate-500">{cat.tagline}</p>
                </div>
              </div>
              <div className={`grid gap-6 ${cat.items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                {cat.items.map(s => (
                  <div key={s.title} className="p-8 bg-white rounded-lg border border-slate-100 hover:border-[var(--primary)]/20 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all group relative">
                    {'isNew' in s && s.isNew && (
                      <span className="absolute top-4 right-4 px-2 py-0.5 bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-bold rounded-full uppercase tracking-wider">New</span>
                    )}
                    <span className="text-[var(--primary)] text-xs font-bold tracking-wider">{s.icon}</span>
                    <h4 className="mt-3 text-xl font-bold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors">{s.title}</h4>
                    <p className="mt-2 text-[var(--navy)] text-sm font-semibold">{s.hook}</p>
                    <p className="mt-2 text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                    {'product' in s && s.product && (
                      <a href={s.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-[var(--primary)] text-sm font-semibold hover:gap-2 transition-all">
                        Try {s.product} <span>&rarr;</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--primary)] text-xs font-semibold tracking-wider uppercase">{t.about.label}</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)] whitespace-pre-line">{t.about.title}</h2>
              <p className="mt-6 text-slate-500 leading-relaxed">
                {t.about.p1} <span className="text-[var(--navy)] font-medium">{t.about.p1Bold}</span>
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                {t.about.p2} <span className="text-[var(--navy)] font-medium">{t.about.p2Bold}</span>{t.about.p2After}
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">{t.about.p3}</p>
              <div className="mt-8 flex items-center gap-4">
                <img src="/founder.png" alt={t.about.founderName} className="w-14 h-14 rounded-full object-cover border-2 border-[var(--primary)]/20" />
                <div>
                  <div className="font-semibold text-[var(--navy)]">{t.about.founderName}</div>
                  <div className="text-sm text-slate-500">{t.about.founderTitle}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://www.linkedin.com/in/heekyung-kim-4884b63b8/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://t.me/Securefirstbot" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                </a>
                <a href="mailto:contact@securefirst.dev" className="text-slate-400 hover:text-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" /></svg>
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1606.5!2d127.41960!3d36.36850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565301b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2z64yA7KCE7Iuc64yA642V6rWs67mE656Y7ISc66GcNTM!5e0!3m2!1sko!2skr!4v1710000000000"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="HK Solution Office Location"
              />
              <div className="p-4 bg-white">
                <div className="font-semibold text-[var(--navy)] text-sm">HK Solution</div>
                <div className="text-slate-500 text-xs mt-1">{t.footer.address}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--primary)] text-xs font-semibold tracking-wider uppercase">{t.partners.label}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)]">{t.partners.title}</h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {TECH_STACK.map(p => (
              <div key={p.name} className="p-3 bg-white rounded-lg border border-slate-100 hover:border-[var(--primary)]/20 hover:shadow-sm transition-all text-center group">
                <div className="w-10 h-10 mx-auto bg-[var(--primary)]/5 rounded-lg flex items-center justify-center mb-2 group-hover:bg-[var(--primary)]/10 transition-colors">
                  <span className="text-[var(--primary)] font-bold text-sm">{p.name.slice(0, 2)}</span>
                </div>
                <div className="font-semibold text-[var(--navy)] text-xs group-hover:text-[var(--primary)] transition-colors">{p.name}</div>
                <div className="text-slate-400 text-[10px] mt-0.5">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-[var(--navy)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.cta.title}</h2>
          <p className="mt-4 text-slate-300 text-lg">{t.cta.desc}</p>
          <p className="mt-2 text-slate-400 text-sm">{t.cta.sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://securefirst.dev/en#contact" className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded hover:bg-[var(--primary-light)] transition-colors text-sm">
              {t.cta.ctaPrimary}
            </a>
            <a href="mailto:contact@securefirst.dev" className="px-8 py-3 bg-transparent text-white font-semibold rounded border border-white/20 hover:bg-white/10 transition-colors text-sm">
              contact@securefirst.dev
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <a href="https://securefirst.dev" className="hover:text-white transition-colors">SecureFirst</a>
            <a href="https://www.linkedin.com/in/heekyung-kim-4884b63b8/" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://t.me/Securefirstbot" className="hover:text-white transition-colors">Telegram</a>
            <a href="https://securefirst.dev/en/card" className="hover:text-white transition-colors">Digital Card</a>
          </div>
        </div>
      </section>

      {/* Fixed Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--navy)]/95 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <p className="text-white/70 text-sm hidden sm:block">
            {locale === 'ko'
              ? '보안 분석 무료 포함 — 모든 서비스에 적용됩니다.'
              : locale === 'ja'
              ? '全サービスにセキュリティ分析を無料で含みます。'
              : 'Free security analysis included with every service.'}
          </p>
          <div className="flex items-center gap-3 ml-auto">
            <a href="https://securefirst.dev/en#contact" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
              {locale === 'ko' ? '문의하기' : locale === 'ja' ? 'お問い合わせ' : 'Contact'}
            </a>
            <a href={`https://securefirst.dev/checkout?plan=startup&lang=${locale}`} className="px-5 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded hover:bg-[var(--primary-light)] transition-colors">
              {locale === 'ko' ? '시작하기' : locale === 'ja' ? '今すぐ始める' : 'Get Started'}
            </a>
          </div>
        </div>
      </div>

      <ScrollToTop />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="HK Solution" className="h-5" />
          </div>
          <div className="text-xs text-slate-400 text-center md:text-right">
            <div>{t.footer.ceo} &middot; {t.footer.bizNo}</div>
            <div className="mt-1">{t.footer.address} &middot; {t.footer.phone}</div>
            <div className="mt-1">{t.footer.rights} &middot; <a href="/privacy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
