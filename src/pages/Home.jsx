import React from 'react'

import { LaptopIcon } from '../components/page-icons/LaptopIcon.jsx'
import { SuperheroIcon } from '../components/page-icons/SuperheroIcon.jsx'
import { TennesseeIcon } from '../components/page-icons/TennesseeIcon.jsx'

import myAvatar from '../assets/images/avatar-8KB.svg'

export const Home = () => {
	return (
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
				<LaptopIcon className='home-icon' />
				<SuperheroIcon className='home-icon' />
				<TennesseeIcon className='home-icon' />
			</div>
		</main>
	)
}
