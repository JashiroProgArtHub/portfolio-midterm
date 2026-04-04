"use client"; 

import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-background text-foreground p-6 flex items-center justify-center transition-colors duration-500">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-[0.2em] font-bold">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-black leading-tight">
              Let&apos;s build <span className="text-[#00A3C2]/80">something next.</span>
            </h2>
            <p className="text-lg text-text-dark-gray max-w-md leading-relaxed">
              Have a project in mind? Drop a message and let&apos;s discuss the technical details of your next digital solution.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-text-greyish-cyan/20 border border-border text-[#00A3C2]/80 group-hover:bg-[#00A3C2]/10 transition-colors">
                <Send size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-text-dark-gray/60 font-bold">Email Me</p>
                <p className="text-text-black font-medium">hello@jashen.dev</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-[#00A3C2]/5 rounded-3xl blur-3xl -z-10"></div>
          
          <div className="relative bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10 border border-border backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-sm min-h-[500px] flex flex-col justify-center transition-all hover:border-[#00A3C2]/30">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-bold text-[#00A3C2]/80 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00A3C2]/30 focus:border-[#00A3C2]/80 outline-none transition-all placeholder:text-text-dark-gray/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-bold text-[#00A3C2]/80 ml-1">Your Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell me about your project ambitions..."
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00A3C2]/30 focus:border-[#00A3C2]/80 outline-none transition-all resize-none placeholder:text-text-dark-gray/30"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#00A3C2]/80 hover:bg-[#00A3C2] text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-[#00A3C2]/20"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6 animate-in zoom-in-95 fade-in duration-500">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-[#00A3C2]/10 border border-[#00A3C2]/20">
                    <CheckCircle2 className="w-12 h-12 text-[#00A3C2]/80 animate-bounce" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-text-black">Message Sent!</h3>
                  <p className="text-text-dark-gray max-w-[280px] mx-auto">
                    Thanks for reaching out. I&apos;ll review your details and get back to you shortly.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 text-[#00A3C2]/80 font-bold text-sm uppercase tracking-widest hover:text-[#00A3C2] group transition-colors"
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