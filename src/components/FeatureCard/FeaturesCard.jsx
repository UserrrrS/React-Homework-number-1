import "./index.css"
import {Link} from "react-router-dom"





const FeatureCard = ({ image, title, text, to }) => {
  return (
    <Link to={to} className="feature-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </Link>
  );
}

export default FeatureCard;