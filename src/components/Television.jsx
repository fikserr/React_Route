import { useContext } from "react"
import { FaAngleDown } from "react-icons/fa6"
import { Link, Outlet } from "react-router-dom"
import { Context } from "./context/Context"


function Television() {
  const {active} = useContext(Context)
  return (
    <div>
      <div className={`left__list ${active == true ? 'active' : ""}`}>
      <p><FaAngleDown /></p>
        <Link to="artel" className='products__link'>Artel</Link>
        <Link to="lg" className='products__link'>Lg</Link>
        <Link to="hofman" className='products__link'>Hofman</Link>
        
      </div>
        <Outlet/>
  </div>
  )
}

export default Television