import { Link, Outlet } from "react-router-dom"


function Television() {
  return (
    <div>
      <div className="television__list">
        <Link to="artel" className='television__link'>Artel</Link>
        <Link to="lg" className='television__link'>Lg</Link>
        <Link to="hofman" className='television__link'>Hofman</Link>
        
      </div>
        <Outlet/>
  </div>
  )
}

export default Television