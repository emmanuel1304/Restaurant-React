import React from 'react'
import './menu.css'
import Wine from './wine-component/Wine'
import wine from '../../../assets/wine.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Menu = () => {
    const [ref, inView] = useInView({ 
        triggerOnce: true,
    })
    const variants = { 
        hidden: {y:0, opacity:0},
        visible: {y:10, opacity:1, transition:{duration: 2}}
    }
  return (
    <motion.div  
    ref={ref}
    initial='hidden'
    animate={inView ? 'visible' : 'hidden'}
    variants={variants}
    className='menu'> 
        <div className='menu-title'> 
            <h4>Menu That Fits Your Palatte</h4>
            <h1>Today's Special</h1>
        </div>
        <div className='menu-menu-container'> 
            <div className='menu-menu-container-wine'> 
                <h3>Wine & Beer</h3>
                <div className='menu-menu-container-wine-container'> 
                    <Wine title='Chevrolet' amount={50}/>
                    <Wine title='Chevrolet' amount={50}/>
                    <Wine title='Chevrolet' amount={50}/>
                    <Wine title='Chevrolet' amount={50}/>
                    <Wine title='Chevrolet' amount={50}/>
                </div>
            </div>
            <div className='menu-menu-container-image'> 
                <img src={wine} />
            </div>
            <div className='menu-menu-container-wine'> 
                <h3>Wine & Beer</h3>
                <div className='menu-menu-container-wine-container'> 
                    <Wine title='Chevrolet' amount={50}/>
                    <Wine title='Chevrolet' amount={50}/>
                    <Wine title='Chevrolet' amount={50}/>
                    <Wine title='Chevrolet' amount={50}/>
                    <Wine title='Chevrolet' amount={50}/>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Menu