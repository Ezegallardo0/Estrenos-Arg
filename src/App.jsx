import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import './styles/loader.css'
import Navbar from './components/Navbar'

import { useAuth0 } from '@auth0/auth0-react'

function App() {

  const {isAuthenticated, isLoading} = useAuth0 ()
  console.log(isAuthenticated)


  return (
    <div className='App'>
      <div>
      <Navbar />
      {
        isAuthenticated ?   <LogoutButton /> : <LoginButton /> }
      <Profile />
      </div>
    </div>
  )
}

export default App
