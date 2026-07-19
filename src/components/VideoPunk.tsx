import React from 'react';

export default function VideoPunk() {
  return (
    <div className="flex flex-wrap gap-6 z-20 w-full">
      {/* Solvire Project Card */}
      <a href="https://www.solvire.in/" target="_blank" rel="noopener noreferrer" className="clip-videopunk bg-black w-64 h-36 md:w-80 md:h-44 relative group cursor-pointer overflow-hidden transition-all duration-300 block">
        {/* Background Image (Revealed on hover) */}
        <img src="/images/Solvire.png" alt="Solvire Solar Network" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Yellow Overlay (Visible by default, hidden on hover) */}
        <div className="absolute inset-0 bg-[#c6cc00]/95 group-hover:opacity-0 transition-opacity duration-500 flex items-center justify-center">
          <div className="flex items-center gap-2">
            {/* Text */}
            <span className="font-cyberpunk text-black text-lg md:text-xl font-black tracking-[0.2em] uppercase">
              SOLVIRE
            </span>
          </div>
        </div>
      </a>

      {/* Second Project Card (Adwiser) */}
      <a href="https://www.adwiser.co.in/" target="_blank" rel="noopener noreferrer" className="clip-videopunk bg-black w-64 h-36 md:w-80 md:h-44 relative group cursor-pointer overflow-hidden transition-all duration-300 block">
        {/* Background Image (Revealed on hover) */}
        <img src="/images/Adwiser.png?v=1" alt="Adwiser AI-Powered Digital Growth" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Yellow Overlay (Visible by default, hidden on hover) */}
        <div className="absolute inset-0 bg-[#c6cc00]/95 group-hover:opacity-0 transition-opacity duration-500 flex items-center justify-center">
          <div className="flex items-center gap-2">
            {/* Text */}
            <span className="font-cyberpunk text-black text-lg md:text-xl font-black tracking-[0.2em] uppercase">
              ADWISER
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
