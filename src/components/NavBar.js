const NavBar = ()=>(
    <nav id="navbar" className="navbar">
            <ul>
              <li><a className="active" href="index.html">Inicio</a></li>
              <li><a href="about.html">Contactenos</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li className="dropdown"><a href="none"><span>Tramites</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="none">Tramites Catastrales</a></li>
                  <li className="dropdown"><a href="none"><span>Predios</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="none">Aosciar Predios</a></li>
                      <li><a href="none">Realizar pagos</a></li>
                    </ul>
                  </li>
                  <li><a href="none">Drop Down 2</a></li>
              
                </ul>
              </li>
              <li><a href="contact.html">Informes</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav> 
)

export default NavBar;