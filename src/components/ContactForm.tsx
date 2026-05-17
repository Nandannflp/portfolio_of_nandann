'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
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
          budget: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="absolute inset-x-0 -top-40 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Let&apos;s Build Something Powerful
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Ready to upgrade your digital ecosystem? Fill out the form below and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 bg-black/60 border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Got it!</h3>
              <p className="text-gray-400 text-lg">Your message has been received. I&apos;ll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Your Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-400 uppercase tracking-wider">What do you need help with?</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-gray-900 text-gray-500">Select a service</option>
                    <option value="AI Strategy" className="bg-gray-900 text-white">AI Strategy</option>
                    <option value="Website Design" className="bg-gray-900 text-white">Website Design</option>
                    <option value="Business Coaching" className="bg-gray-900 text-white">Business Coaching</option>
                    <option value="Other" className="bg-gray-900 text-white">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Your Budget Range</label>
                  <select 
                    id="budget" 
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-gray-900 text-gray-500">Select a range</option>
                    <option value="Under ₹10K" className="bg-gray-900 text-white">Under ₹10K</option>
                    <option value="₹10K - ₹50K" className="bg-gray-900 text-white">₹10K - ₹50K</option>
                    <option value="₹50K+" className="bg-gray-900 text-white">₹50K+</option>
                    <option value="Let's discuss" className="bg-gray-900 text-white">Let&apos;s discuss</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Tell me more about your project</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors resize-none"
                  placeholder="Share some details about your goals, current challenges, and desired timeline..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-full text-lg font-bold text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span>Send Message &rarr;</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
