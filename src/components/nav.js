import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <div className='nav'>
        <div className='homelink'>
        <Link to='/'>
                Home
        </Link> 
        </div>
        <div className='aboutlink'>
        <Link to="About">
                About
        </Link>
        </div> 
        <div className='contactlink' >
        <Link to="Contact">
                Contact
        </Link>
        </div>      
    </div>
  )
}
