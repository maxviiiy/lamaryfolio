import { FadeInSection } from "../components/FadeInSection";
import SectionHeader from "../components/SectionHeader";
import LightEffect from "../components/LightEffect";
import "../styles/About.css";

const About = () => {
  const services = [
    {
      title: "🌐 Frontend Development",
      description: "Creating responsive, interactive UIs with React, TypeScript, and modern CSS frameworks like Tailwind."
    },
    {
      title: "⚙️ Backend Development", 
      description: "Building robust APIs and databases with Node.js, Express, and modern tools like Prisma ORM."
    },
    {
      title: "🎨 UI/UX Design",
      description: "Crafting intuitive user experiences with attention to detail, accessibility, and modern design principles."
    }
  ];

  const technologies = [
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🌿" },
    { name: "CSS", icon: "🎨" },
    { name: "HTML", icon: "🟧" },
    { name: "Tailwind", icon: "🌬️" },
    { name: "Prisma", icon: "🧩" },
    { name: "Git", icon: "📦" },
  ];

  return (
    <section className="hero about-page" id="about">
      <LightEffect />
      <div className="hero-content about-hero-content">
        <SectionHeader
          title="About Me"
          className="about-grid"
        />
        
        <div className="about-grid">
          <FadeInSection>
            <p className="hero-description" style={{ fontSize: "1.1rem" }}>
              I'm a passionate <strong>Software Engineering student</strong> and <strong>Full-Stack Developer</strong> 
              with a love for creating beautiful, functional, and user-friendly web applications. Based in Algeria, 
              I combine technical expertise with creative problem-solving to bring ideas to life.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h3 className="about-what-i-do">What I Do</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="tech-section">
              <h3 className="tech-title">Technologies I Love</h3>
              <div className="tech-tags">
                {technologies.map((tech) => (
                  <span key={tech.name} className="tech-tag">
                    <span>{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="beyond-coding">
              <h3 className="beyond-coding-title">Beyond Coding</h3>
              <p className="hero-description">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or learning about the latest trends in web development. I believe in continuous learning and staying 
                updated with the ever-evolving tech landscape.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="about-actions">
              <div className="hero-buttons">
                <a href="#contact" className="btn">Let's Connect</a>
                <a href="/CV.pdf" className="btn btn-light" download style={{ marginLeft: "1rem" }}>
                  Download Resume
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
