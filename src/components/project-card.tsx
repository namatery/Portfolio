import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const className = compact
    ? "project-card project-card-compact"
    : "project-card";

  return (
    <a
      className={className}
      href={project.href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-card-head">
        <div>
          <p className="project-context">{project.context}</p>
          <h3>{project.name}</h3>
        </div>
        <ArrowUpRight aria-hidden="true" className="project-arrow" />
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-footer">
        <span className="status-dot">
          <i aria-hidden="true" />
          {project.status}
        </span>
        <ul
          className="tag-list"
          aria-label={`${project.name} technologies`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
