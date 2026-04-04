import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";


const projects = [
  { id: 1, title: "SysGems", category: "Full-Stack System" },
  { id: 2, title: "SocratAI", category: "AI Learning Tool" },
  { id: 3, title: "Project Three", category: "Web Design" },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-20 transition-colors">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="relative inline-block text-lg font-semibold text-[#00A3C2]/80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-10 after:bg-[#00A3C2]/80 uppercase tracking-widest">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group relative border border-border aspect-square rounded-2xl overflow-hidden bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10 hover:border-[#00A3C2]/40 transition-all duration-500 cursor-pointer shadow-sm"
            >
              <CardContent className="p-0 h-full flex flex-col items-center justify-center relative">
                <div className="w-16 h-16 rounded-full bg-[#00A3C2]/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <div className="w-3 h-3 rounded-full bg-[#00A3C2]/80 animate-pulse" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
                  <p className="text-[10px] uppercase tracking-wider text-[#00A3C2]/80 font-bold mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-text-black tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 flex justify-end">
          <Link 
            href="/projects" 
            className="text-sm font-medium text-[#00A3C2]/80 hover:text-[#00A3C2] flex items-center gap-1.5 transition-colors"
          >
            View All Work <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}