import Link from "next/link";
import { blogPosts } from "@/constants/blogs";

export default function BlogsIndexPage() {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 md:px-20 py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-12 border-b border-border pb-8">
          <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-[0.3em] font-bold">
            Journal & Insights
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl tracking-tight text-text-black">
            Writing & Case Studies.
          </h1>
          <p className="max-w-2xl mt-4 text-text-dark-gray leading-relaxed">
            Exploring the intersection of full-stack development, UI design systems, 
            and technopreneurship.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.slug} 
              className="group border border-border rounded-2xl p-6 shadow-sm bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10 hover:border-[#00A3C2]/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase tracking-wider text-[#00A3C2]/80 font-bold px-2 py-1 bg-[#00A3C2]/10 rounded-md">
                  {post.category}
                </span>
                <span className="text-xs text-text-dark-gray/60">{post.date}</span>
              </div>
              
              <h2 className="text-xl font-bold mb-3 group-hover:text-[#00A3C2] transition-colors">
                {post.title}
              </h2>
              
              <p className="text-sm text-text-dark-gray leading-relaxed mb-6 line-clamp-3">
                {post.description}
              </p>
              
              <Link 
                href={`/blogs/${post.slug}`} 
                className="text-sm font-medium text-[#00A3C2]/80 hover:text-[#00A3C2] flex items-center gap-1.5 transition-colors"
              >
                Read Article <span className="text-lg">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}