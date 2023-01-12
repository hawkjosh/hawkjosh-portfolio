import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../assets/styles/Navigation.css'

import Footer from './Footer.jsx'

import squareH from '../assets/images/square-h.svg'
import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
import codepen from '../assets/images/codepen.svg'
import stackOverflow from '../assets/images/stack-overflow.svg'

export default function Navigation() {

  return (
    <div className='nav-grid'>
      <nav className='nav'>

        <div id='nav-logo' className='nav-section'>
          <img src={squareH} alt='Square-H Icon' />
          <div className='nav-logo-title'>The Hawk's Nest</div>
        </div>

        <div id='nav-links' className='nav-section'>
          <Link className='nav-link-text' to='/'>Home</Link>
          <Link className='nav-link-text' to='/about'>About</Link>
          <Link className='nav-link-text' to='/work-samples'>Work Samples</Link>
          <Link className='nav-link-text' to='/contact'>Contact</Link>
        </div>

        <div id='nav-social' className='nav-section'>
          <button className='nav-social-btn'>
            <a href='https://www.linkedin.com/in/josh-hawk-6591a3230/' target='_blank' rel='noreferrer'>
              <img src={linkedin} alt='Linkedin Icon' />
            </a>
          </button>
          <button className='nav-social-btn'>
            <a href='https://github.com/hawkjosh' target='_blank' rel='noreferrer'>
              <img src={github} alt='GitHub Icon' />
            </a>
          </button>
          <button className='nav-social-btn'>
            <a href='https://codepen.io/hawkjosh' target='_blank' rel='noreferrer'>
              <img src={codepen} alt='Codepen Icon' />
            </a>
          </button>
          <button className='nav-social-btn'>
            <a href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile' target='_blank' rel='noreferrer'>
              <img src={stackOverflow} alt='Stack Overflow Icon' />
            </a>
          </button>
        </div>

      </nav>

      <div className='main'>
        <Outlet />
      </div>

      <div className='footer'>
        <Footer />
      </div>

    </div>
  )
}