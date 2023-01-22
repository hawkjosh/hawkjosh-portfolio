import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/Home.css'

import myAvatar from '../assets/images/my-avatar.svg'
import LaptopIcon from '../components/page-icons/LaptopIcon.jsx'
import SuperheroIcon from '../components/page-icons/SuperheroIcon.jsx'
import TennesseeIcon from '../components/page-icons/TennesseeIcon.jsx'

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 1440 })
	return isDesktop ? children : null
}

const Laptop = ({ children }) => {
	const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 })
	return isLaptop ? children : null
}

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
	return isTablet ? children : null
}

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	return isMobile ? children : null
}

export default function Home() {
	return (
		<>
			<Desktop>
				<section
					id='home-desktop-layout'
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
							iconSize='clamp(225px, 18%, 275px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize='clamp(225px, 18%, 275px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='clamp(225px, 18%, 275px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</section>
			</Desktop>

			<Laptop>
				<section
					id='home-laptop-layout'
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
							iconSize='clamp(195px, 22%, 225px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize='clamp(195px, 22%, 225px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='clamp(195px, 22%, 225px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</section>
			</Laptop>

			<Tablet>
				<section
					id='home-tablet-layout'
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
							iconSize='clamp(150px, 22.5%, 195px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize='clamp(150px, 22.5%, 195px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='clamp(150px, 22.5%, 195px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</section>
			</Tablet>

			<Mobile>
				<section
					id='home-mobile-layout'
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
							iconSize='clamp(175px, 50%, 225px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize='clamp(175px, 50%, 225px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='clamp(175px, 50%, 225px)'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</section>
			</Mobile>
		</>
	)
}
