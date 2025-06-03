import { useEffect, useState } from "react";
import Hero from '../components/Hero'
import ProjectList from "../components/ProjectList";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/github-projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <Hero />
      <ProjectList projects={projects} limit={3} showSeeMore={true} />
    </div>
  );
};

export default Home;