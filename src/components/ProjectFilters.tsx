import { motion, useReducedMotion } from 'motion/react';
import type { ProjectService } from '../content/portfolio';

export type ProjectFilter = 'All' | ProjectService;
const filters: ProjectFilter[] = ['All', 'UI/UX Design', 'SEO'];

interface ProjectFiltersProps {
  selected: ProjectFilter;
  onSelect: (filter: ProjectFilter) => void;
}

export function ProjectFilters({ selected, onSelect }: ProjectFiltersProps) {
  const reduceMotion = useReducedMotion();
  return (
    <ul className="project-filters" aria-label="Filter projects">
      {filters.map((filter) => (
        <li key={filter}>
          <button
            type="button"
            className={selected === filter ? 'active' : ''}
            onClick={() => onSelect(filter)}
            aria-pressed={selected === filter}
          >
            {selected === filter && (
              <motion.span
                className="filter-marker"
                layoutId="selected-project-filter"
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                aria-hidden="true"
              />
            )}
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
}
