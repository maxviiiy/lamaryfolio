import projectService from '../services/projectService';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
