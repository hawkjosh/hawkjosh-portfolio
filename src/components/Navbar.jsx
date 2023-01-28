import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, Outlet } from 'react-router-dom'
import useScrollMagic from '../hooks/useScrollMagic'

import '../assets/styles/Navbar.css'

import Menu from './Menu.jsx'
import Footer from './Footer.jsx'
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

export default function Navbar() {
	const [shouldHideHeader, setShouldHideHeader] = useState(false)

	const [shouldShowShadow, setShouldShowShadow] = useState(false)

	const MINIMUM_SCROLL = 25

	const TIMEOUT_DELAY = 100

	useScrollMagic((callbackData) => {
		const { prevScrollTop, currScrollTop } = callbackData

		const scrollDown = prevScrollTop < currScrollTop

		const minScroll = currScrollTop > MINIMUM_SCROLL

		setShouldShowShadow(currScrollTop > 15)

		setTimeout(() => {
			setShouldHideHeader(scrollDown && minScroll)
		}, TIMEOUT_DELAY)
	})

	const shadowStyle = shouldShowShadow ? 'shadow' : ''

	const hiddenStyle = shouldHideHeader ? 'hidden' : ''

	const isLargeScreen = useMediaQuery({ minWidth: 1024 })

	return (
		<>
			<Laptop>
				<section id='nav-laptop'>
					<nav className={`${shadowStyle} ${hiddenStyle}`}>
						<div className='nav-logo-container'>
							<LogoIcon
								iconSize='2rem'
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
								iconSize='1.75rem'
								iconColor='white'
							/>
							<GithubIcon
								iconSize='1.75rem'
								iconColor='white'
							/>
							<CodepenIcon
								iconSize='1.75rem'
								iconColor='white'
							/>
							<StackOverflowIcon
								iconSize='1.75rem'
								iconColor='white'
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
			</Laptop>

			<Tablet>
				{isLargeScreen ? (
					<section id='nav-tablet-large'>
						<nav className={`${shadowStyle} ${hiddenStyle}`}>
							<div className='nav-logo-container'>
								<LogoIcon
									iconSize='2rem'
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
									iconSize='1.75rem'
									iconColor='white'
								/>
								<GithubIcon
									iconSize='1.75rem'
									iconColor='white'
								/>
								<CodepenIcon
									iconSize='1.75rem'
									iconColor='white'
								/>
								<StackOverflowIcon
									iconSize='1.75rem'
									iconColor='white'
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
				) : (
					<section id='nav-tablet-small'>
						<nav className={`${shadowStyle} ${hiddenStyle}`}>
							<div className='nav-logo-container'>
								<LogoIcon
									iconSize='2rem'
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
				)}
			</Tablet>

			<Mobile>
				<section id='nav-mobile'>
					<nav className={`${shadowStyle} ${hiddenStyle}`}>
						<div className='nav-menu-container'>
							<Menu />
						</div>
						<div className='nav-logo-container'>
							<div className='nav-logo-title'>The Hawk's Nest</div>
							<LogoIcon
								iconSize='2rem'
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
