import React from 'react'
import './css/navbar.css'
import mainlogo from './asset/bitlogo.png'
import { FaBars } from "react-icons/fa";



function Navbar() {
  return (
      <div className='navbar'>
          <nav>
              <ul>
                <li><img src={ mainlogo} alt=""  height="34vh" /></li>
                <li className='nav-link nav-link-ltr' ><a href="/home">Home</a></li>
                <li className='nav-link nav-link-ltr' ><a href="">Academics</a></li>
                <li className='nav-link nav-link-ltr' ><a href="/counseling">Counseling</a></li>
                <li className='nav-link nav-link-ltr' ><a href="/sports">Sports and Achievements</a></li>
                <li className='nav-link nav-link-ltr' ><a href="">Faculty</a></li>
                <li className='nav-link nav-link-ltr' ><a href="/food">Food</a></li>
                <li className='nav-link nav-link-ltr' ><a href="/aboutus">About Us</a></li>
                <li className='nav-link nav-link-ltr' ><a href="">Contact Us</a></li>
                <li className='nav-link nav-link-ltr' ><a href="">Support Desk</a></li>
                <li><FaBars /></li>
              </ul>
          </nav>
    </div>
  )
}

export default Navbar