import './App.css'
import Navbar from './components/Navbar/NavbarBarber'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer text="Acá aparecerán los productos" />
    </>
  )
}

export default App