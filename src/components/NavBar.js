import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="relative bg-gray-700 z-50">
      <div className="container px-4 mx-auto">
        <nav className="flex items-center">
          <NavLink className="font-bold tracking-tighter text-xl bg-white text-gray-900 border-r-8 border-green-400 py-1 px-3 my-4 mr-auto rounded-sm" to="/" exact>
            Portfolio
          </NavLink>
          <div className="space-x-4">
            <NavLink activeClassName="text-green-400" className="text-sm text-white hover:text-green-400 transition-colors duration-200 p-2" to="/post">
              Blog Posts
            </NavLink>
            <NavLink activeClassName="text-green-400" className="text-sm text-white hover:text-green-400 transition-colors duration-200 p-2" to="/project">
              Projects
            </NavLink>
            <NavLink activeClassName="text-green-400" className="text-sm text-white hover:text-green-400 transition-colors duration-200 p-2" to="/about">
              About Me!
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}