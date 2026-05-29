import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Personal OS. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </div>
      </div>
    </footer>
  );
}
