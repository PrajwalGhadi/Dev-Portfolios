import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({text, color, path}) => {
  return (
    <NavLink to={path} className={`text-sm sm:text-md md:text-lg lg:text-lg ${color} font-semibold py-1 px-2 rounded-lg hover:cursor-pointer transition-all duration-200`}>
        {text}
    </NavLink>
  )
}

export default Button