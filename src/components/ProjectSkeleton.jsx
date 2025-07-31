import "../styles/ProjectCard.css";

export default function ProjectSkeleton() {
  return (
    <div className="project-card skeleton">
      <div className="project-header">
        <div className="skeleton-title" />
      </div>
      
      <div className="project-content">
        <div className="skeleton-desc" />
      </div>
      
      <div className="skeleton-techs">
        <div className="skeleton-tech" />
        <div className="skeleton-tech" />
        <div className="skeleton-tech" />
        <div className="skeleton-tech" />
      </div>
      
      <div className="project-actions">
        <div className="skeleton-btn" />
      </div>
    </div>
  );
}