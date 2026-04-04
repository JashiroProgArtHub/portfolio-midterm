import { notFound } from "next/navigation";
import { blogPosts } from "@/constants/blogs";
import { PostHero } from "@/components/feature/blogs/PostHero";
import { PostNavigation } from "@/components/feature/blogs/PostNavigation";

interface Props {
  params: Promise<{
    slug: string[]; 
  }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug: slugArray } = await params;
  
  const slug = slugArray.join("/");
  
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((item) => item.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || blogPosts[0];

  return (
    <article className="min-h-screen bg-background text-foreground pb-20">
      <PostHero 
        title={post.title} 
        category={post.category} 
        date={post.date} 
        description={post.description} 
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="whitespace-pre-wrap leading-extra-relaxed opacity-90">
            {post.content}
          </p>
        </div>

        <PostNavigation nextPost={nextPost} />
      </div>
    </article>
  );
}