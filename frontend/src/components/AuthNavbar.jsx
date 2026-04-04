import React from 'react'
import { navbar } from "../../constants/Landing";
import { NavLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

const navItems = ['handshake', 'Secure_Tunnel', 'Latency'];
const AuthNavbar = () => {
  return (
    <>
        <nav className="fixed z-10 w-screen bg-black flex justify-between items-center py-3 px-4 lg:px-20 shadow-[#3b5a54] shadow-lg backdrop-blur-2xl">
          {/* Logo */}
          <NavLink
            to="/"
            className="navbar-logo text-neon font-sans font-bold text-2xl"
          >
            {navbar.logo}
          </NavLink>

          <div className='flex justify-between gap-4 uppercase'>
            {navItems.map((item, index)=> (
                <>
                <h1 key={index} className='text-neon'>{item}</h1> {index !== -1 && index !== navItems.length - 1 && <span className='text-neon'>|</span>}
                </>
            ))}
          </div>
          <div></div>
        </nav>
    </>
  )
}

export default AuthNavbar