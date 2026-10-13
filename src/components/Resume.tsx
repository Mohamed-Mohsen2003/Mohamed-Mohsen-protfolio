import { education, experience } from '../content/portfolio';
import { Icon } from './Icon';
import { Skills } from './Skills';

export function Resume() {
  return (
    <>
      <section className="timeline" aria-labelledby="education-title">
        <div className="title-wrapper">
          <div className="icon-box">
            <Icon name="book-outline" />
          </div>
          <h3 className="h3" id="education-title">
            Education
          </h3>
        </div>
        <ol className="timeline-list">
          {education.map((item) => (
            <li className="timeline-item" key={item.title}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              {item.description && <p className="timeline-text">{item.description}</p>}
            </li>
          ))}
        </ol>
      </section>
      <section className="timeline" aria-labelledby="experience-title">
        <div className="title-wrapper">
          <div className="icon-box">
            <Icon name="briefcase-outline" />
          </div>
          <h3 className="h3" id="experience-title">
            Experience
          </h3>
        </div>
        <ol className="timeline-list">
          {experience.map((item) => (
            <li className="timeline-item" key={item.company}>
              <h4 className="h4 timeline-item-title">
                {item.role} at {item.company}
              </h4>
              <span>
                {item.period}
                {item.note ? ` · ${item.note}` : ''}
              </span>
              <ul className="experience-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
      <Skills />
    </>
  );
}
