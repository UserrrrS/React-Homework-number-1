import { useState } from "react";
import "font-awesome/css/font-awesome.min.css"
import BoxCheck from "./components/BoxCheck/BoxCheck"
import FeatureCard from './components/FeatureCard/FeaturesCard';
import featuresData from './components/FeatureCard/Features';
import Modal from "./components/Modal/Modal";
import "./index.css"


const App = () => {

  const [openModal, setOpenModal] = useState(true);

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
        <button className="Features__btn" type="button" onClick={setOpenModal}>Попробовать бесплатно</button>
        {openModal && <Modal setOpenModal={setOpenModal}/>}
      </div>
      
  </section>
  <section className="Box">
    <BoxCheck/>
  </section>
  
  </>
}

export default App;