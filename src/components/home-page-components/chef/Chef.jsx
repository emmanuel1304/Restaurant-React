import React from 'react'
import './chef.css'
import chef2 from '../../../assets/chef2.jpg'
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Chef = () => {
    
  return (
    <motion.div  
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1, transition:{duration:0.5}}}
    className='chef'> 
        <div className='chef-image'> 
            <img src={chef2} />
        </div>

        <div className='chef-text'> 
            <p>Chef's Word</p>
            <h2>What We Believe In </h2>
            <h4> 
                <FaQuoteLeft size={28} /> Food brings people together,  
                creating shared experiences  
                and cherished memories. It  
                has the power to transport  
                you to distant lands through  
                the aroma of exotic spices and  
                the richness of cultural traditions.  
                Whether it's a cozy family dinner  
                around the table or a festive gathering  
                with friends, food is the centerpiece  
                that sparks laughter, conversation, and pure culinary delight.<FaQuoteRight size={28}/> 
            </h4>
        </div>
    </motion.div>
  )
}

export default Chef