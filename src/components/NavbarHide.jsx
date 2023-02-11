import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import useNavbarHide from '../hooks/useNavbarHide'

import '../assets/styles/NavbarHide.css'

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

export default function NavbarHide() {
	const [shouldHideHeader, setShouldHideHeader] = useState(false)

	const [shouldShowShadow, setShouldShowShadow] = useState(false)

	const MINIMUM_SCROLL = 25

	const TIMEOUT_DELAY = 100

	useNavbarHide((callbackData) => {
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
				<nav
					id='nav-laptop'
					className={`${shadowStyle} ${hiddenStyle}`}>
					<div className='nav-logo-container'>
						<LogoIcon
							iconSize='clamp(3.25rem, 2.417rem + 1.042vw, 3.5rem)'
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
							iconSize='clamp(2rem, 0.333rem + 2.083vw, 2.5rem)'
							iconColor='white'
						/>
						<GithubIcon
							iconSize='clamp(2rem, 0.333rem + 2.083vw, 2.5rem)'
							iconColor='white'
						/>
						<CodepenIcon
							iconSize='clamp(2rem, 0.333rem + 2.083vw, 2.5rem)'
							iconColor='white'
						/>
						<StackOverflowIcon
							iconSize='clamp(2rem, 0.333rem + 2.083vw, 2.5rem)'
							iconColor='white'
						/>
					</div>
				</nav>
			</Laptop>

			<Tablet>
				{isLargeScreen ? (
					<nav
						id='nav-tablet-large'
						className={`${shadowStyle} ${hiddenStyle}`}>
						<div className='nav-logo-container'>
							<LogoIcon
								iconSize='clamp(3rem, 2rem + 1.563vw, 3.25rem)'
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
								iconSize='clamp(1.75rem, 0.75rem + 1.563vw, 2rem)'
								iconColor='white'
							/>
							<GithubIcon
								iconSize='clamp(1.75rem, 0.75rem + 1.563vw, 2rem)'
								iconColor='white'
							/>
							<CodepenIcon
								iconSize='clamp(1.75rem, 0.75rem + 1.563vw, 2rem)'
								iconColor='white'
							/>
							<StackOverflowIcon
								iconSize='clamp(1.75rem, 0.75rem + 1.563vw, 2rem)'
								iconColor='white'
							/>
						</div>
					</nav>
				) : (
					<nav
						id='nav-tablet-small'
						className={`${shadowStyle} ${hiddenStyle}`}>
						<div className='nav-logo-container'>
							<LogoIcon
								iconSize='clamp(2.75rem, 2.333rem + 1.042vw, 3rem)'
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
				)}
			</Tablet>

			<Mobile>
				<nav
					id='nav-mobile'
					className={`${shadowStyle} ${hiddenStyle}`}>
					<div className='nav-menu-container'>
						<Menu />
					</div>

					<div className='nav-logo-container'>
						<div className='nav-logo-title'>The Hawk's Nest</div>
						<LogoIcon
							iconSize='clamp(2.5rem, 2.179rem + 1.429vw, 2.75rem)'
							iconColor='var(--primary)'
							iconBorder='white'
						/>
					</div>
				</nav>
			</Mobile>
		</>
	)
}
