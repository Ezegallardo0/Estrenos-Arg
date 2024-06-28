import Formulario from './components/Formulario'
import Home from './components/Home'
import Peliculas from './pages/Peliculas';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Formulario />} />
        <Route path="/home" element={<Home />}  />
        <Route path='/peliculas' element={<Peliculas />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App
