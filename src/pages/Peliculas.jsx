import React, { useState } from 'react'
import '../styles/Peliculas.css'
import { Link, useNavigate } from 'react-router-dom'
import movie from '../components/movie'

const Peliculas = () => {
  const [id, setId] = useState(0)
  const user = localStorage.getItem('user');
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate("/")
  }
  function setIdByClick(ObjetoId) {
    setId(ObjetoId)
    navigate(`pelidetalles/:${ObjetoId}`)
  }
  return (
    <div className="list-item top10">
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
      <div className="peliculas-wrapper">
        <ul className="peliculas">
          <div className="peliculas-list">
            {movie.map((movie, index) => (
              <li key={index}>
                <div className="movie-card" >
                  <button className="card-button" onClick={() => setIdByClick(movie.number)}>
                    <picture className="img-container">
                      <div className="plapla">
                        <img loading="lazy" src={movie.imgSrc} className="imgCard" alt={movie.title} />
                      </div>
                      <h3 className="namemovie">{movie.title}</h3>
                    </picture>
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <footer id="footer">
        <div className="wrap"></div>
        <h2 className='futer'>Estrenos Studios » Ver peliculas gratis, estrenos online GRATIS</h2><p>© estrenostudios.arg</p>
      </footer>
    </div>
  )
}

export default Peliculas