'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Gamepad2, Monitor } from 'lucide-react';
import gsap from 'gsap';
import { AntigravityIcon } from './icons/AntigravityIcon';

export default function CyberpunkHero() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const logoRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (!logoRef.current || !subtitleRef.current) return;

    // A crazy, intense Cyberpunk malfunction animation
    const createCrazyTimeline = (element: any, delay: number) => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: delay });
      
      tl.to(element, { duration: 0.05, x: 15, y: -10, skewX: 45, scaleX: 1.5, filter: "drop-shadow(10px 10px 0px #FF003C)", color: "#00F0FF" })
        .to(element, { duration: 0.05, x: -15, y: 10, skewX: -45, scaleX: 0.5, scaleY: 1.5, filter: "drop-shadow(-10px -10px 0px #00F0FF)", color: "#FF003C" })
        .to(element, { duration: 0.05, x: 0, y: 0, skewX: 0, scaleX: 1, scaleY: 1, filter: "drop-shadow(0px 0px 15px #FCEE0A)", color: "#FCEE0A" })
        .to(element, { duration: 0.1, rotationX: 180, opacity: 0.2 })
        .to(element, { duration: 0.1, rotationX: 0, opacity: 1, color: "#fff" })
        .to(element, { duration: 0.05, color: "#FCEE0A" })
        // Add a rapid micro-stutter
        .to(element, { duration: 0.02, x: 5, y: 2, delay: 0.2 })
        .to(element, { duration: 0.02, x: -5, y: -2, color: "#00F0FF" })
        .to(element, { duration: 0.02, x: 0, y: 0, color: "#FCEE0A" });

      return tl;
    };

    const tl1 = createCrazyTimeline(logoRef.current, 2.5);
    const tl2 = createCrazyTimeline(subtitleRef.current, 3.2);

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between text-white overflow-hidden font-sans pt-6">
      
      {/* ─────────────────────────────────────────────────────────────
          TOP NAVIGATION
      ─────────────────────────────────────────────────────────────*/}
      <header className="flex justify-between items-start px-8 w-full z-20">
        {/* Hamburger Menu (3 staggered yellow lines) */}
        <div className="flex flex-col gap-2 cursor-pointer group relative z-[60]" onClick={() => setIsNavOpen(true)}>
          <div className="h-1 bg-cp-yellow w-8 group-hover:w-10 transition-all duration-300"></div>
          <div className="h-1 bg-cp-yellow w-6 translate-x-2 group-hover:translate-x-0 group-hover:w-10 transition-all duration-300"></div>
          <div className="h-1 bg-cp-yellow w-4 group-hover:w-10 transition-all duration-300"></div>
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center text-center">
          <h1 
            ref={logoRef}
            className="text-cp-yellow text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.05em] leading-none drop-shadow-[0_0_10px_rgba(252,238,10,0.5)] uppercase inline-block"
            style={{ fontFamily: 'BlackOpsOne, cursive' }}
          >
            Nandann Shetye
          </h1>
          <span 
            ref={subtitleRef}
            className="text-cp-yellow text-base md:text-lg tracking-[0.5em] mt-2 uppercase pl-1 inline-block"
            style={{ fontFamily: 'BlackOpsOne, cursive' }}
          >
            AI STRATEGIST
          </span>
        </div>

        {/* Right Date Placeholder (Kept to maintain flex-between centering) */}
        <div className="w-24"></div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          FULLSCREEN NAVIGATION OVERLAY
      ─────────────────────────────────────────────────────────────*/}
      <div className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-500 ${isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => setIsNavOpen(false)}
          className="absolute top-8 left-8 text-cp-yellow hover:text-white transition-colors z-[60]"
        >
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <nav className="flex flex-col gap-6 text-center">
          {['HOME', 'ABOUT', 'PROJECTS', 'SERVICES', 'BUSINESS', 'CONTACT'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsNavOpen(false)} 
              className="group relative text-5xl md:text-7xl font-cyberpunk font-black text-transparent bg-clip-text bg-white hover:bg-cp-yellow transition-all duration-300"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
            >
              <span className="relative z-10">{item}</span>
              {/* Glitch hover effect behind text */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 text-cp-cyan translate-x-1 -translate-y-1 transition-opacity mix-blend-screen -z-10">{item}</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 text-cp-red -translate-x-1 translate-y-1 transition-opacity mix-blend-screen -z-10">{item}</span>
            </a>
          ))}
          
          <div className="mt-8">
            <button 
              onClick={() => setIsNavOpen(false)}
              className="clip-button relative group bg-cp-cyan text-black font-black uppercase tracking-wider px-12 py-4 hover:bg-white hover:text-black transition-colors inline-block text-2xl"
            >
              <span className="relative z-10">BOOK A CALL</span>
            </button>
          </div>
        </nav>
      </div>



      {/* Right Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-10 pointer-events-none select-none z-0">
        <h2 className="text-[15rem] font-cyberpunk font-black leading-none writing-vertical-rl rotate-180 text-cp-yellow">
          HELLO
        </h2>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CENTER PIECE
      ─────────────────────────────────────────────────────────────*/}
      <main className="flex-1 flex flex-col items-center justify-center w-full z-20 mt-10">
        {/* Main Text */}
        <h2 className="font-cyberpunk text-5xl md:text-7xl font-black uppercase tracking-tight mb-12 text-center">
          <span className="glitch-text" data-text="REAL YOU IS">REAL YOU IS</span>
          {' '}
          <span 
            className="glitch-text text-transparent" 
            style={{ 
              WebkitTextStroke: '2px var(--cp-yellow)',
              filter: 'drop-shadow(0 0 8px rgba(252,238,10,0.6))'
            }}
            data-text="NOT"
          >
            NOT
          </span>
          {' '}
          <span className="glitch-text" data-text="ENOUGH">ENOUGH</span>
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          {/* Outlined Button */}
          <button className="clip-button relative group bg-transparent border-2 border-cp-yellow text-cp-yellow font-bold uppercase tracking-wider px-12 py-4 overflow-hidden transition-colors hover:bg-cp-yellow/10">
            <span className="relative z-10">KNOW MORE</span>
            {/* Cutout decoration inner */}
            <div className="absolute top-0 left-0 w-4 h-full bg-cp-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          {/* Solid Yellow Button */}
          <a href="#contact" className="clip-button relative group bg-cp-yellow text-black font-black uppercase tracking-wider px-12 py-4 hover:bg-white hover:text-black transition-colors inline-block text-center">
            <span className="relative z-10">BOOK A CALL</span>
            {/* Small accent lines inside */}
            <div className="absolute bottom-1 right-2 w-4 h-1 bg-black/20 group-hover:bg-black/50"></div>
          </a>
        </div>
      </main>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM AREA
      ─────────────────────────────────────────────────────────────*/}
      <div className="w-full relative z-20 pb-20 px-8 flex justify-between items-end">
      </div>

      {/* ─────────────────────────────────────────────────────────────
          PLATFORM SELECTOR (Bottom Right)
      ─────────────────────────────────────────────────────────────*/}
      <div className="absolute bottom-20 right-8 z-30 flex flex-col items-center gap-2">
        <span className="font-cyberpunk text-cp-yellow text-xs tracking-[0.2em] uppercase font-normal" style={{ fontFamily: 'BlackOpsOne, cursive' }}>
          AI TOOLS I USE
        </span>
        <div className="flex flex-wrap justify-end items-center gap-4 max-w-sm">
          {/* OpenAI */}
          <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <svg className="w-5 h-5 text-white hover:text-cp-yellow transition-colors" viewBox="0 0 256 260" fill="currentColor">
              <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" />
            </svg>
          </a>
          {/* Claude */}
          <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <svg className="w-6 h-6 text-white hover:text-[#D97757] transition-colors" viewBox="0 0 256 257" fill="currentColor">
              <path d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z" />
            </svg>
          </a>
          {/* Gemini */}
          <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <svg className="w-5 h-5 text-white hover:text-[#4285F4] transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 7.52285 16.4772 12 22 12C16.4772 12 12 16.4772 12 22C12 16.4772 7.52285 12 2 12C7.52285 12 12 7.52285 12 2Z" />
            </svg>
          </a>
          {/* Codex */}
          <a href="https://openai.com/codex" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <svg className="w-5 h-5 text-white hover:text-cp-cyan transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path clipRule="evenodd" fillRule="evenodd" d="M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z" />
            </svg>
          </a>
          {/* Hostinger */}
          <a href="https://www.hostinger.com/in?REFERRALCODE=NANDAN2026" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <svg className="w-5 h-5 text-white hover:text-[#673DE6] transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.415 0v7.16l5.785 3.384V2.949L16.415 0ZM1.8 0v11.237h18.815L14.89 8.09l-7.457-.003V3.024L1.8 0Zm14.615 20.894v-5.019l-7.514-.005c.007.033-5.82-3.197-5.82-3.197l19.119.091V24l-5.785-3.106ZM1.8 13.551v7.343l5.633 2.949v-6.988L1.8 13.551Z"/>
            </svg>
          </a>
          {/* Antigravity */}
          <a href="https://www.antigravity.google" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <AntigravityIcon className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          {/* Hermes */}
          <a href="https://hermes-agent.nousresearch.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer block">
            <img src="/images/logos/hermes.png" alt="Hermes" className="w-6 h-6 object-cover rounded hover:scale-110 transition-transform" />
          </a>
          {/* z.ai */}
          <a href="https://z.ai" target="_blank" rel="noopener noreferrer" className="cursor-pointer block">
            <img src="/images/logos/zai.jpg" alt="Z.AI" className="w-6 h-6 object-cover rounded hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          STICKY FOOTER
      ─────────────────────────────────────────────────────────────*/}
      <footer className="absolute bottom-0 w-full h-12 bg-cp-yellow text-black flex justify-between items-center px-8 z-30">
        <div className="flex-1"></div> {/* spacer */}
        
        <button 
          onClick={() => window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' })}
          className="flex-1 flex justify-center items-center gap-2 font-black uppercase text-sm tracking-widest cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
          SCROLL DOWN
        </button>

        <div className="flex-1 flex justify-end gap-4">
          {/* Social blocks */}
          <a href="https://www.instagram.com/nandann_shetye/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-black flex items-center justify-center text-cp-yellow hover:scale-110 hover:bg-cp-yellow hover:text-black transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/nandanshetye16/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-black flex items-center justify-center text-cp-yellow hover:scale-110 hover:bg-cp-yellow hover:text-black transition-all">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="https://x.com/N_Sparxz" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-black flex items-center justify-center text-cp-yellow hover:scale-110 hover:bg-cp-yellow hover:text-black transition-all">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
