import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import NotFound from "./components/NotFound";
import Footer from './components/Footer';
import Nosotros from "./components/Nosotros";

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
        <Route 
          path="/item/:Id" 
          element={<ItemDetailContainer />}
        />
        <Route 
          path="*" 
          element={<NotFound />} 
        />
        <Route 
          path="/nosotros" 
          element={<Nosotros />} 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App