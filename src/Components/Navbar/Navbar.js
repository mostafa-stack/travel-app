import React from 'react'
import logo from '../../logo.svg'
import './Navbar.scss'
export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo} alt='city tours logo'/>
            </div>
            <ul className='nav-links'>
                <li>
                    <a href='/' className='nav-link'>HOME</a>
                </li>
                <li>
                    <a href='/' className='nav-link'>ABOUT</a>
                </li>
                <li>
                    <a href='/' className='nav-link active'>TOURS</a>
                </li>
            </ul>
        </nav>
    )
}
