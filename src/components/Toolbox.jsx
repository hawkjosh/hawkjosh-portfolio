import React from 'react'
import { useMediaQuery } from 'react-responsive'

import '../assets/styles/Toolbox.css'

import CloseBtnIcon from '../components/page-icons/CloseBtnIcon.jsx'

import Apollo from '../assets/images/toolbox/apollo.svg'
import Babel from '../assets/images/toolbox/babel.svg'
import Bootstrap from '../assets/images/toolbox/bootstrap.svg'
import Codepen from '../assets/images/toolbox/codepen.svg'
import CSS3_icon from '../assets/images/toolbox/css3.svg'
import ESLint from '../assets/images/toolbox/eslint.svg'
import Git from '../assets/images/toolbox/git.svg'
import GitHub from '../assets/images/toolbox/github.svg'
import GitLab from '../assets/images/toolbox/gitlab.svg'
import GraphQL from '../assets/images/toolbox/graphql.svg'
import Handlebars from '../assets/images/toolbox/handlebars.svg'
import Heroku from '../assets/images/toolbox/heroku.svg'
import HTML5_icon from '../assets/images/toolbox/html5.svg'
import JavaScript from '../assets/images/toolbox/javascript.svg'
import Jest from '../assets/images/toolbox/jest.svg'
import JQuery from '../assets/images/toolbox/jquery.svg'
import JSON_icon from '../assets/images/toolbox/json.svg'
import Linkedin from '../assets/images/toolbox/linkedin.svg'
import Material from '../assets/images/toolbox/material.svg'
import MomentJS from '../assets/images/toolbox/momentjs.svg'
import MongoDB from '../assets/images/toolbox/mongodb.svg'
import MySQL from '../assets/images/toolbox/mysql.svg'
import Netlify from '../assets/images/toolbox/netlify.svg'
import NodeJS from '../assets/images/toolbox/nodejs.svg'
import Nodemon from '../assets/images/toolbox/nodemon.svg'
import NPM_icon from '../assets/images/toolbox/npm.svg'
import ReactJS from '../assets/images/toolbox/react.svg'
import Redux from '../assets/images/toolbox/redux.svg'
import Sequelize from '../assets/images/toolbox/sequelize.svg'
import Slack from '../assets/images/toolbox/slack.svg'
import StackOverflow from '../assets/images/toolbox/stackoverflow.svg'
import SVG_icon from '../assets/images/toolbox/svg.svg'
import Tailwind from '../assets/images/toolbox/tailwind.svg'
import Vite_icon from '../assets/images/toolbox/vite.svg'
import VSCode from '../assets/images/toolbox/vscode.svg'
import WebPack from '../assets/images/toolbox/webpack.svg'

const icons = [
	{ name: 'Apollo Icon', image: Apollo },
	{ name: 'Babel Icon', image: Babel },
	{ name: 'Bootstrap Icon', image: Bootstrap },
	{ name: 'Codepen Icon', image: Codepen },
	{ name: 'CSS3 Icon', image: CSS3_icon },
	{ name: 'ESLint Icon', image: ESLint },
	{ name: 'Git Icon', image: Git },
	{ name: 'GitHub Icon', image: GitHub },
	{ name: 'GitLab Icon', image: GitLab },
	{ name: 'GraphQL Icon', image: GraphQL },
	{ name: 'Handlebars Icon', image: Handlebars },
	{ name: 'Heroku Icon', image: Heroku },
	{ name: 'HTML5 Icon', image: HTML5_icon },
	{ name: 'JavaScript Icon', image: JavaScript },
	{ name: 'Jest Icon', image: Jest },
	{ name: 'JQuery Icon', image: JQuery },
	{ name: 'JSON Icon', image: JSON_icon },
	{ name: 'Linkedin Icon', image: Linkedin },
	{ name: 'Material Icon', image: Material },
	{ name: 'MomentJS Icon', image: MomentJS },
	{ name: 'MongoDB Icon', image: MongoDB },
	{ name: 'MySQL Icon', image: MySQL },
	{ name: 'Netlify Icon', image: Netlify },
	{ name: 'NodeJS Icon', image: NodeJS },
	{ name: 'Nodemon Icon', image: Nodemon },
	{ name: 'NPM Icon', image: NPM_icon },
	{ name: 'ReactJS Icon', image: ReactJS },
	{ name: 'Redux Icon', image: Redux },
	{ name: 'Sequelize Icon', image: Sequelize },
	{ name: 'Slack Icon', image: Slack },
	{ name: 'Stack Overflow Icon', image: StackOverflow },
	{ name: 'SVG Icon', image: SVG_icon },
	{ name: 'Tailwind Icon', image: Tailwind },
	{ name: 'Vite Icon', image: Vite_icon },
	{ name: 'VSCode Icon', image: VSCode },
	{ name: 'WebPack Icon', image: WebPack },
]

const Laptop = ({ children }) => {
	const isLaptop = useMediaQuery({ minWidth: 1280 })
	return isLaptop ? children : null
}

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1279 })
	return isTablet ? children : null
}

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 639 })
	return isMobile ? children : null
}

export default function Toolbox({ setShowToolbox }) {
	return (
		<>
			<Laptop>
				<main
					id='toolbox-laptop-layout'
					className='toolbox-background'>
					<div className='toolbox-window'>
						<div className='toolbox-close-btn'>
							<button
								onClick={() => {
									setShowToolbox(false)
								}}>
								<CloseBtnIcon
									iconSize='clamp(2.25rem, 1.417rem + 1.042vw, 2.5rem)'
									iconColor='var(--secondary)'
								/>
							</button>
						</div>
						<div className='toolbox-icons-container'>
							{icons.map((icon, index) => (
								<img
									className='toolbox-icons'
									src={icon.image}
									key={index}
									alt={icon.name}
								/>
							))}
						</div>
					</div>
				</main>
			</Laptop>

			<Tablet>
				<main
					id='toolbox-tablet-layout'
					className='toolbox-background'>
					<div className='toolbox-window'>
						<div className='toolbox-close-btn'>
							<button
								onClick={() => {
									setShowToolbox(false)
								}}>
								<CloseBtnIcon
									iconSize='clamp(2rem, 1.75rem + 0.625vw, 2.25rem)'
									iconColor='var(--secondary)'
								/>
							</button>
						</div>
						<div className='toolbox-icons-container'>
							{icons.map((icon, index) => (
								<img
									className='toolbox-icons'
									src={icon.image}
									key={index}
									alt={icon.name}
								/>
							))}
						</div>
					</div>
				</main>
			</Tablet>

			<Mobile>
				<main
					id='toolbox-mobile-layout'
					className='toolbox-background'>
					<div className='toolbox-window'>
						<div className='toolbox-close-btn'>
							<button
								onClick={() => {
									setShowToolbox(false)
								}}>
								<CloseBtnIcon
									iconSize='clamp(1.75rem, 1.429rem + 1.429vw, 2rem)'
									iconColor='var(--secondary)'
								/>
							</button>
						</div>
						<div className='toolbox-icons-container'>
							{icons.map((icon, index) => (
								<img
									className='toolbox-icons'
									src={icon.image}
									key={index}
									alt={icon.name}
								/>
							))}
						</div>
					</div>
				</main>
			</Mobile>
		</>
	)
}
