"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpecialText } from "@/components/ui/special-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { FloatingLabelInput } from "@/components/ui/floating-label";
import { ArrowRight } from "lucide-react";
import { useUser } from "@/context/UserContext";

/* ─────────────────────────────────────────────────────────────
   Dust-particle canvas overlay for the Thanos-snap exit effect
───────────────────────────────────────────────────────────────*/
function DustCanvas({ active, onDone }: { active: boolean; onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const doneRef = useRef(false);

  type Particle = {
    x: number; y: number;
    vx: number; vy: number;
    size: number;
    alpha: number;
    decay: number;
    color: string;
  };

  useEffect(() => {
    if (!active) return;
    doneRef.current = false;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Generate ~1200 dust particles spread across the whole screen
    const colors = [
      "#ffffff", "#e0e0e0", "#c8c8c8",
      "#6ee7b7", "#34d399", "#a7f3d0",  // emerald tones
      "#67e8f9", "#22d3ee",              // cyan tones
    ];

    const count = 1200;
    particlesRef.current = Array.from({ length: count }, () => {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const angle = (Math.random() * Math.PI * 2);
      const speed = 0.4 + Math.random() * 2.5;
      return {
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 1.5,  // slight upward drift
        size: 0.5 + Math.random() * 2.5,
        alpha: 0.6 + Math.random() * 0.4,
        decay: 0.008 + Math.random() * 0.018,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      let alive = 0;
      for (const p of particlesRef.current) {
        if (p.alpha <= 0) continue;
        alive++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.alpha -= p.decay;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size, p.size * 0.4, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }

      if (alive > 0) {
        rafRef.current = requestAnimationFrame(animate);
      } else if (!doneRef.current) {
        doneRef.current = true;
        onDone();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, onDone]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[10000] pointer-events-none"
    />
  );
}

/* ─────────────────────────────────
   Main SplashScreen
──────────────────────────────────*/
export default function SplashScreen() {
  const [phase, setPhase] = useState<'intro' | 'question' | 'greeting' | 'hereme' | 'dusting' | 'done'>('intro');
  const [inputValue, setInputValue] = useState("");
  const [dustActive, setDustActive] = useState(false);
  const { setUserName } = useUser();

  const show = phase !== "done";

  // Auto-progress phases
  useEffect(() => {
    if (phase === 'greeting') {
      const timer = setTimeout(() => setPhase('hereme'), 2000);
      return () => clearTimeout(timer);
    }
    if (phase === 'hereme') {
      // After "This is me, Nandann" pops in, wait 1.8s then start Thanos-snap
      const timer = setTimeout(() => {
        setDustActive(true);
        setPhase('dusting');
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Scroll lock
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
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
    <>
      {/* Dust canvas rendered above everything */}
      <DustCanvas active={dustActive} onDone={() => setPhase("done")} />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === 'dusting' ? 0 : 1 }}
            transition={phase === 'dusting' ? { duration: 0.6, ease: "easeIn" } : {}}
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
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } }}
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
                  initial={{ opacity: 0, y: 60, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],  // spring-like
                    },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="text-center"
                >
                  {/* "Welcome" pops out first */}
                  <motion.p
                    initial={{ opacity: 0, y: -20, letterSpacing: "0.05em" }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      letterSpacing: "0.25em",
                      transition: { delay: 0, duration: 0.5, ease: "easeOut" },
                    }}
                    className="text-emerald-400 text-lg md:text-2xl uppercase font-semibold tracking-[0.2em] mb-4"
                  >
                    Welcome
                  </motion.p>

                  {/* Main "This is me, Nandann" pops up with a bounce */}
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.6, y: 30 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: {
                        delay: 0.35,
                        duration: 0.65,
                        ease: [0.34, 1.56, 0.64, 1],  // overshoot bounce
                      },
                    }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter text-white"
                  >
                    This is me,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      Nandann
                    </span>
                  </motion.h2>
                </motion.div>
              )}

              {/* Keep the last frame frozen while dusting */}
              {phase === "dusting" && (
                <motion.div
                  key="dusting-freeze"
                  initial={{ opacity: 1 }}
                  className="text-center"
                >
                  <p className="text-emerald-400 text-lg md:text-2xl uppercase font-semibold tracking-[0.25em] mb-4">
                    Welcome
                  </p>
                  <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                    This is me,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      Nandann
                    </span>
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
