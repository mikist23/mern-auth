import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/sign-in' Component={SignIn}/>
      <Route path='/sign-up' Component={SignUp}/>
      <Route path='/profile' Component={Profile}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App