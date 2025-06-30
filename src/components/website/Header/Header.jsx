import React, { useState } from 'react'
import logo from '../../../assets/images/logo2.png'
import './header.css'
import { Link } from 'react-router-dom'
import menu_icon from '../../../assets/images/menu-icon.png'
const Header = () => {
    const [mobMenu , setMobMenu] = useState(false)
    const handleMenu = ()=>{
      setMobMenu(prev => !prev)
    }
  
  return (
    <div className='header'>
        <div className='container'>
            
            <div className="img">
                <Link to="/bahrirealestate"><img src={logo} alt="" /></Link>
            </div>

            <ul className={mobMenu ? "open-menu" : ""}>
              <li><Link to="/bahrirealestate"  onClick={handleMenu}>Home</Link></li>
              <li><Link to="residencies"  onClick={handleMenu}>Residencies</Link></li>
              <li><Link to="our-value"  onClick={handleMenu}>Our Value</Link></li>
              <li><Link to="contact-us"  onClick={handleMenu}>Contact Us</Link></li>
              <button className='btn'  onClick={handleMenu}><a href="mailto:bakri.albahri.info@gmail.com">Contact</a></button>
            </ul>

            <img className="icon" src={menu_icon}  alt='menu-icon' onClick={handleMenu}/>

        </div>
    </div>
  )
}

export default Header