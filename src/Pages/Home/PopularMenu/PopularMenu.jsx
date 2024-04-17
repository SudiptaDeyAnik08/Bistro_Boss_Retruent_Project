import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import MenuItem from '../../../Shared/MenuItem/MenuItem';

function PopularMenu() {

    const [menu,setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const populerItems = data.filter( item => item.category === 'popular' );

            setMenu(populerItems)
        })
    },[])
  return (
    <div>
      <SectionTitle heading={"Check it out"} subHeading={"FROM OUR MENU"}></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4 pb-10"> 
        {
            menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
        }
      </div>
    </div>
  )
}

export default PopularMenu
