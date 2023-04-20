import React from 'react'
import { Link } from 'react-router-dom'
import { useNavbarShrink } from '../hooks/useNavbarShrink.js'

import { Menu } from './Menu.jsx'

import { NavLogoIcon } from './page-icons/NavLogoIcon.jsx'
import { LinkedinIcon } from './page-icons/LinkedinIcon.jsx'
import { GithubIcon } from './page-icons/GithubIcon.jsx'
import { CodepenIcon } from './page-icons/CodepenIcon.jsx'
import { StackOverflowIcon } from './page-icons/StackOverflowIcon.jsx'

export const NavbarShrink = () => {
	useNavbarShrink()

	return (
		<nav className='nav-shrink-container'>
			<div className='nav-menu-wrapper'>
				<Menu />
			</div>

			<div className='nav-logo-wrapper'>
				<NavLogoIcon className='nav-logo-icon' />
				<div className='nav-logo-title'>The Hawk's Nest</div>
			</div>

			<div className='nav-links-wrapper'>
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

			<div className='nav-social-wrapper'>
				<LinkedinIcon className='nav-social-icon' />
				<GithubIcon className='nav-social-icon' />
				<CodepenIcon className='nav-social-icon' />
				<StackOverflowIcon className='nav-social-icon' />
			</div>
		</nav>
	)
}
