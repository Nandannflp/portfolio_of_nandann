'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SidebarName() {
  const { scrollYProgress } = useScroll();
  
  // Animation logic:
  // Enter: Starts off-screen right, slides in quickly
  // Stay: Visible for a short scroll range
  // Exit: Slides back out or fades as user scrolls deeper
  
  // Opacity: Visible from 0 to 0.1, then fades out by 0.15
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [0, 1, 1, 0]);
  
  // X Position: Slides in from 100 to 0 (initial), then slides to 50
  const x = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [100, 0, 0, 50]);
  
  // Scale for a little dynamic feel
  const scale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, x, scale }}
      className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-50 pointer-events-none origin-right"
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="h-20 md:h-32 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full" />
        <div className="rotate-0 [writing-mode:vertical-lr] text-4xl md:text-6xl lg:text-7xl font-black tracking-widest uppercase drop-shadow-2xl bg-gradient-to-b from-white to-emerald-500 text-transparent bg-clip-text pb-2">
          Nandann Shetye
        </div>
      </div>
    </motion.div>
  );
}
