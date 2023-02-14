import React, { Fragment } from 'react'
import { useMediaQuery } from 'react-responsive'

import '../assets/styles/Home.css'

import myAvatar from '../assets/images/my-avatar.svg'
import LaptopIcon from '../components/page-icons/LaptopIcon.jsx'
import SuperheroIcon from '../components/page-icons/SuperheroIcon.jsx'
import TennesseeIcon from '../components/page-icons/TennesseeIcon.jsx'
// import FamilyIcon from '../components/page-icons/FamilyIcon.jsx'

export default function Home() {
	const isMobile = useMediaQuery({ maxWidth: 639 })

	return (
		<Fragment>
			{isMobile ? (
				<main
					id='home-mobile'
					className='home-layout'>
					<img
						className='home-avatar'
						src={myAvatar}
						alt='My Avatar'
					/>

					<div className='home-divider-container'>
						<hr className='home-divider' />
					</div>

					<div className='home-icons-container'>
						<LaptopIcon className='home-icon laptop-icon' />
						<SuperheroIcon className='home-icon superhero-icon' />
						<TennesseeIcon className='home-icon tennessee-icon' />
					</div>
				</main>
			) : (
				<main className='home-layout'>
					<img
						className='home-avatar'
						src={myAvatar}
						alt='My Avatar'
					/>

					<div className='home-divider-container'>
						<hr className='home-divider' />
					</div>

					<div className='home-icons-container'>
						<LaptopIcon className='home-icon laptop-icon' />
						<SuperheroIcon className='home-icon superhero-icon' />
						<TennesseeIcon className='home-icon tennessee-icon' />
					</div>
				</main>
			)}
		</Fragment>
	)
}
