import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Monitor, Layout, Code } from "lucide-react";
import ProjectImage from "@/public/parola=selfie=pfp.jpg"; 

const services = [
  {
    title: "UI/ UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    icon: <Layout className="w-6 h-6 text-text-cyan" />,
  },
  {
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    icon: <Monitor className="w-6 h-6 text-text-cyan" />,
  },
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    icon: <Code className="w-6 h-6 text-text-cyan" />,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-text-black">
            My <span className="text-text-cyan">Services</span>
          </h2>
          <p className="text-text-dark-gray max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-border bg-card hover:border-text-cyan/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-bold text-text-black">{service.title}</h3>
                  
                  <div className="relative mt-6 aspect-video rounded-xl overflow-hidden border border-border">
                    <div className="absolute inset-0 bg-secondary/20 translate-y-[-8px] scale-[0.95] rounded-xl -z-10" />
                    <Image 
                      src={ProjectImage} 
                      alt={service.title}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    
                    <Link href="/projects">
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-text-cyan rounded-full flex items-center justify-center text-white transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                        <ArrowUpRight size={24} />
                      </div>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/projects">
            <Button size="lg" className="rounded-full bg-text-cyan hover:opacity-90 text-white px-10">
              See All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;