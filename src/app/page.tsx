import { getAllPosts } from "@/lib/mdx";
import { HomeClient } from "@/components/home-client";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);
  return <HomeClient recentPosts={recentPosts} />;
}
