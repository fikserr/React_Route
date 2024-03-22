import laptop from "../img/a13fdbaa-cf5a-4676-ba72-498381e6adc0-500x500.jpg"

function Lg() {
  return (
    <div>
        <div className="left__list">
        <div className="laptop__content">
          <img src={laptop} alt="" className="laptop__img"/>
            <div className="text">
              <p>Lorem ipsum dolor sit amet.</p>
              <button>more</button>
            </div>
        </div>
        <div className="laptop__content">
          <img src={laptop} alt="" className="laptop__img"/>
            <div className="text">
              <p>Lorem ipsum dolor sit amet.</p>
              <button>more</button>
            </div>
        </div>
        <div className="laptop__content">
          <img src={laptop} alt="" className="laptop__img"/>
            <div className="text">
              <p>Lorem ipsum dolor sit amet.</p>
              <button>more</button>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default Lg