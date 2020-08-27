import React from 'react'
import { Link } from 'react-router-dom'
// import '../components/footer.css'
import '../components/footerGrid.css'



export default function Footer3() {
  return (
    <footer className="footerGrid">


      <div className="footerLogo">

        <Link className="navbar-brand" to="#">showPaw</Link>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

      </div>





      {/* <div className="listMenu1">

        <h4>Apropos Nous</h4>

        <ul className="list-unstyled">
          <li><Link to="#">About us</Link></li>
          <li><Link to="#">Features item</Link></li>
          <li><Link to="#">Live streaming</Link></li>
          <li><Link to="#">Privacy Policy</Link></li>
        </ul>

      </div> */}






      <div className="listMenu2">

        <h4>Apropos Nous</h4>

        <ul className="list-unstyled">
          <li><Link to="#">About us</Link></li>
          <li><Link to="#">Features item</Link></li>
          <li><Link to="#">Live streaming</Link></li>
          <li><Link to="#">Privacy Policy</Link></li>
        </ul>

      </div>







      <div className="listMenu3">

        <h4>Support</h4>

        <ul className="list-unstyled">
          <li><Link to="#">CHOKARELLA</Link></li>
          <li><Link to="#">PILCODE</Link></li>
          <li><Link to="#">SERAMO ENTREPRISE</Link></li>
          <li><Link to="#">BOSSDELCO</Link></li>
        </ul>

      </div>





      <div className="copyrights">
        <p>&copy; 2020 SHOWPAW. Tous droits reserves.</p>
        <div className="credits">
          Designed by <Link to="https://bootstrapmade.com/">PILCODE</Link>
        </div>
      </div>




    </footer>


  )
}
