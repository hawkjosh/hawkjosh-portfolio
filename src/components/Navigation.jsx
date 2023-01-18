import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, Outlet } from 'react-router-dom'
import '../assets/styles/Navigation.css'

import Menu from './Menu.jsx'
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
      <section id='nav-desktop-layout'>

        <nav>
          <div className='nav-logo-container'>
            <svg width="50px" height="auto" viewBox="0 0 110 110" fill="#1abc9c" stroke="white" stroke-width="5">
              <path d="M15 5H95A10 10 0 0 1 105 15V95A10 10 0 0 1 95 105H15A10 10 0 0 1 5 95V15A10 10 0 0 1 15 5ZM30 30A1 1 0 0 1 37 30V80A1 1 0 0 1 30 80V30ZM32.5 27.5V82.5ZM73 30A1 1 0 0 1 80 30V80A1 1 0 0 1 73 80V30ZM77.5 27.5V82.5ZM30 52.5H80ZM30 57.5H80Z" />
            </svg>
            <div className='nav-logo-title'>The Hawk's Nest</div>
          </div>

          <div className='nav-links-container'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/work-samples'>Work Samples</Link>
            <Link to='/contact'>Contact</Link>
          </div>

          <div className='nav-social-container'>
            <a href='https://www.linkedin.com/in/josh-hawk-6591a3230/' target='_blank' rel='noreferrer'>
              <svg className="nav-social-icon" width="36px" height="auto" viewBox="0 0 110 110" fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M105 30V80A25 25 0 0 1 80 105H30A25 25 0 0 1 5 80V30A25 25 0 0 1 30 5H80A25 25 0 0 1 105 30M30 28A1 1 0 0 1 30 32A1 1 0 0 1 30 28M30 80V45M50 80V65M50 45V65M50 65C50 45 80 45 80 65V80"/>
              </svg>
            </a>
            <a href='https://github.com/hawkjosh' target='_blank' rel='noreferrer'>
              <svg className="nav-social-icon" width="36px" height="auto" viewBox="0 0 110 110" fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M75 105V91A16 16 0 0 0 70 78A31.5 31.5 0 0 0 95 24A22 22 0 0 0 94 5A35 35 0 0 0 75 12A67 67 0 0 0 40 12A35 35 0 0 0 21 5A22 22 0 0 0 20 24A31.5 31.5 0 0 0 45 78A16 16 0 0 0 40 91V105M40 95C25 100 13 95 5 80"/>
              </svg>
            </a>
            <a href='https://codepen.io/hawkjosh' target='_blank' rel='noreferrer'>
              <svg className="nav-social-icon" width="36px" height="auto" viewBox="0 0 110 110" fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M105 38V71M5 71V38M55 105V71M55 5V38M55 71L5 38L55 5L105 38L55 71M55 105L5 71L55 38L105 71L55 105"/>
              </svg>
            </a>
            <a href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile' target='_blank' rel='noreferrer'>
              <svg className="nav-social-icon" width="36px" height="auto" viewBox="0 0 110 110" fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M98 73V105H5V73M78 84H25M78 72L25 62M83 59L34 40M93 49L51 21M105 39L72 5"/>
              </svg>
            </a>
          </div>
        </nav>

        <main>
          <Outlet />
        </main>

      </section>
    </Desktop>
    
    <Laptop>
      <section id='nav-laptop-layout'>

        <nav>
          <div className='nav-logo-container'>
            <svg width="40px" height="auto" viewBox="0 0 110 110" fill="#1abc9c" stroke="white" stroke-width="5">
              <path d="M15 5H95A10 10 0 0 1 105 15V95A10 10 0 0 1 95 105H15A10 10 0 0 1 5 95V15A10 10 0 0 1 15 5ZM30 30A1 1 0 0 1 37 30V80A1 1 0 0 1 30 80V30ZM32.5 27.5V82.5ZM73 30A1 1 0 0 1 80 30V80A1 1 0 0 1 73 80V30ZM77.5 27.5V82.5ZM30 52.5H80ZM30 57.5H80Z" />
            </svg>
            <div className='nav-logo-title'>The Hawk's Nest</div>
          </div>

          <div className='nav-links-container'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/work-samples'>Work Samples</Link>
            <Link to='/contact'>Contact</Link>
          </div>

          <div className='nav-social-container'>
            <a href='https://www.linkedin.com/in/josh-hawk-6591a3230/' target='_blank' rel='noreferrer'>
              <svg className="nav-social-icon" width="30px" height="auto" viewBox="0 0 110 110" fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M105 30V80A25 25 0 0 1 80 105H30A25 25 0 0 1 5 80V30A25 25 0 0 1 30 5H80A25 25 0 0 1 105 30M30 28A1 1 0 0 1 30 32A1 1 0 0 1 30 28M30 80V45M50 80V65M50 45V65M50 65C50 45 80 45 80 65V80"/>
              </svg>
            </a>
            <a href='https://github.com/hawkjosh' target='_blank' rel='noreferrer'>
              <svg className="nav-social-icon" width="30px" height="auto" viewBox="0 0 110 110" fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M75 105V91A16 16 0 0 0 70 78A31.5 31.5 0 0 0 95 24A22 22 0 0 0 94 5A35 35 0 0 0 75 12A67 67 0 0 0 40 12A35 35 0 0 0 21 5A22 22 0 0 0 20 24A31.5 31.5 0 0 0 45 78A16 16 0 0 0 40 91V105M40 95C25 100 13 95 5 80"/>
              </svg>
            </a>
            <a href='https://codepen.io/hawkjosh' target='_blank' rel='noreferrer'>
              <svg className="nav-social-icon" width="30px" height="auto" viewBox="0 0 110 110" fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M105 38V71M5 71V38M55 105V71M55 5V38M55 71L5 38L55 5L105 38L55 71M55 105L5 71L55 38L105 71L55 105"/>
              </svg>
            </a>
            <a href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile' target='_blank' rel='noreferrer'>
              <svg className="nav-social-icon" width="30px" height="auto" viewBox="0 0 110 110" fill="transparent" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M98 73V105H5V73M78 84H25M78 72L25 62M83 59L34 40M93 49L51 21M105 39L72 5"/>
              </svg>
            </a>
          </div>
        </nav>

        <main>
          <Outlet />
        </main>

      </section>
    </Laptop>

    <Tablet>
      <section id='nav-tablet-layout'>

        <nav>
          <div className='nav-logo-container'>
            <svg width="37.5px" height="auto" viewBox="0 0 110 110" fill="#1abc9c" stroke="white" stroke-width="5">
              <path d="M15 5H95A10 10 0 0 1 105 15V95A10 10 0 0 1 95 105H15A10 10 0 0 1 5 95V15A10 10 0 0 1 15 5ZM30 30A1 1 0 0 1 37 30V80A1 1 0 0 1 30 80V30ZM32.5 27.5V82.5ZM73 30A1 1 0 0 1 80 30V80A1 1 0 0 1 73 80V30ZM77.5 27.5V82.5ZM30 52.5H80ZM30 57.5H80Z" />
            </svg>
            <div className='nav-logo-title'>The Hawk's Nest</div>
          </div>

          <div className='nav-links-container'>
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

      </section>
    </Tablet>

    <Mobile>
      <section id='nav-mobile-layout'>

        <nav>
          <div className='nav-menu-container'>
            <Menu />
          </div>
          <div className='nav-logo-container'>
            <svg width="40px" height="auto" viewBox="0 0 110 110" fill="#1abc9c" stroke="white" stroke-width="5">
              <path d="M15 5H95A10 10 0 0 1 105 15V95A10 10 0 0 1 95 105H15A10 10 0 0 1 5 95V15A10 10 0 0 1 15 5ZM30 30A1 1 0 0 1 37 30V80A1 1 0 0 1 30 80V30ZM32.5 27.5V82.5ZM73 30A1 1 0 0 1 80 30V80A1 1 0 0 1 73 80V30ZM77.5 27.5V82.5ZM30 52.5H80ZM30 57.5H80Z" />
            </svg>
            <div className='nav-logo-title'>The Hawk's Nest</div>
          </div>
        </nav>

        <main>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>

      </section>
    </Mobile>

    </>
  )
}