'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 z-10 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block glass-card px-4 py-2 border-emerald-500/30 bg-emerald-500/10 mb-6">
            <span className="text-emerald-400 text-sm md:text-base font-medium tracking-widest uppercase">
              Goan Native • Age 25
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-2xl uppercase leading-[0.85]">
            Create.<br/>
            Deliver.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Dominate.
            </span>
          </h1>
          
          <div className="w-full max-w-2xl pt-8">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-tight leading-tight">
              I turn ideas into <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 border-b border-emerald-500/30 pb-1">
                <span className="font-alex-brush text-white font-normal lowercase text-6xl md:text-8xl lg:text-9xl tracking-normal mr-2">automated</span> digital systems.
              </span>
            </p>
            <p className="mt-6 text-lg text-gray-400 font-light tracking-wide max-w-lg">
              AI Strategist • Digital Systems Architect • Business Coach
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
