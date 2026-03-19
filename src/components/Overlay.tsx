'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% to 15% fades out
  const opacity1 = useTransform(progress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.15], [0, -50]);

  // Section 2: fades in at 20%, fully visible at 30%, fades out at 40%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const scale2 = useTransform(progress, [0.2, 0.3, 0.4], [0.8, 1, 1.2]);

  // Section 3: fades in at 50%, fully visible at 60%, fades out at 75%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.75], [0, 1, 0]);
  const x3 = useTransform(progress, [0.5, 0.6, 0.75], [50, 0, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center px-8 md:px-24">
      {/* Section 1 - Center */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center w-full"
      >
        <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-lg mb-4">
          Nandann Shetye.
        </div>
        <p className="text-xl md:text-3xl text-gray-300 font-bold tracking-wide max-w-2xl">
          AI Strategist <span className="text-emerald-400">•</span> Digital Systems Architect <span className="text-emerald-400">•</span> Business Coach
        </p>
      </motion.div>

      {/* Section 2 - Center emphasis */}
      <motion.div 
        style={{ opacity: opacity2, scale: scale2 }}
        className="absolute inset-0 flex items-center justify-center text-center w-full"
      >
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-2xl uppercase">
          Create.<br/>
          Deliver.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Dominate.
          </span>
        </h2>
      </motion.div>

      {/* Section 3 - Right */}
      <motion.div 
        style={{ opacity: opacity3, x: x3 }}
        className="absolute inset-x-8 md:inset-x-24 flex items-center justify-end text-right"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white drop-shadow-md leading-tight">
            I turn ideas into <br/>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              automated digital systems.
            </span>
          </h2>
          <p className="mt-8 text-xl text-gray-400 font-light tracking-wide">
            Simplify complexity. Build powerful systems. Scale efficiently.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
