'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ComingSoon() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Failed to submit');
      }

      if (data.simulated) {
        alert("Warning: Vercel Environment Variable is missing! Simulating success for testing.");
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setShowNotifyModal(false);
        setEmail('');
      }, 3000);
    } catch (error: any) {
      console.error(error);
      alert(`Error submitting email: ${error.message || 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <header className="flex flex-col md:flex-row md:justify-between md:items-start px-6 md:px-8 pt-8 w-full z-30">
        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer mb-6">
          <div className="w-6 h-[2px] bg-cp-yellow"></div>
          <div className="w-6 h-[2px] bg-cp-yellow"></div>
          <div className="w-4 h-[2px] bg-cp-yellow"></div>
        </div>

        <div className="hidden md:block w-8"></div>

        <div className="flex justify-between items-start w-full md:w-auto md:flex-1">
          {/* Center Logo */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center mt-[-10px] md:mx-auto">
            <h1 className="text-cp-yellow text-3xl md:text-5xl font-normal tracking-widest drop-shadow-[0_0_15px_rgba(255,211,0,0.6)] uppercase leading-tight" style={{ fontFamily: 'BlackOpsOne, cursive' }}>
              NANDANN<br className="md:hidden" />
              <span className="md:hidden">&nbsp;</span>SHETYE
            </h1>
            <span className="text-cp-yellow text-[10px] md:text-xs tracking-[0.5em] mt-2 uppercase font-bold drop-shadow-[0_0_8px_rgba(255,211,0,0.8)]">
              AI STRATEGIST
            </span>
          </div>

          {/* Right Status */}
          <div className="text-right text-[8px] md:text-[10px] tracking-widest text-white/50 flex flex-col items-end gap-1 font-mono uppercase mt-2 md:mt-0">
            <div className="flex items-center gap-2">
              <span className="hidden md:inline">SYSTEM UPDATE</span>
              <span className="md:hidden">UPDATE</span>
              <div className="w-2 h-2 rounded-full bg-cp-yellow shadow-[0_0_8px_rgba(255,211,0,1)] animate-pulse"></div>
            </div>
            <span>IN PROGRESS</span>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          SIDE ELEMENTS
      ─────────────────────────────────────────────────────────────*/}
      {/* Left Axis */}
      {/* Left Axis */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 h-[60vh] flex-col justify-between items-center z-20">
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
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center z-20">
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
      <main className="flex-1 flex flex-col items-center justify-center w-full z-30 mt-8 md:mt-[-5vh] px-4">
        {/* Mobile 01 */}
        <div className="md:hidden flex items-center justify-center w-full gap-4 mb-6">
           <div className="h-[1px] w-12 bg-cp-yellow/50 relative">
             <div className="absolute left-0 top-[-2px] w-1 h-[5px] bg-cp-yellow/50"></div>
           </div>
           <div className="text-cp-yellow font-bold text-sm tracking-widest">01</div>
           <div className="h-[1px] w-12 bg-cp-yellow/50 relative">
             <div className="absolute right-0 top-[-2px] w-1 h-[5px] bg-cp-yellow/50"></div>
           </div>
        </div>

        <span className="text-white tracking-[0.2em] md:text-base font-bold uppercase mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] text-center text-[10px]">
          SOMETHING POWERFUL IS
        </span>
        
        <div className="relative flex items-center justify-center mb-8 w-full max-w-[90%] md:max-w-none mx-auto">
          {/* Left Bracket */}
          <div className="absolute left-0 md:-translate-x-full h-[120%] w-4 md:w-8 border-l-2 md:border-l-4 border-y-2 md:border-y-4 border-r-0 border-cp-yellow shadow-[-5px_0_15px_rgba(255,211,0,0.5)]"></div>
          
          <h2 className="font-cyberpunk text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white tracking-widest px-4 md:px-8 text-center leading-none">
            <span className="glitch-text block md:inline" data-text="COMING">COMING</span>
            <span className="glitch-text block md:inline mt-2 md:mt-0" data-text="SOON"> SOON</span>
          </h2>
          
          {/* Right Bracket */}
          <div className="absolute right-0 md:translate-x-full h-[120%] w-4 md:w-8 border-r-2 md:border-r-4 border-y-2 md:border-y-4 border-l-0 border-cp-yellow shadow-[5px_0_15px_rgba(255,211,0,0.5)]"></div>
        </div>

        <span className="text-cp-yellow tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-sm font-bold uppercase mb-12 drop-shadow-[0_0_8px_rgba(255,211,0,0.8)] text-center max-w-[80%] md:max-w-none">
          STAY CURIOUS. THE FUTURE IS CLOSER THAN YOU THINK.
        </span>

        {/* Launching Soon Button */}
        <div className="relative group cursor-default w-[80%] md:w-auto max-w-sm">
          {/* Cyberpunk framing */}
          <div className="absolute -inset-1 border border-cp-yellow/30 md:skew-x-[-15deg] group-hover:border-cp-yellow/80 transition-colors">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cp-yellow"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cp-yellow"></div>
          </div>
          <button className="relative w-full bg-black/80 px-4 md:px-12 py-4 flex items-center justify-center gap-4 border border-cp-yellow/50 group-hover:bg-cp-yellow/10 transition-colors md:skew-x-[-15deg] outline-none">
            <div className="flex items-center gap-4 md:skew-x-[15deg]">
              <span className="text-cp-yellow text-[10px]">&#9664;</span>
              <span className="text-cp-yellow font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm">LAUNCHING SOON</span>
              <span className="text-cp-yellow text-[10px]">&#9654;</span>
            </div>
          </button>
        </div>
      </main>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM HUD
      ─────────────────────────────────────────────────────────────*/}
      <div className="w-full relative z-30 px-6 md:px-20 pb-28 md:pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-2 md:gap-0 mt-8 md:mt-0">
        
        {/* Mobile /14 */}
        <div className="md:hidden text-gray-400 font-bold text-xs tracking-widest pl-2">/14</div>

        {/* HUD Container (Unified on mobile) */}
        <div className="w-full border border-cp-yellow/30 bg-black/60 p-4 relative md:w-auto md:bg-transparent md:border-none md:p-0 flex flex-col md:block gap-6">
           {/* Cyberpunk corner accents for unified mobile container */}
           <div className="md:hidden absolute top-0 left-0 w-2 h-2 bg-cp-yellow"></div>
           <div className="md:hidden absolute bottom-0 right-0 w-4 h-1 bg-cp-yellow"></div>
           
           <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-20 md:items-end w-full">
             
             {/* Left Status Box */}
             <div className="w-full md:w-72 md:border md:border-cp-yellow/30 md:bg-black/60 md:p-4 md:skew-x-[-15deg] relative">
               <div className="hidden md:block absolute top-0 left-0 w-2 h-2 bg-cp-yellow"></div>
               <div className="hidden md:block absolute bottom-0 right-0 w-4 h-1 bg-cp-yellow"></div>
               <div className="md:skew-x-[15deg]">
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
             <div className="flex flex-col items-start md:items-end gap-2 text-left md:text-right">
               <div className="text-[10px] tracking-[0.2em] uppercase">
                 <span className="text-cp-yellow">PREPARING SECURE</span> <span className="text-white">ENVIRONMENT</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="flex gap-1 h-3 md:h-4">
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
                 <span className="text-cp-yellow text-[10px] md:text-xs font-bold w-8">{loadingProgress}%</span>
               </div>
               <div className="text-gray-500 text-[10px] tracking-widest uppercase animate-pulse">
                 PLEASE STAND BY...
               </div>
             </div>
             
           </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER BAR
      ─────────────────────────────────────────────────────────────*/}
      <footer className="absolute bottom-0 w-full md:h-12 bg-black md:bg-cp-yellow text-cp-yellow md:text-black flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 md:py-0 z-40 border-t border-cp-yellow/30 md:border-none shadow-[0_-10px_30px_rgba(0,0,0,0.5)] md:shadow-[0_0_20px_rgba(255,255,0,0.6)]">
        <div className="hidden md:block flex-1"></div>
        <button onClick={() => setShowNotifyModal(true)} className="w-full md:w-auto md:flex-1 flex justify-center items-center font-bold tracking-[0.3em] uppercase text-xs md:text-sm cursor-pointer bg-cp-yellow md:bg-transparent text-black hover:bg-white md:hover:bg-black md:hover:text-cp-yellow px-6 py-3 md:py-2 transition-colors outline-none mb-4 md:mb-0 rounded-sm md:rounded-none">
          <span className="mr-2">v</span> NOTIFY ME
        </button>
        <div className="flex-1 flex justify-center md:justify-end gap-6 md:gap-4 w-full">
          <a href="https://www.linkedin.com/in/nandann-shetye/" target="_blank" rel="noopener noreferrer" className="border border-cp-yellow md:border-none rounded-md md:rounded-none p-2 md:p-0 hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://www.instagram.com/nandann_shetye/" target="_blank" rel="noopener noreferrer" className="border border-cp-yellow md:border-none rounded-md md:rounded-none p-2 md:p-0 hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://github.com/Nandannflp" target="_blank" rel="noopener noreferrer" className="border border-cp-yellow md:border-none rounded-md md:rounded-none p-2 md:p-0 hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          NOTIFY MODAL
      ─────────────────────────────────────────────────────────────*/}
      <AnimatePresence>
        {showNotifyModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="bg-black/90 border border-cp-yellow/50 p-8 max-w-md w-full relative shadow-[0_0_30px_rgba(255,255,0,0.2)]"
            >
              {/* Cyberpunk corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cp-yellow"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cp-yellow"></div>
              
              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]"></div>

              <button 
                onClick={() => setShowNotifyModal(false)}
                className="absolute top-4 right-4 text-cp-yellow/50 hover:text-cp-yellow transition-colors font-mono outline-none z-10"
              >
                [X]
              </button>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 relative z-10"
                >
                  <h3 className="text-cp-yellow font-cyberpunk text-xl tracking-widest mb-2"><span className="glitch-text" data-text="SUCCESS">SUCCESS</span></h3>
                  <p className="text-cp-yellow/70 font-mono text-sm uppercase">You will be notified upon system launch.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleNotifySubmit} className="flex flex-col gap-6 relative z-10">
                  <div>
                    <h3 className="text-cp-yellow font-cyberpunk text-xl tracking-widest mb-2"><span className="glitch-text" data-text="STAY UPDATED">STAY UPDATED</span></h3>
                    <p className="text-cp-yellow/70 font-mono text-xs uppercase tracking-wider">Enter your email to receive a launch notification.</p>
                  </div>
                  
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER EMAIL ADDRESS..." 
                    className="w-full bg-transparent border-b border-cp-yellow/30 p-2 font-mono text-cp-yellow placeholder-cp-yellow/30 focus:outline-none focus:border-cp-yellow focus:shadow-[0_4px_15px_-3px_rgba(255,255,0,0.3)] transition-all"
                  />
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-cp-yellow text-black font-cyberpunk py-3 tracking-widest hover:bg-white transition-colors disabled:opacity-50 outline-none relative overflow-hidden group"
                  >
                    <span className="relative z-10">{isSubmitting ? 'PROCESSING...' : 'SUBMIT'}</span>
                    <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
