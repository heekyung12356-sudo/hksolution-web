export interface OfferDict {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  nav: { services: string; freeAudit: string; trackRecord: string; cta: string };
  hero: {
    badge: string;
    h1a: string;
    h1b: string;
    sub1: string;
    sub2: string;
    sub3: string;
    sub4: string;
  };
  stats: { value: string; label: string; sub: string }[];
  whyFree: {
    title: string;
    subtitle: string;
    reasons: { title: string; desc: string }[];
  };
  services: {
    label: string;
    title: string;
    desc1: string;
    desc2: string;
    auditBadge: string;
    categories: {
      category: string;
      tagline: string;
      icon: string;
      color: string;
      items: { name: string; hook: string; desc: string; price: string }[];
    }[];
  };
  audit: {
    label: string;
    h2a: string;
    h2b: string;
    desc: string;
    items: { item: string; detail: string }[];
    priceLabel: string;
    priceStrike: string;
    priceZero: string;
    priceBundleNote: string;
    standaloneTitle: string;
    standaloneSubtitle: string;
    tiers: { name: string; desc: string; price: string }[];
  };
  proof: {
    label: string;
    title: string;
    desc: string;
    findings: { company: string; issue: string; consequence: string; severity: 'CRITICAL' | 'HIGH' }[];
    bottomBold: string;
    bottomSub: string;
  };
  credibility: {
    title: string;
    subtitle: string;
    items: { name: string; lines: string; desc: string }[];
  };
  cta: {
    title: string;
    desc: string;
    ctaProject: string;
    ctaScan: string;
    bottomNote: string;
  };
  footer: {
    ceo: string;
    bizNo: string;
    address: string;
    phone: string;
    rights: string;
  };
}

