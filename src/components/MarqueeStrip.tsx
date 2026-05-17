'use client';

import React from 'react';

export default function MarqueeStrip() {
  const items = [
    "✦ AI Strategy",
    "✦ Business Automation",
    "✦ Website Design",
    "✦ Funnel Building",
    "✦ Lead Generation",
    "✦ Digital Coaching",
    "✦ AI Systems",
    "✦ Visual Branding"
  ];

  return (
    <div className="relative z-20 py-6 border-y border-white/10 bg-white/[0.03] overflow-hidden isolate backdrop-blur-sm">
       <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent z-[-1] pointer-events-none"></div>
       
       <div className="flex whitespace-nowrap overflow-hidden animate-marquee">
          <div className="flex animate-[marquee_45s_linear_infinite]">
             {[...items, ...items, ...items].map((item, i) => (
                <span key={i} className="mx-8 text-xl font-medium tracking-wider text-gray-300 uppercase">
                  {item}
                </span>
             ))}
          </div>
       </div>
    </div>
  );
}
