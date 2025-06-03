import { FiDownload } from "react-icons/fi";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">Hi, I'm Meriem 👋</p>
        <h1 className="hero-title">
          Building clean & beautiful web apps <span className="highlight">with code & care.</span>
        </h1>
        <p className="hero-description">
          I’m a software engineering student and full-stack developer crafting intuitive, performant, and delightful user experiences.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Get in Touch</a>
          <a
            href="/cv.pdf"
            className="btn btn-light"
            download
            style={{ marginLeft: "1rem" }}
          >
            <FiDownload style={{ marginRight: "0.5em", verticalAlign: "middle" }} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
