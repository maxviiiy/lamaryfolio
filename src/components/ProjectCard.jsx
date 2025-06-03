import './ProjectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h2>{project.name}</h2>
    <p>{project.description}</p>
    <a href={project.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    <div className="project-topics">
      {project.topics.map((topic, index) => (
        <span key={index} className="topic">{topic}</span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
