import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { Context } from "./context/Context"

function Navbar() {
  const {setActive} = useContext(Context)
  return (
    <div className="nav">
        <div className="container">
            <div className="nav__content">
            <Link to="/" className="nav__logo">FIKSERR</Link>
            <div className="nav__links">
                <NavLink to="/" className="nav__link" onClick={()=>setActive(false)}>Home</NavLink>
                <NavLink to="/products" className="nav__link">Products</NavLink>
                <NavLink to="/about" className="nav__link" onClick={()=>setActive(false)}>About</NavLink>
                <NavLink to="/contact" className="nav__link" onClick={()=>setActive(false)}>Contact</NavLink>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar