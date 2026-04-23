export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-sharp">
            // 01 — Profile
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Operator. Builder. Founder-in-motion.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
          <p>
            <span className="text-white">Full-stack engineer</span> focused on
            scalable products, applied AI, and digital infrastructure with real
            impact.
          </p>
          <p>
            Currently building at the intersection of{" "}
            <span className="text-violet-glow">health</span>,{" "}
            <span className="text-cyan-sharp">technology</span> and global
            innovation — from competition stages to incubators.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              { k: "Year", v: "2026" },
              { k: "Stage", v: "Pre-Inc" },
              { k: "Mode", v: "Building" },
            ].map((s) => (
              <div key={s.k} className="border-l-2 border-violet-core/60 pl-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.k}
                </div>
                <div className="font-mono text-xl text-white">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
