import React from 'react'
import { Link } from 'react-router-dom'
import './nextEvents.css'
import event1 from '../images/events/img_1.jpg'
import event2 from '../images/events/img_2.jpg'
import event3 from '../images/events/img_3.jpg'
import event4 from '../images/events/img_4.jpg'

export default function NextEvents() {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
            <h2 className="mb-5">Upcoming Shows</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt
            officia, error reiciendis ab quod?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <Link to="#" className="unit-9">
              <div className="image" styles={{ backgroundImage: "url(" + event1 + ")" }}>Junopr</div>
              <div className="unit-9-content">
                <h2>This Is The Day</h2>
                <span>Friday 1:00pm &mdash; 2:30pm</span>
                <span>with Wendy Matos</span>
              </div>
            </Link>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <Link to="#" className="unit-9">
              <div className="image" style={{ backgroundImage: "url(" + event2 + ")" }}>Junior</div>
              <div className="unit-9-content">
                <h2>Electro Party</h2>
                <span>Friday 1:00pm &mdash; 2:30pm</span>
                <span>with Gaby Tenda</span>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <Link to="#" className="unit-9">
              <div className="image" style={{ backgroundImage: "url(" + event3 + ")" }}></div>
              <div className="unit-9-content">
                <h2>Classic Hits</h2>
                <span>Friday 1:00pm &mdash; 2:30pm</span>
                <span>with James Tenda</span>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <Link to="#" className="unit-9">
              <div className="image" style={{ backgroundImage: "url(" + event4 + ")" }}></div>
              <div className="unit-9-content">
                <h2>Classic Songs</h2>
                <span>Friday 1:00pm &mdash; 2:30pm</span>
                <span>with Troy Peters</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}
