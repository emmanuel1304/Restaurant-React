import React from 'react';
import './header.css';
import Food from '../../../assets/foog.jpg'
import { motion } from 'framer-motion'

const Header = () => {

    const bounceAnimation = {
        y: [-10, 10], // Define the vertical position values for the bouncing animation
        transition: {
          duration: 2,
          repeat: Infinity, // Set the animation to repeat indefinitely
          repeatType: 'reverse', // Reverse the animation on each repeat
        },
      };

  return (
    <motion.div  
    animate={{y:5, opacity:1}}
    initial={{opacity:0.1}}
    transition={{duration:1}}
    className='header'> 
        <div className='header-text'> 
            <p>Chase the new flavour</p>
            <h1>The key to fine dinning</h1>
            <h4> 
                Food is more than just sustenance. 
                It is a celebration of culture, a 
                gateway to memories, and a way to 
                connect with others. It is the aroma 
                of spices that transport us to distant 
                lands, the sizzle of a pan that ignites 
                our senses, and the flavors that dance 
                on our taste buds, leaving a lasting impression.
            </h4>
            <button>Explore Menu</button>
        </div>

        <div className='header-image'> 
            <motion.img initial={{ y: 0 }} animate={bounceAnimation}src={Food} />
        </div>
    </motion.div>
  )
}

export default Header