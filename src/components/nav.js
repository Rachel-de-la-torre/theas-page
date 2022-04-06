import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <div>
        <nav>
            <Link classname='homelink' to='/'>
                Home
            </Link> 
            <Link classname='aboutlink' to="About">
                About
            </Link>
            <Link classname='contactlink' to="Contact">
                Contact
            </Link>
        </nav>
    </div>
  )
}
