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

const logoIconClamp = 'clamp(2.25rem, 2.038rem + 0.906vw, 3rem)'

const socialIconsClamp = 'clamp(1.688rem, 0.835rem + 1.331vw, 2.25rem)'

export default function Navigation() {
	return (
		<>
			<Desktop>
				<section id='nav-desktop-layout'>
					<nav>
						<div className='nav-logo-container'>
							<LogoIcon
								iconSize={logoIconClamp}
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
								iconSize={socialIconsClamp}
								iconColor='white'
							/>
							<GithubIcon
								iconSize={socialIconsClamp}
								iconColor='white'
							/>
							<CodepenIcon
								iconSize={socialIconsClamp}
								iconColor='white'
							/>
							<StackOverflowIcon
								iconSize={socialIconsClamp}
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
								iconSize={logoIconClamp}
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
								iconSize={socialIconsClamp}
								iconColor='white'
							/>
							<GithubIcon
								iconSize={socialIconsClamp}
								iconColor='white'
							/>
							<CodepenIcon
								iconSize={socialIconsClamp}
								iconColor='white'
							/>
							<StackOverflowIcon
								iconSize={socialIconsClamp}
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
								iconSize={logoIconClamp}
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
							<div className='nav-logo-title'>The Hawk's Nest</div>
							<LogoIcon
								iconSize={logoIconClamp}
								iconColor='var(--primary)'
								iconBorder='white'
							/>
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
