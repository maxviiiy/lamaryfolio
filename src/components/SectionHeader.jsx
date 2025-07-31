import { FadeInSection } from "./FadeInSection";
import "../styles/SectionHeader.css";

const SectionHeader = ({ title, description, centered = false, className = "" }) => {
  return (
    <FadeInSection>
      <div className={`${centered ? 'section-header-centered' : 'section-header'} ${className}`}>
        <h2 className="section-title">
          {title}
        </h2>
        {description && (
          <p className="section-description">
            {description}
          </p>
        )}
      </div>
    </FadeInSection>
  );
};

export default SectionHeader;
