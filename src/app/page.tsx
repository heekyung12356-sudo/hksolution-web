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
    hook: 'Your app has vulnerabilities. We find them before attackers do.',
    desc: '48시간 안에 웹앱, API, DB, AI 시스템의 취약점을 전수 조사합니다. SOC 2 인증 기업에서도 크리티컬 취약점이 나왔습니다 — 인증서가 안전을 보장하지 않습니다.',
    link: 'https://securefirst.dev',
    product: 'SecureFirst',
  },
  {
    icon: '02',
    title: 'Compliance Readiness',
    hook: 'Pass the audit. For real.',
    desc: 'SOC 2, ISO 27001 — 서류만 맞추는 컨설팅이 아닙니다. 실제 기술 통제를 구현해서 감사관이 아니라 해커가 와도 통과하는 보안을 만듭니다.',
  },
  {
    icon: '03',
    title: 'Secure Development',
    hook: 'Security is not a feature. It\'s architecture.',
    desc: '처음부터 보안이 설계된 시스템을 구축합니다. 출시 후 취약점 패치에 쓸 비용을, 처음부터 올바르게 만드는 데 투자하세요.',
  },
  {
    icon: '04',
    title: 'AI & Automation',
    hook: 'Replace 40 hours of manual work with one command.',
    desc: '브라우저 자동화, AI 에이전트, 워크플로우 최적화. 반복 업무를 자동화해서 팀이 진짜 중요한 일에 집중하게 만듭니다.',
  },
];

const PARTNERS = [
  { name: 'SecureFirst', desc: 'AI-Powered Security Audit Platform', url: 'https://securefirst.dev' },
  { name: 'Cloudflare', desc: 'CDN, DNS, WAF, DDoS Protection', url: 'https://cloudflare.com' },
  { name: 'Vercel', desc: 'Deployment & Edge Infrastructure', url: 'https://vercel.com' },
  { name: 'Supabase', desc: 'Database, Auth, Realtime', url: 'https://supabase.com' },
];

const STATS = [
  { value: '17+', label: 'Production Apps Audited' },
  { value: '100%', label: 'Critical Vulns Found in Every Audit' },
  { value: '48h', label: 'From Start to Full Report' },
  { value: '0', label: 'Breaches After Our Audit' },
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[var(--navy)] via-[#1a2d5a] to-[var(--navy)] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full mb-6">
                <div className="w-1.5 h-1.5 bg-[var(--primary-light)] rounded-full animate-pulse" />
                <span className="text-[var(--primary-light)] text-xs font-semibold tracking-wide uppercase">Security Engineering & Consulting</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Every app we audited
                <br />
                <span className="text-[var(--primary-light)]">had critical vulnerabilities.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                SOC 2 인증 기업도, 시리즈 B 스타트업도, $500M+ 기업도 예외 없었습니다.
                <span className="text-white font-medium"> 48시간 안에 당신의 제품이 안전한지 확인하세요.</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://securefirst.dev/en#contact" className="px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded hover:bg-[var(--primary-light)] transition-colors text-sm">
                  무료 보안 스캔 받기
                </a>
                <a href="#services" className="px-6 py-3 bg-white/10 text-white font-semibold rounded border border-white/20 hover:bg-white/20 transition-colors text-sm">
                  What We Do
                </a>
              </div>
            </div>

            {/* Right: Phone Mockup with Video */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-[280px] h-[560px] bg-black rounded-[40px] border-[6px] border-slate-700 shadow-2xl shadow-[var(--primary)]/20 overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
                  {/* Video */}
                  <video
                    src="/intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/intro-poster.jpg"
                  />
                </div>
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-[var(--primary)]/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(s => (
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
          <div className="text-center mb-12">
            <span className="text-[var(--primary)] text-xs font-semibold tracking-wider uppercase">Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)]">보안은 비용이 아닙니다. 보험입니다.</h2>
            <p className="mt-4 text-slate-500 max-w-lg mx-auto">
              데이터 유출 한 건의 평균 비용은 $4.45M. 사전 점검 비용은 그 1%도 안 됩니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="p-8 bg-white rounded-lg border border-slate-100 hover:border-[var(--primary)]/20 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all group">
                <span className="text-[var(--primary)] text-xs font-bold tracking-wider">{s.icon}</span>
                <h3 className="mt-3 text-xl font-bold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors">{s.title}</h3>
                <p className="mt-2 text-[var(--navy)] text-sm font-semibold">{s.hook}</p>
                <p className="mt-2 text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                {s.product && (
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-[var(--primary)] text-sm font-semibold hover:gap-2 transition-all">
                    Try {s.product} <span>&rarr;</span>
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
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)]">대기업만 가능했던 보안을,<br />모든 기업에게.</h2>
              <p className="mt-6 text-slate-500 leading-relaxed">
                대표 김희경은 17개 이상의 프로덕션 앱을 직접 해킹하고 방어해 왔습니다. 시드 스타트업부터 $500M+ 기업까지 — <span className="text-[var(--navy)] font-medium">단 한 곳도 취약점이 없는 곳은 없었습니다.</span>
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                SOC 2 인증을 받은 기업에서도 크리티컬 취약점이 발견됐습니다. 인증서는 안전을 보장하지 않습니다. 실제 공격자의 시각으로 테스트하는 것만이 유일한 검증입니다.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                AI 자동 스캔 + 수동 전문가 테스트를 결합해, 기존 컨설팅 대비 <span className="text-[var(--navy)] font-medium">1/10 비용으로 48시간 안에 결과를 제공</span>합니다.
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
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--navy)]">검증된 인프라 위에서 구축합니다</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">해킹당한 후에 연락하지 마세요.</h2>
          <p className="mt-4 text-slate-300 text-lg">
            24시간 안에 무료 보안 스캔 결과를 보내드립니다. 미팅도, 영업 전화도 없습니다.
          </p>
          <p className="mt-2 text-slate-400 text-sm">
            지금까지 감사한 모든 앱에서 크리티컬 취약점을 발견했습니다. 당신의 앱은 다를까요?
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://securefirst.dev/en#contact" className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded hover:bg-[var(--primary-light)] transition-colors text-sm">
              무료 스캔 신청
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
