import "./index.css"



const FeatureCard = ({ image, title, text }) => {
  return (
    <div className="feature-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureCard;