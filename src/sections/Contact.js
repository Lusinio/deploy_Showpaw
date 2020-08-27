import React from 'react'
import '../sections/contact.css'
export default function Contact() {
  return (
    <section id="contact" className="section-bg wow fadeInUp">
      <div className="container">

        <div className="section-header">
          <h3>Contact Us</h3>
          
          <p  style={{fontWeight:"bold",textAlign:"center",marging:"auto",width:"100%"}}>Nous sommes disponible sur tous les reseaux sociaux </p>
          <span className="social">
          
            <a href="https://www.facebook.com/showpawhaiti" class="fa fa-facebook"></a>
            <a href="https://twitter.com/Showpawhaiti" class="fa fa-twitter"></a>
            <a href="https://www.instagram.com/showpaw_haiti/" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-youtube"></a>
          </span>
          
          {/* <span><span style={{color:"#2a2c30",fontWeight:"bold"}}>facebook</span>:@showpawhaiti</span> 
          <br/>
          <span><span style={{color:"#2a2c30",fontWeight:"bold"}}>twitter</span>:@showpawhaiti</span> 
          <br/>
          <span><span style={{color:"#2a2c30",fontWeight:"bold"}}>instagram</span>:@showpaw_haiti</span>  */}
        </div>

        <div className="row contact-info">

          {/* <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address>Delmas 30, rue laguerre, Port-au-prince</address>
            </div>
          </div> */}

          {/* <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+155895548855">+509 3749-4058</a></p>
            </div>
          </div> */}

          <div className="col-md-12">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">showpawhaiti@gmail.com</a></p>
            </div>
          </div>

        </div>

        <div className="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>
          <form action="" method="post" role="form" className="contactForm">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validation"></div>
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validation"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validation"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div className="validation"></div>
            </div>
            <div className="text-center"><button type="submit" >Send Message</button></div>
          </form>
        </div>

      </div>
    </section>
  )
}
