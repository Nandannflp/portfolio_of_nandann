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
    <section id="pricing" className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white border-l-4 border-emerald-500 pl-6">
          Investment & <span className="font-alex-brush text-emerald-400 font-normal tracking-normal text-6xl md:text-7xl lg:text-8xl px-1">packages.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative glass-card p-10 flex flex-col h-full 
                ${plan.popular 
                  ? 'bg-black/80 border-cyan-500/50 transform md:-translate-y-4 shadow-[0_0_50px_rgba(34,211,238,0.15)] z-10' 
                  : 'bg-black/40 border-white/10 hover:border-white/30'
                } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  ⭐ Most Popular
                </div>
              )}
              
              <h3 className="text-white text-2xl font-medium tracking-wide mb-2 uppercase">{plan.name}</h3>
              <div className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
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
                className={`w-full text-center py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all
                  ${plan.popular 
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
