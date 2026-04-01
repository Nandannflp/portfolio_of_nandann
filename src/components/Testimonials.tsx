import React from 'react';

const testimonials = [
  {
    name: "Alex M.",
    role: "Fitness Coach",
    company: "FitLife Systems",
    quote: "Nandann completely overhauled my digital setup. My new AI-powered website is converting 3x better than the old one.",
    rating: 5
  },
  {
    name: "Sarah J.",
    role: "Founder",
    company: "Creative Collective",
    quote: "The automation workflows he built saved me 15 hours a week. Truly an architect of digital systems.",
    rating: 5
  },
  {
    name: "Rajesh K.",
    role: "E-comm Business Owner",
    company: "Volt Merch",
    quote: "Professional, fast, and highly strategic. It's rare to find someone who gets both business logic and beautiful design.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white border-l-4 border-cyan-500 pl-6">
          What <span className="font-alex-brush text-cyan-400 font-normal tracking-normal text-6xl md:text-7xl lg:text-8xl px-1">clients say.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-10 bg-black/40 border-white/10 hover:-translate-y-2 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 font-light text-lg leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex justify-center items-center text-black font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
