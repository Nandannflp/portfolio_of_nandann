'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          isScrolled ? 'py-3 backdrop-blur-md bg-black/60 border-b border-white/10 shadow-lg' : 'py-5 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="text-xl font-black tracking-widest uppercase bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            Nandann.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 text-sm font-bold text-black shadow-[0_0_18px_rgba(45,212,191,0.35)] transition-all hover:scale-105 hover:from-cyan-300 hover:to-emerald-300 hover:shadow-[0_0_28px_rgba(45,212,191,0.55)]"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-gray-300 hover:text-white tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex h-14 items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 text-lg font-bold text-black shadow-[0_0_24px_rgba(45,212,191,0.5)]"
            >
              Book a Call
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
