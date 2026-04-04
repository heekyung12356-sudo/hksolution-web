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
  description: "Tech due diligence, security audits, competitor analysis, IP forensics, and product execution for complex technical decisions.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "HK Solution",
    description: "Tech diligence, security, competitor analysis, and product execution.",
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
