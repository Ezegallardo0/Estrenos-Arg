import React from 'react'
import '../styles/Home.css'
import Top10PelisPlus from './Top10PelisPlus'


const Home = ({ user, setUser }) => {

  const handleLogout = () => {
    setUser([])
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Estrenos Arg</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Peliculas</a>
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
    </>
  )
}

export default Home