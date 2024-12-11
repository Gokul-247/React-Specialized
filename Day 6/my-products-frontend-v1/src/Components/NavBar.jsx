import React from 'react'
import { Link } from "react-router-dom";
import '../Assets/CSS/navbar.css'

const NavBar = () => {
  return (
    <div>
        <ul>
            <li class="active">
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/news">News</Link>
            </li>
            <li>
                <Link to="/products">Product List</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
