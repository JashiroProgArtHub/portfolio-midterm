import { blogPosts } from "@/constants/blogs";
import {BlogSection} from "@/components/feature/blogs/BlogSection";

export default function BlogsIndexPage() {
  return (
    <BlogSection blogPosts={blogPosts} />
  );
}