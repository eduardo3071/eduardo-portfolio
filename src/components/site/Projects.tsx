import { useState } from "react";
import { useLang } from "@/lib/i18n";

const meta = [
  { id: "01", accent: "violet" as const, stack: ["AI/ML", "Health Tech", "Stealth"] },
  { id: "02", accent: "cyan" as const, stack: ["Rust", "Solana", "TypeScript"] },
  { id: "03", accent: "violet" as const, stack: ["Strategy", "Product", "Growth"] },
];

const accentClasses = {
  violet: {
    bar: "bg-violet-core",
    text: "text-violet-glow",
    border: "border-violet-core",
    line: "via-violet-core",
  },
  cyan: {
    bar: "bg-cyan-sharp",
    text: "text-cyan-sharp",
    border: "border-cyan-sharp",
    line: "via-cyan-sharp",
  },
} as const;

export function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState(0);

  const projects = t.projects.list.map((proj, i) => ({
    ...proj,
    id: meta[i].id,
    accent: meta[i].accent,
    stack: meta[i].stack,
  }));

  const p = projects[active];
  const a = accentClasses[p.accent];

  return (
    <section id="projects" className="relative mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-sharp">
            {t.projects.label}
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {t.projects.title}
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">{t.projects.lead}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-2 lg:col-span-5">
          {projects.map((proj, i) => {
            const isActive = i === active;
            const pa = accentClasses[proj.accent];
            return (
              <button
                key={proj.id}
                onClick={() => setActive(i)}
                className={`group relative w-full overflow-hidden border border-border bg-carbon/30 p-5 text-left transition-all hover:border-violet-core/60 ${
                  isActive ? "border-violet-core/80 bg-carbon/60" : ""
                }`}
              >
                <div
                  className={`absolute inset-y-0 left-0 w-[3px] origin-top transition-transform ${pa.bar} ${
                    isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                  }`}
                />
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    /{proj.id} — {proj.tag}
                  </div>
                  <div
                    className={`font-mono text-xs transition-opacity ${
                      isActive ? "text-white opacity-100" : "opacity-0 group-hover:opacity-60"
                    }`}
                  >
                    →
                  </div>
                </div>
                <div className="mt-2 text-xl font-bold text-white">{proj.name}</div>
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden border border-border bg-carbon/40 p-8 backdrop-blur-md lg:col-span-7 lg:p-10">
          <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${a.line}`} />
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t.projects.caseFile} / {p.id}
          </div>
          <h3 className="mt-3 text-3xl font-bold text-white lg:text-4xl">{p.name}</h3>
          <div className={`mt-2 font-mono text-sm ${a.text}`}>{p.tag}</div>

          <div className="mt-8 space-y-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.projects.problem}</div>
              <p className="mt-1 text-white">{p.problem}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.projects.solution}</div>
              <p className="mt-1 text-muted-foreground">{p.solution}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.projects.stack}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="border border-border bg-pitch px-3 py-1 font-mono text-xs text-white/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className={`border-l-2 pl-4 ${a.border}`}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.projects.impact}</div>
              <p className="mt-1 text-white">{p.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
