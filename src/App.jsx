import { useState } from "react";
import "./normalize.css"
import "font-awesome/css/font-awesome.min.css"
import BoxCheck from "./components/BoxCheck/BoxCheck"
import BoxData from "./components/BoxCheck/BoxGroup"
import FeatureCard from './components/FeatureCard/FeaturesCard';
import featuresData from './components/FeatureCard/Features';
import Modal from "./components/Modal/Modal";
import Nav from "./components/Nav/Nav"
import "./components/Title/index.css"
import "./components/For-u/index.css"
import "./index.css"




const App = () => {

  const  [openModal, setOpenModal] = useState(false);
 
  return <>
  <header>
    <Nav />
    <section className="Title">
      <img src="/images/Title_ellipse.png" alt="" />
      <div className="container">
        <div className="title__wrapper">
          <div className="title__wrapper_content">
            <h1 className="content__title">Ed Space <br /> Ваши знания <br /> и экспертность обретут здесь <br /> форму</h1>
            <h4 className="content__text">Мощный инструмент для организации <br />обучения. Ваши ученики будут в восторге!</h4>
            <button className="features__btn" type="button" onClick={setOpenModal}>Попробовать бесплатно</button>
            {openModal && <Modal setOpenModal={setOpenModal}/>}
          </div>
          <img src="/images/Title_pic.png" alt="title_pic" />
        </div>
      </div>
    </section>
  </header>

  <section className="for-u">
    <div className="container">
      <div className="for-u__wrapper">
        <h2>Точно подойдет для:</h2>
        <div className="for-u__wrapper-content">
          <div className="content-box">
            <img src="/images/for-u1.png" alt="item_1" />
            <div className="box-text">
              <h4>Организации онлайн-курсов</h4>
              <span className="text">Cоздайте свою программу обучения<br />
                    с нуля, самостоятельно управляйте <br />
                    учебным процессом в несколько <br />
                    кликов, круглосуточная поддержка.</span>
            </div>
          </div>

          <div className="content-box">
            <img src="/images/for-u2.png" alt="item_2" />
            <div className="box-text">
              <h4>Создания корпоративного <br />
                  обучения</h4>
              <span className="text">Поможем перенести корпоративную<br />
                  академию, базу знаний, учебные курсы,<br />
                  настроим систему мотивации обучения,<br />
                  круглосуточная поддержка.</span>
            </div>
          </div>
        </div>
        <div className="btn-pos">        
        <button className="features__btn" type="button" onClick={setOpenModal}>Попробовать бесплатно</button>
        {openModal && <Modal setOpenModal={setOpenModal}/>}
        </div>
      </div>
    </div>
  </section>

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
  <img src="/images/Box_bcg.png" alt="" />
  <div className="zindex">
    <div className="container">
      <h2>Выбирайте Ed Space <br /> сегодня и вы получите</h2>
          <div className="box__wrapper">
                    {BoxData.map(box => (
                <BoxCheck
                descr={box.descr}
                check={box.check}
                />
              ))}
          </div>

        <div className="online">
          <h2 className="online__title">Запустите свою онлайн-школу</h2>
          <h4 className="title-descr">Или разверните корпоративный учебный <br /> портал уже сегодня.</h4>
          <h2 className="online__price">Цена 250 рублей за 1 ученика в месяц</h2>
          <h5 className="online__ready">Все готово для запуска. Попробуйте 7-дневный демо-доступ.</h5>
          <button className="features__btn" type="button" onClick={setOpenModal}>Попробовать бесплатно</button>
        {openModal && <Modal setOpenModal={setOpenModal}/>}
        </div>

        <div className="direction">
          <div className="direction__descr">
            <h2>Точно подойдет для:</h2>
            <h4>Любых онлайн-школ</h4>
            <h5>Быстрый запуск, легкое управление, все инструменты <br /> одной платформе.</h5>
            <h4>Образовательных курсов</h4>
            <h5>Статистика по всем образовательным процессам позволяет <br /> постоянно улучшать ваш продукт.</h5>
            <h4>Корпоративных учебных <br /> порталов</h4>
            <h5>Надежная защита, бесперебойная работа и высокая <br />производительность системы позволит наслаждаться <br /> процессом обучения.</h5>
          </div>
          <img src="/images/box_human.svg" alt="human" />
        </div>

    </div>
    
  </div>
  </section>
  
  </>
}

export default App;

