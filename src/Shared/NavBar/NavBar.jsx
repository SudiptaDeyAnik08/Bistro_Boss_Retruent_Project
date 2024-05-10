import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
 
    return (
        <div className="navbar fixed z-10 bg-opacity-20 bg-black  text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">

                <a className="text-xl">BISTRO BOSS<br />Restaurant</a>
            </div>

            <div className="navbar-end  hidden lg:flex">
                <Link to="/" className="uppercase hover:border-b-2 me-3">Home</Link>

                <Link to="/" className="uppercase  hover:border-b-2 me-3">CONTACT us</Link>

                <Link to="" className="uppercase hover:border-b-2  me-3">DASHBOARD</Link>

                <Link to="/menu" className="uppercase   hover:border-b-2 me-3 ">Our Menu</Link>
                
                <Link to="/order/salad" className="uppercase  hover:border-b-2 me-3">Order</Link>
                <Link to="/login" className="uppercase  hover:border-b-2  me-3">Login</Link>

                <a className="btn">Button</a>
            </div>


        
        </div>
    )
}

export default NavBar