export const offerEn: OfferDict = {
  meta: {
    title: 'HK Solution — $5,000+ Security Audit Free with Every Service',
    description: '88% of SaaS companies we audited had critical vulnerabilities. We build your product and include a full security audit — the same one that costs $5,000+ elsewhere.',
    ogTitle: '88% of SaaS companies we audited failed. Is yours next?',
    ogDescription: 'Every dev service includes a $5,000+ security audit — free. MVP builds, AI agents, automation, and more.',
  },
  nav: { services: 'Services', freeAudit: 'Free Audit', trackRecord: 'Track Record', cta: 'Get Started' },
  hero: {
    badge: '88% of SaaS companies we audited had critical vulnerabilities',
    h1a: 'Your app has vulnerabilities.',
    h1b: 'We find them. We fix them. Free.',
    sub1: 'Every service we offer — from MVP builds to AI agents — includes a ',
    sub2: 'full security audit',
    sub3: '. The same one that costs ',
    sub4: ' when bundled with any project.',
  },
  stats: [
    { value: '25+', label: 'SaaS products audited', sub: 'Seed to Series B+' },
    { value: '2M+', label: 'User records exposed', sub: 'Found across all targets' },
    { value: '88%', label: 'Failed our audit', sub: 'Scored C or below' },
    { value: '48h', label: 'Time to full report', sub: 'Not weeks. Hours.' },
  ],
  whyFree: {
    title: '"Why would you give away a $5,000 audit for free?"',
    subtitle: 'Fair question. Three reasons.',
    reasons: [
      { title: 'We wrote the code. We know where to look.', desc: 'No context switching, no separate security team. The people who built it are the ones testing it. That\'s faster and more thorough.' },
      { title: 'Shipping insecure SaaS is shipping a liability.', desc: 'If your product handles user data, it\'s a target. We refuse to deliver code we haven\'t verified ourselves. Period.' },
      { title: 'We\'ve personally exposed 2M+ user records.', desc: '25 companies audited. SOC 2 certified, VC-backed, $500M+ valuations — 88% failed. We know what breaks because we\'ve broken it.' },
    ],
  },
  services: {
    label: 'What We Build',
    title: 'Pick any service. Security audit is on us.',
    desc1: 'Not a basic scan. A real penetration test — the same one companies pay $5,000+ for.',
    desc2: 'Included free with every engagement below.',
    auditBadge: 'Full security audit included free',
    categories: [
      {
        category: 'Ship Your Product',
        tagline: 'You have the idea. We have the architecture of 60+ SaaS products already mapped.',
        icon: '{}', color: 'from-indigo-500 to-violet-600',
        items: [
          { name: 'Full-Stack MVP', hook: 'Stop planning. Start shipping.', desc: 'Working prototype in 48 hours. Production-ready in 1-2 weeks. React, Next.js, Node.js, PostgreSQL — battle-tested stack.', price: 'From $3,000' },
          { name: 'SaaS Clone / Alternative', hook: '"Build me X, but better." We already know how X works.', desc: 'We\'ve reverse-engineered 60+ products at protocol level — Notion, Slack, Linear, Lark. Not guessing. Rebuilding from blueprints.', price: 'From $5,000' },
          { name: 'Rapid Product Design', hook: '48 hours. Complete architecture. Ready to build.', desc: 'API schemas, database models, WebSocket protocols, UI specs — everything your dev team needs to start building immediately.', price: 'From $2,000' },
        ],
      },
      {
        category: 'AI & Automation',
        tagline: 'Replace 40 hours of manual work with one command.',
        icon: 'AI', color: 'from-cyan-500 to-blue-600',
        items: [
          { name: 'AI Agent Development', hook: 'Your customers get answers at 3am. You sleep.', desc: 'Custom AI chatbots, sales agents, support bots. Multi-channel deployment: web widget, Telegram, email — all connected.', price: 'From $1,500' },
          { name: 'Browser Automation', hook: '186 tools. Zero manual clicks.', desc: 'Data collection, competitive monitoring, workflow automation at scale. Built on our own 186-tool browser agent framework.', price: 'From $1,000' },
          { name: 'Desktop Automation', hook: 'If a human can click it, we can automate it.', desc: '200+ automation tools. Windows apps, Android, iOS, Electron — any desktop application, fully automated.', price: 'From $1,500' },
          { name: 'Workflow Integration', hook: 'Your tools should talk to each other.', desc: 'Make.com, n8n, custom pipelines. We hold mastery-level knowledge of both platforms — not tutorials, actual source-code understanding.', price: 'From $800' },
        ],
      },
      {
        category: 'E2E Testing & QA',
        tagline: 'Every button. Every flow. Every edge case. No exceptions.',
        icon: 'QA', color: 'from-emerald-500 to-teal-600',
        items: [
          { name: '11-Layer E2E Test', hook: '"It works on my machine" is not a test result.', desc: 'UI + validation + lifecycle + ghost data + infra + auth + security + UX quality + mobile + network resilience + navigation. 11 layers, zero gaps.', price: 'From $1,500' },
          { name: 'Automated Regression Suite', hook: 'Catch bugs before your users write angry tweets.', desc: 'Continuous test suites wired into your CI/CD. Every deploy verified automatically. Sleep better on release nights.', price: 'From $1,000' },
        ],
      },
      {
        category: 'Competitive Intelligence',
        tagline: 'Stop guessing what your competitors built. We\'ll show you.',
        icon: 'CI', color: 'from-amber-500 to-orange-600',
        items: [
          { name: 'Competitor Tech Benchmark', hook: 'Know exactly what they built — down to their database schema.', desc: 'Full architecture extraction: API endpoints, data models, real-time protocols, system prompts, feature flags. Desktop apps included via binary analysis.', price: 'From $3,000' },
          { name: 'Build vs Buy Analysis', hook: 'Acquire it or replicate it? Here\'s the exact cost of each.', desc: 'We extract the full blueprint of the target, then calculate precise engineering hours and infrastructure costs to build it from scratch.', price: 'From $2,000' },
        ],
      },
      {
        category: 'Investment & Due Diligence',
        tagline: 'For VCs who want the truth, not the pitch deck.',
        icon: 'DD', color: 'from-rose-500 to-pink-600',
        items: [
          { name: 'Tech Due Diligence', hook: 'Their CTO says the code is solid. We verify it in 48 hours.', desc: 'Code quality, architecture decisions, security posture, scalability ceiling, technical debt — the full picture before you write the check.', price: 'From $5,000' },
          { name: 'Moat Verification', hook: 'Is their "proprietary technology" actually defensible?', desc: 'We attempt to replicate their core technology in 48 hours. If we succeed, their moat is a marketing slide, not an engineering achievement.', price: 'From $4,000' },
        ],
      },
      {
        category: 'Sales & Outbound Engine',
        tagline: 'Cold emails that land in inboxes, not spam folders.',
        icon: 'TX', color: 'from-purple-500 to-fuchsia-600',
        items: [
          { name: 'Cold Email Infrastructure', hook: 'Your emails aren\'t getting replies because they\'re not getting delivered.', desc: 'Domain warmup, deliverability optimization, 99-word spam filter bypass, sequence design — built from cross-analysis of Apollo, Instantly, Lemlist, Clay, Reply.io, and respond.io.', price: 'From $1,000' },
          { name: 'AI Sales Agent', hook: 'Objections handled. Meetings booked. While you focus on closing.', desc: 'AI-powered objection handling, automated follow-ups, meeting scheduling. Learns your tone. Gets smarter with every conversation.', price: 'From $2,000' },
        ],
      },
    ],
  },
  audit: {
    label: 'Security Audit',
    h2a: 'Not a checklist.',
    h2b: 'An actual penetration test.',
    desc: 'Most "security audits" are automated scans with a PDF export. Ours involve hands-on exploitation attempts — the same techniques real attackers use. That\'s why we find what others miss.',
    items: [
      { item: 'OWASP Top 10 full vulnerability scan', detail: 'Not a checkbox — actual exploitation attempts' },
      { item: 'API endpoint security testing', detail: 'Every route, every method, every auth bypass' },
      { item: 'Database access control audit', detail: 'RLS policies, exposed tables, privilege escalation' },
      { item: 'Frontend bundle secret detection', detail: 'API keys, tokens, system prompts in your JS' },
      { item: 'Authentication & session security', detail: 'JWT, cookies, session fixation, token leaks' },
      { item: 'Infrastructure & header analysis', detail: 'CSP, CORS, HSTS, X-Frame — the full stack' },
      { item: 'Prioritized remediation report', detail: 'Not just "fix this" — exact code examples' },
      { item: 'Post-fix verification scan', detail: 'We confirm every fix actually works' },
    ],
    priceLabel: 'What security firms charge',
    priceStrike: '$5,000 ~ $15,000',
    priceZero: '$0',
    priceBundleNote: 'when bundled with any project',
    standaloneTitle: 'Need security only? Also available standalone:',
    standaloneSubtitle: 'Same quality. Same speed. No project required.',
    tiers: [
      { name: 'Quick Scan', desc: 'Automated surface-level check', price: 'Free' },
      { name: 'Standard Audit', desc: 'Full assessment, 48h delivery', price: '$2,000' },
      { name: 'Full Penetration Test', desc: 'Deep exploitation + remediation', price: '$5,000+' },
    ],
  },
  proof: {
    label: 'Real Results',
    title: 'These companies thought they were secure.',
    desc: 'SOC 2 certified. VC-backed. Multi-million dollar valuations. We found critical vulnerabilities in all of them.',
    findings: [
      { company: 'EdTech SaaS (Supabase)', issue: '27 database tables with zero Row Level Security. 382 user profiles including 130 minors\' personal data — readable AND writable by anyone.', consequence: 'GDPR Article 83 violation. Up to \u20AC20M fine.', severity: 'CRITICAL' },
      { company: 'FinTech Platform', issue: 'Free-tier users could access /api/v1/admin/users and dump the entire 764-user database. Worse: could charge other users\' payment methods.', consequence: 'Full account takeover + financial fraud.', severity: 'CRITICAL' },
      { company: 'Vercel\'s Own Product', issue: 'Stripe live secret key (pk_live_...) shipped in the production JavaScript bundle. Visible to anyone who opens DevTools.', consequence: 'Direct financial exposure.', severity: 'HIGH' },
      { company: '3D Platform (4M+ users)', issue: 'GraphQL introspection without auth exposed 115 types and 70 mutations — including deleteUser, deleteWorkspace, and credit manipulation.', consequence: 'Mass data deletion + credit theft.', severity: 'HIGH' },
    ],
    bottomBold: 'A Big Four firm charges $50,000 ~ $150,000 for comparable depth.',
    bottomSub: 'We deliver the same insight. In 48 hours. At a fraction of the cost.',
  },
  credibility: {
    title: '1,000,000+ lines of production code.',
    subtitle: 'Not tutorials. Not side projects. Shipped, running, production systems.',
    items: [
      { name: 'HK Suite', lines: '327K', desc: 'Full Lark/Slack alternative — 8 modules, real-time collaboration' },
      { name: '3D Toolkit', lines: '588K', desc: 'Three.js asset pipeline + interactive viewer' },
      { name: 'Desktop Agent', lines: '42K', desc: '200+ OS-level automation tools for any app' },
      { name: 'Browser Agent', lines: '32K', desc: '186 browser automation tools + anti-detection' },
      { name: 'SecureFirst', lines: '23K', desc: 'Security audit SaaS — the platform behind our scans' },
      { name: 'Products Analyzed', lines: '60+', desc: 'Reverse-engineered at API + protocol level' },
      { name: 'Delivery Speed', lines: '48h', desc: 'From brief to working prototype or full report' },
      { name: 'Languages', lines: '4', desc: 'English, Korean, Chinese, Japanese — all fluent' },
    ],
  },
  cta: {
    title: 'Two ways to start.',
    desc: 'Need a product built? We\'ll scope it, ship it, and secure it — all in one engagement.\nNeed security only? We deliver a full audit in 48 hours. No minimum project required.',
    ctaProject: 'Start a Project',
    ctaScan: 'Get a Free Security Scan',
    bottomNote: 'No sales calls. No meetings. Tell us what you need — we\'ll reply with a scope and timeline within 24h.',
  },
  footer: {
    ceo: 'CEO: HeeKyung Kim',
    bizNo: 'Business No: 740-05-03702',
    address: '53 Biraeseoro, Daedeok-gu, Daejeon 306, South Korea',
    phone: '+82 10-5769-4366',
    rights: '\u00A9 2026 HK Solution. All rights reserved.',
  },
};

