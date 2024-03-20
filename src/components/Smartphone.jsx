import { Link, Outlet } from "react-router-dom"

function Smartphone() {
  return (
    <div>
      <div className="smartphone__list">
          <Link to="apple" className='smartphone__link'>Apple</Link>
          <Link to="samsung" className='smartphone__link'>Samsung</Link>
          <Link to="redmi" className='smartphone__link'>Redmi</Link>
          
        </div>
        <Outlet/>
    </div>
  )
}

export default Smartphone