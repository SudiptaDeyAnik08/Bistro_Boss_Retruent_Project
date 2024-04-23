import React, { useState } from 'react'
import MenuItem from '../../../Shared/MenuItem/MenuItem'
import { Link } from 'react-router-dom'
function MenuCategory({ items,category}) {
 
  
  return (
    <div >
      <div className="grid md:grid-cols-2 gap-4 pb-10 pt-10">
        {
          items.map(item => <MenuItem  item={item} key={item._id}></MenuItem>)
        }
      </div>
        <div className='text-center pb-10'>
        <Link to={`/order/${category}`}>
        <button className='btn btn-outline border-0 border-b-4 mt-4'>Order now</button>
        </Link>
        </div>
     </div>
  )
}

export default MenuCategory
