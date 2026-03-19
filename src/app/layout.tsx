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
  metadataBase: new URL('https://nandannshetye.online'),
  title: "Nandann Shetye | Business Coach & AI Strategist",
  description: "Nandann Shetye is a Business Coach & AI Strategist helping creators and founders build AI-powered businesses using automation, systems and smart growth strategies. View portfolio and work with me.",
  keywords: "Nandann Shetye, Business Coach, AI Strategist",
  openGraph: {
    title: "Nandann Shetye | Business Coach & AI Strategist",
    description: "Nandann Shetye is a Business Coach & AI Strategist helping creators and founders build AI-powered businesses using automation, systems and smart growth strategies. View portfolio and work with me.",
    url: "https://nandannshetye.online",
    siteName: "Nandann Shetye | Business Coach & AI Strategist",
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
    title: "Nandann Shetye | Business Coach & AI Strategist",
    description: "Nandann Shetye is a Business Coach & AI Strategist helping creators and founders build AI-powered businesses using automation, systems and smart growth strategies. View portfolio and work with me.",
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
      <head>
        {/* Preload the very first animation frame so it's ready before JS executes (LCP boost) */}
        <link
          rel="preload"
          as="image"
          href="/sequence/frame_000_delay-0.066s.webp"
          fetchPriority="high"
        />
      </head>
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
