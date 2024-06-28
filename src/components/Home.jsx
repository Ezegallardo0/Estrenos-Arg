import React from 'react'
import '../styles/Home.css'
import Top10PelisPlus from './Top10PelisPlus'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  const user = localStorage.getItem('user');
  console.log(user)
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate("/")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Estrenos Studio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home </Link>
                <span className="visually-hidden">(current)</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/peliculas">Peliculas </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
            <h5 className='H5'>Bienvenido</h5>
            <h5 className='user'>{user}</h5>
            <button className="buton" onClick={handleLogout}>cerrar sesion</button>
          </div>
        </div>
      </nav>
      <Top10PelisPlus />
      <footer id="footer">
        <div className="wrap"></div>
        <h2 className='futer'>Estrenos Studios » Ver peliculas gratis, estrenos online GRATIS</h2><p>© estrenostudios.arg</p>
      </footer>
    </>
  )
}

export default Home