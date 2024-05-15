import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider/AuthProvider'
import { RiShoppingCartFill } from "react-icons/ri";

function NavBar() {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = '/'

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert("User Logedout");
                navigate(location,{replace:true})
            })
            .then(e => console.log(e))
    }
    return (
        <div className="navbar fixed z-10 bg-opacity-20 bg-black  text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">

                <a className="text-xl">BISTRO BOSS<br />Restaurant</a>
            </div>

            <div className="navbar-end w-5/6  hidden lg:flex">
                <Link to="/" className="uppercase hover:border-b-2 me-3">Home</Link>

                <Link to="/" className="uppercase  hover:border-b-2 me-3">CONTACT us</Link>

                <Link to="" className="uppercase hover:border-b-2  me-3">DASHBOARD</Link>

                <Link to="/menu" className="uppercase   hover:border-b-2 me-3 ">Our Menu</Link>

                <Link to="/order/salad" className="uppercase  hover:border-b-2 me-3">Order</Link>

                <Link to="/" className="uppercase  hover:border-b-2 me-3">
                    <button className="btn">
                    <RiShoppingCartFill />

                        <div className="badge badge-secondary">+99</div>
                    </button>
                </Link>

                {
                    user ?
                        <>
                            {/* <span>{user?.displayName}</span> */}
                            <button className='btn btn-ghost' onClick={handleLogout}>Logout</button>
                        </>
                        :
                        <>
                            <Link to="/login" className="uppercase  hover:border-b-2  me-3">Login</Link>

                        </>
                }

                <a className="btn">Button</a>
            </div>



        </div>
    )
}

export default NavBar