import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../../Shared/Cover/Cover'
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu'
import userMenu from '../../../hooks/userMenu'

import menuImg1 from '../../../assets/menu/dessert-bg.jpg'
import menuImg2 from '../../../assets/menu/salad-bg.jpg'
import menuImg3 from '../../../assets/menu/soup-bg.jpg'
import menuImg4 from '../../../assets/menu/cupcake.gif'
import menuImg5 from '../../../assets/menu/pizza-bg.jpg'
import menuImg6 from '../../../assets/menu/banner.jpg'


import MenuCategory from '../MenuCategory/MenuCategory'

function Menu() {
  const [menu] = userMenu()
  const desert = menu.filter(item => item.category === 'dessert' ) ;
  const salad  = menu.filter(item => item.category === 'salad' ) ;
  const drinks = menu.filter(item => item.category === 'drinks' ) ;
  const soup = menu.filter(item => item.category === 'soup' ) ;
  const pizza = menu.filter(item => item.category === 'pizza' ) ;
  const offered = menu.filter(item => item.category === 'offered' ) ;

  
  return (
    <div>
       <Helmet>
        <title>Bistro Boss - Home</title>
      </Helmet>
     
     {/* Main Cover */}
      <Cover img={menuImg} title={"OUR MENU"} paragraph={"Would you like to try a dish?"}></Cover>
      <PopularMenu></PopularMenu>

      {/* Dessert Section */}
      <Cover img={menuImg1} title={"DESSERTS"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
      <MenuCategory category={desert[0]?.category} items={desert}></MenuCategory>

      {/* salad */}
      <Cover img={menuImg2} title={"SALADS"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
      <MenuCategory category={salad[0]?.category} items={salad}></MenuCategory>

      {/* SOUPS */}
      <Cover img={menuImg3} title={"SOUPS"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
      <MenuCategory category={soup[0]?.category} items={soup}></MenuCategory>

      {/* drinks */}
      <Cover img={menuImg4} title={"Drinks"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
      <MenuCategory category={drinks[0]?.category} items={drinks}></MenuCategory>

      {/* pizza */}
      <Cover img={menuImg5} title={"Pizza"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
      <MenuCategory category={pizza[0]?.category} items={pizza}></MenuCategory>


      {/* offered */}
      <Cover img={menuImg6} title={"Offered"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
      <MenuCategory items={offered} category={offered[0]?.category} ></MenuCategory>

    </div>
  )
}

export default Menu
