import { FaGithub } from "react-icons/fa";
// import "./ProjectCard.css";

export default function ProjectCard({ title, description, technologies, githubUrl }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-icons">
        {technologies.map((tech, idx) => (
          <img key={idx} src={`/icons/${tech}.svg`} alt={tech} className="tech-icon" />
        ))}
      </div>
      <a href={githubUrl} className="btn" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ marginRight: "0.5rem" }} />
        View on GitHub
      </a>
    </div>
  );
}

// import './ProjectCard.css';

// const ProjectCard = ({ project }) => (
//   <div className="project-card">
//     <h2>{project.name}</h2>
//     <p>{project.description}</p>
//     <a href={project.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
//     <div className="project-topics">
//       {project.topics.map((topic, index) => (
//         <span key={index} className="topic">{topic}</span>
//       ))}
//     </div>
//   </div>
// );

// export default ProjectCard;
