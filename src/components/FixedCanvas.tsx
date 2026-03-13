'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export default function FixedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  // Track entire window scroll
  const { scrollYProgress } = useScroll();

  const frameCount = 120; // 0 to 119 frames

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
        
        img.onload = () => {
            loadedCount++;
            if (loadedCount === frameCount) {
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
    
    // Draw the image
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
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
      />
      {/* Vigentte and gradient overlay to ensure text readability globally */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#0a0a0a]/90 pointer-events-none"></div>
    </div>
  );
}
