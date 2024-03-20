import { Link, Outlet } from "react-router-dom"


function Products() {
  return (
    <div>
      <div className="products__list">
          <Link to="laptop" className='products__link'>Laptop</Link>
          <Link to="smartphone" className='products__link'>Smartphone</Link>
          <Link to="television" className='products__link'>Television</Link>
          
        </div>
        <Outlet/>
    </div>
  )
}

export default Products