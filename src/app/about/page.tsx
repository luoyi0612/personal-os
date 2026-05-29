import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "关于我",
};

const skills = [
  { category: "前端", items: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
  { category: "后端", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
  { category: "工具", items: ["Git", "Docker", "Figma", "VS Code"] },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="w-16 h-16 rounded-xl bg-[var(--tint-lavender)] flex items-center justify-center text-2xl mb-6">
          👋
        </div>
        <h1 className="text-4xl font-semibold tracking-tight mb-4">关于我</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          你好，我是一名全栈开发者，热爱构建优雅的产品和探索新技术。
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">我在做什么</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            目前专注于 Web 开发，喜欢用 React 和 Next.js 构建用户界面，
            同时对设计系统和开发者体验有浓厚兴趣。
          </p>
          <p>
            这个博客是我的数字花园，用来记录技术探索、设计思考和生活感悟。
            我相信写作是最好的思维整理方式。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6">技术栈</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="rounded-xl border border-border p-5"
            >
              <h3 className="font-medium text-sm mb-3 text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded bg-accent text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">联系我</h2>
        <p className="text-muted-foreground mb-4">
          如果你有任何问题或想法，欢迎通过以下方式联系我：
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "GitHub", href: "https://github.com" },
            { label: "Twitter", href: "https://twitter.com" },
            { label: "Email", href: "mailto:hello@example.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
