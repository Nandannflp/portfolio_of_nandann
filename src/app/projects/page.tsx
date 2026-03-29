"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

type ProjectCategory = "AI Systems" | "Web Infrastructure" | "Digital Marketing";

const categories: ProjectCategory[] = ["AI Systems", "Web Infrastructure", "Digital Marketing"];

const projectsData: Record<ProjectCategory, Array<{ title: string; description: string; link?: string; image?: string }>> = {
  "AI Systems": [
    {
      title: "Agentic Support Bot",
      description: "An autonomous LLM-powered customer service agent that integrates with Zendesk to resolve 80% of L1 support tickets.",
    },
    {
      title: "Content Generation Engine",
      description: "Automated pipeline for scaling social media distribution using custom trained diffusion and language models.",
    },
    {
      title: "Predictive Lead Scorer",
      description: "Machine learning model to qualify inbound leads based on historical CRM data, increasing sales conversion by 25%.",
    }
  ],
  "Web Infrastructure": [
    {
      title: "SaaS Application Shell",
      description: "High-performance React/Next.js boilerplate with built-in multi-tenant authentication, billing, and robust API routing.",
    },
    {
      title: "E-Commerce CMS Migration",
      description: "Replatformed a legacy monolithic store to a headless Shopify + Sanity architecture for sub-second load times.",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "WebSocket-driven dashboard visualising millions of data points with dynamic charts and filterable metrics.",
    }
  ],
  "Digital Marketing": [
    {
      title: "B2B Growth Funnel",
      description: "End-to-end automated marketing funnel incorporating lead magnets, sequenced email drip campaigns, and retargeting logic.",
    },
    {
      title: "Viral Pre-launch Campaign",
      description: "Gamified viral waitlist system for a consumer app that generated 50,000+ signups in 2 weeks prior to launch.",
    },
    {
      title: "Omnichannel Ad Strategy",
      description: "Data-driven media buying strategy across Meta, Google, and LinkedIn with dynamic creative optimization.",
    }
  ]
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("AI Systems");

  return (
    <main className="relative min-h-screen bg-[#070707] text-white selection:bg-yellow-500/30 font-sans" suppressHydrationWarning={true}>
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-32">
        
        {/* Header & Navigation */}
        <div className="mb-16 md:mb-24">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group">
            <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="mt-12 space-y-4 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white drop-shadow-2xl"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-600">Vault</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-400 font-light max-w-2xl"
            >
              A curated selection of my finest automated systems, digital products, and strategic implementations.
            </motion.p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === cat ? "text-black" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {projectsData[activeTab].map((project, idx) => (
              <motion.div
                layout
                key={`${activeTab}-${idx}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative h-80 rounded-3xl overflow-hidden bg-black/40 border border-white/10 hover:border-yellow-500/30 transition-all duration-500"
              >
                {/* Simulated Image Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#0a0a0a] group-hover:scale-105 transition-transform duration-700"></div>
                
                {/* Glow Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 md:line-clamp-3 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                    
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="text-xs font-bold tracking-widest uppercase text-yellow-500">View Project</span>
                      <ExternalLink size={14} className="text-yellow-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
