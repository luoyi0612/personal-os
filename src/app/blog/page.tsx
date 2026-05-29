import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { BlogClient } from "@/components/blog-client";

export const metadata: Metadata = {
  title: "Blog",
  description: "所有文章",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}
