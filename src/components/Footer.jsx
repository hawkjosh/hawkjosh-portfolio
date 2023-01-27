import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/Footer.css'

import LinkedinIcon from '../components/page-icons/LinkedinIcon.jsx'
import GithubIcon from '../components/page-icons/GithubIcon.jsx'
import CodepenIcon from '../components/page-icons/CodepenIcon.jsx'
import StackOverflowIcon from '../components/page-icons/StackOverflowIcon.jsx'
import HawkIcon from '../components/page-icons/HawkIcon.jsx'

export default function Footer() {
	const isLargeScreen = useMediaQuery({ minWidth: 1280 })

	return (
		<>
			{isLargeScreen ? (
				<section className='footer-container'>
					<div className='copywrite-text'>© 2022 Joshua Wilde Hawk</div>
					<HawkIcon
						iconSize='55px'
						iconColor='white'
						iconBorder='var(--primary)'
					/>
				</section>
			) : (
				<section className='footer-container'>
					<LinkedinIcon
						iconSize='27px'
						iconColor='white'
					/>
					<GithubIcon
						iconSize='27px'
						iconColor='white'
					/>
					<CodepenIcon
						iconSize='27px'
						iconColor='white'
					/>
					<StackOverflowIcon
						iconSize='27px'
						iconColor='white'
					/>
				</section>
			)}
		</>
	)
}
