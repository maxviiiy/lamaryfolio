const ContactMethodCard = ({ icon, title, value, link, description }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className={`contact-method-card ${!link ? 'non-clickable' : ''}`}
      onClick={handleClick}
    >
      <div className="contact-method-icon">
        {icon}
      </div>
      <h3 className="contact-method-title">
        {title}
      </h3>
      <p className="contact-method-value">
        {value}
      </p>
      <p className="contact-method-description">
        {description}
      </p>
    </div>
  );
};

export default ContactMethodCard;
