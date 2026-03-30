import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WCAG 2.1 AA Accessibility Audit | SecureFirst',
  description: 'Enterprise-grade WCAG 2.1 AA accessibility audit starting at $299. ADA Title II compliance before the April 2026 deadline. Automated + manual testing.',
  openGraph: {
    title: 'WCAG Accessibility Audit — $299 | SecureFirst',
    description: 'Enterprise-grade results at startup-friendly prices. Full WCAG 2.1 AA audit with remediation roadmap.',
    type: 'website',
    url: 'https://securefirst.dev/services/wcag-audit',
  },
};

const TIERS = [
  {
    name: 'Quick Scan',
    price: 299,
    delivery: '3 days',
    features: [
      'Up to 10 pages',
      'Automated scanning (axe-core, WAVE, Lighthouse)',
      'WCAG 2.1 AA violation report',
      'Priority-ranked issue list',
      'Executive summary PDF',
    ],
    paypalLink: 'https://www.paypal.com/ncp/payment/NY3DVMK2MASRL',
    popular: false,
  },
  {
    name: 'Full Audit',
    price: 799,
    delivery: '5 days',
    features: [
      'Up to 50 pages',
      'Automated + manual screen reader testing',
      'Keyboard navigation audit',
      'Color contrast & ARIA review',
      'Code-level fix instructions',
      'Remediation roadmap PDF',
      'Retest after fixes',
    ],
    paypalLink: 'https://www.paypal.com/ncp/payment/PHXPKSYYNJ7JL',
    popular: true,
  },
  {
    name: 'Audit + Fix',
    price: 1999,
    delivery: '10 days',
    features: [
      'Unlimited pages',
      'Everything in Full Audit',
      'We implement the fixes (WordPress/CMS)',
      'JAWS, NVDA, VoiceOver testing',
      'Compliance assessment letter',
      'Priority support',
      '30-day monitoring',
    ],
    paypalLink: 'https://www.paypal.com/ncp/payment/AY64RYGAAG9G2',
    popular: false,
  },
];

export default function WcagAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/en" className="flex items-center">
            <img src="/logo.svg" alt="SecureFirst" className="h-8" />
          </Link>
          <div className="flex items-center gap-6">
            <a href="#pricing" className="text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium">Pricing</a>
            <a href="#process" className="text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium">Process</a>
            <a href="#faq" className="text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium">FAQ</a>
            <a href="#pricing" className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-700 text-sm font-semibold rounded-full mb-6">
            April 24, 2026 ADA Deadline — 25 Days Left
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Enterprise-Grade WCAG Audit<br />
            <span className="text-blue-600">Starting at $299</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Most accessibility firms charge $5,000+. We deliver the same depth of analysis
            at a fraction of the cost using proprietary automation + expert manual review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg">
              View Pricing
            </a>
            <a href="mailto:hello@securefirst.dev?subject=WCAG Audit Inquiry" className="px-8 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Why You Need This Now</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">$75K</div>
              <p className="text-slate-600">First-time ADA violation penalty. $150K for repeat offenses.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">8,667</div>
              <p className="text-slate-600">ADA website lawsuits filed in 2025. Record-breaking year.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">96%</div>
              <p className="text-slate-600">Of websites have accessibility issues. Is yours one of them?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            No hidden fees. No recurring charges. Pay once, get your audit.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {TIERS.map((tier) => (
              <div key={tier.name} className={`rounded-2xl p-8 ${tier.popular ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-2 scale-105' : 'bg-white border-2 border-slate-200'}`}>
                {tier.popular && (
                  <div className="text-sm font-semibold text-blue-200 mb-2">MOST POPULAR</div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-4xl font-bold ${tier.popular ? 'text-white' : 'text-slate-900'}`}>${tier.price}</span>
                </div>
                <p className={`text-sm mb-6 ${tier.popular ? 'text-blue-200' : 'text-slate-500'}`}>
                  Delivered in {tier.delivery}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-blue-200' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${tier.popular ? 'text-blue-100' : 'text-slate-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.paypalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started — ${tier.price}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            Secure payment via PayPal. Invoice available for wire transfer.
            <br />Need a custom quote? <a href="mailto:hello@securefirst.dev" className="text-blue-600 hover:underline">Contact us</a>.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: '1', title: 'You Pay & Share URL', desc: 'Select a tier, pay via PayPal, and share your website URL.' },
              { step: '2', title: 'We Scan & Test', desc: 'Automated tools (axe-core, WAVE, Lighthouse) + manual screen reader testing.' },
              { step: '3', title: 'You Get the Report', desc: 'Detailed PDF with every violation, WCAG criteria, severity, and exact fix instructions.' },
              { step: '4', title: 'We Fix It (Tier 3)', desc: 'For Audit + Fix clients, we implement changes directly in your WordPress/CMS.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">What We Test</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Screen Reader Compatibility',
              'Keyboard Navigation',
              'Color Contrast Ratios',
              'ARIA Implementation',
              'Form Accessibility',
              'Image Alt Text',
              'Focus Management',
              'Heading Hierarchy',
              'Link Purpose & Text',
              'Video Captions',
              'Error Identification',
              'Page Language',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long does the audit take?', a: '3-10 business days depending on the tier and site complexity.' },
              { q: 'Do you fix the issues or just report them?', a: 'Quick Scan = report only. Full Audit = report + code-level fix instructions. Audit + Fix = we implement the changes directly in your CMS.' },
              { q: 'What if my site uses WordPress?', a: 'Perfect. Most of our clients use WordPress. We can fix issues directly through your WordPress admin panel.' },
              { q: 'Is this enough for ADA compliance?', a: 'Our audit covers WCAG 2.1 Level AA, which is the standard required by ADA Title II. We provide a compliance assessment letter with the Audit + Fix tier.' },
              { q: 'Why are you so much cheaper than others?', a: 'We use proprietary automation that handles in hours what takes traditional auditors weeks. Same depth, dramatically lower cost.' },
              { q: 'Can you meet the April 24 deadline?', a: 'Yes. Rush delivery is available. Contact us to discuss timeline.' },
            ].map((item) => (
              <div key={item.q} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t Wait for a Lawsuit
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            The April 24, 2026 deadline is approaching. Get compliant before it&apos;s too late.
          </p>
          <a href="#pricing" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">
            Start Your Audit — From $299
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">&copy; 2026 SecureFirst. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-blue-600">Privacy Policy</Link>
            <a href="mailto:hello@securefirst.dev" className="text-sm text-slate-500 hover:text-blue-600">hello@securefirst.dev</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
