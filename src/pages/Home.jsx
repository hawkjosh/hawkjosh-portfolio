import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/Home.css'

import myAvatar from '../assets/images/my-avatar.svg'
import LaptopIcon from '../components/svg-icons/LaptopIcon.jsx'
import FamilyIcon from '../components/svg-icons/FamilyIcon.jsx'
import TennesseeIcon from '../components/svg-icons/TennesseeIcon.jsx'

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
						src={myAvatar}
						alt='My Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors'>
						<LaptopIcon
							iconSize='275px'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<FamilyIcon
							iconSize='275px'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='275px'
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
						src={myAvatar}
						alt='My Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors'>
						<LaptopIcon
							iconSize='225px'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<FamilyIcon
							iconSize='225px'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='225px'
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
						src={myAvatar}
						alt='My Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors'>
						<LaptopIcon
							iconSize='195px'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<FamilyIcon
							iconSize='195px'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='195px'
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
						src={myAvatar}
						alt='My Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors'>
						<LaptopIcon
							iconSize='175px'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<FamilyIcon
							iconSize='175px'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize='175px'
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</section>
			</Mobile>
		</>
	)
}
