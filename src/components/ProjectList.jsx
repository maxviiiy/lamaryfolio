import { useEffect, useState } from "react";
import { getTopProjects } from "../services/githubService";
import ProjectCard from "./ProjectCard";
import ProjectSkeleton from "./ProjectSkeleton";
import { Link } from "react-router-dom";
import { FadeInSection } from "./FadeInSection";

export default function ProjectPreview() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getTopProjects().then(setProjects);
  }, []);

  return (
    <div className="project-grid" id="portfolio">
      {projects
        ? projects.map((p) => (
            <FadeInSection key={p.id}>
              <ProjectCard
                title={p.name}
                description={p.description}
                technologies={p.topics}
                githubUrl={p.html_url}
              />
            </FadeInSection>
          ))
        : Array.from({ length: 3 }).map((_, i) => (
            <ProjectSkeleton key={i} />
          ))}
      {projects && (
        <Link to="/projects" className="project-card see-more">
          <h3>See more</h3>
        </Link>
      )}
    </div>
  );
}
