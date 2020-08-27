import React from 'react'
import './banner.css'
export default function Apropos({ children, title, subtitle }) {
  return (
    <div className="container" >
      <hr/>
      <p>
          SHOWPAW est une plateforme de promotion des événements socio-culturels d'ici et d'ailleurs. Notre objectif est de créer un pont entre les groupes musicaux, les artistes (musiciens, danseurs, comédiens,
          écrivains, peintres etc.) et leurs fans.
          <hr/>
     <br/>
     <br/>
     <p  style={{fontWeight:"bold",textAlign:"center",marging:"auto",width:"100%"}}>  Suivez-nous pour ne rien rater </p>
        
          <br/>
          <span className="social">
          
          <a href="https://www.facebook.com/showpawhaiti" class="fa fa-facebook"></a>
          <a href="https://twitter.com/Showpawhaiti" class="fa fa-twitter"></a>
          <a href="https://www.instagram.com/showpaw_haiti/" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-youtube"></a>
        </span>
          

          

          
      </p>
    </div>
  )
}