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
  { name: "AI Integration", icon: "🤖", detail: "Smart workflows" },
  { name: "Web Design", icon: "🌐", detail: "Modern websites" },
  { name: "Automation", icon: "⚙️", detail: "Less manual work" },
  { name: "Graphic Design", icon: "🎨", detail: "Visual identity" },
  { name: "Digital Infrastructure", icon: "🏗️", detail: "Systems that scale" },
  { name: "Funnel Design", icon: "📊", detail: "Lead conversion" },
  { name: "Business Coaching", icon: "🧠", detail: "Clarity and growth" }
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Professional Identity */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white border-l-4 border-emerald-500 pl-6 leading-tight">
            AI systems, automation <br className="hidden md:block" />
            <span className="font-alex-brush text-gray-400 font-normal tracking-normal text-5xl md:text-6xl lg:text-7xl px-1">& funnel strategies</span> <br className="hidden md:block" />
            <span className="text-xl md:text-2xl text-gray-400 uppercase tracking-widest mt-2 block">what I do best</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {identities.map((item, idx) => (
              <div key={idx} className="glass-card flex flex-col justify-between p-8 bg-black/40 border-white/10 group hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-black/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <div>
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 text-white/50 transition-colors duration-300">
                     <span className="font-mono text-sm tracking-tighter">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">{item.role}</h3>
                  <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                </div>
                <a href="#contact" className="mt-8 pt-4 border-t border-white/5 flex items-center text-sm font-medium text-emerald-500 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Hire for This <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Core Expertise */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white border-l-4 border-cyan-500 pl-6 text-right md:text-left">
            Core <span className="font-alex-brush text-gray-500 font-normal lowercase tracking-normal text-6xl md:text-7xl lg:text-8xl px-1">expertise.</span>
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseList.map((skill, idx) => (
              <div
                key={idx}
                className="group relative min-h-36 overflow-hidden rounded-2xl border border-cyan-300/25 bg-black/45 p-5 shadow-[0_0_28px_rgba(45,212,191,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:bg-black/65 hover:shadow-[0_0_40px_rgba(16,185,129,0.22)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"></div>
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                  <div className="flex items-center justify-between">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/25 to-emerald-400/25 text-2xl ring-1 ring-white/15">
                      <span className="absolute inset-0 rounded-2xl bg-cyan-300/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></span>
                      <span className="relative">{skill.icon}</span>
                    </span>
                    <span className="font-mono text-xs font-bold tracking-widest text-emerald-300/80">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black uppercase tracking-wide text-white">
                      {skill.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium tracking-wide text-cyan-100/80">
                      {skill.detail}
                    </p>
                  </div>

                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
