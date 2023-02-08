import React from 'react'
import { useMediaQuery } from 'react-responsive'

import '../assets/styles/Footer.css'

import LinkedinIcon from '../components/page-icons/LinkedinIcon.jsx'
import GithubIcon from '../components/page-icons/GithubIcon.jsx'
import CodepenIcon from '../components/page-icons/CodepenIcon.jsx'
import StackOverflowIcon from '../components/page-icons/StackOverflowIcon.jsx'
import HawkIcon from '../components/page-icons/HawkIcon.jsx'

export default function Footer() {
	const isLargeScreen = useMediaQuery({ minWidth: 1024 })

	return (
		<>
			{isLargeScreen ? (
				<footer id='footer-container'>
					<div className='copywrite-text'>© {new Date().getFullYear()} Joshua Wilde Hawk</div>
					<HawkIcon
						iconSize='clamp(3.25rem, 2.45rem + 1.25vw, 3.75rem)'
						iconColor='white'
						iconBorder='var(--secondary)'
					/>
				</footer>
			) : (
				<footer id='footer-container'>
					<LinkedinIcon
						iconSize='clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem)'
						iconColor='white'
					/>
					<GithubIcon
						iconSize='clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem)'
						iconColor='white'
					/>
					<CodepenIcon
						iconSize='clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem)'
						iconColor='white'
					/>
					<StackOverflowIcon
						iconSize='clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem)'
						iconColor='white'
					/>
				</footer>
			)}
		</>
	)
}
