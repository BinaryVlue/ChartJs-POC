import React from 'react'
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src="..\imgs\cute-logo.png" alt="logo" />
        </div>
        <div className="links">
            <ul>
                <li>Features</li>
                <li>Blog</li>
                <li>Help</li>
                <li>Pricing</li>
            </ul>
        </div>  
    </nav>
  )
}

export default Navbar