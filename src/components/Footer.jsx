import React from 'react'
import '../assets/styles/Footer.css'

import LinkedinIcon from '../components/page-icons/LinkedinIcon.jsx'
import GithubIcon from '../components/page-icons/GithubIcon.jsx'
import CodepenIcon from '../components/page-icons/CodepenIcon.jsx'
import StackOverflowIcon from '../components/page-icons/StackOverflowIcon.jsx'

export default function Footer() {
	return (
		<>
			<section className='footer-container'>
				<LinkedinIcon
					iconSize='32px'
					iconColor='white'
				/>
				<GithubIcon
					iconSize='32px'
					iconColor='white'
				/>
				<CodepenIcon
					iconSize='32px'
					iconColor='white'
				/>
				<StackOverflowIcon
					iconSize='32px'
					iconColor='white'
				/>
			</section>
		</>
	)
}
