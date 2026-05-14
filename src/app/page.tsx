"use client";

import { useEffect, useState } from "react";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Javascript", icon: "/assets/js.png" },
      { name: "Typescript", icon: "/assets/ts.png" },
      { name: "Node.js", icon: "/assets/nodejs.png" },
      { name: "Golang", icon: "/assets/go.png" },
      { name: "Python", icon: "" },
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Nest.js", icon: "/assets/nestjs.png" },
      { name: "Express.js", icon: "" },
      { name: "Adonis.js", icon: "/assets/adonisjs.png" },
      { name: "FastAPI", icon: "" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "/assets/postgresql.png" },
      { name: "MongoDB", icon: "/assets/mongodb.png" },
      { name: "Redis", icon: "/assets/redis.png" },
      { name: "ClickHouse", icon: "/assets/clickhouse.png" },
      { name: "InfluxDB", icon: "/assets/influxdb.png" },
    ]
  },
  {
    category: "Messaging",
    items: [
      { name: "RabbitMQ", icon: "/assets/rabbitmq.png" },
      { name: "NATS", icon: "/assets/n.png" },
      { name: "Kafka", icon: "/assets/apache.png" },
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: "/assets/docker.png" },
      { name: "Podman", icon: "" },
      { name: "Kong", icon: "/assets/kong.png" },
      { name: "KrakenD", icon: "/assets/krakend.png" },
      { name: "CI/CD (GitLab/GitHub)", icon: "/assets/github-actions.png" },
      { name: "Nginx", icon: "" },
      { name: "S3", icon: "" },
    ]
  },
  {
    category: "Monitoring & Debugging",
    items: [
      { name: "Grafana", icon: "/assets/grafana.png" },
      { name: "OpenTelemetry", icon: "/assets/open-telemetry.png" },
      { name: "OpenSearch", icon: "/assets/open-search.png" },
      { name: "Graylog", icon: "/assets/graylog.jpg" },
      { name: "SigNoz", icon: "/assets/signoz.png" },
    ]
  },
  {
    category: "Architecture & Practices",
    items: [
      { name: "Microservices", icon: "" },
      { name: "Event-Driven", icon: "" },
      { name: "Hexagonal", icon: "" },
      { name: "Domain-Driven Design", icon: "" },
      { name: "System Design", icon: "" },
      { name: "TDD", icon: "" },
      { name: "Cache Strategies", icon: "" },
      { name: "REST", icon: "" },
      { name: "gRPC", icon: "" },
    ]
  },
  {
    category: "AI / LLM",
    items: [
      { name: "RAG", icon: "" },
      { name: "Agentic Workflows", icon: "" },
      { name: "LangChain", icon: "" },
      { name: "LangGraph", icon: "" },
      { name: "Vector Search", icon: "" },
      { name: "Embeddings", icon: "" },
      { name: "LLM Prompting", icon: "" },
      { name: "OpenAI / OpenRouter", icon: "" },
    ]
  },
  {
    category: "Methodologies",
    items: [
      { name: "Agile/Scrum", icon: "" },
      { name: "Jira", icon: "" },
      { name: "Mentoring", icon: "" },
      { name: "Code Review", icon: "" },
    ]
  }
];

