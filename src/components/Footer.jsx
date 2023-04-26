import React, { Fragment } from 'react'
import { useWindowSize } from '../hooks/useWindowSize.js'

import { LinkedinIcon } from '../components/page-icons/LinkedinIcon.jsx'
import { GithubIcon } from '../components/page-icons/GithubIcon.jsx'
import { CodepenIcon } from '../components/page-icons/CodepenIcon.jsx'
import { StackOverflowIcon } from '../components/page-icons/StackOverflowIcon.jsx'
import { FooterLogoIcon } from '../components/page-icons/FooterLogoIcon.jsx'

export const Footer = () => {
	const { isScreenLg } = useWindowSize()

	return (
		<footer className='footer-container'>
			{isScreenLg ? (
				<Fragment>
					<div className='footer-copywrite-text'>
						© {new Date().getFullYear()} Joshua Wilde Hawk
					</div>
					<FooterLogoIcon className='footer-logo-icon' />
				</Fragment>
			) : (
				<Fragment>
					<LinkedinIcon className='footer-social-icon' />
					<GithubIcon className='footer-social-icon' />
					<CodepenIcon className='footer-social-icon' />
					<StackOverflowIcon className='footer-social-icon' />
				</Fragment>
			)}
		</footer>
	)
}
