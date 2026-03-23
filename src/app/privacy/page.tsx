import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — HK Solution',
  description: 'HK Solution privacy policy. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/en" className="flex items-center">
            <img src="/logo.svg" alt="HK Solution" className="h-8" />
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold text-[var(--navy)]">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: March 23, 2026</p>

          <h2 className="text-xl font-bold text-[var(--navy)] mt-8">1. Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed">
            HK Solution (&quot;we&quot;, &quot;us&quot;) collects minimal information necessary to provide our services:
          </p>
          <ul className="text-slate-600 space-y-1">
            <li>Contact information you provide (name, email) when reaching out via our contact form or chat</li>
            <li>Anonymous session identifiers for chat functionality (stored in session storage, cleared when you close the tab)</li>
            <li>Standard web server logs (IP address, browser type, pages visited) maintained by our hosting provider Vercel</li>
          </ul>

          <h2 className="text-xl font-bold text-[var(--navy)] mt-8">2. How We Use Your Information</h2>
          <ul className="text-slate-600 space-y-1">
            <li>To respond to your inquiries and provide requested services</li>
            <li>To maintain and improve our website</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-[var(--navy)] mt-8">3. Data Sharing</h2>
          <p className="text-slate-600 leading-relaxed">
            We do not sell, trade, or share your personal information with third parties except as necessary to provide our services (e.g., hosting infrastructure by Vercel, database by Supabase) or as required by law.
          </p>

          <h2 className="text-xl font-bold text-[var(--navy)] mt-8">4. Data Security</h2>
          <p className="text-slate-600 leading-relaxed">
            We implement industry-standard security measures including HTTPS encryption, Content Security Policy headers, and strict access controls. As a security-focused company, we apply the same rigorous standards to our own infrastructure that we recommend to our clients.
          </p>

          <h2 className="text-xl font-bold text-[var(--navy)] mt-8">5. Cookies</h2>
          <p className="text-slate-600 leading-relaxed">
            This website uses only essential session storage for chat functionality. We do not use tracking cookies or third-party analytics.
          </p>

          <h2 className="text-xl font-bold text-[var(--navy)] mt-8">6. Your Rights</h2>
          <p className="text-slate-600 leading-relaxed">
            You have the right to access, correct, or delete your personal data. Contact us at contact@securefirst.dev for any privacy-related requests.
          </p>

          <h2 className="text-xl font-bold text-[var(--navy)] mt-8">7. Contact</h2>
          <p className="text-slate-600 leading-relaxed">
            HK Solution<br />
            CEO: HeeKyung Kim<br />
            53 Biraeseoro, Daedeok-gu, Daejeon 306, South Korea<br />
            Email: contact@securefirst.dev<br />
            Business No: 740-05-03702
          </p>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center text-xs text-slate-400">
          &copy; 2026 HK Solution. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
