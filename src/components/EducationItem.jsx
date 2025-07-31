import { FiCalendar, FiMapPin } from "react-icons/fi";

const EducationItem = ({ degree, school, period, location, description }) => {
  return (
    <div className="education-item">
      <h4 className="item-title">
        {degree}
      </h4>
      <div className="item-meta">
        <span className="item-company">
          {school}
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
      <p className="item-description">
        {description}
      </p>
    </div>
  );
};

export default EducationItem;
