import {  Link, Outlet } from "react-router-dom"
import { Context } from "../components/context/Context"
import { useContext } from "react"
import { IoMdClose } from "react-icons/io";


function Products() {
  const {active,setActive} = useContext(Context)

  return (
    <div>
       <div className={`product__more ${active == true ? 'active' : ""}`}>
        <div className="container">
          fasfdsfs
          <p onClick={()=>setActive(false)}><IoMdClose /></p>
        </div>
       </div>
      <div className={`left__list ${active == true ? 'active' : ""}`}>
          <Link to="laptop" className='products__link'>Laptop</Link>
          <Link to="smartphone" className='products__link'>Smartphone</Link>
          <Link to="television" className='products__link'>Television</Link>
          
        </div>
        <Outlet/>
       
    </div>
  )
}

export default Products