"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/projects";
import Image from "next/image";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Web Development",
    "Web Design",
    "UI/UX Design",
    "E-commerce",
    "Full-Stack Development",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background text-foreground px-6 md:px-20 pb-24 pt-36">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-border pb-10">
          <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-[0.3em] font-bold mb-2">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-black">
            Featured Works
          </h1>
          <p className="mt-4 text-text-dark-gray max-w-2xl leading-relaxed">
            A curated selection of digital experiences, design systems, and
            software solutions built with a focus on performance and clean UI.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#00A3C2]/10 border-[#00A3C2]/50 text-[#00A3C2]"
                    : "bg-transparent border-border text-text-dark-gray/60 hover:border-[#00A3C2]/30"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-xs order-1 md:order-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00A3C2]/60" />
            <Input
              placeholder="Search project..."
              className="pl-11 pr-10 h-11 rounded-xl bg-text-greyish-cyan/10 border-border focus-visible:ring-[#00A3C2]/40 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-dark-gray/40 hover:text-[#00A3C2]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group"
              >
                <Card className="h-full overflow-hidden border border-border rounded-2xl bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10 hover:border-[#00A3C2]/40 transition-all duration-500 shadow-sm">
                  <div className="aspect-video relative overflow-hidden bg-muted border-b border-border">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-md rounded-full border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-[#00A3C2]" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#00A3C2]/80 font-bold px-2 py-1 bg-[#00A3C2]/10 rounded-md">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold mt-3 text-text-black group-hover:text-[#00A3C2] transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-widest text-text-dark-gray/60 font-bold">
                            Client
                          </span>
                          <p className="text-xs text-text-dark-gray truncate">
                            {project.client}
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-widest text-text-dark-gray/60 font-bold">
                            View
                          </span>
                          <p className="text-xs text-[#00A3C2]/80 font-medium">
                            Case Study →
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-24 border border-dashed border-border rounded-2xl">
              <p className="text-text-dark-gray/60 italic">
                No projects match your current filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-sm font-bold text-[#00A3C2] hover:underline"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
