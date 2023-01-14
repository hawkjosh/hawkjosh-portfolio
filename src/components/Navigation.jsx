import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/Navigation.css'

import Footer from './Footer.jsx'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 })
  return isDesktop ? children : null
}

const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 })
  return isLaptop ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

export default function Navigation() {

  return (
    <>

      <Desktop>
        <div id='layout-grid'>

          <nav>
            <div id='nav-logo-container' className='nav-section'>

              <svg width="40" height="40" viewBox="-7.5 -7.5 415 415"><path fill="#1abc9c" stroke="white" stroke-width="15" d="M50 0H350A50 50 0 0 1 400 50V350A50 50 0 0 1 350 400H50A50 50 0 0 1 0 350V50A50 50 0 0 1 50 0Z"/><path fill="white" d="M85 100A25 25 0 0 1 135 100V180H265V100A25 25 0 0 1 315 100V300A25 25 0 0 1 265 300V220H135V300A25 25 0 0 1 85 300V100Z"/></svg>

              <div id='nav-logo-title'>The Hawk's Nest</div>
            </div>
    
            <div id='nav-links-container' className='nav-section'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/work-samples'>Work Samples</Link>
              <Link to='/contact'>Contact</Link>
            </div>
    
            <div id='nav-social-container' className='nav-section'>
              <a href='https://www.linkedin.com/in/josh-hawk-6591a3230/' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M105 30V80A25 25 0 0 1 80 105H30A25 25 0 0 1 5 80V30A25 25 0 0 1 30 5H80A25 25 0 0 1 105 30M30 28A1 1 0 0 1 30 32A1 1 0 0 1 30 28M30 80V45M50 80V65M50 45V65M50 65C50 45 80 45 80 65V80"/></svg>
                
              </a>
              <a href='https://github.com/hawkjosh' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M75 105V91A16 16 0 0 0 70 78A31.5 31.5 0 0 0 95 24A22 22 0 0 0 94 5A35 35 0 0 0 75 12A67 67 0 0 0 40 12A35 35 0 0 0 21 5A22 22 0 0 0 20 24A31.5 31.5 0 0 0 45 78A16 16 0 0 0 40 91V105M40 95C25 100 13 95 5 80"/></svg>

              </a>
              <a href='https://codepen.io/hawkjosh' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M105 38V71M5 71V38M55 105V71M55 5V38M55 71L5 38L55 5L105 38L55 71M55 105L5 71L55 38L105 71L55 105"/></svg>

              </a>
              <a href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M98 73V105H5V73M78 84H25M78 72L25 62M83 59L34 40M93 49L51 21M105 39L72 5"/></svg>

              </a>
            </div>
          </nav>
  
          <main>
            <Outlet />
          </main>
        </div>
      </Desktop>  
      
      <Laptop>
        <div id='layout-grid'>

          <nav>
            <div id='nav-logo-container' className='nav-section'>

              <svg width="40" height="40" viewBox="-7.5 -7.5 415 415"><path fill="#1abc9c" stroke="white" stroke-width="15" d="M50 0H350A50 50 0 0 1 400 50V350A50 50 0 0 1 350 400H50A50 50 0 0 1 0 350V50A50 50 0 0 1 50 0Z"/><path fill="white" d="M85 100A25 25 0 0 1 135 100V180H265V100A25 25 0 0 1 315 100V300A25 25 0 0 1 265 300V220H135V300A25 25 0 0 1 85 300V100Z"/></svg>

              <div id='nav-logo-title'>The Hawk's Nest</div>
            </div>
    
            <div id='nav-links-container' className='nav-section'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/work-samples'>Work Samples</Link>
              <Link to='/contact'>Contact</Link>
            </div>
    
            <div id='nav-social-container' className='nav-section'>
              <a href='https://www.linkedin.com/in/josh-hawk-6591a3230/' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M105 30V80A25 25 0 0 1 80 105H30A25 25 0 0 1 5 80V30A25 25 0 0 1 30 5H80A25 25 0 0 1 105 30M30 28A1 1 0 0 1 30 32A1 1 0 0 1 30 28M30 80V45M50 80V65M50 45V65M50 65C50 45 80 45 80 65V80"/></svg>
                
              </a>
              <a href='https://github.com/hawkjosh' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M75 105V91A16 16 0 0 0 70 78A31.5 31.5 0 0 0 95 24A22 22 0 0 0 94 5A35 35 0 0 0 75 12A67 67 0 0 0 40 12A35 35 0 0 0 21 5A22 22 0 0 0 20 24A31.5 31.5 0 0 0 45 78A16 16 0 0 0 40 91V105M40 95C25 100 13 95 5 80"/></svg>

              </a>
              <a href='https://codepen.io/hawkjosh' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M105 38V71M5 71V38M55 105V71M55 5V38M55 71L5 38L55 5L105 38L55 71M55 105L5 71L55 38L105 71L55 105"/></svg>

              </a>
              <a href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M98 73V105H5V73M78 84H25M78 72L25 62M83 59L34 40M93 49L51 21M105 39L72 5"/></svg>

              </a>
            </div>
          </nav>
  
          <main>
            <Outlet />
          </main>
        </div>
      </Laptop>  
      
      <Tablet>
        <div id='layout-grid'>

          <nav>
            <div id='nav-logo-container' className='nav-section'>

              <svg width="40" height="40" viewBox="-7.5 -7.5 415 415"><path fill="#1abc9c" stroke="white" stroke-width="15" d="M50 0H350A50 50 0 0 1 400 50V350A50 50 0 0 1 350 400H50A50 50 0 0 1 0 350V50A50 50 0 0 1 50 0Z"/><path fill="white" d="M85 100A25 25 0 0 1 135 100V180H265V100A25 25 0 0 1 315 100V300A25 25 0 0 1 265 300V220H135V300A25 25 0 0 1 85 300V100Z"/></svg>

              <div id='nav-logo-title'>The Hawk's Nest</div>
            </div>
    
            <div id='nav-links-container' className='nav-section'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/work-samples'>Work Samples</Link>
              <Link to='/contact'>Contact</Link>
            </div>
    
            <div id='nav-social-container' className='nav-section'>
              <a href='https://www.linkedin.com/in/josh-hawk-6591a3230/' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M105 30V80A25 25 0 0 1 80 105H30A25 25 0 0 1 5 80V30A25 25 0 0 1 30 5H80A25 25 0 0 1 105 30M30 28A1 1 0 0 1 30 32A1 1 0 0 1 30 28M30 80V45M50 80V65M50 45V65M50 65C50 45 80 45 80 65V80"/></svg>
                
              </a>
              <a href='https://github.com/hawkjosh' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M75 105V91A16 16 0 0 0 70 78A31.5 31.5 0 0 0 95 24A22 22 0 0 0 94 5A35 35 0 0 0 75 12A67 67 0 0 0 40 12A35 35 0 0 0 21 5A22 22 0 0 0 20 24A31.5 31.5 0 0 0 45 78A16 16 0 0 0 40 91V105M40 95C25 100 13 95 5 80"/></svg>

              </a>
              <a href='https://codepen.io/hawkjosh' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M105 38V71M5 71V38M55 105V71M55 5V38M55 71L5 38L55 5L105 38L55 71M55 105L5 71L55 38L105 71L55 105"/></svg>

              </a>
              <a href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile' target='_blank' rel='noreferrer'>

                <svg width="32" height="32" viewBox="0 0 110 110"><path fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M98 73V105H5V73M78 84H25M78 72L25 62M83 59L34 40M93 49L51 21M105 39L72 5"/></svg>

              </a>
            </div>
          </nav>
  
          <main>
            <Outlet />
          </main>
        </div>
      </Tablet>  
      
      <Mobile>
        <div id='layout-grid'>

          <nav>
            <div id='nav-logo-container' className='nav-section'>

              <svg width="40" height="40" viewBox="-7.5 -7.5 415 415"><path fill="#1abc9c" stroke="white" stroke-width="15" d="M50 0H350A50 50 0 0 1 400 50V350A50 50 0 0 1 350 400H50A50 50 0 0 1 0 350V50A50 50 0 0 1 50 0Z"/><path fill="white" d="M85 100A25 25 0 0 1 135 100V180H265V100A25 25 0 0 1 315 100V300A25 25 0 0 1 265 300V220H135V300A25 25 0 0 1 85 300V100Z"/></svg>

              <div id='nav-logo-title'>The Hawk's Nest</div>
            </div>
    
            <div id='nav-links-container' className='nav-section'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/work-samples'>Work Samples</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </nav>
  
          <main>
            <Outlet />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </Mobile>  
      
    </>
  )
}