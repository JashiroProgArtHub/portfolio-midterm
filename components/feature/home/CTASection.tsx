import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Container styled with your glassmorphic About/Service card style */}
        <div className="relative overflow-hidden bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10 backdrop-blur-md rounded-2xl p-8 md:p-24 text-center shadow-sm border border-border">
          
          {/* Brand Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 w-80 h-80 bg-[#00A3C2]/15 blur-[120px] rounded-full" />

          <div className="relative z-10 space-y-6">
            {/* Consistent Sub-label */}
            <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-[0.2em] font-bold">
              Let's Work Together
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-text-black leading-[1.1]">
              Ready to launch your <br />
              <span className="text-[#00A3C2]/80">next big idea?</span>
            </h2>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-text-dark-gray font-normal leading-relaxed">
              Let's collaborate to build a high-performance digital foundation that 
              doesn't just meet your current needs but evolves and scales alongside 
              your loftiest ambitions.
            </p>

            <div className="flex justify-center pt-6">
              <Link href="/contact" passHref>
                <Button 
                  size="lg" 
                  className="rounded-full bg-[#00A3C2]/80 hover:bg-[#00A3C2] text-white px-12 py-7 text-lg transition-all hover:scale-105 shadow-md shadow-[#00A3C2]/20"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;