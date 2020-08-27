import React from 'react'
import { Link } from 'react-router-dom'
//import '../components/footer.css'

const h4 = {
  color: "#000",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "2px",
  textTransform: "uppercase",
  lineHeight: "2",
  margin: "0"
}

const Bg = {
  background: "#2a2c30",
  paddingTop: "10px"
}
const logo = {

}

const navbarBrand = {
  color: "#fff",
  display: "inline-block",
  float: "none",
  fontFamily: '"Philosopher", sans-serif',
  fontWeight: "500",
  height: "100%",
  letterSpacing: "0.2em",
  paddingLeft: "0",
  paddingTop: "0"
}

const li = {

  color: "#626262",
  fontSize: "13px",
  fontWeight: "400",
  letterSpacing: "2px",
  lineHeight: "30px",
  textTransform: "capitalize"
}

const ul = {
  letterSpacing: "1px"
}

const list_menu_a = {
  color: "#fff",
  fontSize: "12px",
  paddingLeft: "5px",
  textDecoration: "none",
  letterSpacing: "0"
}

const list_menu_h4 = {
  color: "#fff",
  paddingBottom: "20px"
}

const copyrights = {
  background: "#fff",
  marginTop: "50px",
  textAlign: "center",
  padding: "25px"
}


const credits = {
  margin: "0",
  padding: "0",
  fontFamily: '"Open Sans", "sans-serif"',
  fontWeight: "normal",
  fontSize: "14px",
  letterSpacing: "0"
}

const credits_a = {
  letterSpacing: "0",
  color: "#71c55d"
}
const logo_p = {
  color: "#fff",
  fontSize: "12px",
  letterSpacing: "1px",
  letterSpacing: "0.5px",
  lineHeight: "2",
  marginBottom: "20px",
  fontWeight: "300"
}



export default function Footer3() {
  return (
    <footer style={Bg}>

      <div className="container">
        <div className="row">

          <div className="col-md-12 col-lg-4">
            <div className="footer-logo">

              <Link style={navbarBrand} to="#">SHOWPaw</Link>
              <p style={logo_p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">

              <h4 style={list_menu_h4}>Apropos Nous</h4>

              <ul className="list-unstyled">
                <li style={li}><Link style={list_menu_a} to="#">About us</Link></li>
                <li style={li}><Link style={list_menu_a} to="#">Features item</Link></li>
                <li style={li}><Link style={list_menu_a} to="#">Live streaming</Link></li>
                <li style={li}><Link style={list_menu_a} to="#">Privacy Policy</Link></li>
              </ul>

            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">

              <h4 style={list_menu_h4}>Apropos Nous</h4>

              <ul className="list-unstyled" style={ul}>
                <li><Link style={list_menu_a} to="#">About us</Link></li>
                <li><Link style={list_menu_a} to="#">Features item</Link></li>
                <li><Link style={list_menu_a} to="#">Live streaming</Link></li>
                <li><Link style={list_menu_a} to="#">Privacy Policy</Link></li>
              </ul>

            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">

              <h4 style={list_menu_h4}>Support</h4>

              <ul className="list-unstyled" style={ul}>
                <li><Link style={list_menu_a} to="#">faq</Link></li>
                <li><Link style={list_menu_a} to="#">Editor help</Link></li>
                <li><Link style={list_menu_a} to="#">Contact us</Link></li>
                <li><Link style={list_menu_a} to="#">Privacy Policy</Link></li>
              </ul>

            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">

              <h4 style={list_menu_h4}>Abou Us</h4>

              <ul className="list-unstyled" style={ul}>
                <li><Link style={list_menu_a} to="#">About us</Link></li>
                <li><Link style={list_menu_a} to="#">Features item</Link></li>
                <li><Link style={list_menu_a} to="#">Live streaming</Link></li>
                <li><Link style={list_menu_a} to="#">Privacy Policy</Link></li>
              </ul>

            </div>
          </div>

        </div>
      </div>

      <div style={copyrights}>
        <div className="container">
          <p>&copy; Copyrights eStartup. All rights reserved.</p>
          <div style={credits}>
            Designed by <Link style={credits_a} to="https://bootstrapmade.com/">PILCODE</Link>
          </div>
        </div>
      </div>

    </footer>


  )
}
