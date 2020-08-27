import React, { Component } from 'react'
import ContactSection from '../sections/Contact'
import Header from '../sections/Header'
import Footer from '../components/Footer'
import Card from '../components/CardFestival'
const Festival=(props)=> {

    const {data}=props 
    return (
      <>
        <Header title="Nos Festivals" />
        <br/>
        <Card data={data}/>
        <br/>
        <Footer />
      </>
    )
  }

export default Festival;





