import { useEffect, useState } from "react";
import { getAllShowcaseProjects } from "../services/githubService";
import ProjectCard from "../components/ProjectCard";
import ProjectSkeleton from "../components/ProjectSkeleton";
import SectionHeader from "../components/SectionHeader";
import { FadeInSection } from "../components/FadeInSection";
import LightEffect from "../components/LightEffect";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getAllShowcaseProjects().then(setProjects);
  }, []);

  return (
    <section className="hero portfolio-page" id="portfolio">
      <LightEffect />
      <div className="hero-content portfolio-hero-content">
        <FadeInSection>
          <div className="portfolio-header">
            <SectionHeader
              title="My Projects"
              description="Here's a collection of my recent work. Each project represents a challenge I've tackled and the solutions I've crafted using modern web technologies."
              centered={true}
            />
          </div>
        </FadeInSection>

        <div className="project-grid">
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
            : Array.from({ length: 6 }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))}
        </div>

        {projects && projects.length === 0 && (
          <FadeInSection>
            <div className="portfolio-empty-state">
              <h3 className="portfolio-empty-title">
                More Projects Coming Soon!
              </h3>
              <p className="portfolio-empty-description">
                I'm currently working on some exciting projects. Check back soon or visit my GitHub 
                to see my latest work.
              </p>
              <a 
                href="https://github.com/maryqu3en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn portfolio-github-btn"
              >
                Visit GitHub
              </a>
            </div>
          </FadeInSection>
        )}
      </div>
    </section>
  );
}
