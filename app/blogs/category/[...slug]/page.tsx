// app/blogs/category/[...slug]/page.tsx

import { blogPosts } from "@/constants/blogs"
import { BlogSection } from "@/components/feature/blogs/BlogSection"
import { notFound } from "next/navigation"

// 1. Tell Next.js which paths to pre-render (The "Static Params" code)
export async function generateStaticParams() {
  const categories = [...new Set(blogPosts.map((post) => post.category))]
  return categories.map((cat) => ({
    slug: [cat.toLowerCase()], 
  }))
}

// 2. The actual Page component
export default async function CategoryPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const rawCategory = decodeURIComponent(slug[0])

  const filteredPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === rawCategory.toLowerCase()
  )

  if (filteredPosts.length === 0) notFound()

  return (
    <main className="pt-10">
      <div className="text-center mb-[-40px] relative z-10">
        <h1 className="text-2xl font-bold capitalize">Category: {rawCategory}</h1>
      </div>
      <BlogSection blogPosts={filteredPosts} />
    </main>
  )
}