import { useContext } from "react"
import laptop from "../img/a13fdbaa-cf5a-4676-ba72-498381e6adc0-500x500.jpg"
import { Context } from "./context/Context"

function Artel() {
  const {active,setActive} = useContext(Context)

  return (
    <div>
      <div className={`left__list ${active == true ? 'active' : ""}`}>
        <div className="laptop__content">
          <img src={laptop} alt="" className="laptop__img"/>
            <div className="text">
              <p>Lorem ipsum dolor sit amet.</p>
              <button onClick={()=>setActive(true)}>more</button>
            </div>
        </div>
        <div className="laptop__content">
          <img src={laptop} alt="" className="laptop__img"/>
            <div className="text">
              <p>Lorem ipsum dolor sit amet.</p>
              <button onClick={()=>setActive(true)}>more</button>
            </div>
        </div>
        <div className="laptop__content">
          <img src={laptop} alt="" className="laptop__img"/>
            <div className="text">
              <p>Lorem ipsum dolor sit amet.</p>
              <button onClick={()=>setActive(true)}>more</button>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default Artel