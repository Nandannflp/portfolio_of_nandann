"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const bioRef = useRef(null);
  const expertiseRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // -----------------------------------------------------
      // 1. BIO PANEL (PINNED, NO SCRUB)
      // -----------------------------------------------------
      ScrollTrigger.create({
        trigger: bioRef.current,
        start: 'center center',
        end: '+=800',
        pin: true,
        onEnter: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-pointing', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-panel-bio', { opacity: 1, duration: 0.3 });
          gsap.to('.hud-line-bio', { scaleX: 1, duration: 0.5, ease: 'power3.out' });
          
          // Animate text instead of using React state
          gsap.fromTo('.bio-text-line', 
            { opacity: 0, x: -10 }, 
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.2, ease: "power2.out", delay: 0.3 }
          );
          
          // Reset glow just in case
          gsap.set('.hud-panel-bio', { boxShadow: 'none', backgroundColor: 'rgba(0,0,0,0.4)' });
        },
        onLeave: () => {
          // Retract line
          gsap.to('.hud-line-bio', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          // Glow and then fade out
          const tl = gsap.timeline();
          tl.to('.hud-panel-bio', { 
            boxShadow: '0 0 60px 10px rgba(6, 182, 212, 0.4)', 
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: 'rgba(6, 182, 212, 1)',
            duration: 0.3 
          }).to('.hud-panel-bio', {
            opacity: 0,
            duration: 0.3
          }, "+=0.2");
          gsap.to('.bio-text-line', { opacity: 0, duration: 0.3, delay: 0.3 });
        },
        onEnterBack: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-pointing', { opacity: 1, duration: 0.3 });

          gsap.to('.hud-line-bio', { scaleX: 1, duration: 0.3, ease: 'power3.out' });
          gsap.to('.hud-panel-bio', { 
            opacity: 1,
            boxShadow: 'none', 
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(6, 182, 212, 0.5)',
            duration: 0.3 
          });
          gsap.to('.bio-text-line', { opacity: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to('.hud-line-bio', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          gsap.to('.hud-panel-bio', { opacity: 0, duration: 0.3 });
          gsap.to('.bio-text-line', { opacity: 0, duration: 0.2 });
        }
      });

      // -----------------------------------------------------
      // 2. EXPERTISE PANEL (PINNED, NO SCRUB)
      // -----------------------------------------------------
      ScrollTrigger.create({
        trigger: expertiseRef.current,
        start: 'center center',
        end: '+=800',
        pin: true,
        onEnter: () => {
          // FORCE HIDE bio section in case of hyper-fast scrolling
          gsap.set('.hud-panel-bio', { opacity: 0 });
          gsap.set('.hud-line-bio', { scaleX: 0 });
          
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-jacket', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-panel-expertise', { opacity: 1, duration: 0.3 });
          gsap.to('.hud-line-expertise', { scaleX: 1, duration: 0.5, ease: 'power3.out' });
          gsap.fromTo('.skill-badge', 
            { opacity: 0, x: -20, rotationX: 45 }, 
            { opacity: 1, x: 0, rotationX: 0, duration: 0.4, stagger: 0.05, ease: "back.out(1.7)", delay: 0.2 }
          );

          gsap.set('.hud-panel-expertise', { boxShadow: 'none', backgroundColor: 'rgba(0,0,0,0.4)' });
        },
        onLeave: () => {
          gsap.to('.hud-line-expertise', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          const tl = gsap.timeline();
          tl.to('.hud-panel-expertise', { 
            boxShadow: '0 0 60px 10px rgba(252, 238, 10, 0.4)', 
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: 'rgba(252, 238, 10, 1)',
            duration: 0.3 
          }).to('.hud-panel-expertise', {
            opacity: 0,
            duration: 0.3
          }, "+=0.2");
          gsap.to('.skill-badge', { opacity: 0, duration: 0.3, delay: 0.3 });
        },
        onEnterBack: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-jacket', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-line-expertise', { scaleX: 1, duration: 0.3, ease: 'power3.out' });
          gsap.to('.hud-panel-expertise', { 
            opacity: 1,
            boxShadow: 'none', 
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(252, 238, 10, 0.5)',
            duration: 0.3 
          });
          gsap.to('.skill-badge', { opacity: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to('.hud-line-expertise', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          gsap.to('.hud-panel-expertise', { opacity: 0, duration: 0.3 });
          gsap.to('.skill-badge', { opacity: 0, duration: 0.2 });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full block relative z-10">
      
      {/* 1. BIO SCROLL REGION */}
      <section ref={bioRef} className="w-full h-screen px-6 md:px-12 flex flex-col justify-center">
        <div className="flex flex-col gap-24 relative z-10 w-full max-w-3xl ml-auto xl:mr-12">
          
          {/* Bio Panel */}
          <div className="relative group"> 
            {/* HUD Line - Adjusted top position to align with fingers when panel is centered */}
            <div className="absolute top-[85px] md:top-[120px] right-full w-[30vw] md:w-[40vw] lg:w-[25vw] h-[2px] bg-cp-cyan origin-right scale-x-0 hud-line-bio flex items-center justify-start z-20">
               {/* Reticle */}
               <div className="w-4 h-4 border border-cp-cyan rounded-full bg-cp-cyan/50 absolute left-0 -translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            </div>
            
            <div className="relative border-l-2 border-cp-cyan/50 pl-6 py-8 hud-panel-bio opacity-0 bg-black/40 backdrop-blur-md rounded-r-xl transition-colors duration-500">
              <div className="absolute -left-[2px] -top-2 w-4 h-4 border-t-2 border-l-2 border-cp-cyan"></div>
              <div className="absolute -left-[2px] -bottom-2 w-4 h-4 border-b-2 border-l-2 border-cp-cyan"></div>

              <p className="font-cyberpunk text-cp-cyan tracking-widest text-sm mb-6 uppercase drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">Target Acquired // Bio Data</p>
              
              <div className="space-y-6 font-mono text-lg md:text-xl text-gray-300 leading-relaxed min-h-[14rem]">
                <p className="bio-text-line opacity-0">
                  Hey, I'm Nandann, an <span className="text-cp-yellow font-bold drop-shadow-[0_0_5px_rgba(252,238,10,0.5)]">AI Strategist</span> from Goa who Solves Problems using AI.
                </p>
                <p className="bio-text-line opacity-0">
                  I design modern websites and user experiences like this one. I transform ideas into impactful products.
                </p>
                <p className="bio-text-line opacity-0">
                  My mission is to leverage artificial intelligence to simplify work, empower people, and create products that make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPERTISE SCROLL REGION */}
      <section ref={expertiseRef} className="w-full h-screen px-6 md:px-12 flex flex-col justify-center">
        <div className="flex flex-col gap-24 relative z-10 w-full max-w-3xl ml-auto xl:mr-12">
          
          {/* Expertise Panel */}
          <div className="relative group">
            {/* HUD Line - vertically aligned with the jacket opening */}
            <div className="absolute top-[80px] right-full w-[30vw] md:w-[40vw] lg:w-[25vw] h-[2px] bg-cp-yellow origin-right scale-x-0 hud-line-expertise flex items-center justify-start z-20">
               {/* Reticle */}
               <div className="w-5 h-5 border-2 border-cp-yellow bg-cp-yellow/20 absolute left-0 -translate-x-1/2 rotate-45 shadow-[0_0_10px_rgba(252,238,10,0.8)]"></div>
            </div>
            
            <div className="relative border-l-2 border-cp-yellow/50 pl-6 py-8 hud-panel-expertise opacity-0 bg-black/40 backdrop-blur-md rounded-r-xl transition-colors duration-500">
              <div className="absolute -left-[2px] -top-2 w-4 h-4 border-t-2 border-l-2 border-cp-yellow"></div>
              <div className="absolute -left-[2px] -bottom-2 w-4 h-4 border-b-2 border-l-2 border-cp-yellow"></div>

              <h3 className="font-cyberpunk text-3xl text-cp-yellow mb-8 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(252,238,10,0.8)]">
                MY EXPERTISE IN
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {[
                  "Artificial Intelligence",
                  "AI Strategy",
                  "Prompt Engineering",
                  "Web Development",
                  "API Integration",
                  "UI/UX Design",
                  "Graphic Design",
                  "Content Creation"
                ].map((skill, index) => (
                  <div key={index} className="skill-badge opacity-0 flex items-center gap-3 bg-black/50 p-3 rounded border border-white/10 hover:border-cp-yellow hover:bg-cp-yellow/10 hover:shadow-[0_0_15px_rgba(252,238,10,0.3)] transition-all duration-300 cursor-default backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-cp-yellow shadow-[0_0_8px_rgba(252,238,10,0.8)]"></div>
                    <span className="font-mono text-gray-200 uppercase tracking-wider text-sm font-bold">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
