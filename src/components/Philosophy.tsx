import React from 'react';

export default function Philosophy() {
  return (
    <section className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-r from-emerald-500/15 to-cyan-500/8 rounded-[100%] blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-32">
        
        {/* Philosophy Block */}
        <div className="text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            My Approach
          </h2>
          <div className="glass-card p-10 md:p-16 inline-block text-left w-full backdrop-blur-3xl bg-black/60 border-white/10 shadow-2xl">
            <h3 className="text-2xl md:text-4xl text-white font-light mb-8 leading-tight">
              Technology should <span className="font-alex-brush text-emerald-400 font-normal lowercase tracking-normal text-6xl md:text-7xl ml-1 mr-2 px-1 relative -bottom-1">empower</span> creators, not overwhelm them.
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 font-light">
              The future belongs to individuals who understand how to combine AI, creativity, and business intelligence.
            </p>
            <div className="space-y-4">
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold">Building systems to help entrepreneurs:</p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <li className="flex items-center text-emerald-400 text-lg font-medium tracking-wide"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span> Move Faster</li>
                <li className="flex items-center text-cyan-400 text-lg font-medium tracking-wide"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></span> Reduce Complexity</li>
                <li className="flex items-center text-white text-lg font-medium tracking-wide"><span className="w-1.5 h-1.5 rounded-full bg-white mr-3"></span> Scale with Clarity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Systems Thinking Block */}
        <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 border-l-4 border-emerald-500 pl-6">
              The Systems Thinking <span className="font-alex-brush text-emerald-400 font-normal lowercase tracking-normal text-7xl md:text-8xl px-1">advantage.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <p className="text-xl text-gray-300 leading-relaxed font-light backdrop-blur-md bg-black/30 p-8 rounded-2xl border border-white/5">
                   Coming from a Physics background, I naturally approach problems through systems thinking. Every business, platform, or funnel I build is designed like a highly calibrated machine.
                   <br/><br/>
                   <span className="text-gray-400">This approach ensures that what I create is not just visually appealing — it is functional, efficient, and infinitely scalable.</span>
                </p>
                <div className="glass-card p-8 bg-black/50 border-white/10 text-center shadow-xl">
                    <div className="font-mono text-xs md:text-sm tracking-widest text-emerald-400 flex flex-col space-y-4">
                        <div className="glass-card py-4 bg-black/60 border-white/5">INPUT</div>
                        <div className="mx-auto w-[2px] h-6 bg-gradient-to-b from-emerald-500 to-cyan-500"></div>
                        <div className="glass-card py-4 bg-black/60 text-cyan-400 border-white/5">PROCESS</div>
                        <div className="mx-auto w-[2px] h-6 bg-gradient-to-b from-cyan-500 to-emerald-500"></div>
                        <div className="glass-card py-4 bg-black/60 text-white border-white/5">OUTPUT</div>
                        <div className="mx-auto w-[2px] h-6 bg-gradient-to-b from-white to-emerald-500 border-dashed border-l-2 bg-transparent w-0"></div>
                        <div className="glass-card py-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/30">OPTIMIZATION</div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
