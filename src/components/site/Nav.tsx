import { useEffect, useState } from "react";

const links = [
  { href: "#proof", label: "Proof" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#now", label: "Now" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-pitch/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-widest">
          <span className="size-2 animate-pulse-soft rounded-full bg-cyan-sharp shadow-glow-cyan" />
          <span className="text-white">EDU<span className="text-muted-foreground">_OL</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-sm border border-violet-core/40 bg-violet-core/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-violet-glow transition-all hover:bg-violet-core hover:text-white hover:shadow-glow-violet sm:inline-flex"
        >
          Let's_talk →
        </a>
      </div>
    </header>
  );
}
