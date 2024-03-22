import { Link, Outlet } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa6";
import { useContext } from "react";
import { Context } from "./context/Context";

function Laptop() {
  const {active} = useContext(Context)
  return (
    <div>
      <div className={`left__list ${active == true ? 'active' : ""}`}>
        <p><FaAngleDown /></p>
          <Link to="acer" className='products__link'>Acer</Link>
          <Link to="hp" className='products__link'>Hp</Link>
          <Link to="lenavo" className='products__link'>Lenavo</Link>
          
        </div>
        <Outlet/>
    </div>
  )
}

export default Laptop