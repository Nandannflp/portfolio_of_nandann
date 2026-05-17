import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-24">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl flex flex-col items-start font-bold tracking-tight text-white mb-4">
              <span className="font-alex-brush text-emerald-400 font-normal tracking-normal text-5xl md:text-7xl lg:text-8xl -ml-2 mb-2">Helping creators build</span>
              AI-powered businesses.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              I help creators and entrepreneurs build scalable digital businesses using AI systems, automation, and smart growth strategies &mdash; so they can focus on what they do best.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My focus is on designing simple but powerful systems that turn ideas into income &mdash; without the burnout. From AI-powered tools to high-converting funnels, I build the engine so you can drive.
            </p>
            <div className="pt-4">
              <span className="text-xl text-white mr-4">Ready to build yours?</span>
              <a href="#contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full animate-border-flicker bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_34px_rgba(45,212,191,0.55)]">
                <span className="absolute inset-0 animate-pulse rounded-full bg-white/20"></span>
                <span className="absolute -left-10 top-0 h-full w-8 -skew-x-12 bg-white/45 blur-sm transition-transform duration-700 group-hover:translate-x-[240px]"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Call
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </a>
            </div>
          </div>
          
          <div className="glass-card p-10 relative group border-white/10 bg-black/40 backdrop-blur-xl">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl"></div>
             <p className="text-2xl md:text-3xl font-light leading-snug text-white/90">
               &quot;With a background in Physics and analytical systems thinking, I approach business and technology with a structured mindset.&quot;
             </p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 bg-black/30 hover:bg-white/[0.05] transition-colors duration-300 border-white/5 h-full flex flex-col justify-center">
            <h4 className="text-xl font-medium text-white mb-3">Scientific Foundation</h4>
            <p className="text-gray-400 leading-relaxed">
              My academic background includes a Master&apos;s Degree in Physics, which trained me to think in terms of systems, structures, and problem solving &mdash; a mindset that now powers the way I design digital businesses and AI-driven workflows.
            </p>
          </div>

          <div className="glass-card p-8 bg-black/30 hover:bg-white/[0.05] transition-colors duration-300 border-white/5 h-full flex flex-col justify-center">
            <h4 className="text-xl font-medium text-white mb-3">Creative Execution</h4>
            <p className="text-gray-400 leading-relaxed">
              Driven by curiosity, I combine scientific thinking with creative execution to build modern digital solutions. Today, I focus on helping individuals and brands build smarter digital ecosystems using modern tools.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-8 glass-card bg-black/50 border-white/10 mt-16 shadow-[0_0_40px_rgba(16,185,129,0.05)]">
          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-white">15+</h3>
            <p className="text-sm font-medium tracking-widest text-emerald-400 uppercase">AI Systems Built</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-white">50+</h3>
            <p className="text-sm font-medium tracking-widest text-emerald-400 uppercase">Entrepreneurs Coached</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-white">3+</h3>
            <p className="text-sm font-medium tracking-widest text-emerald-400 uppercase">Countries Reached</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-white">100%</h3>
            <p className="text-sm font-medium tracking-widest text-emerald-400 uppercase">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
