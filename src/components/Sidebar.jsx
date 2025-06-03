import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
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
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="mailto:soubih.meriem@gmail.com">
            <MdOutlineMail />
          </a>
        </div>
        <button className="cta-button">Let's Work Together!</button>
      </div>
    </aside>
  );
};

export default Sidebar;
