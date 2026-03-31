"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import AIModelsCarousel from "@/components/ui/integration-hero";
import GenieChatbot from "@/components/ui/genie-chatbot";
import { VerticalImageStack } from "@/components/ui/vertical-image-stack";

/* ─────────────────────────────────────────────────────────────
   Project Showcase Data
─────────────────────────────────────────────────────────────*/
const showcaseProjects = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "OpenAI's Flagship",
    icon: "🤖",
    gradient: "from-[#10a37f] to-[#1a7f5a]",
    borderColor: "border-[#10a37f]/30",
    glowColor: "rgba(16,163,127,0.3)",
    description:
      "OpenAI's conversational AI powerhouse — my Swiss Army knife for daily productivity, from drafting code to brainstorming strategies to automating complex multi-step analysis.",
  },
  {
    id: "claude",
    name: "Claude",
    tagline: "Anthropic's Deep Thinker",
    icon: "🧠",
    gradient: "from-[#d97706] to-[#b45309]",
    borderColor: "border-[#d97706]/30",
    glowColor: "rgba(217,119,6,0.3)",
    description:
      "Anthropic's thoughtful reasoning engine — I rely on Claude for nuanced analysis, long-form content, meticulous code reviews, and tasks requiring deep contextual understanding.",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    tagline: "AI-Powered Search",
    icon: "🔍",
    gradient: "from-[#20b2aa] to-[#008b8b]",
    borderColor: "border-[#20b2aa]/30",
    glowColor: "rgba(32,178,170,0.3)",
    description:
      "The AI search engine that replaced bookmarks — real-time answers with cited sources, perfect for rapid research, market analysis, and staying ahead of industry trends.",
  },
  {
    id: "gemini",
    name: "Gemini",
    tagline: "Google's Multimodal AI",
    icon: "💎",
    gradient: "from-[#4285f4] to-[#1a73e8]",
    borderColor: "border-[#4285f4]/30",
    glowColor: "rgba(66,133,244,0.3)",
    description:
      "Google's multimodal powerhouse — seamless integration across the Google ecosystem, excelling at visual analysis, multi-modal reasoning, and enterprise-scale automation.",
  },
];

/* ─────────────────────────────────────────────────────────────
   Future Projects (teasers)
─────────────────────────────────────────────────────────────*/
const futureProjects = [
  { name: "VEDA AI", tagline: "Ancient wisdom meets artificial intelligence", icon: "🕉️" },
  { name: "Apps", tagline: "A curated collection of micro-applications", icon: "📱" },
];

/* ─────────────────────────────────────────────────────────────
   Page Component
─────────────────────────────────────────────────────────────*/
export default function ProjectsPage() {
  const [genieProject, setGenieProject] = useState<typeof showcaseProjects[0] | null>(null);

  const handleProjectTap = useCallback((project: typeof showcaseProjects[0]) => {
    setGenieProject(project);
  }, []);

  const handleGenieDismiss = useCallback(() => {
    setGenieProject(null);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#070707] text-white selection:bg-yellow-500/30 font-sans overflow-x-hidden" suppressHydrationWarning={true}>
      
      {/* ── Golden Ambient Background Glows ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[30%] -left-[15%] w-[60%] h-[60%] rounded-full bg-yellow-900/8 blur-[180px]" />
        <div className="absolute top-[30%] -right-[20%] w-[50%] h-[50%] rounded-full bg-amber-900/8 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-yellow-800/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-32">
        
        {/* ══════════════════════════════════════════════
            HEADER — "The Vault" with golden glow
        ══════════════════════════════════════════════ */}
        <div className="mb-20 md:mb-28">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-yellow-400 transition-colors duration-300 group">
            <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="mt-12 space-y-5 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none">
                <span className="text-white">The </span>
                <span 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                >
                  Vault
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto"
            >
              A curated showcase of the AI models, tools, and projects that power my automated universe.
            </motion.p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            IMAGE CAROUSEL PLACEHOLDER (center)
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <div className="flex items-center justify-center w-full relative h-[600px] rounded-3xl overflow-hidden border border-yellow-500/10 bg-black/20">
            <VerticalImageStack />
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            AI MODELS + AI APPS CAROUSELS
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AIModelsCarousel />
        </motion.div>

        {/* ══════════════════════════════════════════════
            PROJECT SHOWCASE PANELS
        ══════════════════════════════════════════════ */}
        <section className="mt-28">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 tracking-widest uppercase">
              ✦ Projects
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Built With <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]">AI Power</span>
            </h2>
            <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto">
              Tap any card to summon the genie and learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {showcaseProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                onClick={() => handleProjectTap(project)}
                className={`group relative rounded-3xl overflow-hidden border ${project.borderColor} bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-500 cursor-pointer`}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 60px ${project.glowColor}` }}
                />

                <div className="relative z-10 p-8 md:p-10">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Brief hint */}
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                    Tap to learn how I use {project.name} in my workflow →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FUTURE PROJECTS — half-visible teasers
        ══════════════════════════════════════════════ */}
        <section className="mt-28 relative">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-600">
              Coming Soon
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto relative">
            {/* Fade mask over the cards */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-transparent z-20 pointer-events-none" />

            {futureProjects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.15 }}
                className="relative rounded-3xl overflow-hidden border border-white/5 bg-black/30 p-8 md:p-10"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-400">{project.name}</h3>
                    <p className="text-xs text-gray-600">{project.tagline}</p>
                  </div>
                </div>
                <div className="mt-4 h-2 w-1/3 rounded-full bg-white/5" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-white/5" />
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* ── GENIE CHATBOT ── */}
      <AnimatePresence>
        {genieProject && (
          <GenieChatbot
            key={genieProject.id}
            projectName={genieProject.name}
            description={genieProject.description}
            onDismiss={handleGenieDismiss}
          />
        )}
      </AnimatePresence>

      {/* ── Scroll animation styles ── */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <style jsx global>{`
        .vault-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .vault-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </main>
  );
}
