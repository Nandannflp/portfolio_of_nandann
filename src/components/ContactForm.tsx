'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({
          name: '',
          email: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="relative z-20 w-full">
      <div className="absolute inset-x-0 -top-40 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-cp-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cyberpunk font-black uppercase tracking-widest text-cp-yellow mb-6 drop-shadow-[0_0_10px_rgba(255,211,0,0.6)]">
            TRANSMIT SECURE DATA
          </h2>
          <p className="font-mono text-sm md:text-base text-cp-yellow/80 uppercase tracking-widest max-w-2xl mx-auto">
            Ready to upgrade your digital ecosystem? Submit the form below for processing. Response estimated within 24 cycles.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 bg-black/60 border-cp-yellow/30 shadow-[0_0_30px_rgba(252,238,10,0.1)] relative">
          <div className="absolute -left-[2px] -top-2 w-6 h-6 border-t-2 border-l-2 border-cp-yellow"></div>
          <div className="absolute -right-[2px] -top-2 w-6 h-6 border-t-2 border-r-2 border-cp-yellow"></div>
          <div className="absolute -left-[2px] -bottom-2 w-6 h-6 border-b-2 border-l-2 border-cp-yellow"></div>
          <div className="absolute -right-[2px] -bottom-2 w-6 h-6 border-b-2 border-r-2 border-cp-yellow"></div>
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-cp-yellow/10 text-cp-yellow border-2 border-cp-yellow flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,211,0,0.5)]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 relative z-10 drop-shadow-[0_0_5px_rgba(255,211,0,1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-cyberpunk text-3xl tracking-widest text-cp-yellow mb-4 drop-shadow-[0_0_8px_rgba(255,211,0,0.8)]">TRANSMISSION SUCCESS</h3>
              <p className="font-mono text-cp-yellow/80 text-sm uppercase tracking-widest">Data packet received. Standby for response.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-cyberpunk text-cp-yellow text-xs tracking-[0.2em] uppercase">User_ID *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    suppressHydrationWarning={true}
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-cp-yellow/30 rounded-none px-4 py-3 font-mono text-cp-yellow placeholder-cp-yellow/50 focus:outline-none focus:border-cp-yellow focus:ring-1 focus:ring-cp-yellow/50 transition-all shadow-[inset_0_0_10px_rgba(255,211,0,0.05)] focus:shadow-[inset_0_0_15px_rgba(255,211,0,0.15)]"
                    placeholder="Enter designation..."
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-cyberpunk text-cp-yellow text-xs tracking-[0.2em] uppercase">Comm_Link *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    suppressHydrationWarning={true}
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-cp-yellow/30 rounded-none px-4 py-3 font-mono text-cp-yellow placeholder-cp-yellow/50 focus:outline-none focus:border-cp-yellow focus:ring-1 focus:ring-cp-yellow/50 transition-all shadow-[inset_0_0_10px_rgba(255,211,0,0.05)] focus:shadow-[inset_0_0_15px_rgba(255,211,0,0.15)]"
                    placeholder="Enter email address..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="font-cyberpunk text-cp-yellow text-xs tracking-[0.2em] uppercase">Directive</label>
                <select 
                  id="service" 
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-cp-yellow/30 rounded-none px-4 py-3 font-mono text-cp-yellow focus:outline-none focus:border-cp-yellow focus:ring-1 focus:ring-cp-yellow/50 transition-all shadow-[inset_0_0_10px_rgba(255,211,0,0.05)] focus:shadow-[inset_0_0_15px_rgba(255,211,0,0.15)] appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-gray-900 text-cp-yellow/50 font-mono">Select directive...</option>
                  <option value="AI Strategy" className="bg-gray-900 text-cp-yellow font-mono">AI Strategy</option>
                  <option value="Website Design" className="bg-gray-900 text-cp-yellow font-mono">Website Design</option>
                  <option value="Business Coaching" className="bg-gray-900 text-cp-yellow font-mono">Business Coaching</option>
                  <option value="Other" className="bg-gray-900 text-cp-yellow font-mono">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-cyberpunk text-cp-yellow text-xs tracking-[0.2em] uppercase">Payload_Data</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-cp-yellow/30 rounded-none px-4 py-3 font-mono text-cp-yellow placeholder-cp-yellow/50 focus:outline-none focus:border-cp-yellow focus:ring-1 focus:ring-cp-yellow/50 transition-all shadow-[inset_0_0_10px_rgba(255,211,0,0.05)] focus:shadow-[inset_0_0_15px_rgba(255,211,0,0.15)] resize-none"
                  placeholder="Input mission details, objectives, and parameters here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="clip-button relative group w-full py-5 text-lg font-cyberpunk font-black text-black bg-cp-yellow hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,211,0,0.3)] hover:shadow-[0_0_30px_rgba(255,211,0,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center uppercase tracking-widest"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 font-mono">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ENCRYPTING...
                  </span>
                ) : (
                  <span>INITIATE PROTOCOL &rarr;</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
