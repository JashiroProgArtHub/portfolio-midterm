import React from 'react';
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import Photo from "@/public/parola=selfie=pfp.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-background text-foreground flex items-center px-6 md:px-20 py-20 md:py-0 overflow-hidden ">
      
      {/* Sidebar Socials - Styled with Brand Cyan */}
      <div className="hidden md:flex absolute left-8 bottom-20 flex-col items-center gap-6">
        <div className="flex flex-col gap-4">
          <a href="#" className="text-text-gray hover:text-[#00A3C2] transition-colors"><FaFacebook size={20} /></a>
          <a href="#" className="text-text-gray hover:text-[#00A3C2] transition-colors"><FaInstagram size={20} /></a>
          <a href="#" className="text-text-gray hover:text-[#00A3C2] transition-colors"><FaTwitter size={20} /></a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ArrowDown size={16} className="text-[#00A3C2]/80 animate-bounce" />
          <span className="[writing-mode:vertical-lr] text-[10px] font-medium tracking-[0.2em] uppercase text-[#00A3C2]/80">
            Follow Me
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-12 max-w-7xl mx-auto">
        
        <div className="space-y-6 z-10 md:ml-12 order-2 md:order-1 text-center md:text-left">
          <div className="inline-block border-l-2 border-[#00A3C2]/80 pl-6">
            {/* Sub-header matching About Section style */}
            <p className="text-[12px] md:text-sm font-bold text-[#00A3C2]/80 mb-2 uppercase tracking-[0.15em]">
              Hey, I'm Jashen
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter text-text-black">
              <span>I </span>
              <span className="text-[#00A3C2]/80">BUILD </span>
              <span>DIGITAL</span> <br />
              <span>SOLUTIONS</span>
            </h1>
          </div>
          <p className="max-w-md mx-auto md:mx-0 text-base md:text-lg text-text-dark-gray leading-relaxed">
            Providing high-end web design and development services for startups 
            looking to scale their digital presence with a minimalist aesthetic.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button size="lg" className="rounded-full bg-[#00A3C2]/80 hover:bg-[#00A3C2] text-white px-10 w-full sm:w-auto shadow-md transition-all">
              Get Started Now
            </Button>
          </div>
        </div>

        {/* Profile Image - Styled like your About Photo */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-shadow group">
            <Image 
              src={Photo}
              alt="Jashen Loberanes" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              priority
            />
            {/* Subtle Overlay to match About banner vibe */}
            <div className="absolute inset-0 bg-[#00A3C2]/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Ambient Glows to match the Testimonial/Services background */}
          <div className="absolute -z-10 w-72 h-72 bg-[#00A3C2]/10 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -right-10 -z-10 w-40 h-40 bg-primary/5 blur-[80px] rounded-full" />
        </div>
      </div>
      
      {/* Mobile Socials */}
      <div className="flex md:hidden absolute bottom-8 left-0 right-0 justify-center gap-8 text-text-gray/60">
          <a href="#" className="hover:text-[#00A3C2]"><FaFacebook size={22} /></a>
          <a href="#" className="hover:text-[#00A3C2]"><FaInstagram size={22} /></a>
          <a href="#" className="hover:text-[#00A3C2]"><FaTwitter size={22} /></a>
      </div>
    </section>
  );
};

export default HeroSection;