'use client';

import { motion } from 'framer-motion';
import { TextColor } from '@/components/ui/text-color';
import { useUser } from '@/context/UserContext';
import Link from 'next/link';

export default function Hero() {
  const { userName } = useUser();

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 z-10 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >

          {/* Animated Hero Text */}
          <div className="-mx-2 -mt-4">
            {userName && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 inline-block px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium tracking-wide ml-2"
              >
                Hi, this is Nandann. Let&apos;s build your first, second, or third website with me.
              </motion.div>
            )}
            <TextColor />
          </div>
          
          <div className="w-full max-w-2xl pt-8">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-tight leading-tight">
              I turn ideas into <br />
              <span className="font-semibold text-white border-b border-white/20 pb-1">
                <span className="font-alex-brush text-white font-normal lowercase text-6xl md:text-8xl lg:text-9xl tracking-normal mr-2">automated</span> digital systems.
              </span>
            </p>
            <p className="mt-8 text-xl text-gray-300 font-medium tracking-wide leading-relaxed max-w-2xl">
              I help coaches, creators & entrepreneurs in India build their first AI-powered income system — in 7 days or less.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link href="#contact" className="relative inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.8)] focus:outline-none overflow-hidden group">
               <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
               <span className="relative flex items-center gap-2">
                 Book a Free Strategy Call
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </span>
            </Link>

            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-gray-300">
                Currently accepting <strong className="text-white">2 new clients</strong> for May 2026
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
