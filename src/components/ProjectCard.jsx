import { getTechIcons } from "../services/githubService";

export default function ProjectCard({ title, description, technologies, githubUrl }) {
  const techs = getTechIcons(technologies);

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techs.map((tech) => (
          <span key={tech.name} title={tech.name}>
            {tech.icon}
          </span>
        ))}
      </div>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
        View on GitHub
      </a>
    </div>
  );
}
