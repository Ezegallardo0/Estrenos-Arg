import React from 'react'
import '../styles/Peliculas.css'
import { Link } from 'react-router-dom'

const Peliculas = ({ user, setUser }) => {

    const handleLogout = () => {
      setUser([])
    }  
    const movie = [
        { number: 1, title: "Oppenheimer", imgSrc: "https://image.tmdb.org/t/p/original/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg" },
        { number: 2, title: "Ferrari", imgSrc: "https://image.tmdb.org/t/p/original/dAP9QTLVvglGvtsa0VesaOgHcTW.jpg" },
        { number: 3, title: "Mi Villano Favorito 4", imgSrc: "https://www.americatv.com.pe/cinescape/wp-content/uploads/2023/12/cihfEI1cwTORZ9W0nDPgxiVCoiZ-scaled.jpg" },
        { number: 4, title: "Kun Fu Panda 4", imgSrc: "https://image.tmdb.org/t/p/original/bqe5pdLIoLeZSszA8N5ZvoIS4aB.jpg" },
        { number: 5, title: "Intensamente 2", imgSrc: "https://i.pinimg.com/736x/7d/9d/d5/7d9dd59eb9abb04c8e43494f150af4b7.jpg" },
        { number: 6, title: "2 Fast 2 Furious", imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/8a9cf8e5d13c3f2968eace5f17c6bd8db972917a8d580ba31a7106022b7316ef.jpg" },
        { number: 7, title: "The Fast and the Furious", imgSrc: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
        { number: 8, title: "The Fast and the Furious: Tokyo Drift", imgSrc: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_FMjpg_UX1000_.jpg" },
        { number: 9, title: "Fast & Furious", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIL9HKNMSqipY1tna3dALx8x6yxSaZ4MeUw&s" }
    ];
    return (
        <div className="list-item top10">
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Estrenos Arg</a>
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
                            <div className="movie-card">
                                <button className="card-button">
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
    </div>
    )
}

export default Peliculas