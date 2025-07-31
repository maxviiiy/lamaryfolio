import { FiCalendar, FiMapPin } from "react-icons/fi";

const ExperienceItem = ({ title, company, period, location, description }) => {
  return (
    <div className="experience-item">
      <div>
        <h4 className="item-title">
          {title}
        </h4>
        <div className="item-meta">
          <span className="item-company">
            {company}
          </span>
          <span className="item-meta-item">
            <FiCalendar size={14} />
            {period}
          </span>
          <span className="item-meta-item">
            <FiMapPin size={14} />
            {location}
          </span>
        </div>
      </div>
      <ul className="item-description">
        {description.map((item, i) => (
          <li key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
