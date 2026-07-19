"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BusinessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'center center',
        end: '+=800',
        pin: true,
        onEnter: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          // Fallback to default avatar for now
          gsap.to('#avatar-default', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-panel-business', { opacity: 1, duration: 0.3 });
          gsap.to('.hud-line-business', { scaleX: 1, duration: 0.5, ease: 'power3.out' });
          gsap.fromTo('.business-item', 
            { opacity: 0, x: -10 }, 
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 0.2 }
          );

          gsap.set('.hud-panel-business', { boxShadow: 'none', backgroundColor: 'rgba(0,0,0,0.6)' });
        },
        onLeave: () => {
          gsap.to('.hud-line-business', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          const tl = gsap.timeline();
          tl.to('.hud-panel-business', { 
            boxShadow: '0 0 60px 10px rgba(59, 130, 246, 0.4)', 
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderColor: 'rgba(59, 130, 246, 1)',
            duration: 0.3 
          }).to('.hud-panel-business', {
            opacity: 0,
            duration: 0.3
          }, "+=0.2");
          gsap.to('.business-item', { opacity: 0, duration: 0.3, delay: 0.3 });
        },
        onEnterBack: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-default', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-line-business', { scaleX: 1, duration: 0.3, ease: 'power3.out' });
          gsap.to('.hud-panel-business', { 
            opacity: 1,
            boxShadow: 'none', 
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(59, 130, 246, 0.5)',
            duration: 0.3 
          });
          gsap.to('.business-item', { opacity: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to('.hud-line-business', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          gsap.to('.hud-panel-business', { opacity: 0, duration: 0.3 });
          gsap.to('.business-item', { opacity: 0, duration: 0.2 });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full block relative z-10">
      <section ref={sectionRef} className="w-full h-screen px-6 md:px-12 flex flex-col justify-center">
        <div className="flex flex-col gap-24 relative z-10 w-full max-w-3xl ml-auto xl:mr-12">
          <div className="relative group">
            <div className="absolute top-[80px] right-full w-[30vw] md:w-[40vw] lg:w-[25vw] h-[2px] bg-blue-500 origin-right scale-x-0 hud-line-business flex items-center justify-start z-20">
               <div className="w-4 h-4 border border-blue-500 rounded-full bg-blue-500/50 absolute left-0 -translate-x-1/2 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            </div>
            
            <div className="relative border-l-2 border-blue-500/50 pl-6 py-8 hud-panel-business opacity-0 bg-black/40 backdrop-blur-md rounded-r-xl transition-colors duration-500">
              <div className="absolute -left-[2px] -top-2 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
              <div className="absolute -left-[2px] -bottom-2 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>

              <h3 className="font-cyberpunk text-3xl text-blue-500 mb-8 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                BUSINESS
              </h3>
              
              <div className="space-y-4 font-mono text-lg text-gray-300 leading-relaxed min-h-[10rem]">
                <p className="business-item opacity-0">Connecting to business logic processors...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
