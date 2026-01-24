import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenido a nuestra verdulería online 🥕🍎" />
    </>
  )
}

export default App
