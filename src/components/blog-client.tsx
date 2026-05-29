"use client";

import Link from "next/link";
import { useState } from "react";
import { Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/lib/mdx";

const CATEGORIES = [
  { id: "", label: "All", zh: "全部文章" },
  { id: "frontend", label: "Frontend Engineering", zh: "前端工程" },
  { id: "ai-engineering", label: "AI Engineering", zh: "AI 工程实践" },
  { id: "project-management", label: "Project Management", zh: "项目管理" },
  { id: "growth", label: "Long-term Growth", zh: "长期成长" },
];

export function BlogClient({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);
  const filtered = active ? posts.filter((p) => p.category === active) : posts;
  const activeLabel = CATEGORIES.find((c) => c.id === active);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex gap-10">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col gap-1 w-44 shrink-0 pt-1">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-3">分类</p>
        {CATEGORIES.map(({ id, label, zh }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActive(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "relative flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left transition-colors group",
              active === id
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            <span className="truncate">
              {hovered === id ? zh : label}
            </span>
            <span className="text-xs opacity-50 ml-2 shrink-0">
              {id ? posts.filter((p) => p.category === id).length : posts.length}
            </span>
          </button>
        ))}
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-1">
            {activeLabel?.zh ?? "全部文章"}
          </h1>
          <p className="text-sm text-muted-foreground">共 {filtered.length} 篇</p>
        </div>

        {/* Mobile category select */}
        <div className="flex flex-wrap gap-2 mb-6 md:hidden">
          {CATEGORIES.map(({ id, zh }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm border transition-colors",
                active === id
                  ? "bg-primary text-white border-primary"
                  : "border-border text-muted-foreground hover:bg-accent"
              )}
            >
              {zh}
            </button>
          ))}
        </div>

        <div className="divide-y divide-border">
          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-foreground text-sm">暂无文章</p>
          )}
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-6 group gap-3"
            >
              <div className="flex-1 min-w-0">
                <h2 className="font-medium text-base group-hover:text-primary transition-colors mb-1">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {post.description}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <Tag size={11} className="text-muted-foreground" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-[var(--tint-lavender)] text-purple-700 dark:text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <time className="text-sm text-muted-foreground shrink-0 sm:mt-0.5">
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
