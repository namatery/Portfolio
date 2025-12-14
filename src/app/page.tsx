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
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "Redis", icon: "/assets/redis.png" },
      { name: "Mysql", icon: "/assets/mysql.png" },
      { name: "Postgresql", icon: "/assets/postgresql.png" },
      { name: "Mongodb", icon: "/assets/mongodb.png" },
      { name: "Influxdb", icon: "/assets/influxdb.png" }
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
    company: "Part Software Group",
    link: 'https://partsoftware.com',
    role: "Software Engineer",
    location: "Mashhad, Iran",
    period: "Apr 2024 – Aug 2025",
    description:
      "As a Backend Engineer, I led cross-team recovery efforts during critical production outages, achieving a 70% reduction in MTTR. I optimized key workflows to cut latency by 60% and spearheaded the re-architecture of core services, enabling faster deployments and reduced technical debt. I also authored over 10 RFCs that influenced company-wide architecture standards and mentored new hires to streamline onboarding."
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
  return (
    <main className="container relative mx-auto overflow-auto md:p-16 p-4 text-[#000000]">

      <section className="flex flex-col items-center space-y-8">

        {/* Header */}
        <div className="flex items-stretch justify-between p-2 w-3xl">

          <div className="flex flex-col space-y-1.5">
            {/* General */}
            <h1 className="text-4xl font-bold">Alireza Rezapour</h1>
            <p className="text-[16px] text-black/80 max-w-max">Software Engineer / Backend Developer focused on Node.j & Golang</p>

            {/* Fact Section */}
            <div className="grid grid-cols-2 text-[15px] gap-2 m-auto">
              <div className="p-1 border-b-2 cursor-pointer">📍 Based in Mashhad, Iran</div>
              <div className="p-1 border-b-2">🎮 Interests: Gaming, Music, Walking</div>
              <div className="p-1 border-b-2">💼 Currently at Hamtapay</div>
              <div className="p-1 border-b-2">🛠 Always chasing better code</div>
            </div>

            {/* Link Section */}
            <div className="flex gap-3 mt-auto">
              <a
                href="mailto:alireza.rezapour.me@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Gmail"
                className="flex items-center border-2 text-black px-4 rounded hover:bg-red-200 duration-300 cursor-pointer"
              >
                <img src="/assets/gmail.png" height={22} width={22} alt="Gmail" />
              </a>

              <a
                href="tel:+989962496521"
                title="Phone"
                className="flex items-center border-2 text-black px-4 py-2 rounded hover:bg-indigo-200 duration-300 cursor-pointer"
              >
                <img src="/assets/phone.png" height={22} width={22} alt="Phone" />
              </a>

              <a
                href="https://www.linkedin.com/in/alirezarezapour"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex items-center border-2 text-black px-4 py-2 rounded hover:bg-green-200 duration-300 cursor-pointer"
              >
                <img src="/assets/linkedin.png" height={22} width={22} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/alireza12prom"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                className="flex items-center border-2 gap-2 text-black px-4 py-2 rounded hover:bg-fuchsia-200 duration-300 cursor-pointer"
              >
                <img src="/assets/github.png" height={22} width={22} alt="Github" />
              </a>

              <a
                href="/files/Alireza_Rezapour_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download CV"
                className="flex items-center border-2 gap-2 text-black px-4 py-2 rounded hover:bg-amber-200 duration-300 cursor-pointer"
              >
                <img src="/assets/folder.png" height={22} width={22} alt="CV" />
              </a>

              <a
                href="https://medium.com/@namatery"
                target="_blank"
                rel="noopener noreferrer"
                title="Medium"
                className="flex items-center border-2 gap-2 px-4 py-2 rounded hover:bg-blue-200 duration-300 cursor-pointer"
              >
                <img src="/assets/medium.png" height={22} width={22} alt="Medium" />
              </a>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow shadow-gray-700">
            <img src="/images/avatar.png" height={200} width={200} alt="Avatar" />
          </div>
        </div>

        {/* About Me */}
        <section className="flex flex-col items-stretch justify-center p-2 w-3xl space-y-1.5 border-gray-600 border-0 border-dashed hover:bg-gray-200 rounded cursor-pointer duration-200">
          <h1 className="text-2xl">About Me</h1>
          <p className="text-black/80">
            A passionate software engineer looking for building reliable, maintainable, and high-performance services.
            I work with Node.js and Golang to build scalable, maintainable systems that meet evolving business requirements. I thrive on solving complex problems, guiding architectural decisions, mentoring team members, and optimizing development processes for efficiency and reliability.
          </p>
        </section>


        {/* Experience */}
        <section className="flex flex-col items-stretch justify-center p-2 w-3xl gap-4 space-y-1.5 border-gray-600 border-0 border-dashed">
          <h1 className="text-2xl">Work Experience</h1>
          {
            experiences.map((ex, idx) => {
              return (
                <div key={idx} className="hover:bg-gray-200 rounded cursor-pointer duration-200 p-2">
                  <div className="flex items-stretch justify-between">
                    <a href={ex.link} target="_blank" rel="noopener noreferrer" className="flex text-lg text-blue-700 hover:underline">
                      {ex.company}
                    </a>
                    <p className="text-sm text-gray-500">{ex.period}</p>
                  </div>

                  <h4 className="font-mono text-sm text-gray-500">{ex.role} • {ex.location}</h4>
                  <div className="text-sm mt-2 ml-0.5">{ex.description}</div>
                </div>
              )
            })
          }
        </section>


        {/* Skills */}
        <section className="p-4 w-3xl">
          <h1 className="text-2xl font-semibold mb-3">Skills</h1>
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map(({ category, items }, i) => (
              <div key={i} className="hover:bg-gray-200 rounded cursor-pointer duration-200 p-2">
                <p className="text-lg font-medium mb-2">{category}</p>
                <p className="text-sm text-gray-700">
                  {items.map(item => item.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section >

    </main >
  );
}
