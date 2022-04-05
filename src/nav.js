import React from 'react'

export default function nav() {
  return (
    <div>
        <nav>
            <ul className='primary-navigation flex'>
                <li>
                    <a href="#">
                        <span aria-hidden = "true">00</span>Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span aria-hidden = "true">01</span>About
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span aria-hidden = "true">01</span>Contact
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
