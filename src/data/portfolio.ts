export type Experience = { company: string; href?: string; role: string; location: string; period: string; highlights: string[] };
export type Project = { name: string; href: string; description: string; context: string; status: "Live" | "Open source" | "Experiment"; technologies: string[]; featured?: boolean };

export const profile = {
  name: "Alireza Rezapour", role: "Backend Engineer", location: "Mashhad, Iran",
  email: "alireza.rezapour.me@gmail.com", github: "https://github.com/namatery",
  linkedin: "https://www.linkedin.com/in/alirezarezapour", cv: "/files/Alireza_Rezapour_CV.pdf",
  summaryLead: "I build backend systems, developer tools, and AI products.",
  summary: "Most of my work revolves around reliability, performance, distributed systems, and making complex systems easier to understand and maintain. Outside of work, I write about things I’m learning, building, and figuring out along the way.",
};

export const experiences: Experience[] = [
  { company: "Hamtapay", href: "https://hamtapay.net", role: "Backend Engineer", location: "Mashhad, Iran", period: "Aug 2025 — Present", highlights: [
    "Refactored a payment and transfer engine, cutting transaction failures by 90% and production incidents by 30%.",
    "Introduced read-side caching on high-traffic endpoints, reducing database reads from 5,000+ requests per second to under 20.",
    "Moved analytical workloads to ClickHouse and synchronous service calls to event-driven RabbitMQ messaging.",
    "Led Criterio, a citation-grounded agentic RAG assistant for UK mortgage brokers.",
  ] },
  { company: "Part Software Group", href: "https://partsoftware.com", role: "Backend Engineer", location: "Mashhad, Iran", period: "Apr 2024 — Aug 2025", highlights: [
    "Designed payment, identity, authentication, and scheduling services around hexagonal and event-driven architecture.",
    "Migrated twelve services to an internal container platform, reducing deployments from a working day to minutes.",
    "Owned incident response, technical RFCs, and mentoring across service and team boundaries.",
  ] },
  { company: "Forvest", href: "https://forvest.io", role: "Backend Developer", location: "Mashhad, Iran", period: "Aug 2023 — Apr 2024", highlights: [
    "Contributed to a monolith-to-microservices migration and redesigned crypto market-data ingestion for higher throughput.",
    "Introduced NATS streaming and KrakenD gateway infrastructure for low-latency analytics workloads.",
  ] },
  { company: "Farajahan Hashtom", role: "Backend Developer", location: "Mashhad, Iran", period: "Jan 2023 — Aug 2023", highlights: [
    "Built Node.js and MongoDB APIs, real-time market broadcasts, and on-chain wallet reconciliation flows.",
  ] },
];

export const projects: Project[] = [
  { name: "Criterio", href: "https://criterio.uk/", description: "A citation-grounded assistant that helps UK mortgage brokers navigate lending criteria across more than 50 lender documents.", context: "Lead engineer · product and retrieval architecture", status: "Live", technologies: ["Python", "LangGraph", "FastAPI", "SQLite", "RAG"], featured: true },
  { name: "Sekebit", href: "https://sekebit.com/", description: "A Persian-language fintech product combining automated global-market trading with a self-custody crypto wallet.", context: "Backend systems · trading and wallet infrastructure", status: "Live", technologies: ["TypeScript", "Microservices", "Real-time systems", "Crypto"], featured: true },
  { name: "multer-minio", href: "https://github.com/namatery/multer-minio", description: "A published Multer storage engine for streaming application uploads directly to MinIO.", context: "Maintainer · npm package", status: "Open source", technologies: ["TypeScript", "Multer", "MinIO", "Node.js"], featured: true },
  { name: "blackbird", href: "https://github.com/namatery/blackbird", description: "A reverse proxy built with Node.js clustering and load balancing.", context: "Personal systems project", status: "Open source", technologies: ["TypeScript", "Node.js", "Networking"] },
  { name: "BlockMail", href: "https://github.com/namatery/BlockMail", description: "A proof of concept for encrypted messaging between Ethereum addresses through IPFS and on-chain events.", context: "Decentralized application experiment", status: "Experiment", technologies: ["Electron", "Ethereum", "IPFS", "Hardhat"] },
  { name: "xo-villain-ai", href: "https://github.com/namatery/xo-villain-ai", description: "Tic-tac-toe with a minimax engine and an LLM-powered opponent.", context: "AI interaction experiment", status: "Experiment", technologies: ["Vue", "FastAPI", "SQLite", "LLM"] },
];

export const openSource = [
  { name: "Uptime Kuma", href: "https://github.com/louislam/uptime-kuma/pull/6899", detail: "Merged customizable Matrix notifications feature.", status: "Merged" },
  { name: "Firecrawl", href: "https://github.com/firecrawl/firecrawl/pull/2818", detail: "Test coverage for HTML srcset handling.", status: "Open" },
  { name: "podman-mcp-server", href: "https://github.com/manusa/podman-mcp-server/pulls?q=is%3Apr+author%3Anamatery", detail: "Two merged contributions covering JSON output and AI-assistant documentation.", status: "Merged" },
];

export const capabilities = [
  { label: "Languages & runtimes", items: ["TypeScript", "JavaScript", "Node.js", "Go", "Python"] },
  { label: "Data & messaging", items: ["PostgreSQL", "ClickHouse", "MongoDB", "Redis", "RabbitMQ", "NATS", "Kafka"] },
  { label: "Systems", items: ["Distributed systems", "Event-driven architecture", "Observability", "API gateways", "Performance"] },
  { label: "Applied AI", items: ["RAG", "Agentic workflows", "Retrieval design", "Evaluation", "Prompt engineering"] },
];
