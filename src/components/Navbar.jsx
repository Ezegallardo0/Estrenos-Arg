import React from 'react'

const Navbar = ({ user, setUser }) => {

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
    </>
  )
}

export default Navbar