import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChatLoader } from "@/components/chat/chat-loader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HK Solution — Security · Intelligence · Engineering",
  description: "Security audits, tech due diligence, competitive intelligence, and product engineering. Any SaaS product, full blueprint in 48 hours.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "HK Solution",
    description: "Security · Intelligence · Engineering",
    type: "website",
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
