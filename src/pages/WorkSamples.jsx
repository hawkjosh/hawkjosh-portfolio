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
		info: `An efficient and polished full-stack social network app that uses React.js on the client-side with Tailwind frameworks for styling. The server-side is built with Express.js including MongoDB as the ODM, GraphQL for runtime API's, and JWT for authentication.`,
		website: 'https://stayintouchnetwork.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Social-Network',
	},
	{
		index: '1',
		status: 'inactive',
		image: messageForum,
		title: 'Message Forum',
		info: `A unique and fun message forum app that follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the Express-Session npm package for authentication.`,
		website: 'https://glacial-tor-15581.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Message-Forum',
	},
	{
		index: '2',
		status: 'inactive',
		image: songSearch,
		title: 'Song Search',
		info: `A small but powerful music search tool that uses third party API's to retrieve song information via RESTful CRUD routes.`,
		website: 'https://hawkjosh.github.io/Song-Search',
		github: 'https://github.com/hawkjosh/Song-Search',
	},
	{
		index: '3',
		status: 'inactive',
		image: noteTaker,
		title: 'Note Taker',
		info: `A clean, crisp, and very usefuly note-taking app that uses an express.js backend that allows users to save and retrieve note data from a JSON file.`,
		website: 'https://secure-ravine-29968.herokuapp.com/',
		github: 'https://github.com/hawkjosh/Note-Taker',
	},
	{
		index: '4',
		status: 'inactive',
		image: weatherDashboard,
		title: 'Weather Dashboard',
		info: `A nifty weather widget app that runs in the browser and retrieves current as well as forectast weather info via the OpenWeatherMap API.`,
		website: 'https://hawkjosh.github.io/Weather-Dashboard',
		github: 'https://github.com/hawkjosh/Weather-Dashboard',
	},
	{
		index: '5',
		status: 'inactive',
		image: workdayScheduler,
		title: 'Workday Scheduler',
		info: `A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.`,
		website: 'https://hawkjosh.github.io/Workday-Scheduler',
		github: 'https://github.com/hawkjosh/Workday-Scheduler',
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

	const imgSlides = document.getElementsByClassName('image-container')
	const infoSlides = document.getElementsByClassName('info-container')
	const linkSlides = document.getElementsByClassName('link-container')

	const handleLeftClick = () => {
		const nextImgIndex =
			activeImgIndex - 1 >= 0 ? activeImgIndex - 1 : imgSlides.length - 1
		const nextInfoIndex =
			activeInfoIndex - 1 >= 0 ? activeInfoIndex - 1 : infoSlides.length - 1
		const nextLinkIndex =
			activeLinkIndex - 1 >= 0 ? activeLinkIndex - 1 : linkSlides.length - 1

		const currImgSlide = document.querySelector(
			`.image-container[data-index='${activeImgIndex}']`
		)
		const currInfoSlide = document.querySelector(
			`.info-container[data-index='${activeInfoIndex}']`
		)
		const currLinkSlide = document.querySelector(
			`.link-container[data-index='${activeLinkIndex}']`
		)

		const nextImgSlide = document.querySelector(
			`.image-container[data-index='${nextImgIndex}']`
		)
		const nextInfoSlide = document.querySelector(
			`.info-container[data-index='${nextInfoIndex}']`
		)
		const nextLinkSlide = document.querySelector(
			`.link-container[data-index='${nextLinkIndex}']`
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
			`.image-container[data-index='${activeImgIndex}']`
		)
		const currInfoSlide = document.querySelector(
			`.info-container[data-index='${activeInfoIndex}']`
		)
		const currLinkSlide = document.querySelector(
			`.link-container[data-index='${activeLinkIndex}']`
		)

		const nextImgSlide = document.querySelector(
			`.image-container[data-index='${nextImgIndex}']`
		)
		const nextInfoSlide = document.querySelector(
			`.info-container[data-index='${nextInfoIndex}']`
		)
		const nextLinkSlide = document.querySelector(
			`.link-container[data-index='${nextLinkIndex}']`
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

	return (
		<>
			<Mobile>
				<main id='work-samples-mobile'>
					<div className='image-section'>
						<div
							className='image-container'
							data-index='0'
							data-status='active'>
							<img
								src={socialNetwork}
								alt='Work Sample Image'
							/>
						</div>
						<div
							className='image-container'
							data-index='1'
							data-status='inactive'>
							<img
								src={messageForum}
								alt='Work Sample Image'
							/>
						</div>
						<div
							className='image-container'
							data-index='2'
							data-status='inactive'>
							<img
								src={songSearch}
								alt='Work Sample Image'
							/>
						</div>
						<div
							className='image-container'
							data-index='3'
							data-status='inactive'>
							<img
								src={noteTaker}
								alt='Work Sample Image'
							/>
						</div>
						<div
							className='image-container'
							data-index='4'
							data-status='inactive'>
							<img
								src={weatherDashboard}
								alt='Work Sample Image'
							/>
						</div>
						<div
							className='image-container'
							data-index='5'
							data-status='inactive'>
							<img
								src={workdayScheduler}
								alt='Work Sample Image'
							/>
						</div>
					</div>

					<div className='info-section'>
						<div
							className='info-container'
							data-index='0'
							data-status='active'>
							<h2>Social Network</h2>
							<p>
								An efficient and polished full-stack social network app that
								uses React.js on the client-side with Tailwind frameworks for
								styling. The server-side is built with Express.js including
								MongoDB as the ODM, GraphQL for runtime API's, and JWT for
								authentication.
							</p>
							<div
								className='link-container'
								data-index='0'
								data-status='active'>
								<a
									className='link-btn'
									href='https://stayintouchnetwork.herokuapp.com/'
									target='_blank'
									rel='noreferrer'>
									Web App
								</a>
								<a
									className='link-btn'
									href='https://github.com/hawkjosh/Social-Network'
									target='_blank'
									rel='noreferrer'>
									GitHub Repo
								</a>
							</div>
						</div>
						<div
							className='info-container'
							data-index='1'
							data-status='inactive'>
							<h2>Message Forum</h2>
							<p>
								A unique and fun message forum app that follows the MVC paradigm
								in its architectural structure, using Handlebars.js as the
								templating language, Sequelize as the ORM, and the
								Express-Session npm package for authentication.
							</p>
							<div
								className='link-container'
								data-index='1'
								data-status='inactive'>
								<a
									className='link-btn'
									href='https://glacial-tor-15581.herokuapp.com/'
									target='_blank'
									rel='noreferrer'>
									Web App
								</a>
								<a
									className='link-btn'
									href='https://github.com/hawkjosh/Message-Forum'
									target='_blank'
									rel='noreferrer'>
									GitHub Repo
								</a>
							</div>
						</div>
						<div
							className='info-container'
							data-index='2'
							data-status='inactive'>
							<h2>Song Search</h2>
							<p>
								A small but powerful music search tool that uses third party
								API's to retrieve song information via RESTful CRUD routes.
							</p>
							<div
								className='link-container'
								data-index='2'
								data-status='inactive'>
								<a
									className='link-btn'
									href='https://hawkjosh.github.io/Song-Search'
									target='_blank'
									rel='noreferrer'>
									Web App
								</a>
								<a
									className='link-btn'
									href='https://github.com/hawkjosh/Song-Search'
									target='_blank'
									rel='noreferrer'>
									GitHub Repo
								</a>
							</div>
						</div>
						<div
							className='info-container'
							data-index='3'
							data-status='inactive'>
							<h2>Note Taker</h2>
							<p>
								A clean, crisp, and very usefuly note-taking app that uses an
								express.js backend that allows users to save and retrieve note
								data from a JSON file.
							</p>
							<div
								className='link-container'
								data-index='3'
								data-status='inactive'>
								<a
									className='link-btn'
									href='https://secure-ravine-29968.herokuapp.com/'
									target='_blank'
									rel='noreferrer'>
									Web App
								</a>
								<a
									className='link-btn'
									href='https://github.com/hawkjosh/Note-Taker'
									target='_blank'
									rel='noreferrer'>
									GitHub Repo
								</a>
							</div>
						</div>
						<div
							className='info-container'
							data-index='4'
							data-status='inactive'>
							<h2>Weather Dashboard</h2>
							<p>
								A nifty weather widget app that runs in the browser and
								retrieves current as well as forectast weather info via the
								OpenWeatherMap API.
							</p>
							<div
								className='link-container'
								data-index='4'
								data-status='inactive'>
								<a
									className='link-btn'
									href='https://hawkjosh.github.io/Weather-Dashboard'
									target='_blank'
									rel='noreferrer'>
									Web App
								</a>
								<a
									className='link-btn'
									href='https://github.com/hawkjosh/Weather-Dashboard'
									target='_blank'
									rel='noreferrer'>
									GitHub Repo
								</a>
							</div>
						</div>
						<div
							className='info-container'
							data-index='5'
							data-status='inactive'>
							<h2>Workday Scheduler</h2>
							<p>
								A simple calendar/planner app that runs in the browser and
								features dynamically updated HTML and CSS powered by jQuery.
							</p>
							<div
								className='link-container'
								data-index='5'
								data-status='inactive'>
								<a
									className='link-btn'
									href='https://hawkjosh.github.io/Workday-Scheduler'
									target='_blank'
									rel='noreferrer'>
									Web App
								</a>
								<a
									className='link-btn'
									href='https://github.com/hawkjosh/Workday-Scheduler'
									target='_blank'
									rel='noreferrer'>
									GitHub Repo
								</a>
							</div>
						</div>
					</div>

					<div className='nav-section'>
						<div className='left-arrow-icon'>
							<LeftArrowIcon
								iconSize='50px'
								iconColor='white'
								onClick={handleLeftClick}
							/>
						</div>

						<div className='right-arrow-icon'>
							<RightArrowIcon
								iconSize='50px'
								iconColor='white'
								onClick={handleRightClick}
							/>
						</div>
					</div>
				</main>
			</Mobile>
		</>
	)
}
