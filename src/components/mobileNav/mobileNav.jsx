import React from 'react'
import "./mobileNav.css"

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div 
    className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className="mobile-menu-container">
            <img className='logo' src="./images/favicon.ico" alt='' />
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

        </div>
    </div>
      
    </>
  )
}

export default MobileNav;
