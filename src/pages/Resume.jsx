import { FadeInSection } from "../components/FadeInSection";
import SectionHeader from "../components/SectionHeader";
import ExperienceItem from "../components/ExperienceItem";
import EducationItem from "../components/EducationItem";
import LightEffect from "../components/LightEffect";
import { FiDownload } from "react-icons/fi";
import "../styles/Resume.css";

const Resume = () => {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "El Imane Clinic",
      period: "December 2024 - June 2025",
      location: "Ain Defla, Algeria",
      description: [
        "Developed a comprehensive clinic management website from scratch",
        "Built full-stack application with patient management and medical records",
        "Implemented secure authentication and role-based access control for staff and doctors",
        "Designed and developed intuitive user interfaces for both administrative and patient portals",
        "Managed database design and optimization for efficient data handling"
      ]
    }
  ];

  const education = [
    {
      degree: "Master's Degree in Advanced Information Systems Engineering",
      school: "University of Hassiba Ben Bouali",
      period: "2025 - Present",
      location: "Chlef, Algeria",
      description: "Specializing in advanced information systems engineering, focusing on modern software architectures and enterprise solutions"
    },
    {
      degree: "Bachelor's Degree in Computer Science (Information Systems)",
      school: "University of Hassiba Ben Bouali",
      period: "2022 - 2025",
      location: "Chlef, Algeria",
      description: "Completed comprehensive study in computer science with focus on information systems, software development, and database management"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "Database Design", "Authentication"],
    "Database": ["MongoDB", "PostgreSQL", "Prisma ORM", "Database Optimization"],
    "Tools & Other": ["Git", "GitHub", "VS Code", "Figma", "Agile Methodology", "Problem Solving"]
  };

  return (
    <section className="hero resume-page" id="resume">
      <LightEffect />
      <div className="hero-content resume-hero-content">
        <FadeInSection>
          <div className="resume-header">
            <SectionHeader
              title="Resume"
              description="My journey in software development and the skills I've gained along the way."
              centered={true}
            />
            <a 
              href="/CV.pdf" 
              className="btn resume-download-btn" 
              download
            >
              <FiDownload />
              Download PDF
            </a>
          </div>
        </FadeInSection>

        {/* Experience Section */}
        <FadeInSection>
          <div className="resume-section">
            <h3 className="resume-section-title">
              Experience
            </h3>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  location={exp.location}
                  description={exp.description}
                />
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Education Section */}
        <FadeInSection>
          <div className="resume-section">
            <h3 className="resume-section-title">
              Education
            </h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <EducationItem
                  key={index}
                  degree={edu.degree}
                  school={edu.school}
                  period={edu.period}
                  location={edu.location}
                  description={edu.description}
                />
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Skills Section */}
        <FadeInSection>
          <div className="skills-section">
            <h3 className="resume-section-title">
              Skills & Technologies
            </h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h4 className="skill-category-title">
                    {category}
                  </h4>
                  <div className="skill-tags">
                    {skillList.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Resume;
