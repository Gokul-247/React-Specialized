import React from 'react'
import { Link } from "react-router-dom";
import '../Assets/CSS/navbar.css'

function NavBar (){
  return (
    <div>
        <ul className='ul'>
            <li className='li'>
                <Link to="/">Home</Link>
            </li>
            <li className='li'>
                <Link to="/resume">Resume</Link>
            </li>
            <li className='li'> 
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
