import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavbarHide } from '../hooks/useNavbarHide.jsx'

import { Menu } from './Menu.jsx'

import { NavLogoIcon } from './page-icons/NavLogoIcon.jsx'
import { LinkedinIcon } from './page-icons/LinkedinIcon.jsx'
import { GithubIcon } from './page-icons/GithubIcon.jsx'
import { CodepenIcon } from './page-icons/CodepenIcon.jsx'
import { StackOverflowIcon } from './page-icons/StackOverflowIcon.jsx'

export const NavbarHide = () => {
	const [shouldHideHeader, setShouldHideHeader] = useState(false)

	const [shouldShowShadow, setShouldShowShadow] = useState(false)

	const MINIMUM_SCROLL = 25

	const TIMEOUT_DELAY = 100

	const shadowStyle = shouldShowShadow ? 'shadow' : ''

	const hiddenStyle = shouldHideHeader ? 'hidden' : ''

	useNavbarHide((callbackData) => {
		const { prevScrollTop, currScrollTop } = callbackData

		const scrollDown = prevScrollTop < currScrollTop

		const minScroll = currScrollTop > MINIMUM_SCROLL

		setShouldShowShadow(currScrollTop > 15)

		setTimeout(() => {
			setShouldHideHeader(scrollDown && minScroll)
		}, TIMEOUT_DELAY)
	})

	const links = [
		{
			title: 'Home',
			url: '/',
		},
		{
			title: 'About',
			url: '/about',
		},
		{
			title: 'Work Samples',
			url: '/work-samples',
		},
		{
			title: 'Contact',
			url: '/contact',
		},
	]

	return (
		<nav className={`nav-hide-container ${shadowStyle} ${hiddenStyle}`}>
			<div className='nav-menu-wrapper'>
				<Menu />
			</div>

			<div className='nav-logo-wrapper'>
				<NavLogoIcon className='nav-logo-icon' />
				<div className='nav-logo-title'>The Hawk's Nest</div>
			</div>

			<div className='nav-links-wrapper'>
			{links.map((link, index) => {
					return (
						<Link
							className='nav-link'
							key={index}
							to={link.url}>
							{link.title}
						</Link>
					)
				})}
			</div>

			<div className='nav-social-wrapper'>
				<LinkedinIcon className='nav-social-icon' />
				<GithubIcon className='nav-social-icon' />
				<CodepenIcon className='nav-social-icon' />
				<StackOverflowIcon className='nav-social-icon' />
			</div>
		</nav>
	)
}
