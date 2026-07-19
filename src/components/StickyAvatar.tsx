"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StickyAvatar() {
  const containerRef = useRef(null);

  useEffect(() => {
    // We will set up the ScrollTriggers in the respective section components
    // so they can control the exact timing based on their own elements.
    // Here we just ensure initial states.
    const ctx = gsap.context(() => {
      // Set all avatars to opacity 0 except the default one
      gsap.set(".avatar-layer", { opacity: 0 });
      gsap.set("#avatar-default", { opacity: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Neon Glow behind avatar - Changed from Yellow to Red */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF003C]/20 rounded-full blur-[100px] animate-pulse"></div>
      
      {/* 1. Initial State */}
      <img 
        id="avatar-default"
        src="/images/full_avatar.png" 
        alt="Nandan Shetye" 
        className="avatar-layer absolute z-10 h-[95vh] object-contain drop-shadow-[0_0_30px_rgba(255,0,60,0.4)] mt-8"
      />

      {/* 2. About - Intro (Pointing Right Confident) */}
      <img 
        id="avatar-pointing"
        src="/images/Avatar_pointing_right_confident.png" 
        alt="Nandan Pointing" 
        className="avatar-layer absolute z-10 h-[95vh] object-contain drop-shadow-[0_0_30px_rgba(255,0,60,0.4)] mt-8"
      />

      {/* 3. About - Expertise (Opening Jacket) */}
      <img 
        id="avatar-jacket"
        src="/images/Avatar_opening_jacket.png" 
        alt="Nandan Opening Jacket" 
        className="avatar-layer absolute z-10 h-[95vh] object-contain drop-shadow-[0_0_30px_rgba(255,0,60,0.4)] mt-8"
      />

      {/* 4. Projects (Showing Cards) */}
      <img 
        id="avatar-cards"
        src="/images/avatar_showing_cards.png" 
        alt="Nandan Showing Cards" 
        className="avatar-layer absolute z-10 h-[95vh] object-contain drop-shadow-[0_0_30px_rgba(255,0,60,0.4)] mt-8"
      />

      {/* 5. Services & Business (Placeholder full_avatar) */}
      {/* We can just fade back to #avatar-default for these since it uses full_avatar.png */}

      {/* 6. Contact - Taking out phone */}
      <img 
        id="avatar-phone-out"
        src="/images/avatar_taking_out_phone.png" 
        alt="Nandan Taking Phone Out" 
        className="avatar-layer absolute z-10 h-[95vh] object-contain drop-shadow-[0_0_30px_rgba(255,0,60,0.4)] mt-8"
      />

      {/* 7. Contact - Typing on phone */}
      <img 
        id="avatar-phone-type"
        src="/images/avatar_using_phone.png" 
        alt="Nandan Typing" 
        className="avatar-layer absolute z-10 h-[95vh] object-contain drop-shadow-[0_0_30px_rgba(255,0,60,0.4)] mt-8"
      />

      {/* 8. Contact - Calling */}
      <img 
        id="avatar-phone-call"
        src="/images/avatar_calling.png" 
        alt="Nandan Calling" 
        className="avatar-layer absolute z-10 h-[95vh] object-contain drop-shadow-[0_0_30px_rgba(255,0,60,0.4)] mt-8"
      />
    </div>
  );
}
