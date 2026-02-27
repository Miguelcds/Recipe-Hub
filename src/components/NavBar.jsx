import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'


export const NavBar = () => {
  return (
    <nav>
      <ul id='nav-principal'>
          <li><NavLink className={({isActive}) => isActive? "active": ""} to="favorites">Favorites</NavLink></li>
          <li><NavLink to="/">Home 🏠</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li> 
        </ul>
    </nav>
  )
}
