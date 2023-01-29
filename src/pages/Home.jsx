import React from 'react'
import { useMediaQuery } from 'react-responsive'

import '../assets/styles/Home.css'

import myAvatar from '../assets/images/my-avatar.svg'
import LaptopIcon from '../components/page-icons/LaptopIcon.jsx'
import SuperheroIcon from '../components/page-icons/SuperheroIcon.jsx'
import TennesseeIcon from '../components/page-icons/TennesseeIcon.jsx'

export default function Home() {
	const isMobile = useMediaQuery({ maxWidth: 639 })

	return (
		<>
			{isMobile ? (
				<main
					id='home-mobile'
					className='home-layout'>
					<img
						className='home-avatar'
						src={myAvatar}
						alt='My Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors'>
						<LaptopIcon
							iconSize='clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize='clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</main>
			) : (
				<main className='home-layout'>
					<img
						className='home-avatar'
						src={myAvatar}
						alt='My Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors'>
						<LaptopIcon
							iconSize='clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize='clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</main>
			)}
		</>
	)
}
