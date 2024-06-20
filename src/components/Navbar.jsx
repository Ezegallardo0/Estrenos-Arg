import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    const { isAuthenticated } = useAuth0()
    console.log(isAuthenticated)
    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Estrenos Arg</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                               <Link className="nav-link" to="/peliculas">Peliculas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                        {
                            isAuthenticated ? <LogoutButton /> : <LoginButton />}
                        <Profile />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar