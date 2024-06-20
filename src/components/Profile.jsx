import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../styles/Perfil.css'

const Profile = () => {

    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div>
            <img className='Perfil' src={user.picture} alt={user.name} />
            <h6>{user.name}</h6>
        </div>
        )
    )
}

export default Profile