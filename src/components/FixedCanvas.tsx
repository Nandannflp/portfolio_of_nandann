'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export default function FixedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store images in a ref to avoid triggering re-renders on each frame load
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(120).fill(null));
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const frameCount = 120;

  const drawImage = useCallback((img: HTMLImageElement | null | undefined) => {
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
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }, []);

  // Returns the nearest already-loaded frame so we never show a blank canvas while loading
  const getNearestFrame = useCallback((frameIndex: number): HTMLImageElement | null => {
    const images = imagesRef.current;
    if (images[frameIndex]) return images[frameIndex];
    for (let i = frameIndex - 1; i >= 0; i--) {
      if (images[i]) return images[i];
    }
    for (let i = frameIndex + 1; i < frameCount; i++) {
      if (images[i]) return images[i];
    }
    return null;
  }, [frameCount]);

  useEffect(() => {
    const images = imagesRef.current;

    const loadFrame = (i: number, priority?: 'high' | 'low' | 'auto') => {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      // Give the first frame high fetch priority so the browser downloads it first
      if (priority) (img as HTMLImageElement & { fetchPriority: 'high' | 'low' | 'auto' }).fetchPriority = priority;
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
      img.onload = () => {
        images[i] = img;
        // Draw immediately as soon as the first frame is ready — no more waiting for all 120
        if (i === 0) {
          setFirstFrameReady(true);
          drawImage(img);
        }
      };
      img.onerror = () => console.error(`Failed to load frame: ${img.src}`);
    };

    // 1. Load frame 0 first with high priority for instant LCP
    loadFrame(0, 'high');

    // 2. Load the rest after a small delay so frame 0 gets a head start
    const timer = setTimeout(() => {
      for (let i = 1; i < frameCount; i++) {
        loadFrame(i, 'low');
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [drawImage]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
    const img = getNearestFrame(frameIndex);
    if (img) requestAnimationFrame(() => drawImage(img));
  });

  useEffect(() => {
    if (!firstFrameReady) return;

    const handleResize = () => {
      const frameIndex = Math.min(frameCount - 1, Math.floor(scrollYProgress.get() * frameCount));
      const img = getNearestFrame(frameIndex);
      if (img) drawImage(img);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [firstFrameReady, scrollYProgress, drawImage, getNearestFrame]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-100 transition-opacity duration-700"
      />
      {/* Spotlight Overlay */}
      <div 
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-colors"
        style={{
          background: 'radial-gradient(circle 400px at var(--x, -1000px) var(--y, -1000px), rgba(0,0,0,0.1) 0%, black 100%)'
        }}
      ></div>
    </div>
  );
}
