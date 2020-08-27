import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import '../components/navBar.css'
export default function NavBar2() {

  return (

    <div id="header" >
      <div className="container2" >

        <div id="logo" className="pull-left">
          <h1><NavLink to="/" className="scrollto"><span>show</span>PAW</NavLink></h1>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu ">
          <li className="nav-item dropdown">
							<Link className="nav-link dropdown-toggle" href="#" id="dropdown-Link" data-toggle="dropdown">Shows </Link>
							<div className="dropdown-menu" aria-labelledby="dropdown-Link">
								<Link className="dropdown-item" to="/bal">Bal</Link>
								<Link className="dropdown-item" to="/rapDj">Rap&Dj </Link>
								<Link className="dropdown-item" to="/festival">Festival </Link>
                <Link className="dropdown-item" to="/comedie">Comedie </Link>
                <Link className="dropdown-item" to="/foire">Froire </Link>
                <Link className="dropdown-item" to="/seminaire">Seminaire </Link>
                <Link className="dropdown-item" to="#">Conférence </Link>
                <Link className="dropdown-item" to="#">Evangelique</Link>
                <Link className="dropdown-item" to="#">Autres </Link>
							</div>
						</li>

          {/* <li className="dropdown show">
            <NavLink activeClassName="menu-active" to="/shows">
              Shows
            </NavLink>    
           </li> */}




          <li style={{pointerEvents:"none",opacity:"0.6"}} className="nav-item dropdown">
							<Link className="nav-link dropdown-toggle" href="#" id="dropdown-Link" data-toggle="dropdown">Services </Link>
							<div className="dropdown-menu" aria-labelledby="dropdown-Link">
								<NavLink className="dropdown-item" to="/promotion">Promotion </NavLink>
								<NavLink className="dropdown-item" to="/publication">Publication </NavLink>
                <NavLink className="dropdown-item" to="/venteDeBillets">Vente de billets </NavLink>
                <NavLink className="dropdown-item" to="/autre">Autres </NavLink>
							</div>
						</li>




 
          <li style={{pointerEvents:"none",opacity:"0.6"}} className="nav-item dropdown">
							<Link className="nav-link dropdown-toggle" href="#" id="dropdown-Link" data-toggle="dropdown">Spectacles passés </Link>
							<div className="dropdown-menu" aria-labelledby="dropdown-Link">
								<a className="dropdown-item" href="/bal-passe">Bal </a>
								<NavLink className="dropdown-item" to="/rapDj">Rap&Dj</NavLink>
								<NavLink className="dropdown-item" to="/festival">Festival </NavLink>
                <NavLink className="dropdown-item" to="/comedie">Comedie </NavLink>
                <NavLink className="dropdown-item" to="/foire">Froire </NavLink>
                <NavLink className="dropdown-item" to="/seminaire">Seminaires </NavLink>
                <NavLink className="dropdown-item" to="/autres">Autres </NavLink>
							</div>
						</li>


          <li style={{pointerEvents:"none",opacity:"0.6"}} className="nav-item dropdown">
							<Link className="nav-link dropdown-toggle" href="#" id="dropdown-Link" data-toggle="dropdown">News </Link>
							<div className="dropdown-menu" aria-labelledby="dropdown-Link">
								<NavLink className="dropdown-item" to="/artistes">Artistes </NavLink>
								<NavLink className="dropdown-item" to="/groupesMusicaux">Groupes musicaux</NavLink>
                <NavLink className="dropdown-item" to="/seminaires">Seminaires </NavLink>
                <NavLink className="dropdown-item" to="/autres">Autres </NavLink>
							</div>
						</li>
          <li><NavLink style={{fontSize: "20px"}} activeClassName="menu-active" to="/contact">Contacts</NavLink></li>
          <li> <NavLink style={{fontSize: "20px"}} activeClassName="menu-active" to="/about-us">About US</NavLink></li>
            
            
            
          </ul>
        </nav>
      </div>
    </div>
  )
}

