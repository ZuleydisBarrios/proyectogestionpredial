const Footer = ()=>(
    <footer id="footer">

        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Marketing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone: </strong> +1 5589 55488 55 <br />
                  <strong>Email: </strong> info @example.com <br />
                </p>

              </div>

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>About Eterna</h3>
                <p>Cras fermentum odio eu feugiat lide par naso tierra.Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                <div className="social-links mt-3">
                  <a href="none" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="none" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="none" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="none" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="none" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Gobernación de Huila</span></strong>.Todos los derechos reservados
          </div>
          <div className="credits">
            {/* <!--All the links in the footer should remain intact. --> */}
            {/* <!--You can delete the links only if you purchased the pro version. --> */}
            {/* <!--Licensing information: https://bootstrapmade.com/license/ --> */}
            {/* <!--Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/ --> */}
            Diseño: Grupo 11 Equipo8
          </div>
        </div>
      </footer>
)
export default Footer;