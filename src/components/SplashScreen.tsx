"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpecialText } from "@/components/ui/special-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { FloatingLabelInput } from "@/components/ui/floating-label";
import { ArrowRight } from "lucide-react";
import { useUser } from "@/context/UserContext";
import RainingLetters from "@/components/ui/modern-animated-hero-section";

/* ─────────────────────────────────────────────────────────────
   Timing constants
─────────────────────────────────────────────────────────────*/
const TIMINGS = {
  introToQuestion:  1400,  // pause after "Introducing Myself" finishes
  greetingDuration: 5500,  // total time in greeting before → hereme
  welcomeDelay:     0.5,   // s — before "Welcome" label appears
  heremeDelay:      1.2,   // s — before "This is me, Nandann" bounces in
  heremedDuration:  4200,  // ms — hereme stays before disintegration
};

/* ─────────────────────────────────────────────────────────────
   Disintegration Canvas — lightweight upward-floating particles
   ~900 tiny dots rise, drift sideways and fade. Smooth on all devices.
─────────────────────────────────────────────────────────────*/
type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  alpha: number;
  color: string;
};

function DustCanvas({ active, onDone }: { active: boolean; onDone: () => void }) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const rafRef      = useRef<number>(0);
  const hasStarted  = useRef(false);
  const onDoneRef   = useRef(onDone);
  useLayoutEffect(() => { onDoneRef.current = onDone; });

  useEffect(() => {
    if (!active || hasStarted.current) return;
    hasStarted.current = true;

    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    const W = canvas.width  = window.innerWidth;
    const H = canvas.height = window.innerHeight;

    // Colour palette — white/grey with emerald/cyan accents
    const colors = [
      "#ffffff", "#e5e5e5", "#d4d4d4",
      "#6ee7b7", "#34d399", "#a7f3d0",
      "#67e8f9", "#22d3ee",
    ];

    // 900 small dots spawned randomly across the whole screen
    const particles: Particle[] = Array.from({ length: 900 }, () => ({
      x:      Math.random() * W,
      y:      Math.random() * H,
      vx:     (Math.random() - 0.5) * 0.8,      // gentle horizontal drift
      vy:     -(0.6 + Math.random() * 2.2),       // always rising upward
      radius: 0.8 + Math.random() * 2.2,
      alpha:  0.7 + Math.random() * 0.3,
      color:  colors[Math.floor(Math.random() * colors.length)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      let alive = 0;

      for (const p of particles) {
        if (p.alpha <= 0) continue;
        alive++;

        p.x     += p.vx;
        p.y     += p.vy;
        p.vx    += (Math.random() - 0.5) * 0.05; // tiny wobble
        p.alpha -= 0.007 + Math.random() * 0.006;

        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle   = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (alive > 0) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        onDoneRef.current();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  if (!active) return null;
  return <canvas ref={canvasRef} className="fixed inset-0 z-[10000] pointer-events-none" />;
}

/* ─────────────────────────────────────────────────────────────
   Greeting — conversational lines, one at a time, centered
─────────────────────────────────────────────────────────────*/
const GREETING_LINES = (name: string) => [
  { text: <>Hey there! 👋</>,                                                                        delay: 0    },
  { text: <>Nice to meet you, <span className="text-emerald-400 font-bold">{name}</span> ✨</>,      delay: 2200 },
];

function GreetingConvo({ name }: { name: string }) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const lines = GREETING_LINES(name);
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, idx) => {
      if (idx === 0) { setVisible(1); return; }
      const t = setTimeout(() => setVisible(idx + 1), line.delay);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [name]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 text-center w-full max-w-xl mx-auto">
      {GREETING_LINES(name).map((line, idx) => (
        <AnimatePresence key={idx}>
          {visible > idx && (
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white text-center w-full"
            >
              {line.text}
            </motion.h2>
          )}
        </AnimatePresence>
      ))}

      {/* Bouncing dots appear after all lines */}
      <AnimatePresence>
        {visible >= GREETING_LINES(name).length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex gap-2 items-center"
          >
            {[0, 0.22, 0.44].map((d, i) => (
              <motion.span
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-emerald-400/70"
                animate={{ y: [0, -7, 0] }}
                transition={{ delay: d, duration: 0.65, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main SplashScreen
─────────────────────────────────────────────────────────────*/
export default function SplashScreen() {
  const [phase, setPhase] = useState<
    "intro" | "question" | "greeting" | "hereme" | "dusting" | "done"
  >(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("portfolio_user_name")) {
      return "done";
    }
    return "intro";
  });
  const [inputValue, setInputValue] = useState("");
  const [dustActive, setDustActive] = useState(false);
  const { setUserName } = useUser();

  const show = phase !== "done";

  /* ── phase timers ── */
  useEffect(() => {
    // phase === "greeting" transition is handled by RainingLetters onComplete
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
            transition={phase === "dusting" ? { duration: 1.8, ease: "easeIn" } : {}}
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
                    onComplete={() => setPhase("hereme")}
                  />
                </motion.div>
              )}

              {/* ── HEREME — Welcome + "This is me, Nandann" ── */}
              {phase === "hereme" && (
                <motion.div
                  key="hereme"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  className="text-center flex flex-col items-center gap-6"
                >
                  {/* WELCOME label — letter-spacing expands */}
                  <motion.p
                    initial={{ opacity: 0, y: -16, letterSpacing: "0.05em" }}
                    animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
                    transition={{ delay: TIMINGS.welcomeDelay, duration: 0.9, ease: "easeOut" }}
                    className="text-emerald-400 text-base md:text-xl uppercase font-semibold"
                  >
                    Welcome
                  </motion.p>

                  {/* "This is me, Nandann" — spring bounce */}
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.55, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: TIMINGS.heremeDelay,
                      duration: 0.85,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter text-white leading-tight"
                  >
                    This is me,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      Nandann
                    </span>
                  </motion.h2>

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: TIMINGS.heremeDelay + 0.5, duration: 0.7, ease: "easeOut" }}
                    className="text-gray-500 text-sm md:text-base tracking-widest uppercase"
                  >
                    — and this is my world —
                  </motion.p>
                </motion.div>
              )}

              {/* ── DUSTING — frozen frame under the particle canvas ── */}
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
