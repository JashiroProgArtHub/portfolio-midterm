import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { SiFigma, SiReact, SiCodeforces } from "react-icons/si"; 
import ProjectImage from "@/public/parola=selfie=pfp.jpg"; 

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and aesthetically pleasing interfaces focused on user-centric experiences and high-end startup aesthetics.",
    icon: <SiFigma />,
  },
  {
    title: "Web Design",
    description: "Responsive, high-performance layouts built with a minimalist approach, focusing on glassmorphism and clean typography.",
    icon: <SiReact />,
  },
  {
    title: "Web Development",
    description: "Full-stack solutions using modern frameworks like Next.js and Laravel to build scalable, robust web applications.",
    icon: <SiCodeforces />,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-wider mb-2">
            What I Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-black tracking-tight">
            My <span className="text-[#00A3C2]/80">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border border-border rounded-2xl shadow-sm bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10 transition-all duration-300 hover:border-[#00A3C2]/40"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-background rounded-xl text-[#00A3C2]/80 text-2xl border border-border group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="relative text-lg font-semibold text-text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#00A3C2]/80">
                    {service.title}
                  </h3>
                </div>

                <p className="text-text-dark-gray text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-inner">
                  <Image 
                    src={ProjectImage} 
                    alt={service.title}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  <Link href="/projects">
                    <div className="absolute bottom-3 right-3 w-10 h-10 bg-[#00A3C2]/90 rounded-full flex items-center justify-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer backdrop-blur-md">
                      <ArrowUpRight size={20} />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/projects">
            <Button 
              size="lg" 
              className="rounded-full bg-[#00A3C2]/80 hover:bg-[#00A3C2] text-white px-10 transition-all shadow-md"
            >
              See All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;