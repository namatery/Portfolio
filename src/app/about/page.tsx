import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import {
  capabilities,
  experiences,
  openSource,
  profile,
  projects,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Alireza Rezapour, a backend engineer working across distributed systems, data, and applied AI.",
  alternates: { canonical: "/about/" },
};

type SectionLabelProps = {
  number: string;
  title: string;
  titleId: string;
};

function SectionLabel({ number, title, titleId }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <h2 id={titleId}>{title}</h2>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section className="about-section" aria-labelledby="experience-title">
      <SectionLabel number="01" title="Experience" titleId="experience-title" />

      <div className="timeline">
        {experiences.map((experience) => (
          <article
            className="timeline-item"
            key={`${experience.company}-${experience.period}`}
          >
            <div className="timeline-meta">
              <p>{experience.period}</p>
              <p>{experience.location}</p>
            </div>
            <div className="timeline-content">
              <h3>
                {experience.href ? (
                  <a href={experience.href} target="_blank" rel="noreferrer">
                    {experience.company}
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : (
                  experience.company
                )}
              </h3>
              <p className="role">{experience.role}</p>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      className="about-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionLabel number="02" title="Projects" titleId="projects-title" />

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
      <div className="small-projects">
        {otherProjects.map((project) => (
          <ProjectCard project={project} compact key={project.name} />
        ))}
      </div>
    </section>
  );
}

function OpenSourceSection() {
  return (
    <section className="about-section" aria-labelledby="open-source-title">
      <SectionLabel
        number="03"
        title="Open source"
        titleId="open-source-title"
      />

      <div className="contribution-list">
        {openSource.map((contribution) => (
          <a
            href={contribution.href}
            target="_blank"
            rel="noreferrer"
            key={contribution.name}
          >
            <div>
              <h3>{contribution.name}</h3>
              <p>{contribution.detail}</p>
            </div>
            <span>
              {contribution.status}
              <ArrowUpRight className="size-3.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="about-section" aria-labelledby="capabilities-title">
      <SectionLabel
        number="04"
        title="Capabilities"
        titleId="capabilities-title"
      />

      <div className="capability-grid">
        {capabilities.map((group) => (
          <div key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="container-shell page-shell">
      <header className="page-intro about-intro">
        <p className="eyebrow">About</p>
        <h1>I like hard systems problems and simple explanations.</h1>
        <div className="intro-columns">
          <p className="lead">
            I’m Alireza, a backend engineer based in Mashhad. I build services that
            handle money, data, messages, and increasingly, language models.
          </p>
          <div>
            <p>
              My work tends to begin when a system needs to become more reliable,
              observable, or easier to reason about. That might mean tracing a
              production failure, reshaping service boundaries, tuning a database,
              or designing retrieval that can support its claims.
            </p>
            <p>
              I value pragmatic architecture, careful measurement, and leaving both
              code and teams clearer than I found them.
            </p>
          </div>
        </div>
      </header>

      <ExperienceSection />
      <ProjectsSection />
      <OpenSourceSection />
      <CapabilitiesSection />

      <section className="contact-panel" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Have a problem worth thinking through?</h2>
          <p>
            I’m happy to talk about backend architecture, applied AI, open-source
            work, or a role where careful engineering matters.
          </p>
          <a
            className="button button-primary"
            href={`mailto:${profile.email}`}
          >
            Send me an email <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
