
import React, { Component } from 'react'
import ContactSection from '../sections/Contact'
import Header from '../sections/Header'
import Footer from '../components/Footer'
import Card from '../components/Seminaire'

const Seminaire=(props)=>{
  
  const {data}=props 
    return (
      <>
        <Header title="Nos Bals" />
        <br/>
        <Card data={data}/>
        <br/>
        <Footer />
      </>
    )
  }


export default Seminaire;