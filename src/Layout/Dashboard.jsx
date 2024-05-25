import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaShoppingBag, FaHome, FaCalendarAlt, FaList, FaRegStar,FaShoppingBasket,FaShoppingCart   } from "react-icons/fa";
import useCart from '../hooks/useCart';

function Dashboard() {
  const [cart] = useCart()
  return (
    <div className='flex'>

      <div className=' w-64 min-h-screen bg-orange-400' >

        <ul className="menu">
          <li><NavLink to='/dashboard/cart'> <FaShoppingBag />My Cart </NavLink></li>
          <li><NavLink to='/dashboard/userHome'> <FaHome /> Home </NavLink></li>
          <li><NavLink to='/dashboard/userHome'> <FaShoppingCart  /> My Cart ({cart.length}) </NavLink></li>
          <li><NavLink to='/dashboard/reservation'> <FaCalendarAlt />Reservation </NavLink></li>
          <li><NavLink to='/dashboard/review'> <FaRegStar /> Review </NavLink></li>
          <li><NavLink to='/dashboard/booking'> <FaList /> Booking </NavLink></li>

          <div className="divider"></div>

          <li><NavLink to='/'> <FaHome /> Home </NavLink></li>
          <li><NavLink to='/menu'> <FaList  /> Menu </NavLink></li>
          <li><NavLink to='/order/salad'> <FaShoppingBasket   /> Order </NavLink></li>

        </ul>

      </div>


      <div className='flex-1 p-8'>
        <Outlet></Outlet>
      </div>

    </div>
  )
}

export default Dashboard
