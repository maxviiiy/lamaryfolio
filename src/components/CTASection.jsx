import { FadeInSection } from "./FadeInSection";
import "../styles/Home.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <FadeInSection>
        <h2 className="cta-title">
          Let's Work Together
        </h2>
        <p className="cta-description">
          I'm always excited to work on new projects and collaborate with other developers and designers.
          Feel free to reach out if you'd like to discuss a project or just say hello!
        </p>
        <div className="cta-buttons hero-buttons">
          <a href="/contact" className="btn">Get In Touch</a>
          <a 
            href="https://github.com/maxviiiy" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            View GitHub
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default CTASection;
