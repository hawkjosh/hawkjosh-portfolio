import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, Outlet } from 'react-router-dom'
import '../assets/styles/Navigation.css'

import Menu from './Menu.jsx'
import Footer from './Footer.jsx'

import LogoIcon from '../components/svg-icons/LogoIcon.jsx'
import LinkedinIcon from '../components/svg-icons/LinkedinIcon.jsx'
import GithubIcon from '../components/svg-icons/GithubIcon.jsx'
import CodepenIcon from '../components/svg-icons/CodepenIcon.jsx'
import StackOverflowIcon from '../components/svg-icons/StackOverflowIcon.jsx'

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
								fill='var(--primary)'
								stroke='white'
								width='50px'
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
							<a
								href='https://www.linkedin.com/in/josh-hawk-6591a3230/'
								target='_blank'
								rel='noreferrer'
							>
								<LinkedinIcon
									stroke='white'
									width='36px'
								/>
							</a>
							<a
								href='https://github.com/hawkjosh'
								target='_blank'
								rel='noreferrer'
							>
								<GithubIcon
									stroke='white'
									width='36px'
								/>
							</a>
							<a
								href='https://codepen.io/hawkjosh'
								target='_blank'
								rel='noreferrer'
							>
								<CodepenIcon
									stroke='white'
									width='36px'
								/>
							</a>
							<a
								href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile'
								target='_blank'
								rel='noreferrer'
							>
								<StackOverflowIcon
									stroke='white'
									width='36px'
								/>
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
							<LogoIcon
								fill='var(--primary)'
								stroke='white'
								width='40px'
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
							<a
								href='https://www.linkedin.com/in/josh-hawk-6591a3230/'
								target='_blank'
								rel='noreferrer'
							>
								<LinkedinIcon
									stroke='white'
									width='30px'
								/>
							</a>
							<a
								href='https://github.com/hawkjosh'
								target='_blank'
								rel='noreferrer'
							>
								<GithubIcon
									stroke='white'
									width='30px'
								/>
							</a>
							<a
								href='https://codepen.io/hawkjosh'
								target='_blank'
								rel='noreferrer'
							>
								<CodepenIcon
									stroke='white'
									width='30px'
								/>
							</a>
							<a
								href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile'
								target='_blank'
								rel='noreferrer'
							>
								<StackOverflowIcon
									stroke='white'
									width='30px'
								/>
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
							<LogoIcon
								fill='var(--primary)'
								stroke='white'
								width='37.5px'
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
								fill='var(--primary)'
								stroke='white'
								width='40px'
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
