import React, { Fragment } from 'react'
import { useWindowSize } from '../hooks/useWindowSize.js'

import { LinkedinIcon } from '../components/page-icons/LinkedinIcon.jsx'
import { GithubIcon } from '../components/page-icons/GithubIcon.jsx'
import { CodepenIcon } from '../components/page-icons/CodepenIcon.jsx'
import { StackOverflowIcon } from '../components/page-icons/StackOverflowIcon.jsx'
import { FooterLogoIcon } from '../components/page-icons/FooterLogoIcon.jsx'

export const Footer = () => {
	const { isSpecialScreenLg } = useWindowSize()

	return (
		<footer className='footer-container'>
			{isSpecialScreenLg ? (
				<Fragment>
					<div className='footer-copywrite-text'>
						© {new Date().getFullYear()} Joshua Wilde Hawk
					</div>
					<div className='footer-logo-icon'>
						<FooterLogoIcon />
					</div>
				</Fragment>
			) : (
				<Fragment>
					<div className='footer-social-icon'>
						<LinkedinIcon />
					</div>
					<div className='footer-social-icon'>
						<GithubIcon />
					</div>
					<div className='footer-social-icon'>
						<CodepenIcon />
					</div>
					<div className='footer-social-icon'>
						<StackOverflowIcon />
					</div>
				</Fragment>
			)}
		</footer>
	)
}
