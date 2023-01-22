import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, Outlet } from 'react-router-dom'
import '../assets/styles/Navigation.css'

import Menu from './Menu.jsx'
import Footer from './Footer.jsx'

import LogoIcon from '../components/page-icons/LogoIcon.jsx'
import LinkedinIcon from '../components/page-icons/LinkedinIcon.jsx'
import GithubIcon from '../components/page-icons/GithubIcon.jsx'
import CodepenIcon from '../components/page-icons/CodepenIcon.jsx'
import StackOverflowIcon from '../components/page-icons/StackOverflowIcon.jsx'

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
							<LogoIcon
								iconSize='50px'
								iconColor='var(--primary)'
								iconBorder='white'
							/>
							<div className='nav-logo-title'>The Hawk's Nest</div>
						</div>

						<div className='nav-links-container'>
							<Link to='/'>Home</Link>
							<Link to='/about'>About</Link>
							<Link to='/work-samples'>Work Samples</Link>
							<Link to='/contact'>Contact</Link>
						</div>

						<div className='nav-social-container'>
							<LinkedinIcon
								iconSize='36px'
								iconColor='white'
							/>
							<GithubIcon
								iconSize='36px'
								iconColor='white'
							/>
							<CodepenIcon
								iconSize='36px'
								iconColor='white'
							/>
							<StackOverflowIcon
								iconSize='36px'
								iconColor='white'
							/>
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
							<LogoIcon
								iconSize='40px'
								iconColor='var(--primary)'
								iconBorder='white'
							/>
							<div className='nav-logo-title'>The Hawk's Nest</div>
						</div>

						<div className='nav-links-container'>
							<Link to='/'>Home</Link>
							<Link to='/about'>About</Link>
							<Link to='/work-samples'>Work Samples</Link>
							<Link to='/contact'>Contact</Link>
						</div>

						<div className='nav-social-container'>
							<LinkedinIcon
								iconSize='30px'
								iconColor='white'
							/>
							<GithubIcon
								iconSize='30px'
								iconColor='white'
							/>
							<CodepenIcon
								iconSize='30px'
								iconColor='white'
							/>
							<StackOverflowIcon
								iconSize='30px'
								iconColor='white'
							/>
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
							<LogoIcon
								iconSize='37.5px'
								iconColor='var(--primary)'
								iconBorder='white'
							/>
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
							<LogoIcon
								iconSize='clamp(2rem, 1.154rem + 3.846vw, 3rem)'
								// iconSize='48px'
								iconColor='var(--primary)'
								iconBorder='white'
							/>
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
