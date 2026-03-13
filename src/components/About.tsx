import React from 'react';

export default function About() {
  return (
    <section className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden backdrop-blur-sm bg-black/20">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-24">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl flex flex-col items-start font-bold tracking-tight text-white mb-4">
              <span className="font-alex-brush text-emerald-400 font-normal lowercase tracking-normal text-7xl md:text-9xl -ml-2 mb-2">engineering</span>
              Results.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              I help entrepreneurs and creators turn ideas into automated digital systems using AI, design, and smart business frameworks.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From high-converting websites and landing pages to AI-powered tools and automation workflows, my work focuses on building digital assets that don&apos;t just look good — <span className="text-white font-medium">they generate results.</span>
            </p>
          </div>
          
          <div className="glass-card p-10 relative group border-white/10 bg-black/40 backdrop-blur-xl">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl"></div>
             <p className="text-2xl md:text-3xl font-light leading-snug text-white/90">
               &quot;With a background in Physics and analytical systems thinking, I approach business and technology with a structured mindset.&quot;
             </p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-5 relative group">
              <div className="glass-card h-full p-12 flex flex-col justify-center border-emerald-500/20 bg-black/40 backdrop-blur-xl group-hover:border-emerald-500/40 transition-colors duration-500">
                  <h3 className="text-3xl font-semibold mb-2 text-white">Goan Native</h3>
                  <p className="text-emerald-400 tracking-widest uppercase text-sm font-semibold mb-8">Age 25</p>
                  <p className="text-gray-400">Multidisciplinary creator working at the intersection of Artificial Intelligence, digital design, and business strategy.</p>
              </div>
           </div>

           <div className="lg:col-span-7 space-y-6">
              <div className="glass-card p-8 bg-black/30 backdrop-blur-md hover:bg-white/[0.05] transition-colors duration-300 border-white/5">
                <h4 className="text-xl font-medium text-white mb-3">Scientific Foundation</h4>
                <p className="text-gray-400 leading-relaxed">
                  My academic background includes a Master’s Degree in Physics, which trained me to think in terms of systems, structures, and problem solving — a mindset that now powers the way I design digital businesses and AI-driven workflows.
                </p>
              </div>

              <div className="glass-card p-8 bg-black/30 backdrop-blur-md hover:bg-white/[0.05] transition-colors duration-300 border-white/5">
                <h4 className="text-xl font-medium text-white mb-3">Creative Execution</h4>
                <p className="text-gray-400 leading-relaxed">
                  Driven by curiosity, I combine scientific thinking with creative execution to build modern digital solutions. Today, I focus on helping individuals and brands build smarter digital ecosystems using modern tools.
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
