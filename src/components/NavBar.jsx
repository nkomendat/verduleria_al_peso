import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>🍎 Verdulería React</h2>
      </div>

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>

      <div className="cart">
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
