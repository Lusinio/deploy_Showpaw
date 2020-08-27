import React, { Component } from 'react'
import ContactSection from '../sections/Contact'
import Header from '../sections/Header'
import Footer from '../components/Footer'
import Card from '../components/CardComedie'
const Comedie=(props)=>{
  const {data}=props 
    return (
      <>
        <Header title="Nos Comedies" />
        <br/>
        <Card data={data}/>
        <br/>
        <Footer />
      </>
    )
  }


export default Comedie;
