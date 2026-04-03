import React from 'react';
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import Photo from "@/public/parola=selfie=pfp.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-background text-foreground flex items-center px-6 md:px-20 py-20 md:py-0 overflow-hidden ">
      
      <div className="hidden md:flex absolute left-8 bottom-20 flex-col items-center gap-6">
        <div className="flex flex-col gap-4">
          <a href="#" className="text-text-gray hover:text-text-cyan transition-colors"><FaFacebook size={20} /></a>
          <a href="#" className="text-text-gray hover:text-text-cyan transition-colors"><FaInstagram size={20} /></a>
          <a href="#" className="text-text-gray hover:text-text-cyan transition-colors"><FaTwitter size={20} /></a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ArrowDown size={16} className="text-text-cyan" />
          <span className="[writing-mode:vertical-lr] text-sm font-medium tracking-widest uppercase text-text-light-gray">
            Follow Me
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-12 max-w-7xl mx-auto">
        
        <div className="space-y-6 z-10 md:ml-12 order-2 md:order-1 text-center md:text-left">
          <div className="inline-block border-l-4 md:border-l-2 border-primary pl-4">
            <p className="text-lg md:text-xl font-medium text-text-gray mb-2 uppercase tracking-wide">
              Hey, I'm Jashen
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-text-black">
              <span>I </span>
              <span className="text-text-cyan">BUILD </span>
              <span>DIGITAL</span> <br />
              <span>SOLUTIONS</span>
            </h1>
          </div>
          <p className="max-w-md mx-auto md:mx-0 text-base md:text-lg text-text-dark-gray">
            Providing high-end web design and development services for startups 
            looking to scale their digital presence.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button size="lg" className="rounded-full bg-primary hover:opacity-90 text-primary-foreground px-8 w-full sm:w-auto">
              Get Started Now
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-[300px] sm:max-w-md aspect-square rounded-2xl overflow-hidden border border-border">
            <Image 
              src={Photo}
              alt="Profile" 
              className="object-cover w-full h-full"
              priority
            />
          </div>
          
          <div className="absolute -z-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        </div>
      </div>
      
      <div className="flex md:hidden absolute bottom-8 left-0 right-0 justify-center gap-8 text-text-gray">
          <a href="#" className="hover:text-text-cyan"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-text-cyan"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-text-cyan"><FaTwitter size={24} /></a>
      </div>
    </section>
  );
};

export default HeroSection;