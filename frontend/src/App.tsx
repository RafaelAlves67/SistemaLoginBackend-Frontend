import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './Pages/Home'
import About from './Pages/About'

// components
import Login from './components/Login'
import Cadastrar from './components/Cadastrar'
import Nav from './components/Nav'

function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cadastrar" element={<Cadastrar />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
