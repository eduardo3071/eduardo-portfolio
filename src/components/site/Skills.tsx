import { useLang } from "@/lib/i18n";

export function Skills() {
  const { t } = useLang();
  const groups = t.skills.groups;
  return (
    <section className="relative border-t border-border bg-carbon/20 py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-sharp">
            {t.skills.label}
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {t.skills.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="group relative overflow-hidden border border-border bg-pitch p-6 transition-all hover:border-cyan-sharp/50"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.08}s both` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{g.title}</h3>
                <span className="font-mono text-[10px] uppercase text-muted-foreground">
                  /{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
                  >
                    <span className="size-1 rounded-full bg-violet-core" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
