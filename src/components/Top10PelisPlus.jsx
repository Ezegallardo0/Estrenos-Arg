import React from 'react';
import '../styles/Top10Pelis.css'

const Top10PelisPlus = () => {
  const movies = [
    { number: 1, title: "Mi Villano Favorito 4", imgSrc: "https://www.americatv.com.pe/cinescape/wp-content/uploads/2023/12/cihfEI1cwTORZ9W0nDPgxiVCoiZ-scaled.jpg" },
    { number: 2, title: "Intensamente 2", imgSrc: "https://i.pinimg.com/736x/7d/9d/d5/7d9dd59eb9abb04c8e43494f150af4b7.jpg" },
    { number: 3, title: "Oppenheimer", imgSrc: "https://image.tmdb.org/t/p/original/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg" },
    { number: 4, title: "Kun Fu Panda 4", imgSrc: "https://image.tmdb.org/t/p/original/bqe5pdLIoLeZSszA8N5ZvoIS4aB.jpg" },
    { number: 5, title: "Ferrari", imgSrc: "https://image.tmdb.org/t/p/original/dAP9QTLVvglGvtsa0VesaOgHcTW.jpg" },
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