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
					iconSize='clamp(1.688rem, 1.362rem + 1.387vw, 2.25rem)'
					iconColor='white'
				/>
				<GithubIcon
					iconSize='clamp(1.688rem, 1.362rem + 1.387vw, 2.25rem)'
					iconColor='white'
				/>
				<CodepenIcon
					iconSize='clamp(1.688rem, 1.362rem + 1.387vw, 2.25rem)'
					iconColor='white'
				/>
				<StackOverflowIcon
					iconSize='clamp(1.688rem, 1.362rem + 1.387vw, 2.25rem)'
					iconColor='white'
				/>
			</section>
		</>
	)
}
