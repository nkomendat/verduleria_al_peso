import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Nosotros from './components/Nosotros';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderLookup from "./components/OrderLookup";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/item/:Id" element={<ItemDetailContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/orden" element={<OrderLookup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;