const experiences = [
  {
    company: "Hamtapay",
    link: "https://hamtapay.net",
    role: "Backend Engineer",
    location: "Mashhad, Iran",
    period: "Aug 2025 – Present",
    bullets: [
      "Refactored payment-and-transfer engine core: tightened transaction isolation, optimized hot-path queries with targeted indexes, and tuned PgBouncer pooling — cutting transaction failures 90% and production incidents 30%.",
      "Introduced read-side caching on hottest endpoints, dropping DB read load 99% (from 5,000+ req/s to under 20 req/s).",
      "Migrated synchronous inter-service calls to RabbitMQ-based event-driven messaging, cutting cross-service network traffic 40% and decoupling failure domains.",
      "Migrated analytical workloads from PostgreSQL to ClickHouse, halving dashboard p95 latency and offloading ~50% of PostgreSQL load.",
      "Extended Kong API Gateway with custom Go plugins for auth, rate-limiting, and request shaping across production traffic.",
      "Drove team-wide AI-assisted development practices (Cursor .rules, Claude CLAUDE.md, prompt patterns), cutting dev cycle time ~20% and lowering LLM token spend through better tool and agent usage.",
      "Took ownership of legacy \"What to Buy\" top-4 crypto recommendation service: replaced underlying prediction LLM, added validation layer to filter low-confidence picks, improving recommendation quality.",
    ],
    subRole: {
      title: "Criterio (Sub-brand) — Lead Engineer",
      bullets: [
        "Built Criterio, an agentic RAG assistant over 50+ UK-lender lending-criteria documents with multi-turn context memory, follow-up question generation, and citation-grounded answers; replaced pure-embedding retrieval with AI-labeled chunk lookup over SQLite to fix recall on small corpora, holding LLM hallucination rate under 3% via strict prompting and citation grounding, with sub-60s response latency.",
        "Shipped fully AI-driven daily blog auto-publishing one lending-criteria news article per day with generated imagery and cited sources. Stack: LangGraph, LangChain, Python, FastAPI, OpenAI / OpenRouter.",
      ]
    }
  },
  {
    company: "Part Software Group",
    link: "https://partsoftware.com",
    role: "Backend Engineer",
    location: "Mashhad, Iran",
    period: "Apr 2024 – Aug 2025",
    bullets: [
      "Resolved B2B-service outages (payments, auth, cron) via cross-team response and post-mortem ownership to prevent recurrence.",
      "Migrated ~12 backend services from pm2-based deploys to a new internal Kubernetes-like platform, cutting deploy time from ~1 working day to minutes; onboarded team to the new workflow.",
      "Designed and built B2B infrastructure services (payment, user, auth, cron) using hexagonal architecture and event-driven patterns to keep core domain logic decoupled and testable.",
      "Diagnosed peak-time socket exhaustion across services, traced root cause to synchronous HTTP fan-out from cron jobs; authored proposal for message-queue architecture later adopted org-wide.",
      "Authored RFCs on logging/observability, error-handling and API contracts, and service boundaries; standards adopted across multiple teams to reduce integration friction.",
      "Acted as primary incident point of contact, leading critical-outage calls and cross-team meetings on behalf of tech lead.",
      "Mentored junior engineers via code reviews, pair programming, and architectural guidance, raising team velocity and code-review quality.",
    ]
  },
  {
    company: "Forvest",
    link: "https://forvest.io",
    role: "Backend Developer",
    location: "Mashhad, Iran",
    period: "Aug 2023 – Apr 2024",
    bullets: [
      "Contributed to monolith-to-microservices migration across core services, splitting domains and shortening deploy cycles.",
      "Redesigned ~200-symbol crypto market-data ingestion service for higher fetch throughput, unblocking real-time AI analytics.",
      "Adopted NATS for low-latency inter-service streaming, feeding downstream AI/analytics consumers.",
      "Deployed KrakenD API Gateway for routing, rate-limiting, and horizontal scaling of backend endpoints.",
    ]
  },
  {
    company: "Farajahan Hashtom",
    link: "",
    role: "Backend Developer",
    location: "Mashhad, Iran",
    period: "Jan 2023 – Aug 2023",
    bullets: [
      "Built Node.js/Express REST endpoints with MongoDB persistence on backend team.",
      "Implemented real-time WebSocket price-broadcast feature for live trading data.",
      "Integrated BEP20/ERC20 wallet flow: per-user wallets on signup, on-chain balance polling via cron, deposit reconciliation to DB.",
    ]
  }
];

const featuredProjects = [
  {
    name: "Criterio",
    link: "https://criterio.uk/",
    description: "AI assistant for UK mortgage brokers: natural-language Q&A over 50+ lender criteria docs with multi-turn memory and cited answers. AI-labeled chunk retrieval, <3% hallucination, sub-60s latency. Daily auto-published lending-news blog with generated imagery.",
    language: "Python",
    tech: ["LangGraph", "LangChain", "FastAPI", "OpenAI", "OpenRouter", "SQLite", "RAG"]
  },
  {
    name: "Sekebit",
    link: "https://sekebit.com/",
    description: "Persian-language fintech: automated trading bot for global markets plus self-custody crypto wallet with fee-free internal transfers. Android app on Café Bazaar, Myket, APK.",
    language: "TypeScript",
    tech: ["Trading Bot", "Crypto Wallet", "Real-time Streaming", "Microservices", "Android"]
  }
];

