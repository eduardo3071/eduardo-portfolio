import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import microidDuo from "@/assets/microid-duo.jpg";
import microidWorldmap from "@/assets/microid-worldmap.jpg";
import microidTeam from "@/assets/microid-team.jpg";
import microidTimeline from "@/assets/microid-timeline.jpg";
import microidCrowd from "@/assets/microid-crowd.jpg";
import teacessoBuildathon from "@/assets/teacesso-buildathon.jpg";
import garagemTeam from "@/assets/garagem-team.jpg";
import garagemJornada from "@/assets/garagem-jornada.png";
import sebraeForStartups from "@/assets/sebrae-for-startups.png";
import fluxTrophy from "@/assets/flux-trophy.jpg";
import fluxTeam from "@/assets/flux-team.jpg";
import fluxFloor from "@/assets/flux-floor.jpg";
import fluxHackathon from "@/assets/flux-hackathon.jpg";
import fluxLink from "@/assets/flux-link.jpg";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  label: string;
  span: string;
};

const galleries: Record<number, { archive: string; items: GalleryItem[] }> = {
  0: {
    archive: "Field Archive · HSIL '26",
    items: [
      { type: "image", src: microidWorldmap, label: "HSIL · 30+ countries · 40 hubs", span: "md:col-span-2 md:row-span-2" },
      { type: "image", src: microidTeam, label: "Team · InovaHC — HCFMUSP", span: "md:col-span-2" },
      { type: "image", src: microidDuo, label: "Hub winners · São Paulo", span: "" },
      { type: "image", src: microidCrowd, label: "Hackathon floor · April 2026", span: "" },
      { type: "image", src: microidTimeline, label: "Venture Building Program · 2026", span: "md:col-span-2" },
      { type: "video", src: "/media/microid-hsil.mp4", label: "▶ Live · Hackathon HSIL", span: "col-span-2 row-span-2 md:col-span-2" },
    ],
  },
  2: {
    archive: "Field Archive · Lovable × Start SP Buildathon",
    items: [
      { type: "image", src: teacessoBuildathon, label: "Vice-champion · Lovable Buildathon", span: "col-span-2 row-span-2 md:col-span-4 md:row-span-3" },
    ],
  },
  3: {
    archive: "Field Archive · HealthGit · SEBRAE Startups Digital",
    items: [
      { type: "image", src: sebraeForStartups, label: "SEBRAE for Startups · Selected program", span: "col-span-2 row-span-2 md:col-span-4 md:row-span-3" },
    ],
  },
  4: {
    archive: "Field Archive · Garagem de Startups 2026 · LEPoli-USP",
    items: [
      { type: "image", src: garagemTeam, label: "Cohort · Garagem de Startups · LEPoli-USP", span: "col-span-2 md:col-span-2 md:row-span-2" },
      { type: "image", src: garagemJornada, label: "Jornada de 4 Dias · Problema → Demo Day", span: "col-span-2 md:col-span-2 md:row-span-2" },
    ],
  },
};

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
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

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

            {galleries[active] && (
              <div className="pt-2">
                <div className="mb-3 flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-violet-glow" />
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {galleries[active].archive}
                  </div>
                </div>
                <div className="grid auto-rows-[110px] grid-cols-2 gap-2 md:grid-cols-4">
                  {galleries[active].items.map((item) => (
                    <button
                      type="button"
                      key={item.label}
                      onClick={() => setLightbox(item)}
                      className={`group relative overflow-hidden border border-border bg-pitch transition-all hover:border-violet-core/60 hover:shadow-glow-violet focus:outline-none focus:ring-2 focus:ring-violet-core ${item.span}`}
                      aria-label={`Open ${item.label}`}
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.label}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <>
                          <video
                            src={item.src}
                            className="size-full object-cover"
                            muted
                            playsInline
                            preload="metadata"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-pitch/40 transition-colors group-hover:bg-pitch/20">
                            <span className="flex size-12 items-center justify-center rounded-full border border-violet-glow/60 bg-pitch/70 font-mono text-violet-glow backdrop-blur-sm">
                              ▶
                            </span>
                          </div>
                        </>
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pitch/90 via-pitch/10 to-transparent opacity-80 transition-opacity group-hover:opacity-50" />
                      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 p-2 text-left font-mono text-[9px] uppercase tracking-widest text-white/80">
                        {item.label}
                      </figcaption>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-pitch/95 p-4 backdrop-blur-md md:p-10"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex size-10 items-center justify-center border border-border bg-carbon/60 font-mono text-white transition-colors hover:border-violet-core hover:text-violet-glow md:right-8 md:top-8"
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="relative flex max-h-[90vh] w-full max-w-6xl flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "image" ? (
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="max-h-[85vh] w-full object-contain"
              />
            ) : (
              <video
                src={lightbox.src}
                className="max-h-[85vh] w-full object-contain bg-black"
                controls
                autoPlay
                playsInline
              />
            )}
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {lightbox.label}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
