import React from 'react';
import '../styles/Top10Pelis.css';

const movies = [
  { number: 1, title: 'Oppenheimer', src: 'https://image.tmdb.org/t/p/original/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg' },
  { number: 2, title: 'Los indestructibles 4', src: 'https://image.tmdb.org/t/p/original/g6bfq26jmzEGNGMw768Fwu6OmdZ.jpg' },
  { number: 3, title: 'Sonido De Libertad', src: 'https://image.tmdb.org/t/p/original/apxaWDCqjPrVc1v5HiKW2r10yiL.jpg' },
  { number: 4, title: 'El exorcista: Creyentes', src: 'https://image.tmdb.org/t/p/original/6StdSKn9ej4rwtQjcl1XMk5E0iE.jpg' },
  { number: 5, title: 'Loki', src: 'https://image.tmdb.org/t/p/original/sxy9EXgc4nJw0uGojW5jHXQXKXq.jpg' },
  { number: 6, title: 'La monja II', src: 'https://image.tmdb.org/t/p/original/x0ryPlzZjpOojEAuGrre2lFuBv6.jpg' },
  { number: 7, title: 'Ahsoka', src: 'https://image.tmdb.org/t/p/original/zcuJsJEhaORzxaz6aRxm66NWgt7.jpg' },
  { number: 8, title: 'Gran Turismo: De jugador a corredor', src: 'https://image.tmdb.org/t/p/original/tVj5dn15iwkMhjU2wIih1yMy5LK.jpg' },
  { number: 9, title: 'Blue Beetle', src: 'https://image.tmdb.org/t/p/original/z5mkvXYNRauSzHdZgxAj6MzrLTY.jpg' },
  { number: 10, title: 'Barbie', src: 'https://image.tmdb.org/t/p/original/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg' },
];

const Top10List = () => {
  return (
    <div className="top10-container">
      <div className="list-header">
        <h2>Top 10 en Pelisplus hoy</h2>
        <span>
          <a href="/">Películas y Series</a>
        </span>
        <img
          src="/wp-content/themes/pelisplus.in/assets/build/static/media/arrow_right.3e01fb7a2f1dd8e785e673194a40a59e.svg"
          alt="icon arrow right"
        />
        <h3>
          <a href="/">Top 10</a>
        </h3>
      </div>
      <div className="carousel-wrapper">
        <ul className="carousel">
          {movies.map((movie) => (
            <li key={movie.number}>
              <div className="item-number">{movie.number}</div>
              <div className="card-wrapper">
                <div className="card">
                  <button id="cardbutton">
                    <picture id="imgcontainer">
                      <div className="abscomp undefined">
                        <img
                          loading="lazy"
                          src={movie.src}
                          id="imgcard"
                          alt={movie.title}
                        />
                      </div>
                      <h3 className="cardname">{movie.title}</h3>
                    </picture>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Top10List;
