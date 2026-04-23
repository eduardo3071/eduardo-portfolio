import { useLang } from "@/lib/i18n";

export function ProofMarquee() {
  const { t } = useLang();
  const items = t.proof;
  return (
    <section
      id="proof"
      className="relative border-y border-border bg-carbon/40 py-6 backdrop-blur-md"
    >
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 font-mono text-sm tracking-widest text-muted-foreground">
          {[...items, ...items].map((it, i) => (
            <span key={i} className="flex shrink-0 items-center gap-12">
              <span className="text-white/80">{it}</span>
              <span className="text-violet-core">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
