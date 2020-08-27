import React, { Component } from 'react'
import ContactSection from '../sections/Contact'
import Header from '../sections/Header'
import Footer from '../components/Footer'
class Contact extends Component {
  render() {
    return (
      <>
        <Header title="Contactez-Nous" />
        <ContactSection />
        <Footer />
      </>
    )
  }
}

export default Contact;
