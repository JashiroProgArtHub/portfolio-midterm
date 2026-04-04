import Link from 'next/link';

interface Post {
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

export const BlogCard = ({ post }: { post: Post }) => (
  <article className="group relative overflow-hidden border border-border rounded-2xl p-6 bg-secondary/20 hover:bg-secondary/30 hover:border-[#00A3C2]/50 transition-all duration-500">
    <div className="absolute -inset-px bg-gradient-to-br from-[#00A3C2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] uppercase tracking-wider text-[#00A3C2] font-bold px-2 py-1 bg-[#00A3C2]/10 rounded-md border border-[#00A3C2]/20">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground/60">{post.date}</span>
      </div>
      
      <h2 className="text-xl font-bold mb-3 group-hover:text-[#00A3C2] transition-colors leading-tight">
        {post.title}
      </h2>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-3">
        {post.description}
      </p>
      
      <Link 
        href={`/blogs/${post.slug}`} 
        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00A3C2]/10 text-[#00A3C2] text-sm font-semibold hover:bg-[#00A3C2] hover:text-white transition-all duration-300 gap-2 border border-[#00A3C2]/20"
      >
        View Case Study
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  </article>
);