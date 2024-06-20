import './App.css'
import Navbar from './components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from './pages/Inicio'
import Peliculas from './pages/Peliculas'
import Contacto from './pages/Contacto'

function App() {

  const {isAuthenticated, } = useAuth0 ()
  console.log(isAuthenticated)


  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/peliculas' element={<Peliculas />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
