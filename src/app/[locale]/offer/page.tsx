import type { Metadata } from 'next';
import Link from 'next/link';
import { getOfferDict } from '@/i18n/offer';
import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getOfferDict(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      type: 'website',
      url: `https://hksolution.dev/${locale}/offer`,
    },
  };
}

export default async function OfferPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getOfferDict(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <img src="/logo.svg" alt="HK Solution" className="h-8" />
          </Link>
          <div className="flex items-center gap-4">
            <a href="#services" className="hidden md:inline text-sm text-slate-500 hover:text-[var(--primary)] transition-colors font-medium">{t.nav.services}</a>
            <a href="#security" className="hidden md:inline text-sm text-slate-500 hover:text-[var(--primary)] transition-colors font-medium">{t.nav.freeAudit}</a>
            <a href="#proof" className="hidden md:inline text-sm text-slate-500 hover:text-[var(--primary)] transition-colors font-medium">{t.nav.trackRecord}</a>
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-1 text-xs">
              {locales.map(l => (
                <Link key={l} href={`/${l}/offer`} className={`px-2 py-1 rounded ${l === locale ? 'bg-[var(--primary)] text-white' : 'text-slate-400 hover:text-[var(--primary)]'} transition-colors font-semibold`}>
                  {l === 'ko' ? 'KR' : l === 'en' ? 'EN' : 'JP'}
                </Link>
              ))}
            </div>
            <a href="#contact" className="px-4 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded hover:bg-[var(--primary-dark)] transition-colors">
              {t.nav.cta}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-[var(--navy)] via-[#1a2d5a] to-[#0f1d3d] overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,67,193,0.15),transparent_60%)]" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-semibold">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              {t.hero.h1a}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-cyan-400">
                {t.hero.h1b}
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.hero.sub1}
              <span className="text-white font-semibold">{t.hero.sub2}</span>
              {t.hero.sub3}
              <span className="line-through text-slate-500">{t.audit.priceStrike}</span>{' '}
              <span className="text-emerald-400 font-bold">{t.audit.priceZero}</span>
              {t.hero.sub4}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#services" className="px-8 py-3.5 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary-light)] transition-colors text-sm shadow-lg shadow-[var(--primary)]/25">
                {t.services.label}
              </a>
              <a href="#security" className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-sm">
                {t.nav.freeAudit}
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.stats.map(s => (
              <div key={s.label} className="text-center p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-slate-300 mt-1 font-medium">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free */}
      <section className="py-16 px-6 bg-gradient-to-r from-emerald-50 to-cyan-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">{t.whyFree.title}</h2>
          <p className="text-center text-slate-500 mt-2 text-sm">{t.whyFree.subtitle}</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {t.whyFree.reasons.map((r, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-emerald-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">{i + 1}</div>
                <h3 className="font-bold text-slate-900">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--primary)] text-xs font-bold tracking-wider uppercase">{t.services.label}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)]">{t.services.title}</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              {t.services.desc1} {t.services.desc2}
            </p>
          </div>

          <div className="space-y-16">
            {t.services.categories.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-start gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center shrink-0 mt-0.5`}>
                    <span className="text-white text-xs font-bold">{cat.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--navy)]">{cat.category}</h3>
                    <p className="text-sm text-slate-500 mt-0.5">{cat.tagline}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {cat.items.map((item) => (
                    <div key={item.name} className="p-6 bg-white rounded-xl border border-slate-200 hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all group">
                      <div className="flex items-start justify-between">
                        <h4 className="font-bold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors">{item.name}</h4>
                        <span className="text-xs font-semibold text-slate-400 whitespace-nowrap ml-2">{item.price}</span>
                      </div>
                      <p className="mt-2 text-sm text-[var(--navy)] font-semibold">{item.hook}</p>
                      <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      <div className="mt-4 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span className="text-xs text-emerald-600 font-medium">{t.services.auditBadge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Audit Detail */}
      <section id="security" className="py-20 px-6 bg-[var(--navy)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">{t.audit.label}</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                {t.audit.h2a}<br />
                <span className="text-emerald-400">{t.audit.h2b}</span>
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">{t.audit.desc}</p>
              <div className="mt-8 space-y-4">
                {t.audit.items.map((a) => (
                  <div key={a.item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <div>
                      <span className="text-white text-sm font-medium">{a.item}</span>
                      <span className="text-slate-400 text-sm"> — {a.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-center mb-6">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{t.audit.priceLabel}</div>
                <div className="text-4xl font-bold text-white mt-2 line-through decoration-red-500/60">{t.audit.priceStrike}</div>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 rounded-full">
                    <span className="text-emerald-400 text-lg font-bold">{t.audit.priceZero}</span>
                    <span className="text-emerald-400/80 text-sm">{t.audit.priceBundleNote}</span>
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mt-6">
                <div className="text-sm text-slate-300 mb-1 font-semibold">{t.audit.standaloneTitle}</div>
                <div className="text-xs text-slate-500 mb-4">{t.audit.standaloneSubtitle}</div>
                <div className="space-y-3">
                  {t.audit.tiers.map((tier, i) => (
                    <div key={tier.name} className={`flex justify-between items-center p-3.5 bg-white/5 rounded-lg ${i === 2 ? 'border border-[var(--primary)]/30' : 'border border-white/5'}`}>
                      <div>
                        <span className="text-white text-sm font-medium">{tier.name}</span>
                        <span className="text-slate-500 text-xs block">{tier.desc}</span>
                      </div>
                      <span className={`font-bold text-sm ${i === 0 ? 'text-emerald-400' : 'text-white'}`}>{tier.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--primary)] text-xs font-bold tracking-wider uppercase">{t.proof.label}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)]">{t.proof.title}</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">{t.proof.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {t.proof.findings.map((f, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                    f.severity === 'CRITICAL' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                  }`}>{f.severity}</span>
                  <span className="text-sm font-semibold text-slate-700">{f.company}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">{f.issue}</p>
                <p className="text-xs text-red-600/80 mt-2 font-medium">{f.consequence}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border-2 border-[var(--primary)]/20 text-center">
            <p className="text-[var(--navy)] font-bold text-lg">{t.proof.bottomBold}</p>
            <p className="text-slate-500 text-sm mt-1">{t.proof.bottomSub}</p>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)]">{t.credibility.title}</h2>
            <p className="mt-3 text-slate-500">{t.credibility.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.credibility.items.map(p => (
              <div key={p.name} className="p-5 bg-[var(--surface)] rounded-xl border border-slate-100 hover:border-[var(--primary)]/20 transition-colors">
                <div className="text-xl font-bold text-[var(--primary)]">{p.lines}</div>
                <div className="text-sm font-semibold text-[var(--navy)] mt-1">{p.name}</div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[var(--navy)] via-[#1a2d5a] to-[#0f1d3d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.cta.title}</h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed whitespace-pre-line">{t.cta.desc}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://securefirst.dev/en#contact" className="px-8 py-3.5 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary-light)] transition-colors text-sm shadow-lg shadow-[var(--primary)]/25">
              {t.cta.ctaProject}
            </a>
            <a href="https://securefirst.dev" className="px-8 py-3.5 bg-emerald-500/20 text-emerald-400 font-semibold rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors text-sm">
              {t.cta.ctaScan}
            </a>
            <a href="mailto:contact@securefirst.dev" className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-sm">
              contact@securefirst.dev
            </a>
          </div>

          <p className="mt-6 text-slate-500 text-xs">{t.cta.bottomNote}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="https://hksolution.dev" className="hover:text-white transition-colors">HK Solution</a>
            <a href="https://securefirst.dev" className="hover:text-white transition-colors">SecureFirst</a>
            <a href="https://www.linkedin.com/in/heekyung-kim-4884b63b8/" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://t.me/Securefirstbot" className="hover:text-white transition-colors">Telegram</a>
            <a href="https://www.upwork.com/freelancers/~0180c343d7d8bfc410" className="hover:text-white transition-colors">Upwork</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <img src="/logo.svg" alt="HK Solution" className="h-5" />
          <div className="text-xs text-slate-400 text-center md:text-right">
            <div>{t.footer.ceo} &middot; {t.footer.bizNo}</div>
            <div className="mt-1">{t.footer.address} &middot; {t.footer.phone}</div>
            <div className="mt-1">{t.footer.rights}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
