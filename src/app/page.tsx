import Link from 'next/link';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    icon: '01',
    title: 'Security Audit',
    desc: 'AI-powered vulnerability scanning and manual penetration testing for web apps, APIs, databases, and AI/LLM systems.',
    link: 'https://securefirst.dev',
    product: 'SecureFirst',
  },
  {
    icon: '02',
    title: 'Compliance Readiness',
    desc: 'SOC 2, ISO 27001 gap analysis and technical control assessment. We prepare you for certification — not paperwork, but real security.',
  },
  {
    icon: '03',
    title: 'Secure Development',
    desc: 'Full-stack development with security built in from day one. Next.js, React, Node.js, Supabase — enterprise-grade architecture.',
  },
  {
    icon: '04',
    title: 'AI & Automation',
    desc: 'Custom AI agents, browser automation, and workflow optimization. From marketing to operations — intelligent systems that work.',
  },
];

const PARTNERS = [
  { name: 'SecureFirst', desc: 'AI-Powered Security Audit Platform', url: 'https://securefirst.dev' },
  { name: 'Cloudflare', desc: 'CDN, DNS, WAF, DDoS Protection', url: 'https://cloudflare.com' },
  { name: 'Vercel', desc: 'Deployment & Edge Infrastructure', url: 'https://vercel.com' },
  { name: 'Supabase', desc: 'Database, Auth, Realtime', url: 'https://supabase.com' },
];

const STATS = [
  { value: '17+', label: 'Companies Audited' },
  { value: 'A+', label: 'Security Grade' },
  { value: '48h', label: 'Average Delivery' },
  { value: '100%', label: 'Critical Fix Rate' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="HK Solution" className="h-8" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV.map(n => (
              <a key={n.href} href={n.href} className="text-sm text-slate-500 hover:text-[var(--primary)] transition-colors font-medium">
                {n.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded hover:bg-[var(--primary-dark)] transition-colors">
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--primary)]/5 border border-[var(--primary)]/10 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
              <span className="text-[var(--primary)] text-xs font-semibold tracking-wide uppercase">Security Engineering & Consulting</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--navy)] leading-[1.1] tracking-tight">
              We build secure products
              <br />
              <span className="text-[var(--primary)]">and break insecure ones.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl">
              HK Solution is a security-first engineering company based in South Korea.
              We help startups and enterprises find vulnerabilities before attackers do —
              and build systems that are secure by design.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded hover:bg-[var(--primary-dark)] transition-colors text-sm">
                Our Services
              </a>
              <a href="https://securefirst.dev" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-[var(--primary)] font-semibold rounded border border-[var(--primary)]/20 hover:bg-[var(--primary)]/5 transition-colors text-sm">
                Visit SecureFirst
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(s => (
              <div key={s.label} className="text-center p-6 bg-[var(--surface)] rounded-lg">
                <div className="text-3xl font-bold text-[var(--primary)]">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--primary)] text-xs font-semibold tracking-wider uppercase">Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)]">What we do</h2>
            <p className="mt-4 text-slate-500 max-w-lg mx-auto">
              End-to-end security services — from finding vulnerabilities to building secure systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="p-8 bg-white rounded-lg border border-slate-100 hover:border-[var(--primary)]/20 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all group">
                <span className="text-[var(--primary)] text-xs font-bold tracking-wider">{s.icon}</span>
                <h3 className="mt-3 text-xl font-bold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors">{s.title}</h3>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                {s.product && (
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-[var(--primary)] text-sm font-semibold hover:gap-2 transition-all">
                    {s.product} <span>&rarr;</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Founder */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--primary)] text-xs font-semibold tracking-wider uppercase">About</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)]">Founded on the belief that<br />security is not optional.</h2>
              <p className="mt-6 text-slate-500 leading-relaxed">
                HK Solution was founded by HeeKyung Kim with a clear mission: make enterprise-grade security accessible to every company, regardless of size.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We&apos;ve audited 17+ production applications — from seed-stage startups to $500M+ companies — and found critical vulnerabilities in every single one. Including companies with SOC 2 and ISO 27001 certifications.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Our approach combines AI-powered automated scanning with manual expert testing, delivering results in 48 hours instead of weeks.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src="/founder.png" alt="HeeKyung Kim" className="w-14 h-14 rounded-full object-cover border-2 border-[var(--primary)]/20" />
                <div>
                  <div className="font-semibold text-[var(--navy)]">HeeKyung Kim</div>
                  <div className="text-sm text-slate-500">Founder & Lead Security Auditor</div>
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

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1606.5!2d127.41960!3d36.36850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565301b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2z64yA7KCE7Iuc64yA642V6rWs67mE656Y7ISc66GcNTM!5e0!3m2!1sko!2skr!4v1710000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HK Solution Office Location"
              />
              <div className="p-4 bg-white">
                <div className="font-semibold text-[var(--navy)] text-sm">HK Solution</div>
                <div className="text-slate-500 text-xs mt-1">53 Biraeseoro, Daedeok-gu, Daejeon 306, South Korea</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Tech Stack */}
      <section id="partners" className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--primary)] text-xs font-semibold tracking-wider uppercase">Partners & Technology</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)]">Built on trusted infrastructure</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {PARTNERS.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="p-6 bg-white rounded-lg border border-slate-100 hover:border-[var(--primary)]/20 hover:shadow-md transition-all text-center group">
                <div className="w-12 h-12 mx-auto bg-[var(--primary)]/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--primary)]/10 transition-colors">
                  <span className="text-[var(--primary)] font-bold text-lg">{p.name[0]}</span>
                </div>
                <div className="font-semibold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors">{p.name}</div>
                <div className="text-slate-400 text-xs mt-1">{p.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 px-6 bg-[var(--navy)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to secure your product?</h2>
          <p className="mt-4 text-slate-300 text-lg">
            Get a free security scan within 24 hours. No meetings, no sales calls.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://securefirst.dev/en#contact" className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded hover:bg-[var(--primary-light)] transition-colors text-sm">
              Get Free Scan
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

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="HK Solution" className="h-5" />
          </div>
          <div className="text-xs text-slate-400 text-center md:text-right">
            <div>CEO: HeeKyung Kim &middot; Business No: 740-05-03702</div>
            <div className="mt-1">53 Biraeseoro, Daedeok-gu, Daejeon 306, South Korea &middot; +82 10-5769-4366</div>
            <div className="mt-1">&copy; 2026 HK Solution. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
