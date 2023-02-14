import React, { Fragment } from 'react'
import { useMediaQuery } from 'react-responsive'

import '../assets/styles/Footer.css'

import LinkedinIcon from '../components/page-icons/LinkedinIcon.jsx'
import GithubIcon from '../components/page-icons/GithubIcon.jsx'
import CodepenIcon from '../components/page-icons/CodepenIcon.jsx'
import StackOverflowIcon from '../components/page-icons/StackOverflowIcon.jsx'
import FooterLogoIcon from '../components/page-icons/FooterLogoIcon.jsx'

export default function Footer() {
	const isLargeScreen = useMediaQuery({ minWidth: 1024 })

	return (
		<Fragment>
			{isLargeScreen ? (
				<footer id='footer-container'>
					<div className='footer-copywrite-text'>
						© {new Date().getFullYear()} Joshua Wilde Hawk
					</div>
					<FooterLogoIcon className='footer-logo-icon' />
				</footer>
			) : (
				<footer id='footer-container'>
					<LinkedinIcon className='footer-social-icon' />
					<GithubIcon className='footer-social-icon' />
					<CodepenIcon className='footer-social-icon' />
					<StackOverflowIcon className='footer-social-icon' />
				</footer>
			)}
		</Fragment>
	)
}
