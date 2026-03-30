'use client';

import { motion } from 'framer-motion';
import ButtonWithIconDemo from '@/components/ui/button-witn-icon';
import { TextColor } from '@/components/ui/text-color';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 z-10 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >

          {/* Animated Hero Text */}
          <div className="-mx-2 -mt-4">
            <TextColor />
          </div>
          
          <div className="w-full max-w-2xl pt-8">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-tight leading-tight">
              I turn ideas into <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 border-b border-emerald-500/30 pb-1">
                <span className="font-alex-brush text-white font-normal lowercase text-6xl md:text-8xl lg:text-9xl tracking-normal mr-2">automated</span> digital systems.
              </span>
            </p>
            <p className="mt-6 text-lg text-gray-400 font-bold tracking-wide max-w-lg">
              AI Strategist • Digital Systems Architect • Business Coach
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="pt-4"
          >
            <ButtonWithIconDemo />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
