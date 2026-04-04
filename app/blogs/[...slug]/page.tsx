import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/constants/blogs";

type Props = {
  params: {
    slug: string[];
  };
};

export default function BlogPostPage({ params }: Props) {
  const slug = params.slug.join("/");
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-20 px-6">
      <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <Link href="/blogs" className="font-medium text-primary hover:underline">
          ← Back to blog
        </Link>
        <span className="px-3 py-1 rounded-full bg-muted text-xs uppercase tracking-[0.3em]">
          {post.category}
        </span>
        <span>{post.date}</span>
      </div>

      <h1 className="text-4xl font-bold sm:text-5xl mb-6">{post.title}</h1>
      <p className="text-lg text-muted-foreground mb-12">{post.description}</p>

      <div className="prose prose-invert max-w-none">
        <p>{post.content}</p>
        <p>
          This route supports deeper paths like
          <span className="font-semibold"> /blogs/design-systems/how-to-build-a-token-library</span>
          .
        </p>
      </div>
    </article>
  );
}
