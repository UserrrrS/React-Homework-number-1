import "./index.css"


const Footer = ({}) => {
  return (
    <div className="footer__wrapper">
      <img src="/images/logo_EdSpase.svg" alt="" />
      <div className="footer__wrapper-links">
        <div className="link_item">
          <h4>Меню:</h4>
          <ul className="list">
            <li><a href="">Возможности</a></li>
            <li><a href="">Стоимость</a></li>
            <li><a href="">Выбор Ed Space</a></li>
          </ul>
        </div>
        <div className="link_item">
          <h4>Документы:</h4>
          <ul className="list">
            <li><a href="">Пользовательское соглашение</a></li>
            <li><a href="">Публичная оферта</a></li>
          </ul>
        </div>
        <div className="link_item">
          <h4>Контакты:</h4>
          <ul className="list">
            <li><a href="mailto:admin@site.com&body=привет?subject=вопрос">admin@site.com</a></li>
            <li><a href="tel:+79001234567">+7 (900) 123-45-67</a></li>
            <li><a href="tel:+79998765432">+7 (999) 876-54-32</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;