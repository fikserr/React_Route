import {  Link, Outlet } from "react-router-dom"
import { Context } from "../components/context/Context"
import { useContext } from "react"
import { IoMdClose } from "react-icons/io";
import laptop from "../img/a13fdbaa-cf5a-4676-ba72-498381e6adc0-500x500.jpg"



function Products() {
  const {active,setActive} = useContext(Context)

  return (
    <div>
       <div className={`product__more ${active == true ? 'active' : ""}`}>
        <div className="container">
            <div className="top">

                <img src={laptop} alt="" className="top__img"/>
                
                <div className="top__content">

                  <h1>Lorem ipsum dolor sit amet.</h1>

                  <div className="top__more">
                    <p>Qalinligi</p>
                    <p>Ekran</p>
                    <p>Protsessor</p>
                    <p>video karta</p>
                    <p>Protsessor</p>
                    <p>Yadro</p>
                    <p>Operativka</p>
                  

                  </div>
                  <p className="btn__close" onClick={()=>setActive(false)}><IoMdClose /></p>

                </div>

            </div>

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