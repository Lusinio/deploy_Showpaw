import React from 'react'
import { Link } from 'react-router-dom'
import '../components/footer.css'
export default function Footer3() {
  return (
    <footer className="footer">
  
      <div className="container">
        <div className="row">

          <div className="col-md-12 col-lg-4">
            <div className="footer-logo">

              <Link className="navbar-brand" to="#">showPaw</Link>
              <p> SHOWPAW est une plateforme de promotion des événements socio-culturels d'ici et d'ailleurs. Notre objectif est créer un pont entre les groupes musicaux, les artistes (musiciens, danseurs, comédiens,écrivains, peintres etc.) et leurs fans.
</p>

            </div>
          </div>

          {/* <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">

              <h4>Apropos Nous</h4>

              <ul className="list-unstyled">
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Features item</Link></li>
                <li><Link to="#">Live streaming</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>

            </div>
          </div> */}

        <div className="col-sm-6 col-md-3 col-lg-2"> 
            <div className="list-menu" style={{padding:"0px"}}>

              <h4>Apropos Nous</h4>

              <ul className="list-unstyled">
                <li><Link to="/about-us">About us</Link></li>
                {/* <li><Link to="#">Features item</Link></li>
                <li><Link to="#">Live streaming</Link></li>
                <li><Link to="#">Privacy Policy</Link></li> */}
              </ul>

            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">

              <h4>Support</h4>

              <ul className="list-unstyled">
                {/* <li><Link to="#">faq</Link></li>
                <li><Link to="#">Editor help</Link></li> */}
                <li><Link to="/contact">Contact us</Link></li>
                {/* <li><Link to="#">Privacy Policy</Link></li> */}
              </ul>

            </div>
          </div> 

          {/* <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">

              <h4>Abou Us</h4>

              <ul className="list-unstyled">
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Features item</Link></li>
                <li><Link to="#">Live streaming</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>

            </div>
          </div> */}

        </div>
      </div>

      <div className="copyrights">
        <div className="container">
          <p>&copy; Copyrights eStartup. All rights reserved.</p>
          <div className="credits">
            Designed by <Link to="https://bootstrapmade.com/">PILCODE</Link>
          </div>
        </div>
      </div>

    </footer>


  )
}
