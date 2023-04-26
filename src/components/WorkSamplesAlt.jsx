import React, { Fragment, useState } from 'react'

import noteTaker from '../assets/images/work-samples/note_taker-23KB.png'
import weatherDashboard from '../assets/images/work-samples/weather_dashboard-55KB.png'
import workdayScheduler from '../assets/images/work-samples/workday_scheduler-25KB.png'
import courseTracker from '../assets/images/work-samples/course_tracker-25KB.png'
import miniGames from '../assets/images/work-samples/mini_games-23KB.png'
import songSearch from '../assets/images/work-samples/song_search-61KB.png'

export const WorkSamplesAlt = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const items = [
		{
			index: 0,
			image: noteTaker,
			title: 'Note Taker',
			info: `A clean, crisp, and very usefuly note-taking app that uses localStorage to save and retrieve note data. BONUS: Check out an alternate version of this app at the link below that uses an express.js backend to save and retrieve notes from a JSON file.`,
			website: 'https://hawkjosh-note-taker.netlify.app/',
			github: 'https://github.com/hawkjosh/note-taker-json',
			bonus: 'https://hawkjosh-note-taker.onrender.com',
		},
		{
			index: 1,
			image: weatherDashboard,
			title: 'Weather Dashboard',
			info: `A nifty weather widget app that runs in the browser and retrieves current as well as forectast weather info via the WeatherAPI developer API.`,
			website: 'https://hawkjosh-weather-dashboard.onrender.com',
			github: 'https://github.com/hawkjosh/weather-dashboard-update',
			bonus: null,
		},
		{
			index: 2,
			image: workdayScheduler,
			title: 'Workday Scheduler',
			info: `A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.`,
			website: 'https://hawkjosh-workday-scheduler.netlify.app/',
			github: 'https://github.com/hawkjosh/workday-scheduler-update',
			bonus: null,
		},
		{
			index: 3,
			image: courseTracker,
			title: 'Course Tracker',
			info: `A somewhat niche but very useful app that keeps track of online developer courses that you have purchased or have your eye on purchasing. It uses Netlify Functions to connect with an Airtable database where the user's information is stored.`,
			website: 'https://hawkjosh-course-tracker.netlify.app',
			github: 'https://github.com/hawkjosh/course-tracker',
			bonus: null,
		},
		{
			index: 4,
			image: miniGames,
			title: 'Mini Games',
			info: `A fun and entertaining way to kill some time, this app is a collection of some classic games built with the basics - HTML, CSS, and JavaScript.`,
			website: 'https://hawkjosh-mini-games.netlify.app',
			github: 'https://github.com/hawkjosh/mini-games',
			bonus: null,
		},
		{
			index: 5,
			image: songSearch,
			title: 'Song Search',
			info: `A small but powerful music search tool that uses third party API's to retrieve song information via RESTful CRUD routes.`,
			website: 'https://hawkjosh.github.io/Song-Search',
			github: 'https://github.com/hawkjosh/Song-Search',
			bonus: null,
		},
	]

	const updateIndex = (newIndex) => {
		setActiveIndex(newIndex)
	}

	const imageStyle = {
		backgroundColor: 'red',
		border: '2px solid lime'
	}

	return (
		<div className='wsa-container'>
			<div className='wsa-image-wrapper'>
				{items.map((item) => {
					return (
						<div
							className={
								item.index === activeIndex ? 'wsa-panel active' : 'wsa-panel'
							}
							key={item.index}
							style={{ backgroundImage: `url(${item.image})` }}
							onClick={() => updateIndex(item.index)}></div>
					)
				})}
			</div>
			{items.map((item) => {
				return (
					<div
						className={
							item.index === activeIndex
								? 'wsa-info-wrapper active'
								: 'wsa-info-wrapper'
						}
						key={item.index}>
						<h2 className='wsa-info-title'>{item.title}</h2>
						<p className='wsa-info-description'>{item.info}</p>
						<div className='wsa-info-link-wrapper'>
							<a
								className='wsa-info-link'
								href={item.website}>
								Web App
							</a>
							<a
								className='wsa-info-link'
								href={item.github}>
								Github Repo
							</a>
							{item.bonus !== null && (
								<a
									className='wsa-info-link'
									href={item.bonus}>
									Bonus
								</a>
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}
