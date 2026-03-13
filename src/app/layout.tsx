import type { Metadata } from "next";
import { Inter, Alex_Brush } from "next/font/google";
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
  title: "Creative Developer | Portfolio",
  description: "High-end scrollytelling personal portfolio website",
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
      </body>
    </html>
  );
}
