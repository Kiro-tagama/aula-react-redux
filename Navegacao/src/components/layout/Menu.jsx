import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu(){
  return(
    <aside className="menu">
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/param/999">Param 01</Link></li>
          <li><Link to="/param/ola">Param 02</Link></li>
          <li><Link to="/urlAleatoria">404</Link></li>
        </ul>
      </nav>
    </aside>
  )
}