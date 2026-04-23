import { useLang } from "@/lib/i18n";

export function NowBuilding() {
  const { t } = useLang();
  const items = t.now.items;
  return (
    <section id="now" className="relative border-y border-border bg-carbon/30 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-12 flex items-center gap-4">
          <span className="size-3 animate-pulse-soft rounded-full bg-cyan-sharp shadow-glow-cyan" />
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-sharp">
            {t.now.live}
          </div>
        </div>
        <h2 className="mb-12 max-w-3xl text-4xl font-bold tracking-tight text-white lg:text-5xl">
          {t.now.titlePre}<span className="text-gradient">{t.now.titleAccent}</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative overflow-hidden border border-border bg-pitch p-6 transition-all hover:-translate-y-1 hover:border-violet-core/60 hover:shadow-glow-violet"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s both` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  NODE_{String(i + 1).padStart(2, "0")}
                </span>
                <span className="border border-cyan-sharp/40 bg-cyan-sharp/10 px-2 py-0.5 font-mono text-[10px] text-cyan-sharp">
                  {it.status}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
