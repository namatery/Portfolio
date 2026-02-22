"use client";

import { useEffect, useState } from "react";

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "Javascript", icon: "/assets/js.png" },
      { name: "Typescript", icon: "/assets/ts.png" },
      { name: "Node.js", icon: "/assets/nodejs.png" },
      { name: "Golang", icon: "/assets/go.png" },
      { name: "Nestjs", icon: "/assets/nestjs.png" },
      { name: "Fastify", icon: "/assets/fastify.png" },
      { name: "Adonisjs", icon: "/assets/adonisjs.png" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "Redis", icon: "/assets/redis.png" },
      { name: "Mysql", icon: "/assets/mysql.png" },
      { name: "Postgresql", icon: "/assets/postgresql.png" },
      { name: "Mongodb", icon: "/assets/mongodb.png" },
      { name: "Influxdb", icon: "/assets/influxdb.png" },
      { name: "Clickhouse", icon: "/assets/clickhouse.png" }
    ]
  },
  {
    category: "Monitoring & Debugging",
    items: [
      { name: "Grafana", icon: "/assets/grafana.png" },
      { name: "OpenTelemetry", icon: "/assets/open-telemetry.png" },
      { name: "OpenSearch", icon: "/assets/open-search.png" },
      { name: "GrayLog", icon: "/assets/graylog.jpg" },
      { name: "Signoz", icon: "/assets/signoz.png" },
    ]
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "Docker", icon: "/assets/docker.png" },
      { name: "KrakenD", icon: "/assets/krakend.png" },
      { name: "CI/CD", icon: "/assets/github-actions.png" },
      { name: "Git", icon: "/assets/git.png" },
      { name: "Linux", icon: "/assets/linux.png" },
      { name: "Kong", icon: "/assets/kong.png" },
      { name: "PeerDB", icon: "/assets/peerdb.png" },
    ]
  },
  {
    category: "Architecture",
    items: [
      { name: "Domain-Driven-Design", icon: "" },
      { name: "Microservices", icon: "" },
      { name: "Restful", icon: "" },
      { name: "System Design", icon: "" },
      { name: "Onion Arch", icon: "" },
      { name: "Vertical Slice Arch", icon: "" },
    ]
  },
  {
    category: "Messaging & Brokers",
    items: [
      { name: "RabbitMQ", icon: "/assets/rabbitmq.png" },
      { name: "NATS", icon: "/assets/n.png" },
      { name: "KAFKA", icon: "/assets/apache.png" },
    ]
  }
];

const experiences = [
  {
    company: "Hamtapay",
    link: "https://hamtapay.net",
    role: "Software Engineer",
    location: "Mashhad, Iran",
    period: "Aug 2025 – Present",
    description: "Maintained and enhanced microservices in a high-traffic cryptocurrency exchange platform. Implemented Domain-Driven Design (DDD) and asynchronous architecture to improve scalability and resilience.\n\nDesigned and implemented caching strategies for critical microservices, reducing database load from 500 req/sec to 20 req/sec and significantly boosting performance.\n\nDeveloped AI-driven automation tools based on company requirements to streamline internal processes.\n\nMaintained and developed custom Kong API gateway extensions using Go.\n\nMigrated and optimized admin panel queries to a data warehouse, improving query efficiency and reporting capabilities."
  },
  {
    company: "Part Software Group",
    link: 'https://partsoftware.com',
    role: "Software Engineer",
    location: "Mashhad, Iran",
    period: "Apr 2024 – Aug 2025",
    description:
      "As a Software Engineer, I led cross-team recovery efforts during critical production outages, achieving a 70% reduction in MTTR. I optimized key workflows to cut latency by 60% and spearheaded the re-architecture of core services, enabling faster deployments and reduced technical debt. I also authored over 10 RFCs that influenced company-wide architecture standards and mentored new hires to streamline onboarding."
  },
  {
    company: "Forvest",
    link: 'https://forvest.io',
    role: "Software Developer",
    location: "Mashhad, Iran",
    period: "Aug 2023 – Apr 2024",
    description:
      "At Forvest, I was responsible for architecting and executing the migration from a monolithic to a microservices architecture, reducing deployment times by 70%. I redesigned the crypto market data service to halve fetch times and implemented real-time data streaming with NATS, enabling faster AI-driven decision-making. I also built a custom CRM to improve user retention and support efficiency, and developed CI/CD pipelines to streamline releases."
  },
  {
    company: "Farajahan Hashtom",
    role: "Software Developer",
    location: "Mashhad, Iran",
    period: "Jan 2023 – May 2023",
    description:
      "I developed the full backend system from scratch using Node.js and Express, ensuring scalability and maintainability. The platform supported dual payment methods—cryptocurrency and local fiat—while implementing TOTP-based two-factor authentication for enhanced security. I also built real-time WebSocket functionality for transaction updates, improving user experience for over 5,000 users and reducing support requests by 30%."
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

      <section className="flex flex-col items-center space-y-8">

        {/* Header */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between gap-6 p-2 w-full max-w-3xl">

          <div className="flex flex-col space-y-3 text-center md:text-left">
            {/* General */}
            <h1 className="text-3xl md:text-4xl font-bold">Alireza Rezapour</h1>
            <p className="text-[14px] md:text-[16px] text-black/80">Software Engineer</p>

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
        <section className="flex flex-col items-stretch justify-center p-2 w-full max-w-3xl space-y-1.5 border-gray-600 border-0 border-dashed md:hover:bg-gray-200 rounded cursor-pointer duration-200">
          <h1 className="text-xl md:text-2xl">About Me</h1>
          <p className="text-sm md:text-base text-black/80 text-justify">
            A passionate software engineer looking for building reliable, maintainable, and high-performance services.
            I work with Node.js and Golang to build scalable, maintainable systems that meet evolving business requirements. I thrive on solving complex problems, guiding architectural decisions, mentoring team members, and optimizing development processes for efficiency and reliability.
          </p>
        </section>


        {/* Experience */}
        <section className="flex flex-col items-stretch justify-center p-2 w-full max-w-3xl gap-4 space-y-1.5 border-gray-600 border-0 border-dashed">
          <h1 className="text-xl md:text-2xl">Work Experience</h1>
          {
            experiences.map((ex, idx) => {
              return (
                <div key={idx} className="md:hover:bg-gray-200 rounded cursor-pointer duration-200 p-2">
                  <div className="flex flex-row items-center justify-between gap-1">
                    <a href={ex.link} target="_blank" rel="noopener noreferrer" className="text-base md:text-lg text-blue-700 hover:underline">
                      {ex.company}
                    </a>
                    <p className="text-xs md:text-sm text-gray-500">{ex.period}</p>
                  </div>

                  <h4 className="font-mono text-xs md:text-sm text-gray-500">{ex.role} • {ex.location}</h4>
                  <div className="text-xs md:text-sm mt-2 ml-0.5 text-justify">{ex.description}</div>
                </div>
              )
            })
          }
        </section>


        {/* Skills */}
        <section className="p-2 md:p-4 w-full max-w-3xl">
          <h1 className="text-xl md:text-2xl font-semibold mb-3">Skills</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map(({ category, items }, i) => (
              <div key={i} className="md:hover:bg-gray-200 rounded cursor-pointer duration-200 p-2">
                <p className="text-base md:text-lg font-medium mb-2">{category}</p>
                <p className="text-xs md:text-sm text-gray-700">
                  {items.map(item => item.name).join(", ")}
                </p>
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
