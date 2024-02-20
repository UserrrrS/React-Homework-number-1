import { useState } from "react";
import "./normalize.css"
import "font-awesome/css/font-awesome.min.css"
import BoxCheck from "./components/BoxCheck/BoxCheck"
import FeatureCard from './components/FeatureCard/FeaturesCard';
import featuresData from './components/FeatureCard/Features';
import Modal from "./components/Modal/Modal";
import Nav from "./components/Nav/Nav"
import "./index.css"




const App = () => {

  const  [openModal, setOpenModal] = useState(false);
 
  return <>
  <header>
    <Nav />
  </header>
  <section className="features">
  <img src="images/Ellipse_1.png" alt="" className="ellise_1"/>
      <img src="images/Ellipse_2.png" alt="" className="ellise_2"/>
        <div className="container">
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
        <button className="features__btn" type="button" onClick={setOpenModal}>Попробовать бесплатно</button>
        {openModal && <Modal setOpenModal={setOpenModal}/>}
        </div>
      </div>
  </section>
  <section className="box">
    <div className="container">
    <BoxCheck/>
    </div>
  </section>
  
  </>
}

export default App;

