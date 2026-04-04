import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  description: string;
}

interface PostNavigationProps {
  nextPost: Post;
}

export const PostNavigation = ({ nextPost }: PostNavigationProps) => (
  <div className="mt-20 pt-12 border-t border-border">
    <p className="text-sm text-muted-foreground mb-6 font-medium">Continue Reading</p>
    <Link 
      href={`/blogs/${nextPost.slug}`} 
      className="group block p-8 rounded-2xl border border-border bg-secondary/10 hover:border-[#00A3C2]/40 transition-all backdrop-blur-sm"
    >
      <span className="text-xs text-[#00A3C2] font-bold tracking-[0.2em] uppercase">Next Up</span>
      <h3 className="mt-2 text-2xl font-bold group-hover:text-[#00A3C2] transition-colors">
        {nextPost.title}
      </h3>
      <p className="mt-2 text-muted-foreground line-clamp-2">
        {nextPost.description}
      </p>
    </Link>
  </div>
);