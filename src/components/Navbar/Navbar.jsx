import React, { useState } from 'react';
import "./Navbar.css";
import MobileNav from '../mobileNav/mobileNav';

const Navbar = () => {

    const [ openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    };

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

    <nav className='nav-Wrapper'>
        <div className="nav-content">
            <img className='logo' src="./images/favicon.ico" alt="" />
            <ul>
                <li>
                    <a href="#Hero" className='menu-item'>Home</a>
                    </li>
                <li>
                    <a href="#Skill" className='menu-item'>Skills</a>
                </li>
                <li>
                    <a href='#WorkExperience' className='menu-item'>Experience</a>
                </li>
                <li>
                    <a href='#Contact' className='menu-item'>Contact Me</a>
                </li>

                <button className='contact-btn' onClick={()=>{}}>
                    Hire Me
                </button>
            </ul>

            
            <button class="menu-btn" onClick={toggleMenu}>
            <span 
                class="material-symbols-outlined"
                style={{fontSize: "1.8rem"}}
                >
                    {openMenu ? "close": "menu"}
                </span>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
