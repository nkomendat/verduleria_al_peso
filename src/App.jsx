import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer mensaje="Bienvenido a la verdulería" />}
        />
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListContainer mensaje="Categoría" />}
        />
        <Route path="/item/:Id" element={<ItemDetailContainer />} />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <img
                src="https://i.postimg.cc/PJtyTjQ0/Pagina-Error.png"
                alt="Página no encontrada"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App