import React from 'react'
import { useMediaQuery } from 'react-responsive'

import '../assets/styles/WorkSamplesMap.css'

import RightArrowIcon from '../components/page-icons/RightArrowIcon.jsx'
import LeftArrowIcon from '../components/page-icons/LeftArrowIcon.jsx'
import socialNetwork from '../assets/images/work-samples/social_network.png'
import messageForum from '../assets/images/work-samples/message_forum.png'
import songSearch from '../assets/images/work-samples/song_search.png'
import noteTaker from '../assets/images/work-samples/note_taker.png'
import weatherDashboard from '../assets/images/work-samples/weather_dashboard.png'
import workdayScheduler from '../assets/images/work-samples/workday_scheduler.png'
import courseTracker from '../assets/images/work-samples/course_tracker.png'
import miniGames from '../assets/images/work-samples/mini_games.png'

const bonusLink = () => (
	<a href='https://hawkjosh-note-taker.onrender.com' target='_blank' rel='noreferrer'>HERE</a>
)

const samples = [
	{
		index: '0',
		status: 'active',
		imageClass: 'image-container1',
		image: socialNetwork,
		alt: 'Social Network Image',
		infoClass: 'info-container1',
		title: 'Social Network',
		info: `An efficient and polished full-stack social network app that uses React.js on the client-side with Tailwind frameworks for styling. The server-side is built with Express.js including MongoDB as the ODM, GraphQL for runtime API's, and JWT for authentication.`,
		linkClass: 'link-container1',
		website: 'https://stayintouchnetwork.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Social-Network',
	},
	{
		index: '1',
		status: 'inactive',
		imageClass: 'image-container2',
		image: messageForum,
		alt: 'Message Forum Image',
		infoClass: 'info-container2',
		title: 'Message Forum',
		info: `A unique and fun message forum app that follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the Express-Session npm package for authentication.`,
		linkClass: 'link-container2',
		website: 'https://glacial-tor-15581.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Message-Forum',
	},
	{
		index: '2',
		status: 'inactive',
		imageClass: 'image-container3',
		image: songSearch,
		alt: 'Song Search Image',
		infoClass: 'info-container3',
		title: 'Song Search',
		info: `A small but powerful music search tool that uses third party API's to retrieve song information via RESTful CRUD routes.`,
		linkClass: 'link-container3',
		website: 'https://hawkjosh.github.io/Song-Search',
		github: 'https://github.com/hawkjosh/Song-Search',
	},
	{
		index: '3',
		status: 'inactive',
		imageClass: 'image-container4',
		image: noteTaker,
		alt: 'Note Taker Image',
		infoClass: 'info-container4',
		title: 'Note Taker',
		info: `A clean, crisp, and very usefuly note-taking app that uses localStorage to save and retrieve note data. BONUS: Check out an alternate version of this app at https://hawkjosh-note-taker.onrender.com that uses an express.js backend to save and retrieve notes from a JSON file.`,
		linkClass: 'link-container4',
		website: 'https://hawkjosh-note-taker.netlify.app/',
		github: 'https://github.com/hawkjosh/vite-note-taker',
	},
	{
		index: '4',
		status: 'inactive',
		imageClass: 'image-container5',
		image: weatherDashboard,
		alt: 'Weather Dashboard Image',
		infoClass: 'info-container5',
		title: 'Weather Dashboard',
		info: `A nifty weather widget app that runs in the browser and retrieves current as well as forectast weather info via the OpenWeatherMap API.`,
		linkClass: 'link-container5',
		website: 'https://hawkjosh.github.io/Weather-Dashboard',
		github: 'https://github.com/hawkjosh/Weather-Dashboard',
	},
	{
		index: '5',
		status: 'inactive',
		imageClass: 'image-container6',
		image: workdayScheduler,
		alt: 'Workday Scheduler Image',
		infoClass: 'info-container6',
		title: 'Workday Scheduler',
		info: `A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.`,
		linkClass: 'link-container6',
		website: 'https://hawkjosh.github.io/Workday-Scheduler',
		github: 'https://github.com/hawkjosh/Workday-Scheduler',
	},
	{
		index: '6',
		status: 'inactive',
		imageClass: 'image-container7',
		image: courseTracker,
		alt: 'Course Tracker Image',
		infoClass: 'info-container7',
		title: 'Course Tracker',
		info: `A somewhat niche but very useful app that keeps track of online developer courses that you have purchased or have your eye on purchasing. It uses Netlify Functions to connect with an Airtable database where the user's information is stored.`,
		linkClass: 'link-container7',
		website: 'https://hawkjosh-course-tracker.netlify.app',
		github: 'https://github.com/hawkjosh/course-tracker',
	},
	{
		index: '7',
		status: 'inactive',
		imageClass: 'image-container8',
		image: miniGames,
		alt: 'Mini Games Image',
		infoClass: 'info-container8',
		title: 'Mini Games',
		info: `A fun and entertaining way to kill some time, this app is a collection of some classic games built with the basics - HTML, CSS, and JavaScript.`,
		linkClass: 'link-container8',
		website: 'https://hawkjosh-mini-games.netlify.app',
		github: 'https://github.com/hawkjosh/mini-games',
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
	let activeImgIndex = 0
	let activeInfoIndex = 0
	let activeLinkIndex = 0

	const imgSlides = document.getElementsByClassName('image-transition')
	const infoSlides = document.getElementsByClassName('info-transition')
	const linkSlides = document.getElementsByClassName('link-transition')

	const handleLeftClick = () => {
		const nextImgIndex =
			activeImgIndex - 1 >= 0 ? activeImgIndex - 1 : imgSlides.length - 1
		const nextInfoIndex =
			activeInfoIndex - 1 >= 0 ? activeInfoIndex - 1 : infoSlides.length - 1
		const nextLinkIndex =
			activeLinkIndex - 1 >= 0 ? activeLinkIndex - 1 : linkSlides.length - 1


		const currImgSlide = document.querySelector(
			`.image-transition[data-index='${activeImgIndex}']`
		)
		const currInfoSlide = document.querySelector(
			`.info-transition[data-index='${activeInfoIndex}']`
		)
		const currLinkSlide = document.querySelector(
			`.link-transition[data-index='${activeLinkIndex}']`
		)

		const nextImgSlide = document.querySelector(
			`.image-transition[data-index='${nextImgIndex}']`
		)
		const nextInfoSlide = document.querySelector(
			`.info-transition[data-index='${nextInfoIndex}']`
		)
		const nextLinkSlide = document.querySelector(
			`.link-transition[data-index='${nextLinkIndex}']`
		)

		currImgSlide.dataset.status = 'inactive'
		currInfoSlide.dataset.status = 'inactive'
		currLinkSlide.dataset.status = 'inactive'

		setTimeout(() => {
			nextImgSlide.dataset.status = 'active'
			nextInfoSlide.dataset.status = 'active'
			nextLinkSlide.dataset.status = 'active'
			activeImgIndex = nextImgIndex
			activeInfoIndex = nextInfoIndex
			activeLinkIndex = nextLinkIndex
		})
	}

	const handleRightClick = () => {
		const nextImgIndex =
			activeImgIndex + 1 <= imgSlides.length - 1 ? activeImgIndex + 1 : 0
		const nextInfoIndex =
			activeInfoIndex + 1 <= infoSlides.length - 1 ? activeInfoIndex + 1 : 0
		const nextLinkIndex =
			activeLinkIndex + 1 <= linkSlides.length - 1 ? activeLinkIndex + 1 : 0


		const currImgSlide = document.querySelector(
			`.image-transition[data-index='${activeImgIndex}']`
		)
		const currInfoSlide = document.querySelector(
			`.info-transition[data-index='${activeInfoIndex}']`
		)
		const currLinkSlide = document.querySelector(
			`.link-transition[data-index='${activeLinkIndex}']`
		)

		const nextImgSlide = document.querySelector(
			`.image-transition[data-index='${nextImgIndex}']`
		)
		const nextInfoSlide = document.querySelector(
			`.info-transition[data-index='${nextInfoIndex}']`
		)
		const nextLinkSlide = document.querySelector(
			`.link-transition[data-index='${nextLinkIndex}']`
		)

		currImgSlide.dataset.status = 'inactive'
		currInfoSlide.dataset.status = 'inactive'
		currLinkSlide.dataset.status = 'inactive'

		setTimeout(() => {
			nextImgSlide.dataset.status = 'active'
			nextInfoSlide.dataset.status = 'active'
			nextLinkSlide.dataset.status = 'active'
			activeImgIndex = nextImgIndex
			activeInfoIndex = nextInfoIndex
			activeLinkIndex = nextLinkIndex
		})
	}

	const isLargeScreen = useMediaQuery({ minWidth: 1024 })

	return (
		<>
			<Laptop>
				<main id='work-samples-laptop'>

					<div className='sample-section'>
						<div className='image-section'>
							{samples.map((sample) => (
								<div
									key={sample.index}
									className={`${sample.imageClass} image-transition`}
									data-index={sample.index}
									data-status={sample.status}>
									<img
										src={sample.image}
										alt={sample.alt}
									/>
								</div>
							))}
						</div>
	
						<div className='info-nav-vertical'>
							<div className='info-link-vertical'>
								<div className='info-section'>
									{samples.map((sample) => (
										<div
											key={sample.index}
											className={`${sample.infoClass} info-transition`}
											data-index={sample.index}
											data-status={sample.status}>
											<h2>{sample.title}</h2>
											<p>{sample.info}</p>
										</div>
									))}
								</div>
			
								<div className='link-section'>
									{samples.map((sample) => (
										<div
											key={sample.index}
											className={`${sample.linkClass} link-transition`}
											data-index={sample.index}
											data-status={sample.status}>
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
									))}
								</div>
							</div>

							<div className='nav-section'>
								<div
								className='left-arrow-icon'
								onClick={handleLeftClick}>
									<LeftArrowIcon
										iconSize='75px'
										iconColor='white'
									/>
								</div>

								<div className='right-arrow-icon'
								onClick={handleRightClick}>
									<RightArrowIcon
										iconSize='75px'
										iconColor='white'
									/>
								</div>
							</div>
						</div>
					</div>
				</main>
			</Laptop>

			<Tablet>
				{isLargeScreen ? (
					<main id='work-samples-tablet-large'>

						<div className='image-nav-horizontal'>
							<div className='image-section'>
								{samples.map((sample) => (
									<div
										key={sample.index}
										className={`${sample.imageClass} image-transition`}
										data-index={sample.index}
										data-status={sample.status}>
										<img
											src={sample.image}
											alt={sample.alt}
										/>
									</div>
								))}
							</div>

							<div className='nav-section'>
								<div
								className='left-arrow-icon'
								onClick={handleLeftClick}>
									<LeftArrowIcon
										iconSize='75px'
										iconColor='white'
									/>
								</div>

								<div className='right-arrow-icon'
								onClick={handleRightClick}>
									<RightArrowIcon
										iconSize='75px'
										iconColor='white'
									/>
								</div>
							</div>
						</div>
		
						<div className='info-link-horizontal'>
							<div className='info-section'>
								{samples.map((sample) => (
									<div
										key={sample.index}
										className={`${sample.infoClass} info-transition`}
										data-index={sample.index}
										data-status={sample.status}>
										<h2>{sample.title}</h2>
										<p>{sample.info}</p>
									</div>
								))}
							</div>
		
							<div className='link-section'>
								{samples.map((sample) => (
									<div
										key={sample.index}
										className={`${sample.linkClass} link-transition`}
										data-index={sample.index}
										data-status={sample.status}>
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
								))}
							</div>
						</div>

					</main>
					) : (
					<main id='work-samples-tablet-small'>

						<div className='sample-section'>
							<div className='image-section'>
								{samples.map((sample) => (
									<div
										key={sample.index}
										className={`${sample.imageClass} image-transition`}
										data-index={sample.index}
										data-status={sample.status}>
										<img
											src={sample.image}
											alt={sample.alt}
										/>
									</div>
								))}
							</div>
		
							<div className='info-section'>
								{samples.map((sample) => (
									<div
										key={sample.index}
										className={`${sample.infoClass} info-transition`}
										data-index={sample.index}
										data-status={sample.status}>
										<h2>{sample.title}</h2>
										<p>{sample.info}</p>
									</div>
								))}
							</div>
		
							<div className='link-section'>
								{samples.map((sample) => (
									<div
										key={sample.index}
										className={`${sample.linkClass} link-transition`}
										data-index={sample.index}
										data-status={sample.status}>
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
								))}
							</div>
						</div>

						<div className='nav-section'>
							<div
							className='left-arrow-icon'
							onClick={handleLeftClick}>
								<LeftArrowIcon
									iconSize='75px'
									iconColor='white'
								/>
							</div>

							<div className='right-arrow-icon'
							onClick={handleRightClick}>
								<RightArrowIcon
									iconSize='75px'
									iconColor='white'
								/>
							</div>
						</div>
					</main>
				)}
			</Tablet>

			<Mobile>
				<main id='work-samples-mobile'>

					<div className='sample-section'>
						<div className='image-section'>
							{samples.map((sample) => (
								<div
									key={sample.index}
									className={`${sample.imageClass} image-transition`}
									data-index={sample.index}
									data-status={sample.status}>
									<img
										src={sample.image}
										alt={sample.alt}
									/>
								</div>
							))}
						</div>
	
						<div className='info-section'>
							{samples.map((sample) => (
								<div
									key={sample.index}
									className={`${sample.infoClass} info-transition`}
									data-index={sample.index}
									data-status={sample.status}>
									<h2>{sample.title}</h2>
									<p>{sample.info}</p>
								</div>
							))}
						</div>
	
						<div className='link-section'>
							{samples.map((sample) => (
								<div
									key={sample.index}
									className={`${sample.linkClass} link-transition`}
									data-index={sample.index}
									data-status={sample.status}>
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
							))}
						</div>
					</div>

					<div className='nav-section'>
						<div
						className='left-arrow-icon'
						onClick={handleLeftClick}>
							<LeftArrowIcon
								iconSize='clamp(3.125rem, 1.116rem + 8.929vw, 4.688rem)'
								iconColor='white'
							/>
						</div>

						<div className='right-arrow-icon'
						onClick={handleRightClick}>
							<RightArrowIcon
								iconSize='clamp(3.125rem, 1.116rem + 8.929vw, 4.688rem)'
								iconColor='white'
							/>
						</div>
					</div>
				</main>
			</Mobile>
		</>
	)
}
