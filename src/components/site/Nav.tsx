import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#proof", label: t.nav.proof },
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#now", label: t.nav.now },
    { href: "#journey", label: t.nav.journey },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-pitch/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 lg:px-12">
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
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div
            role="group"
            aria-label="Language"
            className="relative inline-flex items-center overflow-hidden rounded-sm border border-border bg-pitch/60 p-0.5 font-mono text-[11px] uppercase tracking-widest backdrop-blur-md"
          >
            <span
              aria-hidden="true"
              className={`absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-[2px] bg-violet-core/80 shadow-glow-violet transition-transform duration-300 ${
                lang === "pt" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`relative z-10 px-2.5 py-1 transition-colors ${
                lang === "en" ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
              className={`relative z-10 px-2.5 py-1 transition-colors ${
                lang === "pt" ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              PT
            </button>
          </div>

          <a
            href="#contact"
            className="hidden rounded-sm border border-violet-core/40 bg-violet-core/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-violet-glow transition-all hover:bg-violet-core hover:text-white hover:shadow-glow-violet sm:inline-flex"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
