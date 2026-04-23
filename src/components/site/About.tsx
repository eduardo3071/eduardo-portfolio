import { useLang } from "@/lib/i18n";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-sharp">
            {t.about.label}
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {t.about.title}
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
          <p>
            <span className="text-white">{t.about.p1Strong}</span>
            {t.about.p1}
          </p>
          <p>
            {t.about.p2pre}
            <span className="text-violet-glow">{t.about.p2health}</span>
            {t.about.p2c}
            <span className="text-cyan-sharp">{t.about.p2tech}</span>
            {t.about.p2post}
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6">
            {t.about.stats.map((s) => (
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
