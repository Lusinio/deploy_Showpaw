import React from 'react'
import { Link } from 'react-router-dom'
import '../sections/services.css'
const style1 = {
  background: '#fceef3'
}
const style2 = {
  background: '#fff0da'
}
const style3 = {
  background: '#e6fdfc'
}
const style4 = {
  background: '#eafde7'
}
const style5 = {
  background: '#e1eeff'
}
const style6 = {
  background: '#ecebff'
}

const style7 = {
  color: '#ff689b'
}
const style8 = {
  color: '#e98e06'
}
const style9 = {
  color: '#3fcdc7'
}
const style10 = {
  color: '#41cf2e'
}
const style11 = {
  color: '#2282ff'
}
const style12 = {
  color: '#8660fe'
}
// const style13 = {
//   color: '#ff689b'
// }
// const style14 = {
//   color: '#ff689b'
// }
export default function Services() {
  return (
    <section id="services" className="section-bg">
      <div className="container">

        <header className="section-header">
          <h3>Services</h3>
          <p>Notre plateforme donne plusieurs services a savoir:faire la promotion des tous les evenements sociaux culturels du pays. Vendre des cartes d'acces aux evenements culturels. Informations disponibles sur tous les artistes du pays. Avoir un appercu sur spectacles passestous les .</p>
        </header>

        <div className="row">

          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon" style={style1}><i className="ion-ios-analytics-outline"
                style={style7}></i></div>
              <h4 className="title"><Link to="">Lorem Ipsum</Link></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon" style={style2}><i className="ion-ios-bookmarks-outline"
                style={style8}></i></div>
              <h4 className="title"><Link to="">Dolor Sitema</Link></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon" style={style3}><i className="ion-ios-paper-outline"
                style={style9}></i></div>
              <h4 className="title"><Link to="">Sed ut perspiciatis</Link></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon" style={style4}><i className="ion-ios-speedometer-outline"
                style={style10}></i></div>
              <h4 className="title"><Link to="">Magni Dolores</Link></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon" style={style5}><i className="ion-ios-world-outline"
                style={style11}></i></div>
              <h4 className="title"><Link to="">Nemo Enim</Link></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon" style={style6}><i className="ion-ios-clock-outline"
                style={style12}></i></div>
              <h4 className="title"><Link to="">Eiusmod Tempor</Link></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
