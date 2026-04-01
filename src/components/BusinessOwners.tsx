import React from 'react';

export default function BusinessOwners() {
  return (
    <section className="relative z-20 py-24 px-6 md:px-12 border-t border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-16 border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
          Are you a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Business Owner?</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-10 leading-relaxed">
          Get an AI-powered website or digital system built tailored to your brand — professionally designed, conversion-focused, and ready to scale.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#contact" className="px-8 py-4 rounded-full text-lg font-bold text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] w-full sm:w-auto">
            Get Your AI Website Built &rarr;
          </a>
          <a href="#pricing" className="px-8 py-4 rounded-full text-lg font-medium text-white border border-white/20 hover:bg-white/5 transition-colors w-full sm:w-auto">
            See Pricing &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
