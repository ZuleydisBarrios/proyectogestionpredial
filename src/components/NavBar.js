import Boton from "./Boton";
const NavBar = ()=>(
    <nav id="navbar" className="navbar">
            <ul>
              <li><a className="active" href="index.html">Inicio</a></li>
              <li><a href="about.html">Contáctenos</a></li>
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
            <li > <Boton title="Registrarse"/> </li>
            </ul>
            <ul>
            <li > <Boton title="Inciar Sesión" /> </li>       
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav> 
)

export default NavBar;