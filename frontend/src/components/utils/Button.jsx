import React from 'react'

const Button = ({text, color}) => {
  return (
    <button className={`text-sm sm:text-md md:text-lg lg:text-lg ${color} font-semibold py-1 px-2 rounded-lg hover:cursor-pointer transition-all duration-200`}>
        {text}
    </button>
  )
}

export default Button