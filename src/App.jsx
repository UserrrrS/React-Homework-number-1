import "font-awesome/css/font-awesome.min.css"
import BoxCheck from "./components/BoxCheck/BoxCheck"
import FeatureCard from './components/FeatureCard/FeaturesCard';
import featuresData from './components/FeatureCard/Features';

const App = () => {
  return <>
  <header></header>
  <section className="Features">
      <h2>Возможности ed space</h2>
      <p>Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка.</p>
      <div className="feature-cards">
        {featuresData.map(feature => (
          <FeatureCard
            image={feature.image}
            title={feature.title}
            text={feature.text}
          />
        ))}
        <button>Попробовать бесплатно</button>
      </div>
      
  </section>
  <section className="Box">
    <BoxCheck/>
  </section>
  </>
}

export default App;