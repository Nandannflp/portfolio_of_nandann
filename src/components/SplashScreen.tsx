"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpecialText } from "@/components/ui/special-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { FloatingLabelInput } from "@/components/ui/floating-label";
import { ArrowRight } from "lucide-react";
import { useUser } from "@/context/UserContext";

/* ─────────────────────────────────────────────────────────────
   Timing constants — tweak these to change conversation pace
───────────────────────────────────────────────────────────────*/
const TIMINGS = {
  introToQuestion: 1400,    // pause after "Introducing Myself" finishes
  greetingDuration: 3800,   // how long "Hi 👋🏻 Name" stays on screen
  welcomeDelay: 0.5,        // seconds before "Welcome" fades in (framer delay)
  heremeDelay: 1.1,         // seconds before "This is me, Nandann" bounces in
  heremedDuration: 4000,    // how long the hereme screen stays before snap
};

/* ─────────────────────────────────────────────────────────────
   Thanos Dust Canvas
───────────────────────────────────────────────────────────────*/
type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
};

function DustCanvas({ active, onDone }: { active: boolean; onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const doneRef = useRef(false);

  const runDust = useCallback(() => {
    doneRef.current = false;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const colors = [
      "#ffffff", "#d4d4d4", "#a3a3a3",
      "#6ee7b7", "#34d399", "#a7f3d0",
      "#67e8f9", "#22d3ee", "#f0fdf4",
    ];

    const particles: Particle[] = Array.from({ length: 1400 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.3 + Math.random() * 2.8;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 1.8,
        size: 0.4 + Math.random() * 2.8,
        alpha: 0.5 + Math.random() * 0.5,
        decay: 0.006 + Math.random() * 0.014,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      let alive = 0;
      for (const p of particles) {
        if (p.alpha <= 0) continue;
        alive++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.alpha -= p.decay;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size, p.size * 0.38, Math.random() * Math.PI, 0, Math.PI * 2);
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
  }, [onDone]);

  useEffect(() => {
    if (active) runDust();
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, runDust]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[10000] pointer-events-none"
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   Typing cursor blink — makes it feel like messages are typed
───────────────────────────────────────────────────────────────*/
function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      className="inline-block w-[2px] h-[1em] bg-emerald-400 ml-1 align-middle"
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   A single "chat bubble" that appears with delay
───────────────────────────────────────────────────────────────*/
function ChatLine({
  delay = 0,
  children,
  align = "left",
  dim = false,
}: {
  delay?: number;
  children: React.ReactNode;
  align?: "left" | "right";
  dim?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: dim ? 0.35 : 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      className={`flex ${align === "right" ? "justify-end" : "justify-start"} w-full`}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main SplashScreen
───────────────────────────────────────────────────────────────*/
export default function SplashScreen() {
  const [phase, setPhase] = useState<
    "intro" | "question" | "greeting" | "hereme" | "dusting" | "done"
  >("intro");
  const [inputValue, setInputValue] = useState("");
  const [dustActive, setDustActive] = useState(false);
  const { setUserName } = useUser();

  const show = phase !== "done";

  /* ── timers ── */
  useEffect(() => {
    if (phase === "greeting") {
      const t = setTimeout(() => setPhase("hereme"), TIMINGS.greetingDuration);
      return () => clearTimeout(t);
    }
    if (phase === "hereme") {
      const t = setTimeout(() => {
        setDustActive(true);
        setPhase("dusting");
      }, TIMINGS.heremedDuration);
      return () => clearTimeout(t);
    }
  }, [phase]);

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
      <DustCanvas active={dustActive} onDone={() => setPhase("done")} />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "dusting" ? 0 : 1 }}
            transition={
              phase === "dusting"
                ? { duration: 0.8, ease: "easeIn" }
                : {}
            }
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
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center text-white">
                      What is your{" "}
                      <span className="text-emerald-400">good</span> name?
                    </h2>
                  </BlurFade>

                  <BlurFade delay={0.9} inView className="w-full">
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

              {/* ── GREETING — conversational chat bubbles ── */}
              {phase === "greeting" && (
                <motion.div
                  key="greeting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.8 } }}
                  className="flex flex-col gap-5 w-full max-w-lg"
                >
                  {/* Me: "Hey there!" */}
                  <ChatLine delay={0.1}>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl rounded-tl-none px-5 py-3 max-w-xs">
                      <p className="text-white text-lg md:text-xl font-medium">
                        Hey there! 👋
                      </p>
                    </div>
                  </ChatLine>

                  {/* Me: "Nice to meet you, Name!" */}
                  <ChatLine delay={0.9}>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl rounded-tl-none px-5 py-3 max-w-xs">
                      <p className="text-white text-lg md:text-xl font-medium">
                        Nice to meet you,{" "}
                        <span className="text-emerald-400 font-bold">
                          {inputValue}
                        </span>{" "}
                        ✨
                      </p>
                    </div>
                  </ChatLine>

                  {/* Them: "And you are...?" */}
                  <ChatLine delay={2.0} align="right">
                    <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl rounded-tr-none px-5 py-3 max-w-xs">
                      <p className="text-emerald-100 text-lg md:text-xl font-medium">
                        And you are...? 🤔
                      </p>
                    </div>
                  </ChatLine>

                  {/* typing indicator */}
                  <ChatLine delay={2.9}>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl rounded-tl-none px-5 py-3">
                      <div className="flex gap-1.5 items-center h-5">
                        {[0, 0.2, 0.4].map((d, i) => (
                          <motion.span
                            key={i}
                            className="w-2 h-2 rounded-full bg-white/60"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              delay: d,
                              duration: 0.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </ChatLine>
                </motion.div>
              )}

              {/* ── HEREME — reveal + Welcome pop ── */}
              {phase === "hereme" && (
                <motion.div
                  key="hereme"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  className="text-center flex flex-col items-center gap-6"
                >
                  {/* WELCOME label slides & expands */}
                  <motion.p
                    initial={{ opacity: 0, y: -16, letterSpacing: "0.05em" }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      letterSpacing: "0.3em",
                    }}
                    transition={{
                      delay: TIMINGS.welcomeDelay,
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                    className="text-emerald-400 text-base md:text-xl uppercase font-semibold"
                  >
                    Welcome
                  </motion.p>

                  {/* "This is me, Nandann" bounces in */}
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.55, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: TIMINGS.heremeDelay,
                      duration: 0.85,
                      ease: [0.34, 1.56, 0.64, 1], // overshoot spring
                    }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter text-white leading-tight"
                  >
                    This is me,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      Nandann
                    </span>
                  </motion.h2>

                  {/* subtle sub-line */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: TIMINGS.heremeDelay + 0.5,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="text-gray-500 text-sm md:text-base tracking-widest uppercase"
                  >
                    — and this is my world —
                  </motion.p>
                </motion.div>
              )}

              {/* ── DUSTING — freeze last frame while canvas runs ── */}
              {phase === "dusting" && (
                <motion.div
                  key="dusting"
                  initial={{ opacity: 1 }}
                  className="text-center flex flex-col items-center gap-6"
                >
                  <p className="text-emerald-400 text-base md:text-xl uppercase font-semibold tracking-[0.3em]">
                    Welcome
                  </p>
                  <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
                    This is me,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      Nandann
                    </span>
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base tracking-widest uppercase">
                    — and this is my world —
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
