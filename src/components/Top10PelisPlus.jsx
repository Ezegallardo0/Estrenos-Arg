import React from 'react';
import '../styles/Top10Pelis.css'

const Top10PelisPlus = () => {
  const movies = [
    { number: 1, title: "Oppenheimer", imgSrc: "https://image.tmdb.org/t/p/original/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg" },
    { number: 2, title: "Intensamente 2", imgSrc: "https://i.pinimg.com/736x/7d/9d/d5/7d9dd59eb9abb04c8e43494f150af4b7.jpg" },
    { number: 3, title: "Sonido De Libertad", imgSrc: "https://image.tmdb.org/t/p/original/apxaWDCqjPrVc1v5HiKW2r10yiL.jpg" },
    { number: 4, title: "El exorcista: Creyentes", imgSrc: "https://image.tmdb.org/t/p/original/6StdSKn9ej4rwtQjcl1XMk5E0iE.jpg" },
    { number: 5, title: "Loki", imgSrc: "https://image.tmdb.org/t/p/original/sxy9EXgc4nJw0uGojW5jHXQXKXq.jpg" },
    { number: 6, title: "La monja II", imgSrc: "https://image.tmdb.org/t/p/original/x0ryPlzZjpOojEAuGrre2lFuBv6.jpg" },
    { number: 7, title: "Ahsoka", imgSrc: "https://image.tmdb.org/t/p/original/zcuJsJEhaORzxaz6aRxm66NWgt7.jpg" },
    { number: 8, title: "Gran Turismo: De jugador a corredor", imgSrc: "https://image.tmdb.org/t/p/original/tVj5dn15iwkMhjU2wIih1yMy5LK.jpg" },
    { number: 9, title: "Blue Beetle", imgSrc: "https://image.tmdb.org/t/p/original/z5mkvXYNRauSzHdZgxAj6MzrLTY.jpg" },
    { number: 10, title: "Barbie", imgSrc: "https://image.tmdb.org/t/p/original/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg" },
  ];

  return (
    <div className="list-items top10">
      <div className="list-header">
        <h2>Top 5 estrenos en Estrenos Arg</h2>
      </div>
      <div className="carousel-wrapper">
        <ul className="carousel">
          <div className="carousel-list">
            {movies.map((movie, index) => (
              <li key={index}>
                <div className="item-number">{movie.number}</div>
                <div className="sc-jmNpzm deBlwi hover">
                  <button id="cardbutton">
                    <picture id="imgcontainer">
                      <div className="abscomp undefined">
                        <img loading="lazy" src={movie.imgSrc} id="imgcard" alt={movie.title} />
                      </div>
                      <h3 className="cardname">{movie.title}</h3>
                    </picture>
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Top10PelisPlus;