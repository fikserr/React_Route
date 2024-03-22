import { useContext } from "react"
import { FaAngleDown } from "react-icons/fa6"
import { Link, Outlet } from "react-router-dom"
import { Context } from "./context/Context"

function Smartphone() {
  const {active} = useContext(Context)
  return (
    <div>
      <div className={`left__list ${active == true ? 'active' : ""}`}>
      <p><FaAngleDown /></p>
          <Link to="apple" className='products__link'>Apple</Link>
          <Link to="samsung" className='products__link'>Samsung</Link>
          <Link to="redmi" className='products__link'>Redmi</Link>
          
        </div>
        <Outlet/>
    </div>
  )
}

export default Smartphone