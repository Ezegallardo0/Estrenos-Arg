import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import movie from '../components/movie';
import '../styles/Pelidetalles.css';

const Pelidetalles = () => {
  const [ObjetoBuscado, setObjetoBuscado] = useState({});
  const { id } = useParams();
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  const obtenerObjetoPorId = (idBuscado) => {
    const idNumerico = Number(idBuscado);
    return movie.find(obj => obj.number === idNumerico);
  };

  useEffect(() => {
    console.log("id",id)
    console.log("movie",movie)
    const objeto = obtenerObjetoPorId(id);
    console.log(objeto)
    setObjetoBuscado(objeto);
  }, [id]);

  console.log("es este",ObjetoBuscado);

  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Estrenos Studio</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/peliculas">Peliculas</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
            <h5 className='H5'>Bienvenido</h5>
            <h5 className='user'>{user}</h5>
            <button className="button" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        </div>
      </nav>
      <div className="infos">
        <h2>
          {ObjetoBuscado?.title} <span className="showtrailer">Ver Trailer</span>
        </h2>
        <div className="numbers">
          <span>2023</span>
          <span>1 hora y 51 minutos</span>
          <span className="stars"></span>
        </div>
        <div className="links">
          <span>
            <b>Director:</b>
            <a aria-label="David Gordon Green" href="/peliculas/23354/el-exorcista-creyentes/" style={{ marginLeft: '10px' }}>
              David Gordon Green
            </a>
          </span>
          <span>
            <b>Géneros:</b>
            <a aria-label="4K" href="/lista-de-generos/4k/">4K</a>,{' '}
            <a aria-label="Terror" href="/lista-de-generos/terror/">Terror</a>
          </span>
          <span>
            <b>Reparto:</b>{' '}
            <a aria-label="Jennifer Nettles" href="/repart/jennifer-nettles/">Jennifer Nettles</a>,{' '}
            <a aria-label="Leslie Odom Jr." href="/repart/leslie-odom-jr/">Leslie Odom Jr.</a>,{' '}
            <a aria-label="Lidya Jewett" href="/repart/lidya-jewett/">Lidya Jewett</a>,{' '}
            <a aria-label="Norbert Leo Butz" href="/repart/norbert-leo-butz/">Norbert Leo Butz</a>,{' '}
            <a aria-label="Olivia Marcum" href="/repart/olivia-marcum/">Olivia Marcum</a>
          </span>
        </div>
        <p>
          Cuando sus dos hijas son poseídas por un espíritu demoníaco, un padre desesperado busca la ayuda de Chris MacNeil, cuya hija Regan sobrevivió a una posesión similar en la década de 1970.
        </p>
        <div className="ad-container">
          <ins
            className="ad"
            data-key="06204f8a1f807df4131aaa5bd8c90b39"
            data-cp-host="37097cad0d42436db1131930350b25c3|2|"
            data-cp-domain="37097cad0d42436db1131930350b25c3|2|"
            id="01d94676-06204f8a1f807df4131aaa5bd8c90b39-2-6071"
          >
            <ins
              id="01d94676-06204f8a1f807df4131aaa5bd8c90b39-2-6071-1"
            >
              <script type="text/javascript"></script>
            </ins>
          </ins>
        </div>
      </div>
    </>
  );
};

export default Pelidetalles;
