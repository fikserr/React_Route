import { Link, Outlet } from "react-router-dom"


function Laptop() {
  return (
    <div>
      <div className="laptop__list">
          <Link to="acer" className='laptop__link'>Acer</Link>
          <Link to="hp" className='laptop__link'>Hp</Link>
          <Link to="lenavo" className='laptop__link'>Lenavo</Link>
          
        </div>
        <Outlet/>
    </div>
  )
}

export default Laptop