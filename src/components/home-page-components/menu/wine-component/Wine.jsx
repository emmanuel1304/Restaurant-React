import React from 'react'
import './wine.css'


const Wine = ({title, amount}) => {
  return (
    <div className='wine'> 
        <p>{title}</p>
        <div />
        <p>${amount}</p>
    </div>
  )
}

export default Wine