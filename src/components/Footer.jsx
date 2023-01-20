import React from 'react'
import '../assets/styles/Footer.css'

import LinkedinIcon from '../components/svg-icons/LinkedinIcon.jsx'
import GithubIcon from '../components/svg-icons/GithubIcon.jsx'
import CodepenIcon from '../components/svg-icons/CodepenIcon.jsx'
import StackOverflowIcon from '../components/svg-icons/StackOverflowIcon.jsx'

export default function Footer() {
	return (
		<>
			<section className='footer-container'>
				<a
					href='https://www.linkedin.com/in/josh-hawk-6591a3230/'
					target='_blank'
					rel='noreferrer'
				>
					<LinkedinIcon
						iconSize='32px'
						iconColor='white'
					/>
				</a>
				<a
					href='https://github.com/hawkjosh'
					target='_blank'
					rel='noreferrer'
				>
					<GithubIcon
						iconSize='32px'
						iconColor='white'
					/>
				</a>
				<a
					href='https://codepen.io/hawkjosh'
					target='_blank'
					rel='noreferrer'
				>
					<CodepenIcon
						iconSize='32px'
						iconColor='white'
					/>
				</a>
				<a
					href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile'
					target='_blank'
					rel='noreferrer'
				>
					<StackOverflowIcon
						iconSize='32px'
						iconColor='white'
					/>
				</a>
			</section>
		</>
	)
}
