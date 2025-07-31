import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpeg";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="personal">
        <h2 className="name">
          <span className="icon">🐱</span> Meriem Soubih
        </h2>
        <div className="avatar-container">
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </div>
      <div className="information">
        <div className="specialization">
          <span className="label-small">Specialization</span>
          <div className="specialization-value">
            <strong>Full-Stack Developer</strong>
          </div>
        </div>

        <div className="location">
          <span className="label-small">Based in</span>
          <div className="location-value">
            <strong>Chlef, Algeria</strong>
          </div>
        </div>
      </div>

      <div className="actions">
        <div className="social-icons">
          <a href="https://linkedin.com/in/meriem-soubih-864390254" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/maxviiiy" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/maxviiiy" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/maxviiiy" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:soubih.meriem@gmail.com">
            <MdOutlineMail />
          </a>
        </div>
        <Link to="/contact" className="cta-button">
          Let's Work Together!
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
