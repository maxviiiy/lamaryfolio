import { FadeInSection } from "../components/FadeInSection";
import SectionHeader from "../components/SectionHeader";
import ContactMethodCard from "../components/ContactMethodCard";
import LightEffect from "../components/LightEffect";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "soubih.meriem@gmail.com",
      link: "mailto:soubih.meriem@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Meriem Soubih",
      link: "https://linkedin.com/in/meriem-soubih-864390254",
      description: "Let's connect professionally"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "@maxviiiy",
      link: "https://github.com/maxviiiy",
      description: "Check out my projects"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Chlef, Algeria",
      link: null,
      description: "Available for remote work"
    }
  ];

  return (
    <section className="hero contact-page" id="contact">
      <LightEffect />
      <div className="hero-content contact-hero-content">
        <SectionHeader
          title="Let's Work Together"
          description="I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hi, I'd love to hear from you!"
        />

        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <FadeInSection key={method.title}>
              <ContactMethodCard
                icon={method.icon}
                title={method.title}
                value={method.value}
                link={method.link}
                description={method.description}
              />
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="contact-cta-section">
            <h3 className="contact-cta-title">
              Ready to Start a Project?
            </h3>
            <p className="contact-cta-description">
              I'm currently available for freelance work and full-time opportunities.
            </p>
            <div className="contact-cta-buttons hero-buttons">
              <a 
                href="mailto:soubih.meriem@gmail.com?subject=Let's%20Work%20Together" 
                className="btn"
              >
                Send Message
              </a>
              <a 
                href="/CV.pdf" 
                className="btn btn-light" 
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
