import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "pt";

type Dict = typeof translations.en;

export const translations = {
  en: {
    nav: {
      proof: "Proof",
      about: "About",
      projects: "Projects",
      now: "Now",
      journey: "Journey",
      contact: "Contact",
      cta: "Let's_talk →",
    },
    hero: {
      status: "System Online // Building in public // 2026",
      tagline1: "Building at the intersection of",
      tagline2: "AI, Health & Startups.",
      tagline3:
        " Full-stack engineer with founder energy — turning frontier tech into shipped products.",
      viewProjects: "[ View Projects ]",
      getInTouch: "Get in touch",
      loc: "> LOC: SÃO_PAULO_BR",
      statusLine: "> STATUS: HARVARD HSIL '26 WINNER • WORLD FINALS",
      awaiting: "> AWAITING_COMMAND",
      subject: "Subject",
      id: "ID 2026",
      badges: {
        hsilTitle: "Harvard HSIL '26",
        hsilStatus: "WINNER",
        hsilMeta: "STATUS",
        wdfnTitle: "World Finals",
        wdfnStatus: "COMPETING",
        startTitle: "START SP",
        startMeta: "STAGE",
        startStatus: "PRE-INC",
        solTitle: "Solana Builder",
        solMeta: "NETWORK",
        solStatus: "MAINNET",
      },
    },
    proof: [
      "🏆 HARVARD HSIL BRAZIL — WINNER 2026",
      "🌎 WORLD FINALS — 120 TEAMS / 41 COUNTRIES",
      "🚀 START SP — PRE-INCUBATED",
      "🏅 TOP 12 SEBRAE STARTUPS",
      "⚡ SOLANA BUILDER",
      "🧬 MICROID LAB — AI + HEALTH",
      "🎓 FUTURE POLI-USP GARAGE",
    ],
    about: {
      label: "// 01 — Profile",
      title: "Operator. Builder. Founder-in-motion.",
      p1Strong: "Full-stack engineer",
      p1: " focused on scalable products, applied AI, and digital infrastructure with real impact.",
      p2pre: "Currently building at the intersection of ",
      p2health: "health",
      p2c: ", ",
      p2tech: "technology",
      p2post: " and global innovation — from competition stages to incubators.",
      stats: [
        { k: "Year", v: "2026" },
        { k: "Stage", v: "Pre-Inc" },
        { k: "Mode", v: "Building" },
      ],
    },
    projects: {
      label: "// 02 — Active Builds",
      title: "Selected projects.",
      lead: "A few active builds across health, AI, and Web3. Quality over volume.",
      caseFile: "CASE_FILE",
      problem: "Problem",
      solution: "Solution",
      stack: "Stack",
      impact: "Impact",
      list: [
        {
          name: "MicroID Lab — Harvard HSIL",
          tag: "Health × AI · Global Competition",
          problem: "Access to fast, affordable diagnostics is still a bottleneck for global health.",
          solution: "An AI-powered diagnostics solution — details under wraps pending IP protection.",
          impact: "1st place Brazil • Top 120 teams worldwide • Heading to the World Finals.",
        },
        {
          name: "Solana Build",
          tag: "Web3",
          problem: "On-chain UX still gatekeeps mainstream adoption.",
          solution: "High-throughput dApp infrastructure on Solana mainnet.",
          impact: "Hackathon-ready. Builder ecosystem participant.",
        },
        {
          name: "TEAcesso — START SP Venture",
          tag: "EdTech × AI · Neurodiversity",
          problem: "Neurodivergent students lack accessible, tailored learning tools.",
          solution: "AI-powered app/site built for neurodivergent students — born from the Lovable + Start SP Buildathon.",
          impact: "Vice-champion at Lovable × Start SP Buildathon → entered START SP Venture program.",
        },
        {
          name: "HealthGit — SEBRAE Startups Digital",
          tag: "Health × Blockchain",
          problem: "Fragmented patient data drives medical errors, patient harm, and rising healthcare costs.",
          solution: "Unified patient data layer on blockchain — auditable, portable, and interoperable across providers.",
          impact: "Built inside SEBRAE Startups Digital program — Top 12 recognition.",
        },
      ],
    },
    now: {
      live: "// Live Feed",
      titlePre: "What I'm building ",
      titleAccent: "right now.",
      items: [
        {
          title: "MicroID Lab → World Finals",
          desc: "Winning Harvard HSIL entry — now heading to the global stage. Details soon.",
          status: "COMPETING",
        },
        {
          title: "TEAcesso @ START SP",
          desc: "AI tool for neurodivergent students — Buildathon vice-champion now inside START SP.",
          status: "BUILDING",
        },
        {
          title: "Solana Builds",
          desc: "Shipping high-throughput dApp experiments on mainnet.",
          status: "ACTIVE",
        },
      ],
    },
    journey: {
      label: "// 03 — Trajectory",
      title: "From zero to global stage.",
      steps: [
        { year: "2025", title: "Started ADS", desc: "Launched into systems development & full-stack." },
        { year: "2026", title: "Harvard HSIL — Brazil Winner", desc: "First place. Solo & team-led innovation." },
        { year: "2026", title: "Harvard World Finals", desc: "Representing Brazil — 120 teams, 41 countries." },
        { year: "2026", title: "START SP — Pre-Incubation", desc: "Selected venture moves into accelerator." },
        { year: "2026", title: "SEBRAE Startups — Top 12", desc: "Recognized among top early-stage Brazilian builders." },
        { year: "Next", title: "Poli-USP Garage + Supernova", desc: "Engineering home base for the next phase." },
      ],
    },
    skills: {
      label: "// 04 — Capabilities",
      title: "Stack & disciplines.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX Design", "Responsive Design", "Accessibility (a11y)"],
        },
        {
          title: "Backend",
          items: ["Node.js", "REST & GraphQL APIs", "Auth (JWT / OAuth)", "PostgreSQL", "Supabase", "Edge Functions", "WebSockets", "Microservices"],
        },
        {
          title: "Data / AI",
          items: ["Python", "Computer Vision (OpenCV)", "PyTorch / TensorFlow", "LLMs & RAG", "Prompt Engineering", "ML Ops", "Data Pipelines", "Jupyter"],
        },
        {
          title: "Web3",
          items: ["Solana", "Rust", "Smart Contracts", "Anchor Framework", "Web3.js", "Wallet Integration", "Tokenomics", "On-chain UX"],
        },
        {
          title: "DevOps & Infra",
          items: ["Git & GitHub", "Docker", "CI/CD", "Vercel", "Cloudflare Workers", "Linux", "Monitoring", "Performance Tuning"],
        },
        {
          title: "Product & Founder",
          items: ["Product Strategy", "Go-to-Market", "User Research", "MVP Validation", "Pitching", "Fundraising Basics", "Growth Loops", "Lean Startup"],
        },
        {
          title: "Design & Creative",
          items: ["Figma", "Design Systems", "Prototyping", "Motion Design", "Brand Identity", "Storytelling"],
        },
        {
          title: "Languages & Soft Skills",
          items: ["Portuguese (native)", "English (fluent)", "Public Speaking", "Cross-cultural Teams", "Leadership", "Bias for Action"],
        },
      ],
    },
    contact: {
      label: "// 05 — Contact",
      titlePre: "Looking to build something ",
      titleAccent: "impactful?",
      lead: "Open to founder collaborations, deep-tech projects, and global opportunities at the AI × Health × Startups intersection.",
      email: "Email me",
      linkedin: "LinkedIn",
      github: "GitHub",
      footer: "All systems operational.",
    },
  },
  pt: {
    nav: {
      proof: "Provas",
      about: "Sobre",
      projects: "Projetos",
      now: "Agora",
      journey: "Trajetória",
      contact: "Contato",
      cta: "Vamos_conversar →",
    },
    hero: {
      status: "Sistema Online // Construindo em público // 2026",
      tagline1: "Construindo na interseção de",
      tagline2: "IA, Saúde & Startups.",
      tagline3:
        " Engenheiro full-stack com energia de founder — transformando tecnologia de fronteira em produtos entregues.",
      viewProjects: "[ Ver Projetos ]",
      getInTouch: "Entrar em contato",
      loc: "> LOC: SÃO_PAULO_BR",
      statusLine: "> STATUS: HARVARD HSIL '26 VENCEDOR • MUNDIAL",
      awaiting: "> AGUARDANDO_COMANDO",
      subject: "Sujeito",
      id: "ID 2026",
      badges: {
        hsilTitle: "Harvard HSIL '26",
        hsilStatus: "VENCEDOR",
        hsilMeta: "STATUS",
        wdfnTitle: "Mundial",
        wdfnStatus: "COMPETINDO",
        startTitle: "START SP",
        startMeta: "ESTÁGIO",
        startStatus: "PRÉ-INC",
        solTitle: "Solana Builder",
        solMeta: "REDE",
        solStatus: "MAINNET",
      },
    },
    proof: [
      "🏆 HARVARD HSIL BRASIL — VENCEDOR 2026",
      "🌎 MUNDIAL — 120 EQUIPES / 41 PAÍSES",
      "🚀 START SP — PRÉ-INCUBADO",
      "🏅 TOP 12 SEBRAE STARTUPS",
      "⚡ SOLANA BUILDER",
      "🧬 MICROID LAB — IA + SAÚDE",
      "🎓 FUTURO POLI-USP GARAGE",
    ],
    about: {
      label: "// 01 — Perfil",
      title: "Operador. Construtor. Founder em movimento.",
      p1Strong: "Engenheiro full-stack",
      p1: " focado em produtos escaláveis, IA aplicada e infraestrutura digital com impacto real.",
      p2pre: "Atualmente construindo na interseção de ",
      p2health: "saúde",
      p2c: ", ",
      p2tech: "tecnologia",
      p2post: " e inovação global — de palcos de competição a incubadoras.",
      stats: [
        { k: "Ano", v: "2026" },
        { k: "Estágio", v: "Pré-Inc" },
        { k: "Modo", v: "Building" },
      ],
    },
    projects: {
      label: "// 02 — Builds Ativos",
      title: "Projetos selecionados.",
      lead: "Alguns builds ativos em saúde, IA e Web3. Qualidade acima de volume.",
      caseFile: "CASE_FILE",
      problem: "Problema",
      solution: "Solução",
      stack: "Stack",
      impact: "Impacto",
      list: [
        {
          name: "MicroID Lab — Harvard HSIL",
          tag: "Saúde × IA · Competição Global",
          problem: "Acesso a diagnósticos rápidos e acessíveis ainda é um gargalo para a saúde global.",
          solution: "Uma solução de diagnóstico com IA — detalhes em sigilo até a proteção de propriedade intelectual.",
          impact: "1º lugar Brasil • Top 120 equipes mundiais • Indo para o Mundial.",
        },
        {
          name: "Solana Build",
          tag: "Web3",
          problem: "UX on-chain ainda barra a adoção mainstream.",
          solution: "Infraestrutura dApp de alta performance na mainnet Solana.",
          impact: "Pronto para hackathon. Participante do ecossistema builder.",
        },
        {
          name: "TEAcesso — START SP Venture",
          tag: "EdTech × IA · Neurodiversidade",
          problem: "Estudantes neurodivergentes não têm ferramentas de aprendizagem acessíveis e adaptadas.",
          solution: "App/site com IA criado para estudantes neurodivergentes — nascido no Buildathon Lovable + Start SP.",
          impact: "Vice-campeão do Buildathon Lovable × Start SP → entrada no programa START SP Venture.",
        },
      ],
    },
    now: {
      live: "// Feed Ao Vivo",
      titlePre: "O que estou construindo ",
      titleAccent: "agora.",
      items: [
        {
          title: "MicroID Lab → Mundial",
          desc: "Projeto vencedor do Harvard HSIL — rumo ao palco global. Mais detalhes em breve.",
          status: "COMPETINDO",
        },
        {
          title: "TEAcesso @ START SP",
          desc: "Ferramenta com IA para estudantes neurodivergentes — vice-campeã do Buildathon, agora dentro do START SP.",
          status: "BUILDING",
        },
        {
          title: "Solana Builds",
          desc: "Experimentos dApp de alta performance rodando na mainnet.",
          status: "ATIVO",
        },
      ],
    },
    journey: {
      label: "// 03 — Trajetória",
      title: "Do zero ao palco global.",
      steps: [
        { year: "2025", title: "Início do ADS", desc: "Início no desenvolvimento de sistemas e full-stack." },
        { year: "2026", title: "Harvard HSIL — Vencedor Brasil", desc: "Primeiro lugar. Inovação solo e em equipe." },
        { year: "2026", title: "Mundial Harvard", desc: "Representando o Brasil — 120 equipes, 41 países." },
        { year: "2026", title: "START SP — Pré-Incubação", desc: "Venture selecionado entra na aceleradora." },
        { year: "2026", title: "SEBRAE Startups — Top 12", desc: "Reconhecido entre os top builders brasileiros early-stage." },
        { year: "Próximo", title: "Poli-USP Garage + Supernova", desc: "Base de engenharia para a próxima fase." },
      ],
    },
    skills: {
      label: "// 04 — Capacidades",
      title: "Stack & disciplinas.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Design UI/UX", "Design Responsivo", "Acessibilidade (a11y)"],
        },
        {
          title: "Backend",
          items: ["Node.js", "APIs REST & GraphQL", "Auth (JWT / OAuth)", "PostgreSQL", "Supabase", "Edge Functions", "WebSockets", "Microsserviços"],
        },
        {
          title: "Dados / IA",
          items: ["Python", "Visão Computacional (OpenCV)", "PyTorch / TensorFlow", "LLMs & RAG", "Prompt Engineering", "ML Ops", "Pipelines de Dados", "Jupyter"],
        },
        {
          title: "Web3",
          items: ["Solana", "Rust", "Smart Contracts", "Anchor Framework", "Web3.js", "Integração de Wallets", "Tokenomics", "UX On-chain"],
        },
        {
          title: "DevOps & Infra",
          items: ["Git & GitHub", "Docker", "CI/CD", "Vercel", "Cloudflare Workers", "Linux", "Monitoramento", "Otimização de Performance"],
        },
        {
          title: "Produto & Founder",
          items: ["Estratégia de Produto", "Go-to-Market", "Pesquisa de Usuário", "Validação de MVP", "Pitching", "Fundamentos de Captação", "Loops de Crescimento", "Lean Startup"],
        },
        {
          title: "Design & Criativo",
          items: ["Figma", "Design Systems", "Prototipação", "Motion Design", "Identidade de Marca", "Storytelling"],
        },
        {
          title: "Idiomas & Soft Skills",
          items: ["Português (nativo)", "Inglês (fluente)", "Oratória", "Times Multiculturais", "Liderança", "Bias for Action"],
        },
      ],
    },
    contact: {
      label: "// 05 — Contato",
      titlePre: "Quer construir algo ",
      titleAccent: "impactante?",
      lead: "Aberto a colaborações de founders, projetos deep-tech e oportunidades globais na interseção IA × Saúde × Startups.",
      email: "Me envie um email",
      linkedin: "LinkedIn",
      github: "GitHub",
      footer: "Todos os sistemas operacionais.",
    },
  },
} as const;

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "en" || stored === "pt") {
      setLangState(stored);
    } else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("pt")) {
      setLangState("pt");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  const value: LangContextValue = {
    lang,
    setLang,
    t: translations[lang] as Dict,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
