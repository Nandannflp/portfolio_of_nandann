"use client";

import React from "react";

/* ─────────────────────────────────────────────────────────────
   AI Models — styled as premium text badges with brand colors
─────────────────────────────────────────────────────────────*/
const AI_MODELS = [
  { name: "GPT-5.2",             color: "#10a37f" },
  { name: "Claude Opus 4.6",     color: "#d97706" },
  { name: "Claude Sonnet 4.6",   color: "#f59e0b" },
  { name: "Gemini 3.1 Pro",      color: "#4285f4" },
  { name: "DeepSeek V3.2",       color: "#6366f1" },
  { name: "MiniMax M2.1",        color: "#ec4899" },
  { name: "Seed 1.6",            color: "#14b8a6" },
  { name: "MiMo-V2 Flash",       color: "#f97316" },
  { name: "Devstral 2",          color: "#ff6b35" },
  { name: "Nemotron 3 Nano",     color: "#76b900" },
  { name: "DeepSeek R1",         color: "#818cf8" },
  { name: "Qwen3 Coder 480B",    color: "#3b82f6" },
  { name: "Claude Code",         color: "#d97706" },
  { name: "Grok 4.1 Fast",       color: "#ef4444" },
  { name: "GLM 5",               color: "#06b6d4" },
  { name: "Gemini 3 Flash",      color: "#34a853" },
  { name: "Gemma 3",             color: "#4285f4" },
  { name: "Llama 3.2 Vision",    color: "#7c3aed" },
  { name: "Qwen2.5 VL",          color: "#2563eb" },
  { name: "Kimi VL",             color: "#f43f5e" },
  { name: "Hunter Alpha",        color: "#eab308" },
  { name: "Kimi 2.5",            color: "#fb7185" },
  { name: "Trinity Large",       color: "#a855f7" },
];

/* ─────────────────────────────────────────────────────────────
   AI Apps — with real logos where possible
─────────────────────────────────────────────────────────────*/
const AI_APPS = [
  { name: "ChatGPT",           color: "#10a37f" },
  { name: "Claude",            color: "#d97706" },
  { name: "Gemini",            color: "#4285f4" },
  { name: "Grok",              color: "#ef4444" },
  { name: "Perplexity",        color: "#20b2aa" },
  { name: "Notion AI",         color: "#ffffff" },
  { name: "Cursor",            color: "#7c3aed" },
  { name: "ElevenLabs",        color: "#f8fafc" },
  { name: "Descript",           color: "#6366f1" },
  { name: "Gamma",             color: "#8b5cf6" },
  { name: "Midjourney",        color: "#ffffff" },
  { name: "DALL·E",            color: "#10a37f" },
  { name: "Runway",            color: "#00d4ff" },
  { name: "Synthesia",         color: "#7c3aed" },
  { name: "Fireflies",         color: "#a855f7" },
  { name: "Otter",             color: "#3b82f6" },
  { name: "TL;DV",             color: "#ec4899" },
  { name: "Fathom",            color: "#06b6d4" },
  { name: "Granola",           color: "#f59e0b" },
  { name: "Google Assistant",  color: "#4285f4" },
  { name: "Replika",           color: "#f472b6" },
  { name: "FaceApp",           color: "#8b5cf6" },
  { name: "Lensa AI",          color: "#ec4899" },
  { name: "Socratic",          color: "#34a853" },
  { name: "SwiftKey",          color: "#ef4444" },
  { name: "Shortwave",         color: "#6366f1" },
  { name: "SaneBox",           color: "#3b82f6" },
  { name: "Superhuman",        color: "#7c3aed" },
  { name: "Clockwise",         color: "#10b981" },
  { name: "Monday.com",        color: "#f43f5e" },
  { name: "Lovable",           color: "#ec4899" },
  { name: "Bubble",            color: "#3b82f6" },
  { name: "Vercel v0",         color: "#ffffff" },
];

const repeat = <T,>(items: T[], times = 4): T[] =>
  Array.from({ length: times }).flatMap(() => items);

function ModelBadge({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-yellow-500/40 hover:bg-yellow-500/5 transition-all duration-300 cursor-default group"
    >
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-[0_0_8px_currentColor]"
        style={{ backgroundColor: color, color }}
      />
      <span className="text-sm font-medium text-gray-300 whitespace-nowrap group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}

export default function AIModelsCarousel() {
  const modelsRow1 = AI_MODELS.slice(0, 12);
  const modelsRow2 = AI_MODELS.slice(12);
  const appsRow1 = AI_APPS.slice(0, 17);
  const appsRow2 = AI_APPS.slice(17);

  return (
    <div className="space-y-24">
      {/* ── AI MODELS SECTION ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 text-center mb-10">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 tracking-widest uppercase">
            🧠 AI Models
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Models I <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]">Work With</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto">
            23 frontier AI models powering my automated systems and workflows.
          </p>
        </div>

        <div className="overflow-hidden relative">
          {/* Row 1 — scroll left */}
          <div className="flex gap-4 whitespace-nowrap vault-scroll-left mb-4">
            {repeat(modelsRow1).map((m, i) => (
              <ModelBadge key={`m1-${i}`} name={m.name} color={m.color} />
            ))}
          </div>

          {/* Row 2 — scroll right */}
          <div className="flex gap-4 whitespace-nowrap vault-scroll-right">
            {repeat(modelsRow2).map((m, i) => (
              <ModelBadge key={`m2-${i}`} name={m.name} color={m.color} />
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#070707] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#070707] to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* ── AI APPS SECTION ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 text-center mb-10">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 tracking-widest uppercase">
            ⚡ AI Apps
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Apps in My <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]">Arsenal</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto">
            33 AI-powered applications that supercharge every aspect of my workflow.
          </p>
        </div>

        <div className="overflow-hidden relative">
          {/* Row 1 — scroll left */}
          <div className="flex gap-4 whitespace-nowrap vault-scroll-left mb-4">
            {repeat(appsRow1).map((a, i) => (
              <ModelBadge key={`a1-${i}`} name={a.name} color={a.color} />
            ))}
          </div>

          {/* Row 2 — scroll right */}
          <div className="flex gap-4 whitespace-nowrap vault-scroll-right">
            {repeat(appsRow2).map((a, i) => (
              <ModelBadge key={`a2-${i}`} name={a.name} color={a.color} />
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#070707] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#070707] to-transparent pointer-events-none z-10" />
        </div>
      </section>
    </div>
  );
}
