import React from 'react'
import './about.css'
import Gimage from '../../../assets/g-image.jpg'
import Knife from '../../../assets/knife.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';



const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
      });

    const variants = {
        hidden: { y: 0, opacity: 0 },
        visible: { y: 10, opacity: 1, transition: { duration: 2 } },
    };  
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={variants} 
    className='about'> 
        
        <div className='about-content'> 
            <div className='about-content-aboutus'> 
                <h1>About Us</h1>
                <p>food has the power to nourish not only our bodies but also our souls. So let us embrace the beauty of food, savor every bite, and appreciate the artistry that goes into creating a meal. </p>
                <button>Know More</button>
            </div>

            <div className='about-content-img'> 
                <img src={Knife} />
            </div>

            <div className='about-content-history'>
                <h1>Our History</h1>
                <p>food has the power to nourish not only our bodies but also our souls. So let us embrace the beauty of food, savor every bite, and appreciate the artistry that goes into creating a meal. </p>
                <button>Know More</button> 
            </div>
        </div>
    </motion.div>
  )
}

export default About