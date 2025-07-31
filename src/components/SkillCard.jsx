import "../styles/Home.css";

const SkillCard = ({ icon, title, description, index }) => {
  return (
    <div 
      className="skill-card"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="skill-icon">
        {icon}
      </div>
      <h4 className="skill-title">
        {title}
      </h4>
      <p className="skill-description">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
