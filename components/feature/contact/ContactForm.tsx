"use client"; // Required for state in Next.js App Router

import React, { useState } from 'react';
import { Mail, Globe, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission goes here (e.g., API call)
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-background text-foreground p-6 flex items-center justify-center transition-colors duration-500">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Content Side (Remains static) */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-black">
              Let's build <span className="text-text-cyan">something next.</span>
            </h2>
            <p className="text-lg text-text-gray max-w-md">
              Have a project in mind? Drop a message and let's discuss the technical details.
            </p>
          </div>
          {/* ... existing contact info blocks ... */}
        </div>

        {/* Form / Success Side */}
        <div className="relative">
          <div className="absolute -inset-2 bg-primary/10 rounded-[var(--radius-xl)] blur-2xl"></div>
          
          <div className="relative bg-background border border-border-blue/30 backdrop-blur-md p-8 md:p-10 rounded-[var(--radius-xl)] shadow-xl min-h-[500px] flex flex-col justify-center">
            
            {!isSubmitted ? (
              /* THE FORM */
              <form onSubmit={handleSubmit} className="animate-in fade-in duration-500 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-dark-gray ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-muted/30 border border-border rounded-[var(--radius)] px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-dark-gray ml-1">Your Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-muted/30 border border-border rounded-[var(--radius)] px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary hover:opacity-90 text-primary-foreground font-bold py-4 rounded-[var(--radius)] flex items-center justify-center gap-2 transition-all active:scale-[0.95]"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            ) : (
              /* SUCCESS STATE */
              <div className="text-center space-y-6 animate-in zoom-in-95 fade-in duration-500">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                    <CheckCircle2 className="w-12 h-12 text-primary animate-bounce" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-text-black">Message Sent!</h3>
                  <p className="text-text-gray">
                    Thanks for reaching out. I'll get back to you as soon as I've reviewed your details.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 text-text-cyan font-semibold hover:underline group"
                >
                  Send another message 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}