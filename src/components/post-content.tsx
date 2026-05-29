import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Tag } from "lucide-react";
import type { Post } from "@/lib/mdx";

export function PostContent({ post }: { post: Post }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft size={14} /> 返回列表
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <time>{post.date}</time>
          {post.tags.length > 0 && (
            <div className="flex items-center gap-1.5">
              <Tag size={12} />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-[var(--tint-lavender)] text-purple-700 dark:text-purple-300 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {post.description && (
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        )}
      </header>

      <hr className="border-border mb-10" />

      <article className="prose">
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>
    </div>
  );
}
