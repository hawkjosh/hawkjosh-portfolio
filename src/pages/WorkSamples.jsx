import React, { useState } from 'react'

import { WorkSamplesInfo } from '../components/WorkSamplesInfo.jsx'
import { WorkSamplesLink } from '../components/WorkSamplesLink.jsx'

import { RightArrowIcon } from '../components/page-icons/RightArrowIcon.jsx'
import { LeftArrowIcon } from '../components/page-icons/LeftArrowIcon.jsx'

import songSearch from '../assets/images/work-samples/song_search-61KB.png'
import songSearchUpdate from '../assets/images/work-samples/song_search_update.png'
import noteTaker from '../assets/images/work-samples/note_taker-23KB.png'
import weatherDashboard from '../assets/images/work-samples/weather_dashboard-86KB.png'
import workdayScheduler from '../assets/images/work-samples/workday_scheduler-25KB.png'
import courseTracker from '../assets/images/work-samples/course_tracker-25KB.png'
import miniGames from '../assets/images/work-samples/mini_games-23KB.png'

export const WorkSamples = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const items = [
		{
			index: 0,
			image: noteTaker,
			alt: 'Note Taker Image',
			title: 'Note Taker',
			info: `A clean, crisp, and very usefuly note-taking app that uses localStorage to save and retrieve note data. BONUS: Check out an alternate version of this app at the link below that uses an express.js backend to save and retrieve notes from a JSON file.`,
			website: 'https://hawkjosh-note-taker.netlify.app/',
			github: 'https://github.com/hawkjosh/note-taker-json',
			bonus: 'https://hawkjosh-note-taker.onrender.com',
		},
		{
			index: 1,
			image: weatherDashboard,
			alt: 'Weather Dashboard Image',
			title: 'Weather Dashboard',
			info: `A nifty weather widget app that runs in the browser and retrieves current as well as forectast weather info via the WeatherAPI developer API.`,
			website: 'https://hawkjosh-weather-dashboard.onrender.com',
			github: 'https://github.com/hawkjosh/weather-dashboard-update',
			bonus: null,
		},
		{
			index: 2,
			image: workdayScheduler,
			alt: 'Workday Scheduler Image',
			title: 'Workday Scheduler',
			info: `A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.`,
			website: 'https://hawkjosh-workday-scheduler.netlify.app/',
			github: 'https://github.com/hawkjosh/workday-scheduler-update',
			bonus: null,
		},
		{
			index: 3,
			image: courseTracker,
			alt: 'Course Tracker Image',
			title: 'Course Tracker',
			info: `A somewhat niche but very useful app that keeps track of online developer courses that you have purchased or have your eye on purchasing. It uses Netlify Functions to connect with an Airtable database where the user's information is stored.`,
			website: 'https://hawkjosh-course-tracker.netlify.app',
			github: 'https://github.com/hawkjosh/course-tracker',
			bonus: null,
		},
		{
			index: 4,
			image: miniGames,
			alt: 'Mini Games Image',
			title: 'Mini Games',
			info: `A fun and entertaining way to kill some time, this app is a collection of some classic games built with the basics - HTML, CSS, and JavaScript.`,
			website: 'https://hawkjosh-mini-games.netlify.app',
			github: 'https://github.com/hawkjosh/mini-games',
			bonus: null,
		},
		{
			index: 5,
			image: songSearchUpdate,
			alt: 'Song Search Image',
			title: 'Song Search',
			info: `A small but powerful music search tool that uses third party API's to retrieve song information via RESTful CRUD routes.`,
			website: 'https://hawkjosh.github.io/Song-Search',
			github: 'https://github.com/hawkjosh/Song-Search',
			bonus: null,
		},
	]

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = items.length - 1
		} else if (newIndex >= items.length) {
			newIndex = 0
		}

		setActiveIndex(newIndex)
	}

	const handleLeftClick = () => {
		updateIndex(activeIndex - 1)
	}

	const handleRightClick = () => {
		updateIndex(activeIndex + 1)
	}

	return (
		<div className='work-samples-container'>
			<div className='image-section'>
				{items.map((item) => {
					return (
						<div
							className='image'
							key={item.index}
							data-status={item.index === activeIndex ? 'active' : 'inactive'}
							style={{ backgroundImage: `url(${item.image})` }}></div>
					)
				})}
			</div>

			<div className='info-section'>
				{items.map((item) => {
					return (
						<div
							className='info-wrapper'
							key={item.index}
							data-status={item.index === activeIndex ? 'active' : 'inactive'}>
							<WorkSamplesInfo item={item} />
						</div>
					)
				})}
			</div>

			<div className='link-section'>
				{items.map((item) => {
					return (
						<div
							className='link-wrapper'
							key={item.index}
							data-status={item.index === activeIndex ? 'active' : 'inactive'}>
							<WorkSamplesLink item={item} />
						</div>
					)
				})}
			</div>

			<div className='nav-section'>
				<div
					className='arrow-icon-wrapper'
					onClick={handleLeftClick}>
					<LeftArrowIcon className='arrow-icon' />
				</div>

				<div
					className='arrow-icon-wrapper'
					onClick={handleRightClick}>
					<RightArrowIcon className='arrow-icon' />
				</div>
			</div>
		</div>
	)
}
