import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../../Shared/Cover/Cover'
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu'

function Menu() {
  return (
    <div>
       <Helmet>
        <title>Bistro Boss - Home</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"} paragraph={"Would you like to try a dish?"}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  )
}

export default Menu
