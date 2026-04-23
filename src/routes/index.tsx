import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ProofMarquee } from "@/components/site/ProofMarquee";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { NowBuilding } from "@/components/site/NowBuilding";
import { Journey } from "@/components/site/Journey";
import { Skills } from "@/components/site/Skills";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eduardo Oliveira — AI × Health × Startups" },
      {
        name: "description",
        content:
          "Eduardo Oliveira — Full-stack engineer building at the intersection of AI, Health & Startups. Harvard HSIL 2026 Winner, World Finals competitor, START SP pre-incubated, Solana builder.",
      },
      { property: "og:title", content: "Eduardo Oliveira — AI × Health × Startups" },
      {
        property: "og:description",
        content:
          "Building at the intersection of AI, Health & Startups. Harvard HSIL Winner. World Finals.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh bg-pitch text-foreground">
      <AmbientBackground />
      <Nav />
      <main>
        <Hero />
        <ProofMarquee />
        <About />
        <Projects />
        <NowBuilding />
        <Journey />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
