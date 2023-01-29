import React from 'react'
import { useMediaQuery } from 'react-responsive'

import '../assets/styles/WorkSamples.css'

import RightArrowIcon from '../components/page-icons/RightArrowIcon.jsx'
import LeftArrowIcon from '../components/page-icons/LeftArrowIcon.jsx'

import socialNetwork from '../assets/images/work-samples/social_network.png'
import messageForum from '../assets/images/work-samples/message_forum.png'
import songSearch from '../assets/images/work-samples/song_search.png'
import noteTaker from '../assets/images/work-samples/note_taker.png'
import weatherDashboard from '../assets/images/work-samples/weather_dashboard.png'
import workdayScheduler from '../assets/images/work-samples/workday_scheduler.png'

const samples = [
	{
		index: '0',
		status: 'active',
		image: socialNetwork,
		title: 'Social Network',
		description: `An efficient and polished full-stack social network app that uses React.js on the client-side with Tailwind frameworks for styling. The server-side is built with Express.js including MongoDB as the ODM, GraphQL for runtime API's, and JWT for authentication.`,
		website: 'https://stayintouchnetwork.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Social-Network',
	},
	{
		index: '1',
		status: 'inactive',
		image: messageForum,
		title: 'Message Forum',
		description: `A unique and fun message forum app that follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the Express-Session npm package for authentication.`,
		website: 'https://stayintouchnetwork.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Social-Network',
	},
	{
		index: '2',
		status: 'inactive',
		image: songSearch,
		title: 'Song Search',
		description: `A small but powerful music search tool that uses third party API's to retrieve song information via RESTful CRUD routes.`,
		website: 'https://stayintouchnetwork.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Social-Network',
	},
	{
		index: '3',
		status: 'inactive',
		image: noteTaker,
		title: 'Note Taker',
		description: `A clean, crisp, and very usefuly note-taking app that uses an express.js backend that allows users to save and retrieve note data from a JSON file.`,
		website: 'https://stayintouchnetwork.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Social-Network',
	},
	{
		index: '4',
		status: 'inactive',
		image: weatherDashboard,
		title: 'Weather Dashboard',
		description: `A nifty weather widget app that runs in the browser and retrieves current as well as forectast weather info via the OpenWeatherMap API.`,
		website: 'https://stayintouchnetwork.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Social-Network',
	},
	{
		index: '5',
		status: 'inactive',
		image: workdayScheduler,
		title: 'Workday Scheduler',
		description: `A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.`,
		website: 'https://stayintouchnetwork.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Social-Network',
	},
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

export default function WorkSamples() {
	let activeIndex = 0

	const slides = document.getElementsByTagName('article')

	const handleLeftClick = () => {
		const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1

		const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)

		const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)

		currentSlide.dataset.status = 'after'

		nextSlide.dataset.status = 'becoming-active-from-before'

		setTimeout(() => {
			nextSlide.dataset.status = 'active'
			activeIndex = nextIndex
		})
	}

	const handleRightClick = () => {
		const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0

		const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)

		const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)

		currentSlide.dataset.status = 'before'

		nextSlide.dataset.status = 'becoming-active-from-after'

		setTimeout(() => {
			nextSlide.dataset.status = 'active'
			activeIndex = nextIndex
		})
	}

	return (
		<>
			<Laptop>
				<main id='work-samples-laptop'>
					{samples.map((sample) => (
						<article
							data-index={sample.index}
							data-status={sample.status}>
							<div className='article-image-section article-section' />
							<div className='article-info-section'>
								<div className='article-title-section article-section'>
									<h2>{sample.title}</h2>
								</div>
								<div className='article-description-section article-section'>
									<p>{sample.description}</p>
								</div>
								<div className='article-nav-section article-section'>
									<button
										className='article-nav-button'
										onClick={handleLeftClick}>
										<LeftArrowIcon
											iconSize='75px'
											iconColor='rgba(255, 255, 255, 0.75)'
										/>
									</button>
									<div
										className='article-nav-button'
										onClick={handleRightClick}>
										<RightArrowIcon
											iconSize='75px'
											iconColor='rgba(255, 255, 255, 0.75)'
										/>
									</div>
								</div>
							</div>
						</article>
					))}
				</main>
			</Laptop>

			<Tablet>
				<main
					id='work-samples-tablet'
					className='work-samples'>
					{samples.map((sample) => (
						<article
							data-index={sample.index}
							data-status={sample.status}>
							<div className='article-image-section article-section' />
							<div className='article-info-section'>
								<div className='article-title-section article-section'>
									<h2>{sample.title}</h2>
								</div>
								<div className='article-description-section article-section'>
									<p>{sample.description}</p>
								</div>
								<div className='article-nav-section article-section'>
									<button
										className='article-nav-button'
										onClick={handleLeftClick}>
										<LeftArrowIcon
											iconSize='75px'
											iconColor='rgba(255, 255, 255, 0.75)'
										/>
									</button>
									<div
										className='article-nav-button'
										onClick={handleRightClick}>
										<RightArrowIcon
											iconSize='75px'
											iconColor='rgba(255, 255, 255, 0.75)'
										/>
									</div>
								</div>
							</div>
						</article>
					))}
				</main>
			</Tablet>

			<Mobile>
				<main id='work-samples-mobile'>
					{samples.map((sample) => (
						<article
							data-index={sample.index}
							data-status={sample.status}>
							<img
								className='article-image-section'
								src={sample.image}
								alt='Work Sample Image'
							/>
							<div className='article-title-section'>
								<h2>{sample.title}</h2>
							</div>
							<div className='article-description-section'>
								<p>{sample.description}</p>
								<div className='btns-container'>
									<a
										className='link-btn'
										href={sample.website}
										target='_blank'
										rel='noreferrer'>
										Web App
									</a>
									<a
										className='link-btn'
										href={sample.github}
										target='_blank'
										rel='noreferrer'>
										GitHub Repo
									</a>
								</div>
							</div>
							<div className='article-nav-section'>
								<button
									className='article-nav-button'
									onClick={handleLeftClick}>
									<LeftArrowIcon
										iconSize='50px'
										iconColor='rgba(255, 255, 255, 0.75)'
									/>
								</button>
								<div
									className='article-nav-button'
									onClick={handleRightClick}>
									<RightArrowIcon
										iconSize='50px'
										iconColor='rgba(255, 255, 255, 0.75)'
									/>
								</div>
							</div>
						</article>
					))}
				</main>
			</Mobile>
		</>
	)
}
