import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  console.log('navbar')
  return (
    <nav className="nav-container">
      <div className="logo">
        <h2>🍎 Verdulería React</h2>
      </div>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/category/verduras-de-hoja">Verduras de Hoja</NavLink>
        <NavLink to="/category/hortalizas">Hortalizas</NavLink>
        <NavLink to="/category/frutas">Frutas</NavLink>
        <CartWidget/>
    </nav>
  )
}

export default NavBar
