"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpecialText } from "@/components/ui/special-text";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  // We optionally disable body scrolling while splash screen is active
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Ensure they start at the top
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <div className="text-2xl md:text-4xl lg:text-5xl text-white tracking-[0.2em] uppercase">
            <SpecialText 
              speed={20} 
              delay={0.2}
              onComplete={() => {
                // Add a small delay after text finishes before fading out
                setTimeout(() => setShow(false), 900);
              }}
            >
              Introducing Myself
            </SpecialText>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
