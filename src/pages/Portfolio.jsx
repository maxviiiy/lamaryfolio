import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/github-projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="projects-page container">
      <h2>All Projects</h2>
      <ProjectList projects={projects} limit={Infinity} showSeeMore={false} />
    </section>
  );
}