export const offerKo: OfferDict = {
  meta: {
    title: 'HK Solution — 모든 서비스에 보안 감사 무료 포함 (시가 600만원+)',
    description: '보안 감사를 받은 SaaS 기업 중 88%에서 치명적 취약점이 발견되었습니다. 제품을 만들어드리고, 보안 감사까지 무료로 포함합니다.',
    ogTitle: '우리가 감사한 SaaS 기업의 88%가 실패했습니다. 당신의 서비스는?',
    ogDescription: '모든 개발 서비스에 시가 600만원 이상의 보안 감사가 무료로 포함됩니다.',
  },
  nav: { services: '서비스', freeAudit: '무료 감사', trackRecord: '실적', cta: '시작하기' },
  hero: {
    badge: '보안 감사를 받은 SaaS 기업 중 88%에서 치명적 취약점 발견',
    h1a: '당신의 앱에는 취약점이 있습니다.',
    h1b: '찾아드리고. 고쳐드리고. 무료입니다.',
    sub1: 'MVP 개발부터 AI 에이전트까지 — 모든 서비스에 ',
    sub2: '종합 보안 감사',
    sub3: '가 포함됩니다. 다른 곳에서 ',
    sub4: '에 제공하는 서비스를 프로젝트 번들 시 무료로 드립니다.',
  },
  stats: [
    { value: '25+', label: '감사한 SaaS 제품', sub: '시드 ~ 시리즈 B+' },
    { value: '200만+', label: '노출된 사용자 레코드', sub: '전체 대상 누적' },
    { value: '88%', label: '감사 미통과', sub: 'C등급 이하' },
    { value: '48시간', label: '전체 리포트 완성', sub: '주 단위가 아닌 시간 단위' },
  ],
  whyFree: {
    title: '"600만원짜리 감사를 왜 무료로 주나요?"',
    subtitle: '합리적인 질문입니다. 세 가지 이유가 있습니다.',
    reasons: [
      { title: '우리가 만든 코드입니다. 어디를 봐야 하는지 압니다.', desc: '컨텍스트 전환 없이, 별도 보안팀 없이. 만든 사람이 직접 테스트합니다. 더 빠르고 더 철저합니다.' },
      { title: '보안 없는 SaaS는 폭탄을 배달하는 것입니다.', desc: '사용자 데이터를 다루는 순간 타겟이 됩니다. 우리가 직접 검증하지 않은 코드는 절대 납품하지 않습니다.' },
      { title: '200만 건 이상의 사용자 데이터를 직접 노출시켜 봤습니다.', desc: '25개 기업 감사. SOC 2 인증, VC 투자 기업, 시가총액 수천억 — 88%가 실패했습니다. 뭐가 터지는지 알고 있습니다.' },
    ],
  },
  services: {
    label: '제공 서비스',
    title: '아무 서비스나 고르세요. 보안 감사는 서비스입니다.',
    desc1: '기본 스캔이 아닙니다. 기업들이 600만원 이상 지불하는 실제 침투 테스트입니다.',
    desc2: '아래 모든 서비스에 무료로 포함됩니다.',
    auditBadge: '보안 감사 무료 포함',
    categories: [
      {
        category: '제품 개발',
        tagline: '아이디어는 당신이, 설계도는 우리가. 60개+ SaaS 아키텍처 이미 분석 완료.',
        icon: '{}', color: 'from-indigo-500 to-violet-600',
        items: [
          { name: '풀스택 MVP', hook: '계획은 그만. 출시를 시작하세요.', desc: '48시간 내 동작하는 프로토타입. 1-2주 내 프로덕션 레디. React, Next.js, Node.js, PostgreSQL — 검증된 스택.', price: '$3,000~' },
          { name: 'SaaS 클론 / 대체재', hook: '"이거 만들어주세요, 더 좋게." 원본이 어떻게 만들어졌는지 이미 알고 있습니다.', desc: 'Notion, Slack, Linear, Lark 등 60개+ 제품을 프로토콜 레벨에서 역분석 완료. 추측이 아니라 설계도 기반으로 만듭니다.', price: '$5,000~' },
          { name: '급속 제품 설계', hook: '48시간. 완전한 설계도. 바로 개발 시작 가능.', desc: 'API 스키마, 데이터베이스 모델, WebSocket 프로토콜, UI 스펙 — 개발팀이 즉시 시작할 수 있는 모든 것.', price: '$2,000~' },
        ],
      },
      {
        category: 'AI & 자동화',
        tagline: '40시간의 수작업을 명령어 하나로 대체합니다.',
        icon: 'AI', color: 'from-cyan-500 to-blue-600',
        items: [
          { name: 'AI 에이전트 개발', hook: '새벽 3시에도 고객이 답변을 받습니다. 당신은 자고 있어도.', desc: '맞춤형 AI 챗봇, 세일즈 에이전트, 서포트 봇. 웹 위젯, 텔레그램, 이메일 — 모든 채널 연동.', price: '$1,500~' },
          { name: '브라우저 자동화', hook: '186개 도구. 수동 클릭 제로.', desc: '데이터 수집, 경쟁사 모니터링, 대규모 워크플로우 자동화. 186개 도구의 자체 브라우저 에이전트 프레임워크 기반.', price: '$1,000~' },
          { name: '데스크톱 자동화', hook: '사람이 클릭할 수 있으면, 자동화할 수 있습니다.', desc: '200개+ 자동화 도구. Windows 앱, Android, iOS, Electron — 모든 데스크톱 애플리케이션 완전 자동화.', price: '$1,500~' },
          { name: '워크플로우 통합', hook: '당신의 도구들은 서로 대화해야 합니다.', desc: 'Make.com, n8n, 커스텀 파이프라인. 튜토리얼이 아닌 소스코드 레벨의 마스터리를 보유하고 있습니다.', price: '$800~' },
        ],
      },
      {
        category: 'E2E 테스트 & QA',
        tagline: '모든 버튼. 모든 플로우. 모든 엣지 케이스. 예외 없음.',
        icon: 'QA', color: 'from-emerald-500 to-teal-600',
        items: [
          { name: '11계층 E2E 전수 테스트', hook: '"제 PC에서는 되는데요"는 테스트 결과가 아닙니다.', desc: 'UI + 검증 + 라이프사이클 + 유령 데이터 + 인프라 + 권한 + 보안 + UX 품질 + 모바일 + 네트워크 + 내비게이션. 11계층, 빈틈 제로.', price: '$1,500~' },
          { name: '자동화 회귀 테스트 스위트', hook: '유저가 분노 트윗을 쓰기 전에 버그를 잡으세요.', desc: 'CI/CD에 연동된 지속적 테스트 스위트. 모든 배포가 자동으로 검증됩니다. 릴리스 밤에 편히 주무세요.', price: '$1,000~' },
        ],
      },
      {
        category: '경쟁사 분석',
        tagline: '경쟁사가 뭘 만들었는지 추측하지 마세요. 보여드리겠습니다.',
        icon: 'CI', color: 'from-amber-500 to-orange-600',
        items: [
          { name: '경쟁사 기술 벤치마크', hook: '경쟁사가 뭘 만들었는지 정확히 파악합니다 — 데이터베이스 스키마까지.', desc: 'API 엔드포인트, 데이터 모델, 실시간 프로토콜, 시스템 프롬프트, 피처 플래그까지 완전 추출. 데스크톱 앱도 바이너리 분석 포함.', price: '$3,000~' },
          { name: 'Build vs Buy 분석', hook: '인수할 것인가, 복제할 것인가? 각각의 정확한 비용을 알려드립니다.', desc: '대상의 전체 설계도를 추출한 뒤, 처음부터 만드는 데 필요한 정확한 엔지니어링 시간과 인프라 비용을 산출합니다.', price: '$2,000~' },
        ],
      },
      {
        category: '투자 & 기술 실사',
        tagline: '피치 덱이 아닌 진실을 원하는 VC를 위해.',
        icon: 'DD', color: 'from-rose-500 to-pink-600',
        items: [
          { name: '기술 실사 (Due Diligence)', hook: 'CTO가 코드가 탄탄하다고 합니다. 48시간 내에 검증해드립니다.', desc: '코드 품질, 아키텍처 결정, 보안 수준, 확장성 한계, 기술 부채 — 수표를 쓰기 전에 전체 그림을 보여드립니다.', price: '$5,000~' },
          { name: '기술 해자 검증', hook: '그들의 "독자 기술"이 실제로 방어 가능한가요?', desc: '48시간 내에 핵심 기술 복제를 시도합니다. 성공하면 그들의 해자는 마케팅 슬라이드일 뿐, 공학적 성과가 아닙니다.', price: '$4,000~' },
        ],
      },
      {
        category: '세일즈 & 아웃바운드 엔진',
        tagline: '스팸 폴더가 아닌 받은편지함에 도착하는 콜드 이메일.',
        icon: 'TX', color: 'from-purple-500 to-fuchsia-600',
        items: [
          { name: '콜드 이메일 인프라', hook: '답장이 안 오는 이유는 이메일이 도착조차 안 하기 때문입니다.', desc: '도메인 웜업, 전달률 최적화, 99개 스팸 필터 우회, 시퀀스 설계 — Apollo, Instantly, Lemlist, Clay, Reply.io, respond.io 6개 플랫폼 교차 분석 기반.', price: '$1,000~' },
          { name: 'AI 세일즈 에이전트', hook: '이의처리 완료. 미팅 예약 완료. 당신은 클로징에 집중하세요.', desc: 'AI 기반 이의처리, 자동 팔로업, 미팅 스케줄링. 당신의 톤을 학습합니다. 대화할수록 더 똑똑해집니다.', price: '$2,000~' },
        ],
      },
    ],
  },
  audit: {
    label: '보안 감사',
    h2a: '체크리스트가 아닙니다.',
    h2b: '실제 침투 테스트입니다.',
    desc: '대부분의 "보안 감사"는 자동화 스캔 + PDF 출력입니다. 우리는 실제 공격자가 사용하는 기법으로 직접 공격을 시도합니다. 그래서 다른 곳이 놓치는 것을 찾아냅니다.',
    items: [
      { item: 'OWASP Top 10 전체 취약점 스캔', detail: '체크박스가 아닌 실제 공격 시도' },
      { item: 'API 엔드포인트 보안 테스트', detail: '모든 라우트, 모든 메서드, 모든 인증 우회' },
      { item: '데이터베이스 접근 제어 감사', detail: 'RLS 정책, 노출된 테이블, 권한 상승' },
      { item: '프론트엔드 번들 시크릿 탐지', detail: 'JS 안에 숨겨진 API 키, 토큰, 시스템 프롬프트' },
      { item: '인증 & 세션 보안', detail: 'JWT, 쿠키, 세션 고정, 토큰 유출' },
      { item: '인프라 & 헤더 분석', detail: 'CSP, CORS, HSTS, X-Frame — 풀스택' },
      { item: '우선순위별 수정 리포트', detail: '"고치세요"만이 아닌 정확한 코드 예제 포함' },
      { item: '수정 후 재검증 스캔', detail: '모든 수정이 실제로 동작하는지 확인' },
    ],
    priceLabel: '보안 업체의 일반 가격',
    priceStrike: '600만 ~ 2,000만원',
    priceZero: '0원',
    priceBundleNote: '프로젝트와 함께 번들 시',
    standaloneTitle: '보안만 필요하신가요? 단독 서비스도 가능합니다:',
    standaloneSubtitle: '같은 품질. 같은 속도. 프로젝트 없어도 됩니다.',
    tiers: [
      { name: '퀵 스캔', desc: '자동화 표면 레벨 점검', price: '무료' },
      { name: '스탠다드 감사', desc: '종합 평가, 48시간 납품', price: '250만원' },
      { name: '풀 침투 테스트', desc: '심층 공격 시도 + 수정 가이드', price: '600만원~' },
    ],
  },
  proof: {
    label: '실제 결과',
    title: '이 기업들은 자신들이 안전하다고 생각했습니다.',
    desc: 'SOC 2 인증 기업. VC 투자 유치 기업. 수백억 밸류에이션. 모두에서 치명적 취약점을 발견했습니다.',
    findings: [
      { company: 'EdTech SaaS (Supabase)', issue: '27개 DB 테이블에 Row Level Security 제로. 382개 사용자 프로필 + 미성년자 130명 개인정보 — 누구나 읽기/쓰기 가능.', consequence: 'GDPR 제83조 위반. 최대 2,000만 유로 벌금.', severity: 'CRITICAL' },
      { company: '핀테크 플랫폼', issue: '무료 요금제 사용자가 /api/v1/admin/users로 764명 전체 DB 덤프 가능. 더 심각: 다른 사용자의 결제 수단으로 과금 가능.', consequence: '전체 계정 탈취 + 금융 사기.', severity: 'CRITICAL' },
      { company: 'Vercel 자체 제품', issue: 'Stripe 라이브 시크릿 키(pk_live_...)가 프로덕션 JS 번들에 포함. DevTools만 열면 누구나 확인 가능.', consequence: '직접적 금융 노출.', severity: 'HIGH' },
      { company: '3D 플랫폼 (400만+ 사용자)', issue: '인증 없이 GraphQL introspection 노출 — 115개 타입, 70개 mutation. deleteUser, deleteWorkspace, 크레딧 조작 포함.', consequence: '대규모 데이터 삭제 + 크레딧 탈취.', severity: 'HIGH' },
    ],
    bottomBold: '빅4 컨설팅 펌은 이 수준의 분석에 6,000만 ~ 2억원을 청구합니다.',
    bottomSub: '같은 깊이의 인사이트. 48시간. 비용은 일부에 불과합니다.',
  },
  credibility: {
    title: '100만 줄 이상의 프로덕션 코드.',
    subtitle: '튜토리얼도 사이드 프로젝트도 아닙니다. 실제 운영 중인 시스템입니다.',
    items: [
      { name: 'HK Suite', lines: '327K', desc: 'Lark/Slack 대체 — 8개 모듈, 실시간 협업' },
      { name: '3D Toolkit', lines: '588K', desc: 'Three.js 에셋 파이프라인 + 인터랙티브 뷰어' },
      { name: 'Desktop Agent', lines: '42K', desc: '200개+ OS 레벨 자동화 도구' },
      { name: 'Browser Agent', lines: '32K', desc: '186개 브라우저 자동화 도구 + 안티 디텍션' },
      { name: 'SecureFirst', lines: '23K', desc: '보안 감사 SaaS — 우리 스캔의 기반 플랫폼' },
      { name: '분석한 제품', lines: '60+', desc: 'API + 프로토콜 레벨에서 역분석' },
      { name: '납품 속도', lines: '48시간', desc: '브리핑에서 프로토타입 또는 전체 리포트까지' },
      { name: '구사 언어', lines: '4개', desc: '영어, 한국어, 중국어, 일본어 — 모두 유창' },
    ],
  },
  cta: {
    title: '시작하는 방법, 두 가지.',
    desc: '제품이 필요하시면 — 기획, 개발, 보안 감사까지 한 번에 해드립니다.\n보안만 필요하시면 — 48시간 내 전체 감사 리포트를 납품합니다. 최소 프로젝트 조건 없습니다.',
    ctaProject: '프로젝트 시작하기',
    ctaScan: '무료 보안 스캔 받기',
    bottomNote: '세일즈 콜 없습니다. 미팅도 없습니다. 필요한 것을 알려주시면 24시간 내 범위와 일정을 회신드립니다.',
  },
  footer: {
    ceo: '대표: 김희경',
    bizNo: '사업자번호: 740-05-03702',
    address: '대전 대덕구 비래서로 53, 306호',
    phone: '010-5769-4366',
    rights: '\u00A9 2026 HK Solution. All rights reserved.',
  },
};

export function getOfferDict(locale: string): OfferDict {
  return locale === 'ko' ? offerKo : offerEn;
}
