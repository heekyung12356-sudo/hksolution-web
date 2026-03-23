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
    { value: '17+', label: 'Production Apps Analyzed' },
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
        tagline: 'With the blueprint, implementation is fast.',
        items: [
          {
            icon: '13', title: 'Rapid Product Design',
            hook: '"Build X but for Y" — complete blueprints in 48 hours.',
            desc: 'Full product design documents in 48 hours. API schemas, data models, protocols, and UI specs included.',
            isNew: true,
          },
          {
            icon: '14', title: 'AI & Automation',
            hook: 'Replace 40 hours of manual work with one command.',
            desc: 'Browser automation, AI agents, workflow optimization. Automate repetitive tasks so your team focuses on what matters.',
          },
        ],
      },
    ],
  },
  about: {
    label: 'ABOUT',
    title: 'Any product. 48 hours.\nFully understood.',
    p1: 'Founder HeeKyung Kim has analyzed the full architecture and verified security of 17+ production apps. From FAANG-level products to seed startups —',
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
