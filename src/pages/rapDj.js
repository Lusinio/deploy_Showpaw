import React, { Component } from 'react'
import ContactSection from '../sections/Contact'
import Header from '../sections/Header'
import Footer from '../components/Footer'
import Card from '../components/CardRapDJ'
const RapDj=(props) =>{
    const {data}=props 
    return (
      <>
        <Header title="RapDj" />
        <br/>
        <Card data={data}/>
        <br/>
        <Footer />
      </>
    )
  }

export default RapDj;