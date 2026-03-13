'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  // We track the scroll progress of the container (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameCount = 120; // 0 to 119 frames

  useEffect(() => {
    // Force device screen height to avoid mobile browser resize bugs on sticky container
    if (typeof window !== 'undefined') {
       document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        // Image filenames: frame_000_delay-0.066s.webp, frame_001_..., frame_119_...
        const paddedIndex = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
        
        img.onload = () => {
            loadedCount++;
            if (loadedCount === frameCount) {
                // Preload complete, store in state to unlock rendering
                setImages(loadedImages);
            }
        };
        img.onerror = () => {
             console.error(`Failed to load frame: ${img.src}`);
        };
        loadedImages.push(img);
    }
  }, []);

  const drawImage = (img: HTMLImageElement | undefined) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);

    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === frameCount) {
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );
        requestAnimationFrame(() => drawImage(images[frameIndex]));
    }
  });

  useEffect(() => {
    if (images.length === frameCount) {
        // Draw initial frame if we missed the scroll event
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollYProgress.get() * frameCount)
        );
        drawImage(images[frameIndex]);
    }

    const handleResize = () => {
      if (images.length === frameCount) {
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(scrollYProgress.get() * frameCount)
        );
        drawImage(images[frameIndex]);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
