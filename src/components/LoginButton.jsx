import { useAuth0 } from '@auth0/auth0-react'
import '../styles/login.css'


const LoginButton = () => {

    const { loginWithRedirect } = useAuth0()
    return (
        <button className="button" onClick={() => loginWithRedirect()}>Login</button>
    )
}

export default LoginButton