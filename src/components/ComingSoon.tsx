'use client';

import React, { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 79) {
          clearInterval(interval);
          return 79;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between text-white overflow-hidden font-mono bg-black/60 z-20">
      
      {/* ─────────────────────────────────────────────────────────────
          TOP NAVIGATION AREA
      ─────────────────────────────────────────────────────────────*/}
      <header className="flex justify-between items-start px-8 pt-8 w-full z-30">
        {/* Hamburger Menu (Removed) */}
        <div className="w-8"></div>

        {/* Center Logo */}
        <div className="flex flex-col items-center text-center mt-[-10px]">
          <h1 className="text-cp-yellow text-4xl md:text-5xl font-normal tracking-widest drop-shadow-[0_0_15px_rgba(255,211,0,0.6)] uppercase" style={{ fontFamily: 'BlackOpsOne, cursive' }}>
            NANDANN SHETYE
          </h1>
          <span className="text-cp-yellow text-xs tracking-[0.5em] mt-2 uppercase font-bold drop-shadow-[0_0_8px_rgba(255,211,0,0.8)]">
            AI STRATEGIST
          </span>
        </div>

        {/* Right Status */}
        <div className="text-right text-[10px] tracking-widest text-white/50 flex flex-col items-end gap-1 font-mono uppercase">
          <div className="flex items-center gap-2">
            <span>SYSTEM UPDATE</span>
            <div className="w-2 h-2 rounded-full bg-cp-yellow shadow-[0_0_8px_rgba(255,211,0,1)] animate-pulse"></div>
          </div>
          <span>IN PROGRESS</span>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          SIDE ELEMENTS
      ─────────────────────────────────────────────────────────────*/}
      {/* Left Axis */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-[60vh] flex flex-col justify-between items-center z-20">
        <div className="text-cp-yellow font-bold text-sm">01</div>
        <div className="w-[2px] h-32 bg-cp-yellow/50"></div>
        <div className="flex gap-4 writing-vertical-rl rotate-180 text-[10px] tracking-[0.3em] uppercase text-gray-500">
          <span className="text-cp-yellow">ACCESS LEVEL</span>
          <span>RESTRICTED</span>
        </div>
        <div className="w-[2px] h-32 bg-gray-600/50"></div>
        <div className="text-gray-400 font-bold text-sm">/14</div>
      </div>

      {/* Right Axis */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
        <div className="writing-vertical-rl text-cp-yellow/70 tracking-[0.5em] text-xs font-mono drop-shadow-[0_0_5px_rgba(255,211,0,0.5)]">
          未来は人工知能を信じている
        </div>
      </div>

      {/* Large Watermark */}
      <div className="absolute right-24 top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none z-10">
        <span className="text-[30rem] font-black" style={{ fontFamily: 'BlackOpsOne, cursive' }}>01</span>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CENTER CONTENT
      ─────────────────────────────────────────────────────────────*/}
      <main className="flex-1 flex flex-col items-center justify-center w-full z-30 mt-[-5vh]">
        <span className="text-white tracking-[0.4em] text-sm md:text-base font-bold uppercase mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          SOMETHING POWERFUL IS
        </span>
        
        <div className="relative flex items-center justify-center mb-8">
          {/* Left Bracket */}
          <div className="absolute left-0 -translate-x-full h-[120%] w-8 border-l-4 border-y-4 border-r-0 border-cp-yellow shadow-[-5px_0_15px_rgba(255,211,0,0.5)]"></div>
          
          <h2 className="font-cyberpunk text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white tracking-widest px-8">
            <span className="glitch-text" data-text="COMING SOON">COMING SOON</span>
          </h2>
          
          {/* Right Bracket */}
          <div className="absolute right-0 translate-x-full h-[120%] w-8 border-r-4 border-y-4 border-l-0 border-cp-yellow shadow-[5px_0_15px_rgba(255,211,0,0.5)]"></div>
        </div>

        <span className="text-cp-yellow tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-16 drop-shadow-[0_0_8px_rgba(255,211,0,0.8)]">
          STAY CURIOUS. THE FUTURE IS CLOSER THAN YOU THINK.
        </span>

        {/* Launching Soon Button */}
        <div className="relative group cursor-default">
          {/* Cyberpunk framing */}
          <div className="absolute -inset-1 border border-cp-yellow/30 skew-x-[-15deg] group-hover:border-cp-yellow/80 transition-colors">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cp-yellow"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cp-yellow"></div>
          </div>
          <button className="relative bg-black/80 px-12 py-4 flex items-center gap-4 border border-cp-yellow/50 group-hover:bg-cp-yellow/10 transition-colors skew-x-[-15deg] outline-none">
            <div className="flex items-center gap-4 skew-x-[15deg]">
              <span className="text-cp-yellow text-[10px]">&#9664;</span>
              <span className="text-cp-yellow font-bold tracking-[0.4em] uppercase text-sm">LAUNCHING SOON</span>
              <span className="text-cp-yellow text-[10px]">&#9654;</span>
            </div>
          </button>
        </div>
      </main>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM HUD
      ─────────────────────────────────────────────────────────────*/}
      <div className="w-full relative z-30 px-20 pb-16 flex justify-between items-end">
        {/* Left Status Box */}
        <div className="border border-cp-yellow/30 bg-black/60 p-4 w-72 skew-x-[-15deg] relative">
           {/* Cyberpunk corner accents */}
           <div className="absolute top-0 left-0 w-2 h-2 bg-cp-yellow"></div>
           <div className="absolute bottom-0 right-0 w-4 h-1 bg-cp-yellow"></div>
           <div className="skew-x-[15deg]">
             <div className="text-cp-yellow text-[10px] tracking-widest font-bold mb-3 uppercase">INITIALIZING EXPERIENCE...</div>
             <div className="w-full h-3 bg-cp-yellow/20 overflow-hidden relative border border-cp-yellow/40">
               <div className="absolute inset-0 bg-cp-yellow/50 animate-scroll-stripes" 
                    style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,211,0,1) 5px, rgba(255,211,0,1) 10px)',
                      width: '80%'
                    }}
               ></div>
             </div>
           </div>
        </div>

        {/* Right Status */}
        <div className="flex flex-col items-end gap-2 text-right">
          <div className="text-[10px] tracking-[0.2em] uppercase">
            <span className="text-cp-yellow">PREPARING SECURE</span> <span className="text-white">ENVIRONMENT</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1 h-4">
              {Array.from({ length: 20 }).map((_, i) => {
                const isActive = i < (20 * loadingProgress) / 100;
                return (
                  <div 
                    key={i} 
                    className={`w-1.5 h-full transition-colors duration-300 ${isActive ? 'bg-cp-yellow shadow-[0_0_5px_rgba(255,211,0,0.8)]' : 'bg-gray-800'}`}
                    style={isActive ? { animation: `pulse ${1 + (i % 3) * 0.5}s infinite ${i * 0.1}s` } : {}}
                  ></div>
                );
              })}
            </div>
            <span className="text-cp-yellow text-xs font-bold w-8">{loadingProgress}%</span>
          </div>
          <div className="text-gray-500 text-[10px] tracking-widest uppercase animate-pulse">
            PLEASE STAND BY...
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER BAR
      ─────────────────────────────────────────────────────────────*/}
      <footer className="absolute bottom-0 w-full h-12 bg-cp-yellow text-black flex justify-between items-center px-8 z-40 shadow-[0_0_20px_rgba(255,255,0,0.6)]">
        <div className="flex-1"></div>
        <a href="mailto:hello@nandann.com?subject=Notify Me: Portfolio Launch" className="flex-1 flex justify-center items-center font-bold tracking-[0.3em] uppercase text-sm cursor-pointer hover:bg-black hover:text-cp-yellow px-6 py-2 transition-colors">
          <span className="mr-2">v</span> NOTIFY ME
        </a>
        <div className="flex-1 flex justify-end gap-4">
          <a href="https://www.instagram.com/nandann_shetye/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/nandanshetye16/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="https://x.com/N_Sparxz" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <svg className="w-4 h-4 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
