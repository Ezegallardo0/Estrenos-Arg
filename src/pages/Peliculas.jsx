import React from 'react'

const Peliculas = () => {
    const movie = [
        { number: 1, title: "Mi Villano Favorito 4", imgSrc: "https://www.americatv.com.pe/cinescape/wp-content/uploads/2023/12/cihfEI1cwTORZ9W0nDPgxiVCoiZ-scaled.jpg" },
        { number: 2, title: "Intensamente 2", imgSrc: "https://i.pinimg.com/736x/7d/9d/d5/7d9dd59eb9abb04c8e43494f150af4b7.jpg" },
        { number: 3, title: "Oppenheimer", imgSrc: "https://image.tmdb.org/t/p/original/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg" },
        { number: 4, title: "Kun Fu Panda 4", imgSrc: "https://image.tmdb.org/t/p/original/bqe5pdLIoLeZSszA8N5ZvoIS4aB.jpg" },
        { number: 5, title: "Ferrari", imgSrc: "https://image.tmdb.org/t/p/original/dAP9QTLVvglGvtsa0VesaOgHcTW.jpg" },
        { number: 6, title: "2 Fast 2 Furious", imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/8a9cf8e5d13c3f2968eace5f17c6bd8db972917a8d580ba31a7106022b7316ef.jpg" },
        { number: 7, title: "The Fast and the Furious", imgSrc: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
        { number: 8, title: "The Fast and the Furious: Tokyo Drift", imgSrc: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_FMjpg_UX1000_.jpg" },
        { number: 9, title: "Fast & Furious", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIL9HKNMSqipY1tna3dALx8x6yxSaZ4MeUw&s" }
    ];
    return (
        <div className='list-item top10'>
            <div className='list-header'>
                <h2>Peliculas</h2>
            </div>
            <div className='peliculas-wrapper'>
                <ul className='peliculas'>
                    <div className='peliculas-list'>
                        {movie.map((movie, index) => (
                            <li key={index}>
                                <div className='sc-jmNpzm deBlwi hover'>
                                    <button id='cardbutton'>
                                        <picture id='imgcontainer'>
                                            <div className='abscomp undefined'>
                                                <img loading='lazy' src={movie.imgSrc} id='imgcard' alt={movie.title} />
                                            </div>
                                            <h3 className='cardname'>{movie.title}</h3>
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