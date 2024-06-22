import React from 'react'

import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";
import OrderFood from "../Pages/Order/Order/OrderFood.jsx";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Dashboard from "../Layout/Dashboard.jsx";
import Cart from "../Pages/Dashboard/Cart/Cart.jsx";
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers.jsx';
import AddItems from '../Pages/Dashboard/AddItems/AddItems.jsx';
import AdminRoute from './AdminRoute.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu> 
            },
            {
                path:'/order/:category',
                element:<PrivateRoute>  <OrderFood></OrderFood> </PrivateRoute> 
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp>    </SignUp>
            }
          
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[

            // Normal user Routes
            {
                path:'/dashboard/cart',
                element:<Cart></Cart>
            },


            // Admin Routes
            {
                path:'/dashboard/addItems' ,
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },

            {
                path:"/dashboard/allUsers",
                element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>

            }

        ]
    }
]);