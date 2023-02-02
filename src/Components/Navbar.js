import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className='shadow'>
      <div className="nav-logo">
        <img className="w-12" src="/imgs/cute-logo.png" alt="example image" />
      </div>
      <div className="links">
        <ul className='text-gray-500'>
          <Link to="/ChartJs-POC">Home</Link>
          <Link to="/help">Help</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/pricing">Pricing</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar