
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
        <div className="title__wrapper pages">
          <div className="title__wrapper_content">
            <h1 className="content__title">Мониторинг <br />посещения <br />занятий</h1>
            <h4 className="content__text">Просматривайте посещаемость <br />каждого ученика на курсе<div className="br"></div> Отстающих больше не будет.</h4>
            <button className="features__btn" type="button" onClick={setOpenModal}>Попробовать бесплатно</button>
            {openModal && <Modal setOpenModal={setOpenModal}/>}
          </div>
          <img className="pages_img" src="/images/Frame-5.svg" alt="title_pic" />
        </div>
      </div>
    </section>
  </header>

  <section className="textblock">
        <div className="container">
          <div className="textblock__wrapper">
            <h2>Удобная навигация по сайту. <br />Иногда , даже слишком &#128513; </h2>
            <h3>Вы можете подсматривать за другими учениками , <br />только тсс... &#129323;</h3>
          </div>
          <div id="online" className="online">
          <h2 className="online__title">Запустите свою онлайн-школу</h2>
          <h4 className="title-descr">Или разверните корпоративный учебный <br /> портал уже сегодня.</h4>
          <h2 className="online__price">Цена 250 рублей за 1 ученика в месяц</h2>
          <h5 className="online__ready">Все готово для запуска. Попробуйте <br />7-дневный демо-доступ.</h5>
          
          <button className="features__btn" type="button" 
          onClick={setOpenModal}>Попробовать бесплатно</button>
          {openModal && <Modal setOpenModal={setOpenModal}/>}
        </div>
        </div>
      </section>

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