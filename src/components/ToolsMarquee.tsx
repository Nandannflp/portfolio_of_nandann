import React from 'react';
import Image from 'next/image';

const tools = [
  { name: 'ChatGPT', src: '/social/chatgpt.png' },
  { name: 'Gemini AI', src: '/social/gemini.svg' },
  { name: 'Perplexity', src: '/social/perplexity.png' },
  { name: 'Codex', src: '/social/codex%20logo.png' },
  { name: 'Claude', src: '/social/Claude.png' },
  { name: 'Canva', src: '/social/Canva.png' },
  { name: '21st.dev', src: '/social/21st.dev.png' },
  { name: 'Hostinger', src: '/social/hostinger.png' },
  { name: 'GoDaddy', src: '/social/Go%20daddy.png' },
  { name: 'Antigravity', src: '/social/Antigravity.png' },
];

export default function ToolsMarquee() {
  const repeatedTools = [...tools, ...tools, ...tools];

  return (
    <section className="relative z-20 overflow-hidden border-y border-white/10 bg-white/[0.03] py-10 backdrop-blur-sm">
      <div className="mx-auto mb-8 max-w-7xl px-6 md:px-12">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.35em] text-emerald-400">
          Tools Used
        </h2>
      </div>

      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_110s_linear_infinite] gap-5 pr-5">
          {repeatedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="group flex min-w-max items-center gap-4 rounded-full border border-cyan-400/20 bg-black/20 px-6 py-4 shadow-[0_0_24px_rgba(45,212,191,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white/[0.06] ring-1 ring-white/10">
                <Image
                  src={tool.src}
                  alt={`${tool.name} logo`}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="text-base font-semibold tracking-wide text-white md:text-lg">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