const projects = [
  {
    name: "multer-minio",
    link: "https://github.com/namatery/multer-minio",
    description: "Storage engine for Multer enabling file uploads to MinIO; published to npm with external forks.",
    language: "TypeScript",
    stars: 6,
    forks: 2,
    tech: ["TypeScript", "Multer", "MinIO", "npm"]
  },
  {
    name: "blackbird",
    link: "https://github.com/namatery/blackbird",
    description: "Self-built reverse proxy with Node cluster and load balancing.",
    language: "TypeScript",
    stars: 2,
    forks: 0,
    tech: ["TypeScript", "Node.js", "Cluster", "Load Balancing"]
  },
  {
    name: "BlockMail",
    link: "https://github.com/namatery/BlockMail",
    description: "Decentralized email PoC: encrypted messages between Ethereum addresses via IPFS and on-chain events.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    tech: ["Electron", "Hardhat", "Ethereum", "IPFS"]
  },
  {
    name: "xo-villain-ai",
    link: "https://github.com/namatery/xo-villain-ai",
    description: "Tic-tac-toe with LLM-powered trash-talking opponent: Vue UI + FastAPI backend (minimax + LLM banter).",
    language: "Python",
    stars: 0,
    forks: 0,
    tech: ["Vue", "FastAPI", "SQLite", "LLM"]
  }
];

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-600",
};

