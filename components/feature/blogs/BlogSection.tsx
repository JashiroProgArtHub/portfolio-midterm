import { BlogCard } from './BlogCard';
import BlogFilters from './BlogFilters';

interface Post {
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;
  content?: string; 
}

interface BlogSectionProps {
  blogPosts: Post[];
}

export const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 md:px-20 py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 border-b border-border pb-8">
          <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-[0.3em] font-bold">
            Journal & Insights
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl tracking-tight">
            Writing & Case Studies.
          </h1>
          <p className="max-w-2xl mt-4 text-muted-foreground leading-relaxed">
            Exploring the intersection of full-stack development, UI design systems, 
            and technopreneurship.
          </p>
        </div>

        <BlogFilters />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};