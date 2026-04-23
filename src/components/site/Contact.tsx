import { useLang } from "@/lib/i18n";

export function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="relative mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
      <div className="relative overflow-hidden border border-border bg-carbon/40 p-10 backdrop-blur-md lg:p-20">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-violet-core/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-sharp/20 blur-3xl" />

        <div className="relative">
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-sharp">
            {t.contact.label}
          </div>
          <h2 className="mt-4 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white lg:text-7xl">
            {t.contact.titlePre}<span className="text-gradient">{t.contact.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {t.contact.lead}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:eduardooliveiira307@gmail.com"
              className="group inline-flex items-center gap-3 bg-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-pitch transition-all hover:bg-violet-glow hover:text-white hover:shadow-glow-violet"
            >
              {t.contact.email}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-orc"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-border bg-pitch px-8 py-4 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:border-cyan-sharp hover:text-cyan-sharp"
            >
              {t.contact.linkedin}
            </a>
            <a
              href="https://github.com/eduardo3071"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-border bg-pitch px-8 py-4 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:border-cyan-sharp hover:text-cyan-sharp"
            >
              {t.contact.github}
            </a>
          </div>

          <div className="mt-12 border-t border-border pt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
            © {new Date().getFullYear()} Eduardo Oliveira — {t.contact.footer}
          </div>
        </div>
      </div>
    </section>
  );
}
