import { useEffect, useState } from "react";
import { getAllShowcaseProjects, getTopProjects, getTechIcons } from "../services/githubService";

export default function TestGithubService() {
  const [all, setAll] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    getAllShowcaseProjects().then(setAll);
    getTopProjects().then(setTop);
  }, []);

  return (
    <div>
      <h2>All Showcase Projects</h2>
      <pre>{JSON.stringify(all, null, 2)}</pre>
      <h2>Top Projects</h2>
      <pre>{JSON.stringify(top, null, 2)}</pre>
      <h2>Tech Icons for First Project</h2>
      <pre>{all[0] ? JSON.stringify(getTechIcons(all[0].topics), null, 2) : "No projects"}</pre>
    </div>
  );
}