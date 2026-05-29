"use client";

import Link from "next/link";
import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/mdx";

const EASE: Easing = "easeOut";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: EASE },
  }),
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "GH" },
  { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
  { label: "Email", href: "mailto:hello@example.com", icon: "✉" },
];

export function HomeClient({ recentPosts }: { recentPosts: PostMeta[] }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <motion.section
        className="mb-24"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.p
          variants={fadeUp}
          custom={0}
          className="text-lg text-muted-foreground mb-2"
        >
          你好，我是
        </motion.p>
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
        >
          <span className="text-primary">罗怡</span>
          <span className="text-muted-foreground font-normal text-3xl sm:text-4xl ml-3">| Glorious</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8"
        >
          欢迎来到我的数字花园 🌱 记录成长，内容沉淀，共同进步~
        </motion.p>
        <motion.div variants={fadeUp} custom={3} className="flex items-center gap-3 mb-8">
          <Link
            href="/blog"
            className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-[var(--primary-pressed)] transition-colors"
          >
            我的博客
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            关于我
          </Link>
        </motion.div>
        <motion.div variants={fadeUp} custom={4} className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </motion.section>

      {/* Feature cards */}
      <motion.section
        className="mb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { bg: "var(--tint-sky)", emoji: "⚡", title: "技术", desc: "前端、后端、工程化实践" },
            { bg: "var(--tint-mint)", emoji: "🎨", title: "设计", desc: "UI/UX、设计系统、视觉语言" },
            { bg: "var(--tint-peach)", emoji: "💡", title: "思考", desc: "方法论、认知框架、生活感悟" },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              custom={i}
              className="rounded-xl p-6"
              style={{ backgroundColor: card.bg }}
            >
              <div className="text-2xl mb-3">{card.emoji}</div>
              <h3 className="font-semibold text-base mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center justify-between mb-6"
          >
            <h2 className="text-xl font-semibold">最近文章</h2>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              全部 <ArrowRight size={12} />
            </Link>
          </motion.div>
          <div className="divide-y divide-border">
            {recentPosts.map((post, i) => (
              <motion.div key={post.slug} variants={fadeUp} custom={i + 1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-start justify-between py-4 group"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {post.description}
                    </p>
                  </div>
                  <time className="text-xs text-muted-foreground shrink-0 mt-0.5">
                    {post.date}
                  </time>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
