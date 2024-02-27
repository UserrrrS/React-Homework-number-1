
import { useState } from "react";
import Home from "./Home"
import Modal from "../components/Modal/Modal"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"

export default () => {
  const  [openModal, setOpenModal] = useState(false);
  return <>
    <header>
    <Nav/>
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

  <section className="footer">
    <div className="container">
      <Footer/> 
    </div>
  </section>

  <section className="rights">
    <div className="container">
      <div className="rights__wrapper">
      <p>2022 Ed Space. Все права защищены</p>
      <div className="rights__logos">
      <a target="_blank" href="https://vk.com"><img src="/images/vk-logo.svg" alt="logo-vk" /></a>
        <a target="_blank" href="https://web.telegram.org/a/"><img src="/images/tel-logo.svg" alt="logo-vk" /></a>
      </div>
      </div>
    </div>
  </section>
  </>
}