import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
        <a href="#" className='logo'><i className="fa-solid fa-rocket fa-2xl"></i></a>
        <ul>
            <NavLink to='/' className="navBtn">Home</NavLink>
            <NavLink to='/register' className="navBtn">Register</NavLink>
            <NavLink to='/participants' className="navBtn">Participants</NavLink>
            {/* <li><a href="#">Contact</a></li> */}
        </ul>
    </header>
  )
}

export default Nav