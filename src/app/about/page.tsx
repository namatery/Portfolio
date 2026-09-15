import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { capabilities, experiences, openSource, profile, projects } from "@/data/portfolio";

export const metadata: Metadata = { title: "About", description: "About Alireza Rezapour, a backend engineer working across distributed systems, data, and applied AI.", alternates: { canonical: "/about/" } };

export default function AboutPage() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);
  return <main className="container-shell page-shell">
    <header className="page-intro about-intro"><p className="eyebrow">About</p><h1>I like hard systems problems and simple explanations.</h1><div className="intro-columns"><p className="lead">I’m Alireza, a backend engineer based in Mashhad. I build services that handle money, data, messages, and increasingly, language models.</p><div><p>My work tends to begin when a system needs to become more reliable, observable, or easier to reason about. That might mean tracing a production failure, reshaping service boundaries, tuning a database, or designing retrieval that can support its claims.</p><p>I value pragmatic architecture, careful measurement, and leaving both code and teams clearer than I found them.</p></div></div></header>

    <section className="about-section" aria-labelledby="experience-title"><div className="section-label"><span>01</span><h2 id="experience-title">Experience</h2></div><div className="timeline">{experiences.map((experience) => <article className="timeline-item" key={`${experience.company}-${experience.period}`}><div className="timeline-meta"><p>{experience.period}</p><p>{experience.location}</p></div><div className="timeline-content"><h3>{experience.href ? <a href={experience.href} target="_blank" rel="noreferrer">{experience.company}<ArrowUpRight className="size-4" /></a> : experience.company}</h3><p className="role">{experience.role}</p><ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div></section>

    <section className="about-section" id="projects" aria-labelledby="projects-title"><div className="section-label"><span>02</span><h2 id="projects-title">Projects</h2></div><div className="featured-projects">{featured.map((project) => <ProjectCard project={project} key={project.name} />)}</div><div className="small-projects">{others.map((project) => <ProjectCard project={project} compact key={project.name} />)}</div></section>

    <section className="about-section" aria-labelledby="open-source-title"><div className="section-label"><span>03</span><h2 id="open-source-title">Open source</h2></div><div className="contribution-list">{openSource.map((item) => <a href={item.href} target="_blank" rel="noreferrer" key={item.name}><div><h3>{item.name}</h3><p>{item.detail}</p></div><span>{item.status}<ArrowUpRight className="size-3.5" /></span></a>)}</div></section>

    <section className="about-section" aria-labelledby="capabilities-title"><div className="section-label"><span>04</span><h2 id="capabilities-title">Capabilities</h2></div><div className="capability-grid">{capabilities.map((group) => <div key={group.label}><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>

    <section className="contact-panel" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-title">Have a problem worth thinking through?</h2>
        <p>I’m happy to talk about backend architecture, applied AI, open-source work, or a role where careful engineering matters.</p>
        <a className="button button-primary" href={`mailto:${profile.email}`}>Send me an email <ArrowUpRight className="size-4" /></a>
      </div>
    </section>
  </main>;
}
