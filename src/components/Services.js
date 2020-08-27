import React, { Component } from 'react'
import Title from '../components/Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'



export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "A la recherche dun poste dinformaticien cest avec un grand intérêt que jai "
      },
      {
        icon: <FaHiking />,
        title: "free cocktails",
        info: "A la recherche dun poste dinformaticien cest avec un grand intérêt que jai "
      },
      {
        icon: <FaShuttleVan />,
        title: "free cocktails",
        info: "A la recherche dun poste dinformaticien cest avec un grand intérêt que jai "
      },
      {
        icon: <FaBeer />,
        title: "free bEER",
        info: "A la recherche dun poste dinformaticien cest avec un grand intérêt que jai "
      },
    ]
  }
  render() {
    return (
      <>
        < section className="services">
          <Title title="Services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            })}
          </div>
        </section>
      </>
    )
  }
}
