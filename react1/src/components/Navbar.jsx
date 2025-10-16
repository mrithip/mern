import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center items-center gap-8">
        <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-700">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-blue-400 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-700">
          About
        </Link>
        <Link to="/contact" className="text-white hover:text-blue-400 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-700">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
