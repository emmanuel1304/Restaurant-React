import {React, useState} from 'react'
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <nav className='navbar'> 
        <div className='navbar-logo'> 
            <h1>GERICHT</h1>
        </div>
        <ul className='navbar-links'> 
            <li className='links'><a href='#home'>Home</a></li>
            <li className='links'><a href='#about'>About</a></li>
            <li className='links'><a href='#menu'>Menu</a></li>
            <li className='links'><a href='#awards'>Awards</a></li>
            <li className='links'><a href='#contact'>Contact</a></li>
        </ul>
        <div className='navbar-login'>
            <a className='login' href='#login'>Log In / Register</a> 
            <div />
            <a className='login' href='login'>Book Table</a>
        </div>
        <div className='open-button'>
            <GiHamburgerMenu color='white' size={27} onClick={() => setMenuOpen(true)}/> 
        </div>
        {menuOpen && (
            <motion.div  
            animate={{y:0, opacity:1}}
            initial={{opacity:0.1}}
            transition={{duration:2}}
            className='navbar-small-screen-menu'>
                <MdOutlineRestaurantMenu color='white' size={27} className='close-button' onClick={() => setMenuOpen(false)}/>
                <ul className='navbar-small-screen-menu-links'> 
                    <li className='links'><a href='#home'>Home</a></li>
                    <li className='links'><a href='#about'>About</a></li>
                    <li className='links'><a href='#menu'>Menu</a></li>
                    <li className='links'><a href='#awards'>Awards</a></li>
                    <li className='links'><a href='#contact'>Contact</a></li>
                </ul>
            </motion.div>
        )}
    </nav>
  )
}

export default Navbar