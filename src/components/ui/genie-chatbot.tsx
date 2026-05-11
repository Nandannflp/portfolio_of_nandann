"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GenieChatbotProps {
  projectName: string | null;
  description: string;
  onDismiss: () => void;
}

const sparkles = [
  { x: 34, y: 14, duration: 2.7, delay: 0.1 },
  { x: 82, y: 63, duration: 3.1, delay: 0.5 },
  { x: 156, y: 32, duration: 2.4, delay: 1.1 },
  { x: 209, y: 78, duration: 3.5, delay: 0.8 },
  { x: 261, y: 21, duration: 2.9, delay: 1.5 },
  { x: 318, y: 58, duration: 3.7, delay: 0.2 },
  { x: 366, y: 9, duration: 2.2, delay: 1.8 },
  { x: 397, y: 89, duration: 3.3, delay: 1.0 },
];

export default function GenieChatbot({ projectName, description, onDismiss }: GenieChatbotProps) {
  const [phase, setPhase] = useState<"entering" | "visible" | "exiting" | "gone">("entering");

  const dismiss = useCallback(() => {
    setPhase("exiting");
    setTimeout(() => {
      setPhase("gone");
      onDismiss();
    }, 800);
  }, [onDismiss]);

  useEffect(() => {
    if (!projectName) return;
    const showTimer = setTimeout(() => setPhase("visible"), 600);
    const hideTimer = setTimeout(() => dismiss(), 6000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [projectName, dismiss]);

  if (!projectName) return null;

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 60 }}
          animate={
            phase === "exiting"
              ? { opacity: 0, scale: 1.5, y: -30, filter: "blur(20px)" }
              : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
          }
          exit={{ opacity: 0, scale: 2, filter: "blur(30px)" }}
          transition={
            phase === "exiting"
              ? { duration: 0.8, ease: "easeIn" }
              : { duration: 0.6, type: "spring", stiffness: 260, damping: 20 }
          }
          onClick={dismiss}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] max-w-lg w-[90vw] cursor-pointer"
        >
          {/* Genie container */}
          <div className="relative rounded-3xl border border-yellow-500/30 bg-black/90 backdrop-blur-2xl shadow-[0_0_60px_rgba(234,179,8,0.25)] p-6 overflow-hidden">
            {/* Magical sparkle particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {sparkles.map((sparkle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-yellow-400"
                  initial={{ 
                    x: sparkle.x, 
                    y: sparkle.y,
                    opacity: 0 
                  }}
                  animate={{ 
                    y: [null, -20, 10, -10],
                    opacity: [0, 1, 0.5, 0],
                    scale: [0, 1.5, 0.5, 0]
                  }}
                  transition={{ 
                    duration: sparkle.duration, 
                    repeat: Infinity,
                    delay: sparkle.delay
                  }}
                />
              ))}
            </div>

            {/* Genie icon */}
            <div className="flex items-start gap-4">
              <motion.div 
                className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-bold text-lg shadow-[0_0_20px_rgba(234,179,8,0.5)]"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                ✦
              </motion.div>
              <div className="flex-1 min-w-0">
                <motion.p 
                  className="text-yellow-400 font-bold text-sm tracking-wider uppercase mb-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {projectName}
                </motion.p>
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {description}
                </motion.p>
              </div>
            </div>

            {/* Tap to dismiss hint */}
            <motion.p 
              className="text-center text-[10px] text-gray-600 mt-3 tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5 }}
            >
              tap to dismiss
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
