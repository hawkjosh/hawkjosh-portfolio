import React from 'react'
import '../assets/styles/Footer.css'

import LinkedinIcon from '../components/page-icons/LinkedinIcon.jsx'
import GithubIcon from '../components/page-icons/GithubIcon.jsx'
import CodepenIcon from '../components/page-icons/CodepenIcon.jsx'
import StackOverflowIcon from '../components/page-icons/StackOverflowIcon.jsx'

const footerIconsClamp = 'clamp(1.688rem, 1.362rem + 1.387vw, 2.25rem)'

export default function Footer() {
	return (
		<>
			<section className='footer-container'>
				<LinkedinIcon
					iconSize={footerIconsClamp}
					iconColor='white'
				/>
				<GithubIcon
					iconSize={footerIconsClamp}
					iconColor='white'
				/>
				<CodepenIcon
					iconSize={footerIconsClamp}
					iconColor='white'
				/>
				<StackOverflowIcon
					iconSize={footerIconsClamp}
					iconColor='white'
				/>
			</section>
		</>
	)
}
