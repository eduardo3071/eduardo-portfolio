import { useLang } from "@/lib/i18n";

export function Journey() {
  const { t } = useLang();
  const steps = t.journey.steps;
  return (
    <section id="journey" className="relative mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
      <div className="mb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-cyan-sharp">
          {t.journey.label}
        </div>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
          {t.journey.title}
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
