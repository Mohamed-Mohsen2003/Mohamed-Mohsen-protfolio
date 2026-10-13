'use client';

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react';
import { useMemo, useState } from 'react';
import { projects } from '../content/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters, type ProjectFilter } from './ProjectFilters';

export function Portfolio() {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const reduceMotion = useReducedMotion();
  const shown = useMemo(
    () => projects.filter((project) => filter === 'All' || project.services.includes(filter)),
    [filter],
  );
  return (
    <section className="projects">
      <p className="section-intro">Selected projects and the services I contributed to each one.</p>
      <LayoutGroup id="project-gallery">
        <ProjectFilters selected={filter} onSelect={setFilter} />
        <p className="sr-only" role="status">
          {shown.length} projects shown
        </p>
        <motion.ul layout className="project-list animated-project-list">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((project) => (
              <motion.li
                key={project.url}
                className="project-item active"
                layout={reduceMotion ? false : 'position'}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
                transition={{
                  opacity: { duration: reduceMotion ? 0 : 0.2 },
                  y: { duration: reduceMotion ? 0 : 0.25 },
                  layout: { type: 'spring', stiffness: 280, damping: 30 },
                }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </section>
  );
}
