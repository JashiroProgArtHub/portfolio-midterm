import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-muted-foreground mb-8">{project.category} for {project.client}</p>
      
      <div className="rounded-2xl overflow-hidden bg-muted aspect-video mb-10">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      
      <article className="prose lg:prose-xl">
        <p>Project details and case study content goes here...</p>
      </article>
    </div>
  );
}