import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './auth/login'


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default App
