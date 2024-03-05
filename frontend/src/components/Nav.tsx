import { Link, useNavigate } from "react-router-dom"
import "./Nav.css"
import { useContext } from "react"
import contextAuth from "../context/auth"

const Nav = () => {

  let {isLogged} = useContext(contextAuth)
  let {logout} = useContext(contextAuth)

  const Navigate = useNavigate()
  
  const exitAccount = () => {
    logout();
  }

  const logo = () => {
    Navigate('/')
  }

  return (
    <nav>
      <div>
          <h1 className="logo" onClick={logo}>Sistema de login</h1>
      </div>

      <div className="links"> 
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {!isLogged && <Link to="/login">Login</Link>}
      {isLogged &&
          <button className="btn-logged" onClick={exitAccount}>Sair</button>  
      }
      {!isLogged && <Link to="/cadastrar">Cadastrar</Link>}
      </div>
    </nav>
  )
}

export default Nav