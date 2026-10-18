import type { Project } from '../content/portfolio';
import { Icon } from './Icon';

export function ProjectCard({ project }: { project: Project }) {
  const imageName = typeof project.image === 'number' ? `project-${project.image}` : project.image;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.name} website (opens in a new tab)`}
    >
      <figure className="project-img">
        <div className="project-item-icon-box">
          <Icon name="eye-outline" />
        </div>
        <picture>
          <source
            srcSet={`./media/${imageName}-small.webp 480w, ./media/${imageName}.webp 960w`}
            sizes="(min-width: 1024px) 280px, (min-width: 768px) 340px, calc(100vw - 54px)"
            type="image/webp"
          />
          <img
            src={`./media/${imageName}.webp`}
            alt={project.imageAlt ?? `${project.name} website on desktop, tablet and mobile`}
            loading="lazy"
            decoding="async"
            width="960"
            height={project.imageHeight ?? 720}
          />
        </picture>
      </figure>
      <h3 className="project-title">{project.name}</h3>
      {project.services.map((service) => (
        <p className="project-category" key={service}>
          {service}
        </p>
      ))}
    </a>
  );
}
