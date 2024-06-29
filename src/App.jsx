import Formulario from './components/Formulario'
import Home from './components/Home'
import Peliculas from './pages/Peliculas';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pelidetalles from './pages/Pelidetalles';

function App() {
  
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Formulario />} />
        <Route path="/home" element={<Home />}  />
        <Route path='/peliculas' element={<Peliculas />} />
        <Route path='peliculas/pelidetalles/:id' element={<Pelidetalles />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App
