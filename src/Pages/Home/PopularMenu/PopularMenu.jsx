import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import userMenu from '../../../hooks/userMenu';

function PopularMenu() {
    // Below code is Ok
    // const [menu,setMenu] = useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const populerItems = data.filter( item => item.category === 'popular' );

    //         setMenu(populerItems)
    //     })
    // },[])

    // way -2 
    const [menu] = userMenu();
    const popular = menu.filter(item => item.category === 'popular' ) ;

    return (
    <div>
      <SectionTitle heading={"Don't miss"} subHeading={"TODAY'S OFFER"}></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4 pb-10"> 
        {
            popular.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
        }
      </div>
    </div>
  )
}

export default PopularMenu
