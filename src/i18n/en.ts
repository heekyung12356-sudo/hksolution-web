import type { Dict } from './ko';

export const en: Dict = {
  locale: 'en',
  nav: {
    services: 'Core Services',
    about: 'About',
    partners: 'Execution Stack',
    contact: 'Contact',
    cta: 'Discuss Project',
  },
  hero: {
    badge: 'Tech Diligence · Security · Execution',
    title1: 'Complex technical problems.',
    title2: 'Clear analysis and fast execution.',
    desc: 'Investment, procurement, legal disputes, security incidents — when technical judgment is on the line.',
    descBold: 'We deliver evidence, not checklists.',
    highlights: ['Security Audit', 'Tech Due Diligence', 'Competitive Intelligence', 'Product Execution'],
    ctaPrimary: 'Discuss a Project',
    ctaSecondary: 'View Core Services',
  },
  stats: [
    { value: '60+', label: 'Production Products Analyzed' },
    { value: '48h', label: 'First diagnosis and risk summary' },
    { value: '4', label: 'Core service areas' },
    { value: '10x', label: 'Faster decisions than traditional consulting' },
  ],
  proof: {
    label: 'WHY HK SOLUTION',
    title: 'We turn technical risk into evidence you can act on.',
    desc: 'HK Solution is positioned as the umbrella brand for complex technical problem solving, not a catch-all services catalog.',
    items: [
      {
        title: 'Decision-grade analysis',
        desc: 'Security, diligence, competitor analysis, and forensics are delivered in a format executives and operators can use immediately.',
      },
      {
        title: 'Fast first answers',
        desc: 'Within 48 hours, we show what matters first and how deep the next phase should go.',
      },
      {
        title: 'From diagnosis to execution',
        desc: 'We can continue from findings into remediation, redesign, validation, and MVP delivery without handing the project off.',
      },
    ],
  },
  services: {
    label: 'CORE SERVICES',
    title: 'Four services. One team. Analysis to execution.',
    desc: 'Security audit, tech due diligence, competitor analysis, and IP forensics. Technical evidence for decisions too important to get wrong.',
    categories: [
      {
        category: 'Security Audit',
        tagline: 'External exposure, real vulnerabilities, attack surface validation',
        items: [
          {
            icon: '01',
            title: 'Security Audit',
            hook: 'Not a checklist. We verify what an actual attacker can see and abuse.',
            desc: 'We review web apps, APIs, auth, exposed data, payment flows, and AI configuration from an attacker-first perspective. Security entry projects can start faster through SecureFirst.',
            link: 'https://securefirst.dev',
            product: 'SecureFirst',
          },
        ],
      },
      {
        category: 'Tech Due Diligence',
        tagline: 'Technical verification before investment, procurement, or enterprise rollout',
        items: [
          {
            icon: '02',
            title: 'Tech Due Diligence',
            hook: 'We test whether the product can hold up, not whether it only looks impressive.',
            desc: 'Code quality, architecture, security posture, technical debt, and operating risk are summarized in a report that supports investment, procurement, and rollout decisions.',
          },
        ],
      },
      {
        category: 'Competitive Intelligence',
        tagline: 'Competitor architecture and replication difficulty analysis',
        items: [
          {
            icon: '03',
            title: 'Competitor Tech Benchmark',
            hook: 'We map features, structure, and build difficulty down to the protocol level.',
            desc: 'Frontend bundles, APIs, internal flows, and product structure are analyzed so teams can make sharper build-vs-buy, catch-up, and differentiation decisions.',
          },
        ],
      },
      {
        category: 'Expert Witness & IP Forensics',
        tagline: 'Evidence for disputes, IP questions, and technical claims',
        items: [
          {
            icon: '04',
            title: 'Expert Witness & IP Forensics',
            hook: 'We turn copying claims, originality questions, and implementation overlap into technical evidence.',
            desc: 'Law firms, companies, and investors receive structured product comparisons, forensics analysis, and technical opinion reports they can use in disputes and reviews.',
          },
        ],
      },
    ],
    securefirst: {
      label: 'SECUREFIRST',
      title: 'Need a fast security check? Start with SecureFirst.',
      desc: 'Send a URL and get the top exposed vulnerabilities within 48 hours. No credit card, no sales call. Larger security and technical projects move into HK Solution.',
      points: [
        'Submit a URL and get the top exposed vulnerabilities organized within 24 hours.',
        'No credit card and no sales call needed to start.',
        'From the first diagnosis, clients can expand into paid audits, remediation support, and monitoring.',
      ],
      ctaPrimary: 'Visit SecureFirst',
      ctaSecondary: 'Talk to HK Solution',
      href: 'https://securefirst.dev',
    },
    special: {
      label: 'SPECIAL PROJECTS',
      title: 'Diagnosis done. Now let\'s build.',
      desc: 'After analysis, we can continue into remediation, redesign, and product delivery without handing the project off to another team.',
      items: [
        {
          icon: '05',
          title: 'MVP & Product Build',
          desc: 'Prototype and ship real products quickly once the technical direction is validated.',
        },
        {
          icon: '06',
          title: 'AI Agents & Automation',
          desc: 'Custom agents and workflow automation for operations, support, and sales execution.',
        },
        {
          icon: '07',
          title: 'QA & Regression',
          desc: 'Structured validation for flows, permissions, and data integrity before and after launch.',
        },
        {
          icon: '08',
          title: 'Vendor & Procurement Review',
          desc: 'Enterprise-side technical review of products before procurement or rollout.',
        },
      ],
    },
  },
  about: {
    label: 'ABOUT',
    title: 'Validate the tech,\nreduce the risk,\nand connect it to execution.',
    p1: 'HK Solution is positioned as a professional studio that combines security, diligence, analysis, and execution instead of appearing as a single-purpose security company.',
    p1Bold: 'The team that finds the problem is also capable of carrying the fix forward.',
    p2: 'SecureFirst handles the fast entry offer for security, while HK Solution focuses on',
    p2Bold: 'higher-value B2B work such as diligence, competitor analysis, forensics, and execution projects',
    p2After: '.',
    p3: 'Founder HeeKyung Kim leads projects centered on analyzing production SaaS, AI services, and enterprise products to surface risk and support technical decisions.',
    founderName: 'HeeKyung Kim',
    founderTitle: 'Founder & Technical Lead',
  },
  partners: {
    label: 'EXECUTION STACK',
    title: 'The stack we use to take analysis into delivery',
  },
  cta: {
    title: 'Ready to discuss a project?',
    desc: 'We respond to every inquiry within 24 hours.',
    sub: 'Prefer a faster path? Reach out directly via Telegram or email.',
    ctaPrimary: 'Request Project Consultation',
  },
  footer: {
    ceo: 'CEO: HeeKyung Kim',
    bizNo: 'Business No: 740-05-03702',
    address: '53 Biraeseoro, Daedeok-gu, Daejeon 306, South Korea',
    phone: '+82 10-5769-4366',
    rights: '© 2026 HK Solution. All rights reserved.',
  },
};
