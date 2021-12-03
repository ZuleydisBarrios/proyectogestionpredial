import Boton from "./Boton";
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav id="navbar" className="navbar ">
    <ul>
      <li><Link to="/" className="active" href="index.html">Inicio</Link></li>
      <li><Link to="/contactenos">Contáctenos</Link></li>
      <li><a href="team.html">Team</a></li>
      <li className="dropdown"><a href="none"><span>Trámites</span> <i className="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="none">Tramites Catastrales</a></li>
          <li className="dropdown"><a href="none"><span>Predios</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="none">Asociar Predios</a></li>
              <li><a href="none">Realizar pagos</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li >
        <Link to="/registro"> 
        <Boton title="Registrarse" clase="btn btn-primary btn-sm m-1" />
        </Link>
      </li>
    </ul>
    <ul>
      <li >
        <Link to="/Login">
          <Boton title="Inciar Sesión" clase="btn btn-primary btn-sm m-1" />
        </Link>
      </li>
    </ul>
    <i className="bi bi-list mobile-nav-toggle"></i>
  </nav>
)

export default NavBar;