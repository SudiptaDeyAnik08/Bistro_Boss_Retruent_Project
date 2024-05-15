import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl	mx-auto'>
          <App></App>
        </div>

      </HelmetProvider>
    </AuthProvider>


  </React.StrictMode>,
)
