import { useState } from 'react';
import { projects, type ProjectService } from '../data/portfolio';
import { Icon } from './Icon';

type Filter = 'All' | ProjectService;
const filters: Filter[] = ['All', 'UI/UX Design', 'SEO'];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('All');
  const shown = projects.filter(project => filter === 'All' || project.services.includes(filter));
  return <section className="projects">
    <p className="section-intro">A selection of websites I have worked on. Each project lists my areas of involvement.</p>
    <ul className="project-filters" aria-label="Filter projects">{filters.map(item => <li key={item}><button type="button" className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button></li>)}</ul>
    <p className="sr-only" role="status">{shown.length} projects shown</p>
    <ul className="project-list">{shown.map(project => <li className="project-item active" key={project.url}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} website (opens in a new tab)`}>
        <figure className="project-img">
          <div className="project-item-icon-box"><Icon name="eye-outline" /></div>
          <img src={`./media/project-${project.image}.webp`} srcSet={`./media/project-${project.image}-small.webp 480w, ./media/project-${project.image}.webp 960w`} sizes="(min-width: 1024px) 280px, (min-width: 768px) 340px, calc(100vw - 54px)" alt={`${project.name} website shown on desktop, tablet and mobile`} loading="lazy" decoding="async" width="960" height="720" />
        </figure>
        <h3 className="project-title">{project.name}</h3>{project.services.map(service => <p className="project-category" key={service}>{service}</p>)}
      </a>
    </li>)}</ul>
  </section>;
}
