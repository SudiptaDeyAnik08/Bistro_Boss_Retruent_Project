import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaShoppingBag, FaHome, FaCalendarAlt, FaList, FaRegStar, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import useCart from '../hooks/useCart';

import { MdOutlineMail } from "react-icons/md";
import { LuUtensilsCrossed } from "react-icons/lu";
import { FaRegListAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';


function Dashboard() {
  const [cart] = useCart();
  // TODO: get Is Admin value from the database
  // const isAdmin = true;
   const [isAdmin] = useAdmin();

  return (
    <div className='flex'>

      <div className=' w-64 min-h-screen bg-orange-400' >

        <ul className="menu">
          {
              isAdmin ?
            <>
              <li><NavLink to='/dashboard/adminHome'> <FaHome /> Admin Home </NavLink></li>
              <li><NavLink to='/dashboard/addItems'> <LuUtensilsCrossed /> Add Items </NavLink></li>
              <li><NavLink to='/dashboard/manageItems'> <FaRegListAlt />Manage Items </NavLink></li>
              <li><NavLink to='/dashboard/manageBookings'> <FaBook /> Manage Bookings </NavLink></li>
              <li><NavLink to='/dashboard/allUsers'> <FaUsers /> All Users </NavLink></li>

            </>
            :
            <> 
             <li><NavLink to='/dashboard/cart'> <FaShoppingBag />My Cart </NavLink></li>
              <li><NavLink to='/dashboard/userHome'> <FaHome /> Home </NavLink></li>
              <li><NavLink to='/dashboard/userHome'> <FaShoppingCart /> My Cart ({cart.length}) </NavLink></li>
              <li><NavLink to='/dashboard/reservation'> <FaCalendarAlt />Reservation </NavLink></li>
              <li><NavLink to='/dashboard/review'> <FaRegStar /> Review </NavLink></li>
              <li><NavLink to='/dashboard/booking'> <FaList /> Booking </NavLink></li>

            </>
          }
          <div className="divider"></div>

          {/* Sobar jonno nicher eta */}

          <li><NavLink to='/'> <FaHome /> Home </NavLink></li>
          <li><NavLink to='/menu'> <FaList /> Menu </NavLink></li>
          <li><NavLink to='/order/salad'> <FaShoppingBasket /> Order </NavLink></li>
          <li><NavLink to='/order/contact '> <MdOutlineMail /> Contact </NavLink></li>

        </ul>

      </div>


      <div className='flex-1 p-8'>
        <Outlet></Outlet>
      </div>

    </div>
  )
}

export default Dashboard
