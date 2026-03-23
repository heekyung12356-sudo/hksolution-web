import type { Dict } from './ko';

export const en: Dict = {
  locale: 'en',
  nav: {
    services: 'Services',
    about: 'About',
    partners: 'Tech Stack',
    contact: 'Contact',
    cta: 'Get in Touch',
  },
  hero: {
    badge: 'Security · Intelligence · Engineering',
    title1: 'Every app we audited',
    title2: 'had critical vulnerabilities.',
    desc: 'SOC 2 certified companies, Series B startups, $500M+ enterprises — none were exempt.',
    descBold: 'Find out if your product is safe in 48 hours.',
    ctaPrimary: 'Get Free Scan',
    ctaSecondary: 'What We Do',
  },
  stats: [
    { value: '60+', label: 'Production Apps Analyzed' },
    { value: '48h', label: 'From URL to Full Blueprint' },
    { value: '13K+', label: 'Protocol Messages Decoded (Single Project)' },
    { value: '10x', label: 'Faster Than Traditional Consulting' },
  ],
  services: {
    label: 'SERVICES',
    title: 'Any SaaS product.\nFull blueprint in 48 hours.',
    desc: 'From security audits to tech due diligence, competitive analysis, and product design — one core capability makes it all possible.',
    categories: [
      {
        category: 'Security',
        tagline: 'Security is not a cost. It\'s insurance.',
        items: [
          {
            icon: '01', title: 'Security Audit',
            hook: 'Your app has vulnerabilities. We find them before attackers do.',
            desc: 'Full vulnerability assessment of your web app, API, database, and AI systems in 48 hours. Critical flaws were found even in SOC 2 certified companies.',
            link: 'https://securefirst.dev', product: 'SecureFirst',
          },
          {
            icon: '02', title: 'Architecture Exposure Audit',
            hook: 'Can your product be cloned in 48 hours? We find out.',
            desc: 'We test whether competitors can extract your full blueprint — internal protocols, source code, API schemas. If we can, they can too.',
            isNew: true,
          },
          {
            icon: '03', title: 'Compliance & Secure Development',
            hook: 'Pass the audit. For real. From day one.',
            desc: 'SOC 2, ISO 27001 with real technical controls. We build systems that pass not just auditors, but actual attackers.',
          },
        ],
      },
      {
        category: 'Investment & M&A',
        tagline: 'Verify the tech before you invest.',
        items: [
          {
            icon: '04', title: 'Tech Due Diligence',
            hook: 'Is this startup worth investing in? We tell you in 48 hours.',
            desc: 'Code quality, architecture, security posture, and technical debt — assessed in 48 hours. Tech diligence reports for VCs and PE funds.',
            isNew: true,
          },
          {
            icon: '05', title: 'Moat Verification',
            hook: 'Is their tech moat real — or just a webpack bundle?',
            desc: 'We verify whether the technical moat is genuine. A 48-hour replication test that proves or disproves defensibility.',
            isNew: true,
          },
          {
            icon: '06', title: 'Build vs Buy Analysis',
            hook: 'Acquire it or build it? We give you the exact answer.',
            desc: 'We extract the full architecture of the acquisition target and calculate the exact cost and timeline to build it from scratch.',
            isNew: true,
          },
        ],
      },
      {
        category: 'Competitive Intelligence',
        tagline: 'Know exactly what your competitors built.',
        items: [
          {
            icon: '07', title: 'Competitor Tech Benchmark',
            hook: 'Know exactly what they built — down to the protocol level.',
            desc: 'Full analysis of competitor tech stacks, architecture, internal protocols, and API structures. Desktop apps included.',
            isNew: true,
          },
          {
            icon: '08', title: 'Replication Feasibility',
            hook: 'How long to build their feature? We tell you exactly.',
            desc: 'Blueprint-based analysis of specific competitor features with exact time and resource estimates for implementation.',
            isNew: true,
          },
        ],
      },
      {
        category: 'Enterprise & Procurement',
        tagline: 'Verify before you buy. Validate after you deploy.',
        items: [
          {
            icon: '09', title: 'SaaS Vendor Assessment',
            hook: 'Is your vendor actually secure? Not just their checklist — their code.',
            desc: 'Pre-procurement vendor security verification. Not checklists — we examine the actual architecture and data protection measures.',
            isNew: true,
          },
          {
            icon: '10', title: 'Cyber Insurance Risk Assessment',
            hook: 'Quantify the risk before you underwrite it.',
            desc: 'Technical risk quantification for cyber insurance underwriting. Accurate risk reports based on actual attack surface analysis.',
            isNew: true,
          },
        ],
      },
      {
        category: 'Legal & Litigation',
        tagline: 'Tech disputes need tech evidence.',
        items: [
          {
            icon: '11', title: 'Expert Witness & IP Forensics',
            hook: 'Was their product copied? We prove it — or disprove it.',
            desc: 'Protocol and architecture comparison for IP disputes and trade secret litigation. Court-ready technical forensics reports.',
            isNew: true,
          },
          {
            icon: '12', title: 'Patent & Trade Secret Analysis',
            hook: 'Proprietary tech or open-source wrapper? We find the truth.',
            desc: 'Patent infringement and proprietary technology verification at the actual code and protocol level.',
            isNew: true,
          },
        ],
      },
      {
        category: 'Product Engineering',
        tagline: 'From blueprint to production — fast.',
        items: [
          {
            icon: '13', title: 'Full-Stack MVP Build',
            hook: 'Prototype in 48h. Production in 1-2 weeks.',
            desc: 'React, Next.js, Node.js, PostgreSQL — we ship working products, not wireframes. 60+ SaaS architectures already reverse-engineered.',
            isNew: true,
          },
          {
            icon: '14', title: 'Rapid Product Design',
            hook: '"Build X but for Y" — complete blueprints in 48 hours.',
            desc: 'Full product design documents in 48 hours. API schemas, data models, protocols, and UI specs included.',
            isNew: true,
          },
        ],
      },
      {
        category: 'AI & Automation',
        tagline: 'Replace manual work with intelligent agents.',
        items: [
          {
            icon: '15', title: 'AI Agent Development',
            hook: 'Your customers get answers at 3am. You sleep.',
            desc: 'Custom AI chatbots, sales agents, support bots. Multi-channel: web, Telegram, email. Powered by GPT-4o with function calling.',
            isNew: true,
          },
          {
            icon: '16', title: 'Browser & Desktop Automation',
            hook: '386 tools. If a human can click it, we automate it.',
            desc: '186 browser + 200 desktop automation tools. Data collection, workflow automation, app control — Windows, Android, iOS, Electron.',
            isNew: true,
          },
        ],
      },
      {
        category: 'E2E Testing & QA',
        tagline: 'Every button. Every flow. Every edge case.',
        items: [
          {
            icon: '17', title: '11-Layer E2E Testing',
            hook: '"It works on my machine" is not a test result.',
            desc: 'UI + expected result verification + CRUD lifecycle + ghost data detection + API-to-DB validation + role-based auth + performance. Zero gaps.',
            isNew: true,
          },
          {
            icon: '18', title: 'Automated Regression Suite',
            hook: 'Catch bugs before your users do.',
            desc: 'CI/CD-integrated test suites. Every deploy verified automatically. We test what others skip — delete flows, permission edges, data residue.',
            isNew: true,
          },
        ],
      },
      {
        category: 'Sales & Outbound',
        tagline: 'Cold emails that land in inboxes, not spam folders.',
        items: [
          {
            icon: '19', title: 'Cold Email Infrastructure',
            hook: 'No replies? Your emails aren\'t even arriving.',
            desc: 'Domain warmup, deliverability optimization, sequence design. Cross-analyzed from Apollo, Instantly, Lemlist, Clay, Reply.io, respond.io.',
            isNew: true,
          },
          {
            icon: '20', title: 'AI Sales Agent',
            hook: 'Objections handled. Meetings booked. Automatically.',
            desc: 'AI-powered objection handling, follow-ups, meeting scheduling. Learns your tone. Integrates with your CRM.',
            isNew: true,
          },
        ],
      },
    ],
  },
  about: {
    label: 'ABOUT',
    title: 'Any product. 48 hours.\nFully understood.',
    p1: 'Founder HeeKyung Kim has analyzed the full architecture and verified security of 60+ production apps. From FAANG-level products to seed startups —',
    p1Bold: 'not a single one remained opaque.',
    p2: 'Security audits, tech due diligence, competitive analysis, product design —',
    p2Bold: '1/10 the cost, 1/10 the time',
    p2After: ' of traditional consulting.',
    p3: 'VC tech diligence, M&A evaluation, competitor benchmarks, penetration testing — whatever you need, results in 48 hours.',
    founderName: 'HeeKyung Kim',
    founderTitle: 'Founder & Lead Security Auditor',
  },
  partners: {
    label: 'Technology Stack',
    title: 'What we build with',
  },
  cta: {
    title: 'Know before your competitors do.',
    desc: 'Technical analysis delivered in 48 hours. No meetings, no sales calls.',
    sub: 'Security audit, tech diligence, competitive analysis — start with a free consultation.',
    ctaPrimary: 'Get Free Consultation',
  },
  footer: {
    ceo: 'CEO: HeeKyung Kim',
    bizNo: 'Business No: 740-05-03702',
    address: '53 Biraeseoro, Daedeok-gu, Daejeon 306, South Korea',
    phone: '+82 10-5769-4366',
    rights: '© 2026 HK Solution. All rights reserved.',
  },
};
