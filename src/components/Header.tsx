'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="pointer-events-auto">
          <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-white uppercase">
            Nandann Shetye
          </span>
        </div>
        
        <div className="pointer-events-auto">
          <a 
            href="#projects" 
            className="glass-card px-6 py-2 border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium tracking-widest uppercase"
          >
            Work
          </a>
        </div>
      </div>
    </motion.header>
  );
}
