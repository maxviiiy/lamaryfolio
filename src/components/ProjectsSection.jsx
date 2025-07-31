import SectionHeader from "./SectionHeader";
import ProjectPreview from "./ProjectList";
import "../styles/Home.css";

const ProjectsSection = () => {
  return (
    <section className="projects-preview-section">
      <SectionHeader
        title="Featured Projects"
        description="Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and modern web technologies."
        centered={true}
        className="projects-preview-header"
      />
      <ProjectPreview />
    </section>
  );
};

export default ProjectsSection;
