import { useEffect, useState } from "react";
import { getAllShowcaseProjects } from "../services/githubService";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllShowcaseProjects().then(setProjects);
  }, []);

  return (
    <div className="project-grid">
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          title={p.name}
          description={p.description}
          technologies={p.topics}
          githubUrl={p.html_url}
        />
      ))}
    </div>
  );
}
