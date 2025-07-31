import { FiDownload } from "react-icons/fi";
import { FadeInSection } from "./FadeInSection";
import LightEffect from "./LightEffect";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <LightEffect />
      <div className="hero-content">
        <FadeInSection>
          <p className="hero-subtitle">Hi, I'm Meriem 👋</p>
          <h1 className="hero-title">
            Building clean & beautiful web apps <span className="highlight">with code & care.</span>
          </h1>
          <p className="hero-description">
            I'm a software engineering student and full-stack developer crafting intuitive, performant, and delightful user experiences.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">Get in Touch</a>
            <a
              href="/CV.pdf"
              className="btn btn-light btn-download"
              download
            >
              <FiDownload className="btn-download-icon" />
              Download CV
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
