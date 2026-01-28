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
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2025 - Present",
      location: "Algeria",
      description: [
        "Developed responsive web applications using React, Node.js, and modern CSS frameworks",
        "Built RESTful APIs and integrated third-party services for various client projects",
        "Implemented database design and management using Prisma ORM and PostgreSQL",
        "Collaborated with clients to deliver user-focused solutions that exceed expectations"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Personal Projects",
      period: "2022 - 2023",
      location: "Algeria",
      description: [
        "Created portfolio websites and web applications using React and TypeScript",
        "Focused on responsive design and accessibility best practices",
        "Implemented modern UI/UX patterns and interactive animations",
        "Maintained high code quality standards and version control with Git"
      ]
    }
  ];

  const education = [
    {
      degree: "Software Engineering",
      school: "University",
      period: "2021 - Present",
      location: "Algeria",
      description: "Studying computer science fundamentals, software development methodologies, and modern programming languages"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "Database Design", "Authentication"],
    "Database": ["PostgreSQL", "Prisma ORM", "Database Optimization"],
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
