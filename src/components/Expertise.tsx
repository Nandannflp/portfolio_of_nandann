import React from 'react';

const identities = [
  {
    role: "AI Strategist",
    desc: "Designing AI-powered systems, automation workflows, and tools that simplify complex business processes.",
  },
  {
    role: "Graphic Designer",
    desc: "Creating impactful visuals, branding elements, thumbnails, and marketing assets that communicate clearly and convert effectively.",
  },
  {
    role: "Digital Systems Builder",
    desc: "Developing websites, landing pages, and funnel infrastructures that transform attention into action.",
  },
  {
    role: "Business Coach",
    desc: "Guiding entrepreneurs to leverage AI tools, automation, and modern digital frameworks to build scalable business models.",
  }
];

const expertiseList = [
  "Artificial Intelligence Integration",
  "Website & Landing Page Design",
  "Automation Systems & Workflows",
  "Graphic Design & Visual Strategy",
  "Digital Business Infrastructure",
  "Conversion Focused Funnel Design",
  "Entrepreneurial Coaching"
];

export default function Expertise() {
  return (
    <section className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5 backdrop-blur-sm bg-black/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Professional Identity */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white border-l-4 border-emerald-500 pl-6">
            Professional <span className="font-alex-brush text-gray-500 font-normal lowercase tracking-normal text-6xl md:text-7xl lg:text-8xl px-1">identity.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {identities.map((item, idx) => (
              <div key={idx} className="glass-card p-8 bg-black/40 border-white/10 group hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-black/60 transition-all duration-300">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 text-white/50 transition-colors duration-300">
                   <span className="font-mono text-sm tracking-tighter">0{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">{item.role}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Expertise */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white border-l-4 border-cyan-500 pl-6 text-right md:text-left">
            Core <span className="font-alex-brush text-gray-500 font-normal lowercase tracking-normal text-6xl md:text-7xl lg:text-8xl px-1">expertise.</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {expertiseList.map((skill, idx) => (
              <div key={idx} className="px-6 py-4 glass-card border-white/10 bg-black/40 hover:bg-black/80 hover:border-cyan-500/40 transition-colors duration-300 font-light tracking-wide text-lg text-gray-200 cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
