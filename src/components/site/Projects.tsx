import { useState } from "react";

type Project = {
  id: string;
  name: string;
  tag: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
  accent: "violet" | "cyan";
};

const projects: Project[] = [
  {
    id: "01",
    name: "MicroID Lab",
    tag: "Health × AI",
    problem: "Pathogen diagnosis is inaccessible in low-infrastructure regions.",
    solution: "Portable microscopy + computer vision for fast, affordable ID.",
    stack: ["Python", "Computer Vision", "React", "Edge AI"],
    impact: "Targeting clinics in underserved Brazilian regions.",
    accent: "violet",
  },
  {
    id: "02",
    name: "Harvard HSIL Project",
    tag: "Global Competition",
    problem: "Global health systems need scalable diagnostic infrastructure.",
    solution: "AI-driven platform — winning entry, headed to World Finals.",
    stack: ["AI/ML", "Full-Stack", "Health Data"],
    impact: "1st place Brazil • Top 120 teams worldwide.",
    accent: "cyan",
  },
  {
    id: "03",
    name: "Solana Build",
    tag: "Web3",
    problem: "On-chain UX still gatekeeps mainstream adoption.",
    solution: "High-throughput dApp infrastructure on Solana mainnet.",
    stack: ["Rust", "Solana", "TypeScript"],
    impact: "Hackathon-ready. Builder ecosystem participant.",
    accent: "violet",
  },
  {
    id: "04",
    name: "START SP Venture",
    tag: "Startup × Pre-Inc",
    problem: "Early-stage execution gap between idea and product.",
    solution: "Productized founder operations + go-to-market validation.",
    stack: ["Strategy", "Product", "Growth"],
    impact: "Pre-incubated at START SP accelerator.",
    accent: "cyan",
  },
];

export function Projects() {
  const [active, setActive] = useState(0);
  const p = projects[active];
  const accent = p.accent === "violet" ? "violet-core" : "cyan-sharp";

  return (
    <section id="projects" className="relative mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-sharp">
            // 02 — Active Builds
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Selected projects.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          A few active builds across health, AI, and Web3. Quality over volume.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* List */}
        <div className="space-y-2 lg:col-span-5">
          {projects.map((proj, i) => {
            const isActive = i === active;
            return (
              <button
                key={proj.id}
                onClick={() => setActive(i)}
                className={`group relative w-full overflow-hidden border border-border bg-carbon/30 p-5 text-left transition-all hover:border-violet-core/60 ${
                  isActive ? "border-violet-core/80 bg-carbon/60" : ""
                }`}
              >
                <div
                  className={`absolute inset-y-0 left-0 w-[3px] bg-${proj.accent === "violet" ? "violet-core" : "cyan-sharp"} transition-transform ${
                    isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                  } origin-top`}
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

        {/* Detail */}
        <div className="relative overflow-hidden border border-border bg-carbon/40 p-8 backdrop-blur-md lg:col-span-7 lg:p-10">
          <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-${accent} to-transparent`} />
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            CASE_FILE / {p.id}
          </div>
          <h3 className="mt-3 text-3xl font-bold text-white lg:text-4xl">{p.name}</h3>
          <div className={`mt-2 font-mono text-sm text-${accent}`}>{p.tag}</div>

          <div className="mt-8 space-y-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Problem
              </div>
              <p className="mt-1 text-white">{p.problem}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Solution
              </div>
              <p className="mt-1 text-muted-foreground">{p.solution}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Stack
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-border bg-pitch px-3 py-1 font-mono text-xs text-white/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className={`border-l-2 border-${accent} pl-4`}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Impact
              </div>
              <p className="mt-1 text-white">{p.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
