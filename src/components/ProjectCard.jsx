import { getTechIcons } from "../services/githubService";
import "../styles/ProjectCard.css";

export default function ProjectCard({ title, description, technologies, githubUrl }) {
  const techs = getTechIcons(technologies);

  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
      </div>
      
      <div className="project-content">
        <p>{description || "No description available for this project."}</p>
      </div>
      
      <div className="tech-stack">
        {techs.map((tech) => (
          <span key={tech.name} title={tech.name}>
            {tech.icon}
          </span>
        ))}
      </div>
      
      <div className="project-actions">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
          View on GitHub →
        </a>
      </div>
    </div>
  );
}
