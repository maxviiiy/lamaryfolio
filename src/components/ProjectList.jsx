import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
// import "./ProjectList.css";

export default function ProjectList({ projects, limit = 3, showSeeMore = true }) {
  const previewProjects = projects.slice(0, limit);

  return (
    <div className="project-list">
      {previewProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.description}
          technologies={project.topics}
          githubUrl={project.html_url}
        />
      ))}

      {showSeeMore && projects.length > limit && (
        <Link to="/projects" className="see-more-card">
          <span>See More Projects →</span>
        </Link>
      )}
    </div>
  );
}

// import projectService from '../services/projectService';
// import ProjectCard from './ProjectCard';
// import './ProjectList.css';

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const data = await projectService.getProjects();
//         setProjects(data);
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <div className="project-list">
//       {projects.map(project => (
//         <ProjectCard key={project.name} project={project} />
//       ))}
//     </div>
//   );
// };

// export default ProjectList;
