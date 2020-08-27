import React from 'react'
import { Link } from 'react-router-dom'
import '../sections/portfolio.css'
import portfolio1 from '../images/portfolio/Ekip.jpeg'
import portfolio2 from '../images/portfolio/micky.jpeg'
import portfolio3 from '../images/portfolio/Klass1.jpeg'
import portfolio4 from '../images/portfolio/Kreyolla.jpeg'
import portfolio5 from '../images/portfolio/Kadilak.jpeg'
import portfolio6 from '../images/portfolio/Bic.jpeg'
import portfolio7 from '../images/portfolio/Belo.jpeg'
import portfolio8 from '../images/portfolio/Enposib.jpeg'

import portfolio9 from '../images/portfolio/wyclef.jpeg'
import portfolio10 from '../images/portfolio/Desca.jpeg'
import portfolio11 from '../images/portfolio/Fantom.jpeg'
import portfolio12 from '../images/portfolio/Konpakreyol.jpeg'


export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">NOTRE CALENDRIER</h3>
            <div className="section-title-divider"></div>
            <p className="section-description">Voici la liste de tout les evenements a venir</p>
          </div>
        </div>


        <div className="row">
          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio1 + " )" }} to="">
              <div className="details">
                <h4>Ekip concert</h4>
                <span>Pre</span>
              </div>
            </Link>
          </div>


          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio2 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 2</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio3 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 3</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio4 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 4</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio5 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 5</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio6 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 6</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio7 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 7</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

           <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio8 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 8</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio9 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 9</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio10 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 10</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio11 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 11</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link className="portfolio-item" style={{ backgroundImage: "url(" + portfolio12 + " )" }} to="">
              <div className="details">
                <h4>Portfolio 12</h4>
                <span>Alored dono par</span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section >

  )
}
