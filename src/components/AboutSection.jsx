import { FadeInSection } from "./FadeInSection";
import SkillCard from "./SkillCard";
import "../styles/Home.css";

const AboutSection = () => {
  const skills = [
    { icon: "🌐", title: "Frontend", desc: "React, TypeScript, CSS" },
    { icon: "⚙️", title: "Backend", desc: "Node.js, Express, APIs" },
    { icon: "🗄️", title: "Database", desc: "PostgreSQL, Prisma" },
    { icon: "🎨", title: "Design", desc: "UI/UX, Responsive" }
  ];

  return (
    <section className="quick-about-section">
      <FadeInSection>
        <div className="about-grid">
          <div>
            <h2 className="about-title">
              About Me
            </h2>
            <p className="about-description">
              I'm a passionate software engineering student and full-stack developer based in Algeria. 
              I love creating beautiful, functional web applications that solve real-world problems.
            </p>
            <div className="hero-buttons">
              <a href="/about" className="btn">Learn More About Me</a>
              <a 
                href="/CV.pdf" 
                className="btn btn-light btn-download" 
                download
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.desc}
                index={index}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default AboutSection;
