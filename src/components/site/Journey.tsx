const steps = [
  { year: "2025", title: "Started ADS", desc: "Launched into systems development & full-stack." },
  { year: "2026", title: "Harvard HSIL — Brazil Winner", desc: "First place. Solo & team-led innovation." },
  { year: "2026", title: "Harvard World Finals", desc: "Representing Brazil — 120 teams, 41 countries." },
  { year: "2026", title: "START SP — Pre-Incubation", desc: "Selected venture moves into accelerator." },
  { year: "2026", title: "SEBRAE Startups — Top 12", desc: "Recognized among top early-stage Brazilian builders." },
  { year: "Next", title: "Poli-USP Garage + Supernova", desc: "Engineering home base for the next phase." },
];

export function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
      <div className="mb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-cyan-sharp">
          // 03 — Trajectory
        </div>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
          From zero to global stage.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet-core via-cyan-sharp to-transparent md:left-1/2" />
        <div className="space-y-12">
          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 ${
                  isLeft ? "" : "md:[&>div:first-child]:order-2"
                }`}
                style={{ animation: `fade-up 0.6s ease-out ${i * 0.08}s both` }}
              >
                <div className={`pl-12 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="font-mono text-xs uppercase tracking-widest text-violet-glow">
                    {s.year}
                  </div>
                  <h3 className="mt-1 text-2xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full bg-pitch ring-2 ring-violet-core md:left-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
