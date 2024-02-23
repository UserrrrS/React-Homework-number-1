import "./index.css"


const Box = ({ check, descr, item }) => {
  return (
    <div className="box__wrapper_two">
      <div className="box__wrapper_small small">
        <h3 className="small__text">{descr}</h3>
        <img src={check} alt={item} />
      </div>  
    </div>
  );
}


export default Box;