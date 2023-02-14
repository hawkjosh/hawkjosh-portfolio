import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import useNavbarShrink from '../hooks/useNavbarShrink'

import '../assets/styles/NavbarShrink.css'

import Menu from './Menu.jsx'
import LogoIcon from './page-icons/LogoIcon.jsx'
import LinkedinIcon from './page-icons/LinkedinIcon.jsx'
import GithubIcon from './page-icons/GithubIcon.jsx'
import CodepenIcon from './page-icons/CodepenIcon.jsx'
import StackOverflowIcon from './page-icons/StackOverflowIcon.jsx'

const Laptop = ({ children }) => {
	const isLaptop = useMediaQuery({ minWidth: 1280 })
	return isLaptop ? children : null
}

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1279 })
	return isTablet ? children : null
}

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 639 })
	return isMobile ? children : null
}

export default function NavbarShrink() {
	const isLargeScreen = useMediaQuery({ minWidth: 1024 })

	useNavbarShrink()

	return (
		<>
			<Laptop>
				<nav id='nav-laptop'>
					<div className='nav-logo-container'>
						<LogoIcon
							className='nav-logo-icon'
							iconColor='var(--primary)'
							iconBorder='white'
						/>
						<div className='nav-logo-title'>The Hawk's Nest</div>
					</div>

					<div className='nav-links-container'>
						<Link
							className='nav-link'
							to='/'>
							Home
						</Link>
						<Link
							className='nav-link'
							to='/about'>
							About
						</Link>
						<Link
							className='nav-link'
							to='/work-samples'>
							Work Samples
						</Link>
						<Link
							className='nav-link'
							to='/contact'>
							Contact
						</Link>
					</div>

					<div className='nav-social-container'>
						<LinkedinIcon
							className='nav-social-icon'
							iconColor='white'
						/>
						<GithubIcon
							className='nav-social-icon'
							iconColor='white'
						/>
						<CodepenIcon
							className='nav-social-icon'
							iconColor='white'
						/>
						<StackOverflowIcon
							className='nav-social-icon'
							iconColor='white'
						/>
					</div>
				</nav>
			</Laptop>

			<Tablet>
				{isLargeScreen ? (
					<nav id='nav-tablet-large'>
						<div className='nav-logo-container'>
							<LogoIcon
								className='nav-logo-icon'
								iconColor='var(--primary)'
								iconBorder='white'
							/>
							<div className='nav-logo-title'>The Hawk's Nest</div>
						</div>

						<div className='nav-links-container'>
							<Link
								className='nav-link'
								to='/'>
								Home
							</Link>
							<Link
								className='nav-link'
								to='/about'>
								About
							</Link>
							<Link
								className='nav-link'
								to='/work-samples'>
								Work Samples
							</Link>
							<Link
								className='nav-link'
								to='/contact'>
								Contact
							</Link>
						</div>

						<div className='nav-social-container'>
							<LinkedinIcon
								className='nav-social-icon'
								iconColor='white'
							/>
							<GithubIcon
								className='nav-social-icon'
								iconColor='white'
							/>
							<CodepenIcon
								className='nav-social-icon'
								iconColor='white'
							/>
							<StackOverflowIcon
								className='nav-social-icon'
								iconColor='white'
							/>
						</div>
					</nav>
				) : (
					<nav id='nav-tablet-small'>
						<div className='nav-logo-container'>
							<LogoIcon
								className='nav-logo-icon'
								iconColor='var(--primary)'
								iconBorder='white'
							/>
							<div className='nav-logo-title'>The Hawk's Nest</div>
						</div>

						<div className='nav-links-container'>
							<Link
								className='nav-link'
								to='/'>
								Home
							</Link>
							<Link
								className='nav-link'
								to='/about'>
								About
							</Link>
							<Link
								className='nav-link'
								to='/work-samples'>
								Work Samples
							</Link>
							<Link
								className='nav-link'
								to='/contact'>
								Contact
							</Link>
						</div>
					</nav>
				)}
			</Tablet>

			<Mobile>
				<nav id='nav-mobile'>
					<div className='nav-menu-container'>
						<Menu />
					</div>

					<div className='nav-logo-container'>
						<div className='nav-logo-title'>The Hawk's Nest</div>
						<LogoIcon
							className='nav-logo-icon'
							// iconSize='clamp(2.5rem, 2.179rem + 1.429vw, 2.75rem)'
							iconColor='var(--primary)'
							iconBorder='white'
						/>
					</div>
				</nav>
			</Mobile>
		</>
	)
}
