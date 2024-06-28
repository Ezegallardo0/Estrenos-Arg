import React from 'react'
import '../styles/Peliculas.css'
import { Link , useNavigate } from 'react-router-dom'

const Peliculas = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate("/")
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
    { number: 9, title: "Fast & Furious", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIL9HKNMSqipY1tna3dALx8x6yxSaZ4MeUw&s" },
    { numer: 10, title: "Transformer", imgSrc: "https://cdn11.bigcommerce.com/s-mmafe1g4n3/images/stencil/1280x1280/products/3942/3965/MM00234001__72303.1640172894.jpg?c=1" },
    { numer: 11, title: "Transformer: La venganza de los caidos", imgSrc: "https://www.aceprensa.com/wp-content/uploads/2009/06/8373-0.jpg" },
    { numer: 12, title: "Transformer: El lado oscuro de la Luna", imgSrc: "https://play-lh.googleusercontent.com/BNcyvziuxvHD5vzur-N83oXla4QFV8ZpoYYvXmE0gG4e5yDAT3pYN8YrENEfXsB1FZA6aw" },
    { number: 13, title: "Transformers: La era de la extinción ", imgSrc: "https://play-lh.googleusercontent.com/-_elya146ZNLmU0wPkGMfMQsd_vORb6OENN5iFw0qYc5TjQ24obJQfe7GElKuEO61TZ8" },
    { number: 14, title: "Transformers: El último caballero", imgSrc: "https://play-lh.googleusercontent.com/LRIZYkExNKDGqpOlOXaAnKPbxwsqAEYo3BeTJJGMhGFCD3gVt7-rEEWgpboL26FCYq-I2w" },
    { number: 15, title: "Transformers: El despertar de las bestias", imgSrc: "https://i.blogs.es/72f9a1/cartel-de-transformers-7/650_1200.jpeg" },
    { number: 16, title: "Bad Boys", imgSrc: "https://i.pinimg.com/474x/55/cd/e6/55cde6abba6f916646f46bf6210799aa.jpg" },
    { number: 17, title: "Bad Boys II", imgSrc: "https://m.media-amazon.com/images/I/81pQr-MbePL._AC_UF894,1000_QL80_.jpg" },
    { number: 18, title: "Bad Boys For Life", imgSrc: "https://pics.filmaffinity.com/Bad_Boys_for_Life-343590773-large.jpg" },
    { number: 19, title: "Bad Boys IV", imgSrc: "https://blog.apis.cineplanet.com.pe/uploads/bab_boys_4_poster_cineplanet_6c7fbdcbed.jpg" },
    { number: 20, title: "Mi Villano Favorito", imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/8fae92382e8c4e08637fc3e714f50ff37975f515b6d33921f6518d6b6721739f.jpg" },
    { number: 21, title: "Mi Villano Favorito 2", imgSrc: "https://es.web.img2.acsta.net/pictures/210/090/21009000_2013052817374835.jpg" },
    { number: 22, title: "Minions ", imgSrc: "https://http2.mlstatic.com/D_NQ_NP_823534-MLA50961474298_082022-O.webp" },
    { number: 23, title: "Mi Villano Favorito 3", imgSrc: "https://image.tmdb.org/t/p/original/jDUBPQLBiQZDwO3K3Zn6h343cbO.jpg" },
    { number: 24, title: "Minions:Nace un villano", imgSrc: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/minions-the-rise-of-gru/images/regions/ar/onesheet.jpg" }
  ];
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
      <footer id="footer">
        <div className="wrap"></div>
        <h2 className='futer'>Estrenos Studios » Ver peliculas gratis, estrenos online GRATIS</h2><p>© estrenostudios.arg</p>
      </footer>
    </div>
  )
}

export default Peliculas