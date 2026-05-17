import React from 'react';

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,999",
    features: [
      "1 AI-powered Landing Page",
      "Basic Visual Branding",
      "Core SEO Optimization",
      "7-Day Turnaround",
      "1 Revision Cycle"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "₹29,999",
    features: [
      "Full AI-powered Website (Up to 5 Pages)",
      "Custom Automation Workflow",
      "Lead Capture Funnel",
      "14-Day Turnaround",
      "30-Day Tech Support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Scale",
    price: "₹75,000+",
    features: [
      "Complete AI Business Ecosystem",
      "Advanced Multi-step Funnels",
      "Ongoing AI Strategy & Coaching",
      "Priority Development",
      "Lifetime Maintenance Access"
    ],
    cta: "Let's Talk",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white border-l-4 border-emerald-500 pl-6">
          Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative glass-card p-10 flex flex-col h-full 
                ${plan.popular 
                  ? 'bg-white/[0.08] border-cyan-500/50 transform md:-translate-y-4 shadow-[0_0_50px_rgba(34,211,238,0.15)] z-10' 
                  : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.07] hover:border-white/30'
                } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  ⭐ Most Popular
                </div>
              )}
              
              <h3 className="text-white text-2xl font-medium tracking-wide mb-2 uppercase">{plan.name}</h3>
              <div className="text-5xl font-black mb-8 text-white">
                {plan.price}
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300 font-light">
                    <span className="text-emerald-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`group relative flex w-full items-center justify-center overflow-hidden rounded-full py-4 text-center text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.03]
                  ${plan.popular 
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black shadow-[0_0_24px_rgba(34,211,238,0.45)] hover:shadow-[0_0_36px_rgba(34,211,238,0.65)]' 
                    : 'border border-white/15 bg-white/10 text-white shadow-[0_0_18px_rgba(255,255,255,0.08)] hover:bg-white/20 hover:shadow-[0_0_28px_rgba(255,255,255,0.16)]'
                  }`}
              >
                <span className={`absolute inset-0 rounded-full ${plan.popular ? 'animate-pulse bg-white/20' : 'animate-pulse bg-emerald-400/10'}`}></span>
                <span className="absolute -left-12 top-0 h-full w-10 -skew-x-12 bg-white/40 blur-sm transition-transform duration-700 group-hover:translate-x-[340px]"></span>
                <span className="relative z-10 flex items-center gap-2">
                  {plan.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
