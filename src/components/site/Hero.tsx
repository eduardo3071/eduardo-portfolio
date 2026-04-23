import { useEffect, useRef, useState } from "react";

function Badge({
  id,
  title,
  meta,
  status,
  accent,
  className,
  delay = 0,
  parallax,
}: {
  id: string;
  title: string;
  meta: string;
  status: string;
  accent: "violet" | "cyan" | "neutral";
  className?: string;
  delay?: number;
  parallax: { x: number; y: number };
}) {
  const accentMap = {
    violet: "border-l-violet-core text-violet-glow",
    cyan: "border-l-cyan-sharp text-cyan-sharp",
    neutral: "border-l-white/40 text-white/80",
  } as const;

  return (
    <div
      className={`group absolute w-[220px] rounded-sm border border-border border-l-2 bg-pitch/80 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-l-white hover:shadow-glow-violet ${accentMap[accent]} ${className ?? ""}`}
      style={{
        transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
        animation: `fade-up 0.7s ease-out ${delay}s both, float 6s ease-in-out ${delay + 1}s infinite`,
      }}
    >
      <div className="mb-1 font-mono text-[10px] uppercase tracking-widest opacity-80">
        {id}
      </div>
      <div className="font-bold uppercase leading-tight text-white">{title}</div>
      <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        <span>{meta}</span>
        <span className="text-white">{status}</span>
      </div>
    </div>
  );
}

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setMouse({
        x: (e.clientX - cx) / rect.width,
        y: (e.clientY - cy) / rect.height,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const px = (depth: number) => ({ x: mouse.x * depth, y: mouse.y * depth });

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-dvh items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-12">
        {/* LEFT */}
        <div className="flex flex-col gap-8 lg:col-span-7">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground animate-fade-up">
            <span className="size-2 animate-pulse-soft bg-cyan-sharp shadow-glow-cyan" />
            System Online // Building in public // 2026
          </div>

          <h1
            className="text-balance text-6xl font-bold leading-[0.85] tracking-tighter text-white sm:text-7xl lg:text-[6.5rem]"
            style={{ animation: "fade-up 0.8s ease-out 0.1s both" }}
          >
            EDUARDO
            <br />
            <span className="text-gradient">OLIVEIRA.</span>
          </h1>

          <p
            className="max-w-[48ch] text-pretty text-lg text-muted-foreground sm:text-xl lg:text-2xl"
            style={{ animation: "fade-up 0.8s ease-out 0.25s both" }}
          >
            Building at the intersection of{" "}
            <span className="text-white">AI, Health & Startups.</span> Full-stack
            engineer with founder energy — turning frontier tech into shipped products.
          </p>

          <div
            className="mt-2 flex flex-wrap items-center gap-4"
            style={{ animation: "fade-up 0.8s ease-out 0.4s both" }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 bg-violet-core px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-violet-glow hover:shadow-glow-violet"
            >
              [ View Projects ]
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-border bg-carbon/50 px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-muted-foreground backdrop-blur-md transition-all hover:border-cyan-sharp hover:text-cyan-sharp"
            >
              Get in touch
            </a>
          </div>

          <div
            className="mt-6 font-mono text-[11px] uppercase leading-relaxed text-muted-foreground/40"
            style={{ animation: "fade-up 0.8s ease-out 0.6s both" }}
          >
            &gt; LOC: SÃO_PAULO_BR<br />
            &gt; STATUS: HARVARD HSIL '26 WINNER • WORLD FINALS<br />
            &gt; AWAITING_COMMAND<span className="animate-blink">_</span>
          </div>
        </div>

        {/* RIGHT — telemetry HUD */}
        <div className="relative hidden h-[600px] lg:col-span-5 lg:block">
          {/* Crosshairs */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-border" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-border" />

          {/* Center medallion */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) translate3d(${px(8).x}px, ${px(8).y}px, 0)`,
            }}
          >
            <div className="relative size-56">
              <div className="absolute inset-0 animate-pulse-soft rounded-full bg-gradient-to-br from-violet-core/40 to-cyan-sharp/30 blur-2xl" />
              <div className="absolute inset-4 rounded-full border border-violet-core/40" />
              <div className="absolute inset-10 rounded-full border border-cyan-sharp/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Subject
                  </div>
                  <div className="mt-1 text-2xl font-bold text-white">E.O.</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-cyan-sharp">
                    ID 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Badge
            id="ID: 001-HSIL"
            title="Harvard HSIL '26"
            meta="STATUS"
            status="WINNER"
            accent="violet"
            className="left-0 top-[6%]"
            delay={0.3}
            parallax={px(20)}
          />
          <Badge
            id="ID: 002-WDFN"
            title="World Finals"
            meta="120 / 41"
            status="COMPETING"
            accent="cyan"
            className="right-0 top-[28%]"
            delay={0.45}
            parallax={px(28)}
          />
          <Badge
            id="ID: 003-STSP"
            title="START SP"
            meta="STAGE"
            status="PRE-INC"
            accent="neutral"
            className="bottom-[18%] left-2"
            delay={0.6}
            parallax={px(16)}
          />
          <Badge
            id="ID: 004-SOL"
            title="Solana Builder"
            meta="NETWORK"
            status="MAINNET"
            accent="violet"
            className="bottom-[2%] right-4"
            delay={0.75}
            parallax={px(24)}
          />
        </div>
      </div>
    </section>
  );
}
