import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChatLoader } from "@/components/chat/chat-loader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HK Solution — Tech Diligence, Security, and Product Execution",
  description: "Security audits, tech due diligence, competitor analysis, and IP forensics for high-stakes technical decisions. Evidence, not checklists.",
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://hksolution.dev'),
  openGraph: {
    title: "HK Solution — Tech Diligence, Security & Product Execution",
    description: "Security audits, tech due diligence, competitor analysis, and IP forensics. We deliver evidence when technical decisions carry real risk.",
    type: "website",
    url: "https://hksolution.dev",
    siteName: "HK Solution",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HK Solution — Tech Diligence, Security, and Product Execution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HK Solution — Tech Diligence & Security',
    description: 'Security audits, tech due diligence, and competitive intelligence for complex technical decisions.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        {children}
        <ChatLoader />
      </body>
    </html>
  );
}
