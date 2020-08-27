import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import Button from '../components/Button'

export default function Header(props) {
  return (
    <>
      <Hero hero="roomsHero" >
        <Banner title={props.title} subtitle="">
          <Button Link='/' name='return home' />
        </Banner>
      </Hero>
    </>
  )
}
