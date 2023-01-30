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

	const imgSlides = document.getElementsByClassName('image-section')
	const infoSlides = document.getElementsByClassName('info-section')
	const linkSlides = document.getElementsByClassName('link-section')

	const handleLeftClick = () => {
		const nextImgIndex = activeImgIndex - 1 >= 0 ? activeImgIndex - 1 : imgSlides.length - 1
		const nextInfoIndex = activeInfoIndex - 1 >= 0 ? activeInfoIndex - 1 : infoSlides.length - 1
		const nextLinkIndex = activeLinkIndex - 1 >= 0 ? activeLinkIndex - 1 : linkSlides.length - 1

		const currImgSlide = document.querySelector(`.image-section[data-index='${activeImgIndex}']`)
		const currInfoSlide = document.querySelector(`.info-section[data-index='${activeInfoIndex}']`)
		const currLinkSlide = document.querySelector(`.link-section[data-index='${activeLinkIndex}']`)

		const nextImgSlide = document.querySelector(`.image-section[data-index='${nextImgIndex}']`)
		const nextInfoSlide = document.querySelector(`.info-section[data-index='${nextInfoIndex}']`)
		const nextLinkSlide = document.querySelector(`.link-section[data-index='${nextLinkIndex}']`)

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
		const nextImgIndex = activeImgIndex + 1 <= imgSlides.length - 1 ? activeImgIndex + 1 : 0
		const nextInfoIndex = activeInfoIndex + 1 <= infoSlides.length - 1 ? activeInfoIndex + 1 : 0
		const nextLinkIndex = activeLinkIndex + 1 <= linkSlides.length - 1 ? activeLinkIndex + 1 : 0

		const currImgSlide = document.querySelector(`.image-section[data-index='${activeImgIndex}']`)
		const currInfoSlide = document.querySelector(`.info-section[data-index='${activeInfoIndex}']`)
		const currLinkSlide = document.querySelector(`.link-section[data-index='${activeLinkIndex}']`)

		const nextImgSlide = document.querySelector(`.image-section[data-index='${nextImgIndex}']`)
		const nextInfoSlide = document.querySelector(`.info-section[data-index='${nextInfoIndex}']`)
		const nextLinkSlide = document.querySelector(`.link-section[data-index='${nextLinkIndex}']`)

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
					{/* <div> */}
						<div style={{ flexBasis: '50%', display: 'flex' }}>
							<LeftArrowIcon
								iconSize='50px'
								iconColor='white'
								onClick={handleLeftClick}
							/>
							{samples.map((sample) => (
								<div
									className='image-section'
									key={sample.index}
									data-index={sample.index}
									data-status={sample.status}
									>
									<img src={sample.image} alt="Work Sample Image" />
								</div>
							))}
							<RightArrowIcon
								iconSize='50px'
								iconColor='white'
								onClick={handleRightClick}
							/>
						</div>
						<div style={{flex: 1}}>
							{samples.map((sample) => (
								<div
									className='info-section'
									key={sample.index}
									data-index={sample.index}
									data-status={sample.status}
									>
									<h2>{sample.title}</h2>
									<p>{sample.info}</p>
								</div>
							))}
						</div>
					{/* </div> */}
					<div style={{flexBasis: '10%', width: '100%'}}>
						{samples.map((sample) => (
							<div
								className='link-section'
								key={sample.index}
								data-index={sample.index}
								data-status={sample.status}
								>
								<div className='link-btn'>
									<a
										href={sample.website}
										target='_blank'
										rel='noreferrer'
										>Web App
									</a>
								</div>
								<div className='link-btn'>
									<a
										href={sample.github}
										target='_blank'
										rel='noreferrer'
										>GitHub Repo
									</a>
								</div>
							</div>
						))}
					</div>
				</main>
			</Mobile>
		</>
	)
}
