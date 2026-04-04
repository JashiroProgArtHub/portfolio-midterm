import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gray-40 backdrop-blur-md rounded-[2rem] p-8 md:p-20 text-center shadow-xl border border-border">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 w-80 h-80 bg-primary/20 blur-[120px] rounded-full" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-text-black leading-tight">
              Ready to launch your <br />
              <span className="text-text-cyan uppercase">next big idea?</span>
            </h2>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-text-gray font-light">
              Let's collaborate to build a high-performance digital foundation that 
              doesn't just meet your current needs but evolves and scales alongside 
              your loftiest ambitions.
            </p>

            <div className="flex justify-center pt-4">
              <Link href="/contact" passHref>
                <Button 
                  size="lg" 
                  className="rounded-full bg-primary hover:opacity-90 text-primary-foreground px-10 py-6 text-lg transition-all hover:scale-105 shadow-lg shadow-primary/20"
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