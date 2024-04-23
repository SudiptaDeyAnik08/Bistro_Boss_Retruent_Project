import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";
import OrderFood from "../Pages/Order/Order/OrderFood.jsx";

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
                element: <OrderFood></OrderFood>
            }
          
        ]
    },
]);