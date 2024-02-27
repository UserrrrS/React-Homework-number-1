import "./index.css";


export default ({}) => {
  return (
    <section className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <a href="http://localhost:3000"><img src="/images/logo_EdSpase.svg" alt="" /></a>
          <div className="nav__wrapper_menu">
            <a href="#features" className="menu_btn" type="button">Возможности</a>
            <a href="#online" className="menu_btn" type="button">Стоимость</a>
            <a href="#footer" className="menu_btn" type="button">Контакты</a>
          </div>
          <button className="nav_wrapper__lang">
            <p>RU</p>
            <img src="/images/Arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
    
    
  )
}