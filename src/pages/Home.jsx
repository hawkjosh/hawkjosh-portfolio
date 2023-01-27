import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/Home.css'

import myAvatar from '../assets/images/my-avatar.svg'
import LaptopIcon from '../components/page-icons/LaptopIcon.jsx'
import SuperheroIcon from '../components/page-icons/SuperheroIcon.jsx'
import TennesseeIcon from '../components/page-icons/TennesseeIcon.jsx'

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

export default function Home() {
	return (
		<>
			<Laptop>
				<section
					id='home-laptop'
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
							iconSize='clamp(12.5rem, -8.333rem + 26.042vw, 18.75rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize='clamp(12.5rem, -8.333rem + 26.042vw, 18.75rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='clamp(12.5rem, -8.333rem + 26.042vw, 18.75rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</section>
			</Laptop>

			<Tablet>
				<section
					id='home-tablet'
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
							iconSize='clamp(9.375rem, 6.25rem + 7.813vw, 12.5rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize='clamp(9.375rem, 6.25rem + 7.813vw, 12.5rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='clamp(9.375rem, 6.25rem + 7.813vw, 12.5rem)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</section>
			</Tablet>

			<Mobile>
				<section
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
				</section>
			</Mobile>
		</>
	)
}
