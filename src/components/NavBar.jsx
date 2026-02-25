import { NavLink, useLocation } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import "../App.css";

const categorias = ["Verduras de Hoja", "Hortalizas", "Frutas", "Citricos"];

const NavBar = () => {
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname === "/" || location.pathname.startsWith("/categoria")) {
      return "productos";
    } else if (location.pathname === "/nosotros") {
      return "nosotros";
    } else if (location.pathname === "/carrito") {
      return "carrito";
    } else {
      return "";
    }
  };

  const activeTab = getActiveTab();

  return (
    <nav className="navbar-custom navbar-fixed">
      <div className="navbar-top">
        <div className="logo-container">
          <NavLink to="/">
            <img 
              src="https://i.postimg.cc/Wb5rqrs5/Logo.png" 
              alt="Logo Verdulería" 
              className="logo" 
            />
          </NavLink>
        </div>
        <NavLink
          to="/nosotros"
          className={`nav-item ${activeTab === "nosotros" ? "active" : ""}`}>
          <GoHomeFill className="icon" />
          <p>Nosotros</p>
        </NavLink>
        <NavLink
          to="/"
          className={`nav-item ${activeTab === "productos" ? "active" : ""}`}>
          <BsBoxSeam className="icon" />
          <p>Productos</p>
        </NavLink>
        <NavLink
          to="/carrito"
          className={`nav-item ${activeTab === "carrito" ? "active" : ""}`}>
          <div className="cart-icon-container">
            <IoCartOutline className="icon" />
            <span className="cart-badge">0</span>
          </div>
          <p>Carrito</p>
        </NavLink>
      </div>
      {activeTab === "productos" && (
        <div className="navbar-categorias">
          {categorias.map((cat) => (
            <NavLink
              to={`/categoria/${cat.toLowerCase().replace(/\s+/g, "-")}`}
              key={cat}
              className={({ isActive }) =>
                isActive ? "categoria-link active" : "categoria-link"
              }
            >
              {cat}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;