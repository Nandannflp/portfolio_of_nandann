'use client';

import React, { useEffect, useState } from 'react';

export default function SectionScroller() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSections, setTotalSections] = useState(1);

  useEffect(() => {
    // Find all section tags on the page
    const sections = Array.from(document.querySelectorAll('section'));
    setTotalSections(Math.max(sections.length, 1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Triggers when at least 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    // Handle dynamic updates if sections are added/removed
    const mutationObserver = new MutationObserver(() => {
      const updatedSections = Array.from(document.querySelectorAll('section'));
      setTotalSections(Math.max(updatedSections.length, 1));
      // Re-observe
      observer.disconnect();
      updatedSections.forEach((section) => observer.observe(section));
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');
  
  // The line is 128px high (h-32). The indicator is 32px high (h-8).
  // The maximum top distance it can travel is 128 - 32 = 96px.
  const maxTravel = 96;
  const topPosition = totalSections > 1 ? (activeIndex / (totalSections - 1)) * maxTravel : 0;

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-cp-yellow font-mono text-sm z-40 pointer-events-none">
      <span>{formatNumber(activeIndex + 1)}</span>
      
      <div className="w-px h-32 bg-white/20 relative">
        <div 
          className="absolute left-0 w-1 h-8 bg-cp-yellow -translate-x-[1.5px] transition-all duration-500 ease-out"
          style={{ top: `${topPosition}px` }}
        ></div>
      </div>
      
      <span className="text-white">/{formatNumber(totalSections)}</span>
    </div>
  );
}
