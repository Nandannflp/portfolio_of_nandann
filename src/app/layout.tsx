import type { Metadata } from "next";
import { Alex_Brush, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  weight: "400",
  variable: "--font-alex-brush",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nandann Shetye | Personal Portfolio",
  description: "AI Strategist • Digital Systems Architect • Business Coach",
  openGraph: {
    title: "Nandann Shetye | Personal Portfolio",
    description: "I turn ideas into automated digital systems.",
    url: "https://portfolio-of-nandann.vercel.app",
    siteName: "Nandann Shetye Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nandann Shetye Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandann Shetye | Personal Portfolio",
    description: "AI Strategist • Digital Systems Architect • Business Coach",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning={true}>
      <body 
        className={`${inter.variable} ${alexBrush.variable} font-sans antialiased bg-[#121212] text-white min-h-screen selection:bg-white/30`}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
