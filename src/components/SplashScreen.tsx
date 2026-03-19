"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpecialText } from "@/components/ui/special-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { FloatingLabelInput } from "@/components/ui/floating-label";
import { ArrowRight } from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function SplashScreen() {
  const [phase, setPhase] = useState<'intro' | 'question' | 'greeting' | 'hereme' | 'done'>('intro');
  const [inputValue, setInputValue] = useState("");
  const { setUserName, userName } = useUser();

  const show = phase !== "done";

  // Auto-progress conversational phases
  useEffect(() => {
    if (phase === 'greeting') {
      const timer = setTimeout(() => setPhase('hereme'), 2000);
      return () => clearTimeout(timer);
    }
    if (phase === 'hereme') {
      const timer = setTimeout(() => setPhase('done'), 2000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // We optionally disable body scrolling while splash screen is active
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Ensure they start at the top
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setUserName(inputValue.trim());
      setPhase("greeting");
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 1.5, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black px-6"
        >
          <AnimatePresence mode="wait">
            {phase === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className="text-2xl md:text-4xl lg:text-5xl text-white tracking-[0.2em] uppercase text-center"
              >
                <SpecialText 
                  speed={20} 
                  delay={0.2}
                  onComplete={() => {
                    // Start next phase after text completes
                    setTimeout(() => setPhase("question"), 600);
                  }}
                >
                  Introducing Myself
                </SpecialText>
              </motion.div>
            )}

            {phase === "question" && (
              <motion.div
                key="question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className="flex flex-col items-center justify-center w-full max-w-md space-y-12"
              >
                <BlurFade delay={0.2} inView>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center text-white">
                    What is your <span className="text-emerald-400">good</span> name?
                  </h2>
                </BlurFade>
                
                <BlurFade delay={0.6} inView className="w-full">
                  <div className="relative flex items-center w-full">
                    <FloatingLabelInput
                      id="name-input"
                      label="Enter your name please..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubmit();
                      }}
                      className="w-full bg-white/5 border-white/20 text-white text-lg h-14 pr-14 focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500 pt-4 pb-2"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={!inputValue.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed group z-20"
                    >
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </BlurFade>
              </motion.div>
            )}

            {phase === "greeting" && (
              <motion.div
                key="greeting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
                className="text-center"
              >
                <BlurFade delay={0.1} inView>
                   <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                     Hi 👋🏻 <span className="text-emerald-400">{inputValue}</span>
                   </h2>
                </BlurFade>
              </motion.div>
            )}

            {phase === "hereme" && (
              <motion.div
                key="hereme"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
                className="text-center"
              >
                <BlurFade delay={0.1} inView>
                   <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                     Here is Mee
                   </h2>
                </BlurFade>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
