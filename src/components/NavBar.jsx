
import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar-item">
        <h1>Parte de cima</h1>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/register">Registrar</NavLink></li>
            <li><NavLink to="/about">Sobre</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar