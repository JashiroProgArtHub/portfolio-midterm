import { blogPosts } from "@/constants/blogs"
import {BlogSection} from "@/components/feature/blogs/BlogSection"

type Props = {
  params: Promise<{ date?: string[] }>
}

export default async function DatePage({ params }: Props) {
  const { date } = await params

  let filtered = blogPosts

  if (date) {
    const [year, month, day] = date

    filtered = blogPosts.filter((blog) => {
      const d = new Date(blog.date)

      if (year && d.getFullYear().toString() !== year) return false
      if (month && String(d.getMonth() + 1).padStart(2, "0") !== month) return false
      if (day && String(d.getDate()).padStart(2, "0") !== day) return false

      return true
    })
  }

  return (
    <BlogSection blogPosts={filtered} />
  );

}