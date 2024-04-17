import React from 'react'
import Banner from '../Banner/Banner.jsx'
import Category from '../Category/Category.jsx'
import PopularMenu from '../PopularMenu/PopularMenu.jsx'
import Feature from '../Feature/Feature.jsx'
import Testomonial from '../Testomonial/Testomonial.jsx'
import BistroBossBanner from '../BistroBossBanner/BistroBossBanner.jsx'
import ChefReco from '../ChefReco/ChefReco.jsx'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBossBanner></BistroBossBanner>
      <PopularMenu></PopularMenu>
      <ChefReco></ChefReco>
      <Feature></Feature>
      <Testomonial></Testomonial>
    </div>
  )
}

export default Home