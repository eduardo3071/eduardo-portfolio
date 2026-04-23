const items = [
  "🏆 HARVARD HSIL BRAZIL — WINNER 2026",
  "🌎 WORLD FINALS — 120 TEAMS / 41 COUNTRIES",
  "🚀 START SP — PRE-INCUBATED",
  "🏅 TOP 12 SEBRAE STARTUPS",
  "⚡ SOLANA BUILDER",
  "🧬 MICROID LAB — AI + HEALTH",
  "🎓 FUTURE POLI-USP GARAGE",
];

export function ProofMarquee() {
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
