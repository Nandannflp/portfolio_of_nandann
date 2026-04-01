import React from 'react';
import SocialIcons from '@/components/ui/social-icon';

const caseStudies = [
  {
    title: "AI Website Integration",
    client: "Fitness Coach, Mumbai",
    problem: "Zero inbound leads from website despite high Instagram traffic.",
    solution: "Built a conversion-focused landing page with an automated consultation booking system.",
    result: "3x increase in booked discovery calls within first 30 days.",
    tech: "Next.js, Framer Motion, Make.com",
    link: "#"
  },
  {
    title: "Automated Digital Infrastructure",
    client: "Creative Agency, Goa",
    problem: "Scattered client onboarding and manual invoicing draining 15+ hours a week.",
    solution: "Designed a centralized workflow portal automating CRM, intake, and invoicing.",
    result: "Saved 18 hours per week, allowing team to take on 3 new clients.",
    tech: "Lovable, Stripe, automation scripts",
    link: "#"
  },
  {
    title: "Lead Generation Funnel",
    client: "E-learning Platform",
    problem: "High drop-off rate on standard subscription forms.",
    solution: "Implemented a multi-step interactive quiz funnel qualifying leads.",
    result: "Increased email list opt-in rate by 45%.",
    tech: "React, Tailwind, HubSpot",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white border-l-4 border-cyan-500 pl-6">
            Work and <span className="font-alex-brush text-cyan-400 font-normal tracking-normal text-6xl md:text-8xl lg:text-9xl px-1">projects</span>
            <span className="block text-2xl md:text-3xl text-gray-400 uppercase tracking-widest mt-4">case studies</span>
          </h2>
          
          <SocialIcons />
        </div>
        
        {/* Masterpiece Featured Project */}
        <a 
          href="https://achivcreations.lovable.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mb-16"
        >
          <div className="glass-card group relative p-10 md:p-16 overflow-hidden transition-all duration-700 border-emerald-500/20 bg-black/50 hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-black/80 hover:shadow-[0_0_50px_rgba(16,185,129,0.2)]">
            
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                    Masterpiece Project
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-emerald-200 transition-all duration-500 leading-tight">
                  Start your career journey in just 3 days!
                </h3>
                
                <p className="text-gray-400 text-lg md:text-xl font-light">
                  A comprehensive, high-converting digital ecosystem built to accelerate professional growth and visibility.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500 group-hover:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white group-hover:text-emerald-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>


        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, i) => (
            <div 
              key={i} 
              className="glass-card group p-8 relative overflow-hidden transition-all duration-500 border-white/10 bg-black/40 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col justify-between min-h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase bg-white/5 text-gray-300 border border-white/10 rounded-full group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                  {study.client}
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all duration-300">
                  {study.title}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-1">Problem</h4>
                    <p className="text-gray-400 text-sm font-light">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-cyan-500 font-bold mb-1">Solution</h4>
                    <p className="text-gray-400 text-sm font-light">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-1">Result</h4>
                    <p className="text-white text-sm font-medium">{study.result}</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-mono truncate max-w-[150px]">{study.tech}</span>
                <a href={study.link} className="text-cyan-400 flex items-center text-sm font-medium hover:text-cyan-300 transition-colors">
                  View <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a href="#contact" className="inline-block px-10 py-5 rounded-full text-lg font-bold text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Start Your Project Today &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
