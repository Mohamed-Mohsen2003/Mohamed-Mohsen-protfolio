import { skillGroups } from '../content/portfolio';

export function Skills() {
  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <h3 className="h3 skills-title" id="skills-title">
        Technical Skills
      </h3>
      <div className="skill-group-list">
        {skillGroups.map((group) => (
          <div className="content-card skill-group" key={group.title}>
            <h4 className="h4">{group.title}</h4>
            <ul className="skill-tags">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