const openSource = [
  {
    name: "Uptime Kuma",
    link: "https://github.com/louislam/uptime-kuma/pull/6899",
    detail: "merged feature PR — customizable Matrix notifications",
    logo: "https://github.com/louislam.png",
    status: "merged"
  },
  {
    name: "Firecrawl",
    link: "https://github.com/firecrawl/firecrawl/pull/2818",
    detail: "open PR — test coverage for HTML srcset handling",
    logo: "https://github.com/firecrawl.png",
    status: "open"
  },
  {
    name: "podman-mcp-server",
    link: "https://github.com/manusa/podman-mcp-server/pulls?q=is%3Apr+author%3Anamatery",
    detail: "2 merged PRs — JSON output for CLI; AI-assistant docs",
    logo: "https://github.com/manusa.png",
    status: "merged"
  }
];

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrollPosition > pageHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="container relative mx-auto overflow-auto md:p-16 p-4 text-[#000000]">

      <section className="flex flex-col items-center space-y-10">

        {/* Header */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between gap-6 p-2 w-full max-w-3xl">

          <div className="flex flex-col space-y-3 text-center md:text-left">
            {/* General */}
            <h1 className="text-3xl md:text-4xl font-bold">Alireza Rezapour</h1>
            <p className="text-[14px] md:text-[16px] text-black/80">Backend Engineer</p>

            {/* Fact Section */}
            <div className="grid grid-cols-2 text-[12px] md:text-[15px] gap-2">
              <div className="p-1 border-b-2 cursor-pointer">📍 Based in Mashhad, Iran</div>
              <div className="p-1 border-b-2">🎮 Gaming, Music, Walking</div>
              <div className="p-1 border-b-2">💼 Currently at Hamtapay</div>
              <div className="p-1 border-b-2">🛠 Always chasing better code</div>
            </div>

            {/* Link Section */}
            <div className="flex justify-center md:justify-start gap-1.5 md:gap-3 mt-auto">
              <a
                href="mailto:alireza.rezapour.me@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Gmail"
                className="flex items-center border-2 text-black px-2 md:px-4 py-1.5 md:py-2 rounded hover:bg-red-200 duration-300 cursor-pointer"
              >
                <img src="/assets/gmail.png" className="w-5 h-5 md:w-[22px] md:h-[22px]" alt="Gmail" />
              </a>

              <a
                href="tel:+989962496521"
                title="Phone"
                className="flex items-center border-2 text-black px-2 md:px-4 py-1.5 md:py-2 rounded hover:bg-indigo-200 duration-300 cursor-pointer"
              >
                <img src="/assets/phone.png" className="w-5 h-5 md:w-[22px] md:h-[22px]" alt="Phone" />
              </a>

              <a
                href="https://www.linkedin.com/in/alirezarezapour"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex items-center border-2 text-black px-2 md:px-4 py-1.5 md:py-2 rounded hover:bg-green-200 duration-300 cursor-pointer"
              >
                <img src="/assets/linkedin.png" className="w-5 h-5 md:w-[22px] md:h-[22px]" alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/namatery"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                className="flex items-center border-2 text-black px-2 md:px-4 py-1.5 md:py-2 rounded hover:bg-fuchsia-200 duration-300 cursor-pointer"
              >
                <img src="/assets/github.png" className="w-5 h-5 md:w-[22px] md:h-[22px]" alt="Github" />
              </a>

              <a
                href="/files/Alireza_Rezapour_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download CV"
                className="flex items-center border-2 text-black px-2 md:px-4 py-1.5 md:py-2 rounded hover:bg-amber-200 duration-300 cursor-pointer"
              >
                <img src="/assets/folder.png" className="w-5 h-5 md:w-[22px] md:h-[22px]" alt="CV" />
              </a>

              <a
                href="https://medium.com/@namatery"
                target="_blank"
                rel="noopener noreferrer"
                title="Medium"
                className="flex items-center border-2 px-2 md:px-4 py-1.5 md:py-2 rounded hover:bg-blue-200 duration-300 cursor-pointer"
              >
                <img src="/assets/medium.png" className="w-5 h-5 md:w-[22px] md:h-[22px]" alt="Medium" />
              </a>
            </div>
          </div>

          <div className="w-32 h-32 md:w-[200px] md:h-[200px] rounded-full md:rounded overflow-hidden shadow shadow-gray-700 shrink-0">
            <img src="/images/avatar-3.jpg" className="w-full h-full object-cover" alt="Avatar" />
          </div>
        </div>

        {/* About Me */}
        <section className="flex flex-col items-stretch justify-center w-full max-w-3xl gap-2 pl-4 border-l-4 border-gray-300">
          <h1 className="text-xl md:text-2xl font-semibold">About Me</h1>
          <p className="text-sm md:text-base text-black/80 text-justify leading-relaxed">
            Backend engineer with 3+ years owning services from monolith-split to event-driven scale, plus production LLM/RAG work. Comfortable across Node.js, Go, Python and the messy edges in between (PostgreSQL tuning, Kong plugins, hybrid retrieval). Shipped wins: 90% fewer failed transactions, 99% read-load reduction, 70% MTTR cut, hallucination under 3% on a UK-lender RAG product.
          </p>
        </section>


        {/* Experience */}
        <section className="flex flex-col items-stretch justify-center w-full max-w-3xl gap-3">
          <h1 className="text-xl md:text-2xl font-semibold">Work Experience</h1>
          <div className="relative pl-6 md:pl-8 border-l border-gray-300 ml-2">
            {
              experiences.map((ex, idx) => {
                const isLast = idx === experiences.length - 1;
                return (
                  <div key={idx} className={`relative ${isLast ? "" : "pb-6"}`}>
                    {/* Timeline dot — centered on line */}
                    <span className="absolute -left-[30px] md:-left-[38px] top-2 w-3 h-3 rounded-full bg-gray-500" />

                    <div className="flex flex-row items-center justify-between gap-1 flex-wrap">
                      {ex.link ? (
                        <a href={ex.link} target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold text-blue-700 hover:underline">
                          {ex.company}
                        </a>
                      ) : (
                        <span className="text-base md:text-lg font-semibold">{ex.company}</span>
                      )}
                      <p className="text-xs md:text-sm text-gray-500">{ex.period}</p>
                    </div>

                    <h4 className="font-mono text-xs md:text-sm text-gray-500 mt-0.5">{ex.role} • {ex.location}</h4>

                    <ul className="text-xs md:text-sm mt-3 ml-4 list-disc space-y-1.5 text-justify">
                      {ex.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>

                    {ex.subRole && (
                      <div className="mt-4 pt-3 border-t border-dashed border-gray-300">
                        <p className="text-sm md:text-base font-medium">{ex.subRole.title}</p>
                        <ul className="text-xs md:text-sm mt-2 ml-4 list-disc space-y-1.5 text-justify">
                          {ex.subRole.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })
            }
          </div>
        </section>


        {/* Projects */}
        <section className="flex flex-col items-stretch justify-center w-full max-w-3xl gap-3">
          <h1 className="text-xl md:text-2xl font-semibold">Projects</h1>

          {/* Featured (closed source) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featuredProjects.map((fp, idx) => (
              <a
                key={idx}
                href={fp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-4 border rounded-lg md:hover:bg-gray-50 hover:border-gray-400 duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-sm md:text-base font-semibold text-blue-700 hover:underline truncate">
                    {fp.name}
                  </span>
                  <div className="flex items-center gap-2 text-xs shrink-0">
                    <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200 font-mono text-[10px] md:text-xs">
                      Closed Source
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-mono text-[10px] md:text-xs">
                      Live
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-gray-700 flex-1 mb-3">{fp.description}</p>

                <div className="flex flex-wrap items-center gap-2 mt-auto">
                  <span className="flex items-center gap-1 text-xs text-gray-700">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${languageColors[fp.language] ?? "bg-gray-400"}`}
                    />
                    {fp.language}
                  </span>
                  {fp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Other projects */}
          <h2 className="text-sm md:text-base font-medium text-gray-600 mt-2">Other Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((p, idx) => (
              <a
                key={idx}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-4 border rounded-lg md:hover:bg-gray-50 hover:border-gray-400 duration-200"
              >
                {/* Header: name + stars/forks */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-sm md:text-base font-semibold text-blue-700 hover:underline truncate">
                    {p.name}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-600 shrink-0">
                    {p.stars > 0 && (
                      <span className="flex items-center gap-0.5" title="Stars">
                        <span>★</span>
                        <span>{p.stars}</span>
                      </span>
                    )}
                    {p.forks > 0 && (
                      <span className="flex items-center gap-0.5" title="Forks">
                        <span>⑂</span>
                        <span>{p.forks}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-700 flex-1 mb-3">{p.description}</p>

                {/* Footer: language dot + tech badges */}
                <div className="flex flex-wrap items-center gap-2 mt-auto">
                  <span className="flex items-center gap-1 text-xs text-gray-700">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${languageColors[p.language] ?? "bg-gray-400"}`}
                    />
                    {p.language}
                  </span>
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section className="flex flex-col items-stretch justify-center w-full max-w-3xl gap-3">
          <h1 className="text-xl md:text-2xl font-semibold">Open Source</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {openSource.map((o, idx) => (
              <a
                key={idx}
                href={o.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border rounded-lg md:hover:bg-gray-200 duration-200"
              >
                <img
                  src={o.logo}
                  alt={`${o.name} logo`}
                  className="w-12 h-12 rounded shrink-0 object-cover bg-white border"
                />
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base font-medium text-blue-700 hover:underline truncate">
                      {o.name}
                    </span>
                    <span
                      className={`text-[10px] md:text-xs px-1.5 py-0.5 rounded font-mono shrink-0 ${o.status === "merged"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-green-100 text-green-700"
                        }`}
                    >
                      {o.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 mt-0.5">{o.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col items-stretch justify-center w-full max-w-3xl gap-3">
          <h1 className="text-xl md:text-2xl font-semibold">Skills</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map(({ category, items }, i) => (
              <div key={i} className="border rounded-lg p-3 md:hover:bg-gray-50 duration-200">
                <p className="text-base md:text-lg font-medium mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs md:text-sm text-gray-800 hover:bg-gray-200 duration-150"
                    >
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt=""
                          className="w-4 h-4 object-contain"
                        />
                      )}
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section >

      {/* Mobile Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:hidden w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-black/20 border border-gray-300"
          aria-label="Scroll to top"
        >
          <img src="/assets/arrow-up.svg" className="w-5 h-5 md:w-[22px] md:h-[22px]" alt="Arrow Up" />
        </button>
      )}

    </main >
  );
}
