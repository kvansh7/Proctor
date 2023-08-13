import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Footer from './Footer'
import DropdownPage from './DropdownPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <DropdownPage/>
    <Footer/>
  </React.StrictMode>,
)
