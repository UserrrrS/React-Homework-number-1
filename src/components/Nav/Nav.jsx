import "./index.css";


export default ({}) => {
  return (
    <section className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <img src="/images/logo_EdSpase.svg" alt="" />
          <div className="nav__wrapper_menu">
            <button className="menu_btn" type="button">Возможности</button>
            <button className="menu_btn" type="button">Стоимость</button>
            <button className="menu_btn" type="button">Контакты</button>
          </div>
          <button className="nav_wrapper__lang">
            RU
          </button>
        </div>
      </div>
    </section>
  )
}