import { getTechLogos } from "../services/githubService";
import "../styles/ProjectCard.css";

export default function ProjectCard({ title, description, technologies, githubUrl }) {
  const filteredTechs = technologies.filter(tech => tech.toLowerCase() !== 'showcase');
  const techs = getTechLogos(filteredTechs);

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
          <div key={tech.name} className="tech-logo" title={tech.name}>
            <img 
              src={tech.logoUrl} 
              alt={tech.name}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span className="tech-fallback" style={{ display: 'none' }}>
              {tech.name.charAt(0).toUpperCase()}
            </span>
          </div>
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
