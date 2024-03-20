import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="nav">
        <div className="container">
            <div className="nav__content">
            <Link to="/" className="nav__logo">FIKSERR</Link>
            <div className="nav__links">
                <NavLink to="/" className="nav__link">Home</NavLink>
                <NavLink to="/products" className="nav__link">Products</NavLink>
                <NavLink to="/about" className="nav__link">About</NavLink>
                <NavLink to="/contact" className="nav__link">Contact</NavLink>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar