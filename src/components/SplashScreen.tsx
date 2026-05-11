"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpecialText } from "@/components/ui/special-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { FloatingLabelInput } from "@/components/ui/floating-label";
import { ArrowRight } from "lucide-react";
import { useUser } from "@/context/UserContext";
import RainingLetters from "@/components/ui/modern-animated-hero-section";

const TIMINGS = {
  introToQuestion: 1400,
};

export default function SplashScreen() {
  const [phase, setPhase] = useState<
    "intro" | "question" | "greeting" | "done"
  >("intro");
  const [inputValue, setInputValue] = useState("");
  const { setUserName } = useUser();

  useEffect(() => {
    const savedName = localStorage.getItem("portfolio_user_name");
    if (!savedName) return;

    const skipIntro = window.setTimeout(() => setPhase("done"), 0);
    return () => window.clearTimeout(skipIntro);
  }, []);

  const show = phase !== "done";

  /* ── scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    if (show) window.scrollTo(0, 0);
  }, [show]);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setUserName(inputValue.trim());
      setPhase("greeting");
    }
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black px-6"
          >
            <AnimatePresence mode="wait">

              {/* ── INTRO ── */}
              {phase === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.6 } }}
                  className="text-2xl md:text-4xl lg:text-5xl text-white tracking-[0.2em] uppercase text-center"
                >
                  <SpecialText
                    speed={45}
                    delay={0.4}
                    onComplete={() =>
                      setTimeout(() => setPhase("question"), TIMINGS.introToQuestion)
                    }
                  >
                    Introducing Myself
                  </SpecialText>
                </motion.div>
              )}

              {/* ── QUESTION ── */}
              {phase === "question" && (
                <motion.div
                  key="question"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.6 } }}
                  className="flex flex-col items-center justify-center w-full max-w-md space-y-12"
                >
                  <BlurFade delay={0.3} inView>
                    <h2 
                      className="text-3xl md:text-5xl font-bold tracking-wider text-center text-white"
                      style={{ fontFamily: 'monospace' }}
                    >
                      What is your{" "}
                      <span className="text-[#00ff00]">good</span> name?
                    </h2>
                  </BlurFade>

                  <BlurFade delay={0.9} inView className="w-full">
                    <div className="relative flex items-center w-full font-mono">
                      <FloatingLabelInput
                        id="name-input"
                        label="Enter your name please..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
                        className="w-full bg-black border-[#00ff00]/30 text-[#00ff00] caret-[#00ff00] text-lg h-14 pr-14 focus-visible:ring-[#00ff00]/50 focus-visible:border-[#00ff00] pt-4 pb-2"
                        labelClassName="!bg-black !text-[#00ff00]/70 peer-focus:!text-[#00ff00] font-mono"
                      />
                      <button
                        onClick={handleSubmit}
                        disabled={!inputValue.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-[#00ff00]/20 text-[#00ff00] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed group z-20"
                      >
                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </BlurFade>
                </motion.div>
              )}

              {/* ── GREETING ── */}
              {phase === "greeting" && (
                <motion.div
                  key="greeting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.8 } }}
                  className="fixed inset-0 z-[1001] w-full h-full flex flex-col items-center justify-center bg-black"
                >
                  <RainingLetters 
                    userName={inputValue} 
                    onComplete={() => setPhase("done")}
                  />
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
