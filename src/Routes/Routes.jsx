import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
          
        ]
    },
]);