import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css';
import {router} from './Routes/Routes.jsx';

function App() {
  

  return (
   <div> 
            <RouterProvider router={router} />
   </div>
  )
}

export default App
