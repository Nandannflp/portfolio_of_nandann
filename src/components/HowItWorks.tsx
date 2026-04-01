import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      desc: "We talk about your goals, current setup, and ideal outcome. A quick, free 30-minute session.",
      highlight: "Free 30 Mins"
    },
    {
      num: "02",
      title: "Custom System Design",
      desc: "I design your AI-powered workflow, website, or business framework — tailored entirely to your goals.",
      highlight: "Tailored Strategy"
    },
    {
      num: "03",
      title: "Build, Launch & Scale",
      desc: "We execute the plan, launch the system, and optimize it for long-term growth and automation.",
      highlight: "Continuous Optimization"
    }
  ];

  return (
    <section id="process" className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white border-l-4 border-emerald-500 pl-6">
          How we <span className="font-alex-brush text-gray-400 font-normal tracking-normal text-6xl md:text-7xl lg:text-8xl px-1">work together.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[10%] w-[80%] h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 z-0 border-t border-dashed border-emerald-500/30"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 glass-card p-10 bg-black/60 border-white/10 group hover:-translate-y-2 hover:border-emerald-500/40 hover:bg-black/90 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.02)] hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              <div className="flex justify-between items-start mb-8">
                <div className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                  {step.num}
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {step.highlight}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
