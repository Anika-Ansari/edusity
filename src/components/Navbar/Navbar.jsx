<<<<<<< HEAD
import React from 'react'
=======
import React, { useEffect, useState } from 'react'
>>>>>>> c0116ce (code added)
import "./Navbar.css"
import logo from "../../assets/logo.png"

function Navbar() {
<<<<<<< HEAD
    return (
        <nav className='container dark-nav'>
=======
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY> 50 ? setSticky(true) : setSticky(false);
        })
    }, [])

    return (
        <nav className= {`container  ${sticky ? 'dark-nav' : ''}`}>
>>>>>>> c0116ce (code added)
            <img src={logo} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
<<<<<<< HEAD
                 <li><button className='btn'>Contact us</button></li>
=======
                <li><button className='btn'>Contact us</button></li>
>>>>>>> c0116ce (code added)
            </ul>
        </nav>
    )
}

export default Navbar
