import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import Button from '../components/Button'
const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="The Best Plateform Show in Haiti" subtitle="Tous les shows">
          {/* <Button Link='/shows' name='Nos shows' /> */}
        </Banner>
      </Hero>
    </>
  )
}

export default Home;