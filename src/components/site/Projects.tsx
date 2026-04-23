import { useState } from "react";
import { useLang } from "@/lib/i18n";
import microidDuo from "@/assets/microid-duo.jpg";
import microidWorldmap from "@/assets/microid-worldmap.jpg";
import microidTeam from "@/assets/microid-team.jpg";
import microidTimeline from "@/assets/microid-timeline.jpg";
import microidCrowd from "@/assets/microid-crowd.jpg";

const microidGallery = [
  { src: microidWorldmap, label: "HSIL · 30+ countries · 40 hubs", span: "md:col-span-2 md:row-span-2" },
  { src: microidTeam, label: "Team · InovaHC — HCFMUSP", span: "md:col-span-2" },
  { src: microidDuo, label: "Hub winners · São Paulo", span: "" },
  { src: microidCrowd, label: "Hackathon floor · April 2026", span: "" },
  { src: microidTimeline, label: "Venture Building Program · 2026", span: "md:col-span-2" },
];

const meta = [
  { id: "01", accent: "violet" as const, stack: ["AI/ML", "Health Tech", "Stealth"] },
  { id: "02", accent: "cyan" as const, stack: ["Rust", "Solana", "TypeScript"] },
  { id: "03", accent: "violet" as const, stack: ["AI", "EdTech", "Accessibility", "Lovable"] },
  { id: "04", accent: "cyan" as const, stack: ["Blockchain", "Health Data", "Interoperability"] },
  { id: "05", accent: "violet" as const, stack: ["Bootcamp", "Pitch", "Fundraising", "Poli-USP"] },
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

            {active === 0 && (
              <div className="pt-2">
                <div className="mb-3 flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-violet-glow" />
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Field Archive · HSIL '26
                  </div>
                </div>
                <div className="grid auto-rows-[110px] grid-cols-2 gap-2 md:grid-cols-4">
                  {microidGallery.map((img) => (
                    <figure
                      key={img.label}
                      className={`group relative overflow-hidden border border-border bg-pitch ${img.span}`}
                    >
                      <img
                        src={img.src}
                        alt={img.label}
                        loading="lazy"
                        className="size-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pitch/90 via-pitch/10 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
                      <figcaption className="absolute bottom-0 left-0 right-0 p-2 font-mono text-[9px] uppercase tracking-widest text-white/80">
                        {img.label}
                      </figcaption>
                    </figure>
                  ))}
                  <figure className="group relative col-span-2 row-span-2 overflow-hidden border border-violet-core/40 bg-pitch md:col-span-2">
                    <video
                      src="/media/microid-hsil.mp4"
                      className="size-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                    <figcaption className="pointer-events-none absolute left-2 top-2 border border-violet-core/60 bg-pitch/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-violet-glow backdrop-blur-sm">
                      ▶ Live · Hackathon HSIL
                    </figcaption>
                  </figure>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
