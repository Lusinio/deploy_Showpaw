import React from 'react'
import ContactSection from '../sections/Contact'
import Header from '../sections/Header'
import Footer from '../components/Footer'
import Card from '../components/cardBal'
import { setGlobalCssModule } from 'reactstrap/lib/utils'
// import $ from 'jquery';
const Bal=(props)=>{
  
const {data}=props 


    return (
      <>
        <Header title="Nos Bals" />
        <br/>
        <Card data={data}/>
        <Footer />
      </>
    )
  }

  export default Bal;


