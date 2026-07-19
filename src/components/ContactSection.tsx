"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

import ContactForm from './ContactForm';

export default function ContactSection() {
  const stage1Ref = useRef(null);
  const stage2Ref = useRef(null);
  const stage3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Stage 1
      ScrollTrigger.create({
        trigger: stage1Ref.current,
        start: 'center center',
        end: '+=200',
        pin: true,
        onEnter: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-phone-out', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-panel-contact-1', { opacity: 1, duration: 0.3 });
          gsap.to('.hud-line-contact-1', { scaleX: 1, duration: 0.5, ease: 'power3.out' });
          gsap.set('.hud-panel-contact-1', { boxShadow: 'none', backgroundColor: 'rgba(0,0,0,0.6)' });
        },
        onLeave: () => {
          gsap.to('.hud-line-contact-1', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          const tl = gsap.timeline();
          tl.to('.hud-panel-contact-1', { 
            boxShadow: '0 0 60px 10px rgba(34, 197, 94, 0.4)', 
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderColor: 'rgba(34, 197, 94, 1)',
            duration: 0.3 
          }).to('.hud-panel-contact-1', { opacity: 0, duration: 0.3 }, "+=0.2");
        },
        onEnterBack: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-phone-out', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-line-contact-1', { scaleX: 1, duration: 0.3, ease: 'power3.out' });
          gsap.to('.hud-panel-contact-1', { 
            opacity: 1,
            boxShadow: 'none', 
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderColor: 'rgba(34, 197, 94, 0.5)',
            duration: 0.3 
          });
        },
        onLeaveBack: () => {
          gsap.to('.hud-line-contact-1', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          gsap.to('.hud-panel-contact-1', { opacity: 0, duration: 0.3 });
        }
      });

      // Stage 2
      ScrollTrigger.create({
        trigger: stage2Ref.current,
        start: 'center center',
        end: '+=300',
        pin: true,
        onEnter: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-phone-type', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-panel-contact-2', { opacity: 1, duration: 0.3 });
          gsap.to('.hud-line-contact-2', { scaleX: 1, duration: 0.5, ease: 'power3.out' });
          gsap.set('.hud-panel-contact-2', { boxShadow: 'none', backgroundColor: 'rgba(0,0,0,0.6)' });
        },
        onLeave: () => {
          gsap.to('.hud-line-contact-2', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          const tl = gsap.timeline();
          tl.to('.hud-panel-contact-2', { 
            boxShadow: '0 0 60px 10px rgba(34, 197, 94, 0.4)', 
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderColor: 'rgba(34, 197, 94, 1)',
            duration: 0.3 
          }).to('.hud-panel-contact-2', { opacity: 0, duration: 0.3 }, "+=0.2");
        },
        onEnterBack: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-phone-type', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-line-contact-2', { scaleX: 1, duration: 0.3, ease: 'power3.out' });
          gsap.to('.hud-panel-contact-2', { 
            opacity: 1,
            boxShadow: 'none', 
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderColor: 'rgba(34, 197, 94, 0.5)',
            duration: 0.3 
          });
        },
        onLeaveBack: () => {
          gsap.to('.hud-line-contact-2', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          gsap.to('.hud-panel-contact-2', { opacity: 0, duration: 0.3 });
        }
      });

      // Stage 3
      ScrollTrigger.create({
        trigger: stage3Ref.current,
        start: 'center center',
        end: '+=400',
        pin: true,
        onEnter: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-phone-call', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-panel-contact-3', { opacity: 1, duration: 0.3 });
          gsap.to('.hud-line-contact-3', { scaleX: 1, duration: 0.5, ease: 'power3.out' });
          gsap.set('.hud-panel-contact-3', { boxShadow: 'none', backgroundColor: 'rgba(0,0,0,0.6)' });
        },
        onLeave: () => {
          // Bottom of the page, keep it glowing
          gsap.to('.hud-panel-contact-3', { 
            boxShadow: '0 0 60px 10px rgba(34, 197, 94, 0.4)', 
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderColor: 'rgba(34, 197, 94, 1)',
            duration: 0.3 
          });
        },
        onEnterBack: () => {
          gsap.to('.avatar-layer', { opacity: 0, duration: 0.3 });
          gsap.to('#avatar-phone-call', { opacity: 1, duration: 0.3 });
          
          gsap.to('.hud-line-contact-3', { scaleX: 1, duration: 0.3, ease: 'power3.out' });
          gsap.to('.hud-panel-contact-3', { 
            opacity: 1,
            boxShadow: 'none', 
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderColor: 'rgba(34, 197, 94, 0.5)',
            duration: 0.3 
          });
        },
        onLeaveBack: () => {
          gsap.to('.hud-line-contact-3', { scaleX: 0, duration: 0.3, ease: 'power3.in' });
          gsap.to('.hud-panel-contact-3', { opacity: 0, duration: 0.3 });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full block relative z-10">
      
      {/* Stage 1: Taking out phone */}
      <section ref={stage1Ref} className="w-full h-[40vh] py-12 px-6 md:px-12 flex flex-col justify-center">
        <div className="flex flex-col gap-24 relative z-10 w-full max-w-3xl ml-auto xl:mr-12">
          <div className="relative group">
            <div className="absolute top-[80px] right-full w-[30vw] md:w-[40vw] lg:w-[25vw] h-[2px] bg-green-500 origin-right scale-x-0 hud-line-contact-1 flex items-center justify-start z-20">
               <div className="w-4 h-4 border border-green-500 rounded-full bg-green-500/50 absolute left-0 -translate-x-1/2 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
            </div>
            
            <div className="relative border-l-2 border-green-500/50 pl-6 py-8 hud-panel-contact-1 opacity-0 bg-black/40 backdrop-blur-md rounded-r-xl transition-colors duration-500">
              <div className="absolute -left-[2px] -top-2 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
              <div className="absolute -left-[2px] -bottom-2 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
              <h3 className="font-cyberpunk text-3xl text-green-500 mb-8 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                COMM LINK INITIALIZING...
              </h3>
              <div className="font-mono text-gray-300">Establishing secure connection...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 2: Typing on phone */}
      <section ref={stage2Ref} className="w-full h-[40vh] py-12 px-6 md:px-12 flex flex-col justify-center">
        <div className="flex flex-col gap-24 relative z-10 w-full max-w-3xl ml-auto xl:mr-12">
          <div className="relative group">
            <div className="absolute top-[80px] right-full w-[30vw] md:w-[40vw] lg:w-[25vw] h-[2px] bg-green-500 origin-right scale-x-0 hud-line-contact-2 flex items-center justify-start z-20">
               <div className="w-4 h-4 border border-green-500 rounded-full bg-green-500/50 absolute left-0 -translate-x-1/2 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
            </div>
            
            <div className="relative border-l-2 border-green-500/50 pl-6 py-8 hud-panel-contact-2 opacity-0 bg-black/40 backdrop-blur-md rounded-r-xl transition-colors duration-500">
              <div className="absolute -left-[2px] -top-2 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
              <div className="absolute -left-[2px] -bottom-2 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
              <h3 className="font-cyberpunk text-3xl text-green-500 mb-8 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                INPUT REQUIRED
              </h3>
              <div className="font-mono text-gray-300">Please enter your message below...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 3: Calling */}
      <section ref={stage3Ref} className="w-full min-h-screen px-6 md:px-12 flex flex-col justify-start pt-20">
        <div className="flex flex-col gap-12 relative z-10 w-full max-w-3xl ml-auto xl:mr-12">
          <div className="relative group">
            <div className="absolute top-[80px] right-full w-[30vw] md:w-[40vw] lg:w-[25vw] h-[2px] bg-green-500 origin-right scale-x-0 hud-line-contact-3 flex items-center justify-start z-20">
               <div className="w-4 h-4 border border-green-500 rounded-full bg-green-500/50 absolute left-0 -translate-x-1/2 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
            </div>
            
            <div className="relative border-l-2 border-green-500/50 pl-6 py-8 hud-panel-contact-3 opacity-0 bg-black/40 backdrop-blur-md rounded-r-xl transition-colors duration-500">
              <div className="absolute -left-[2px] -top-2 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
              <div className="absolute -left-[2px] -bottom-2 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
              <h3 className="font-cyberpunk text-3xl text-green-500 mb-8 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                TRANSMITTING
              </h3>
              <div className="font-mono text-gray-300">Call connected. Awaiting response...</div>
            </div>
          </div>
          
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}
