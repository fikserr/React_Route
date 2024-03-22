import { FaAngleDown } from "react-icons/fa6"
import { Link, Outlet } from "react-router-dom"

function Smartphone() {
  return (
    <div>
      <div className="left__list">
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