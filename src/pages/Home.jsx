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

const homeDesClampSm = 'clamp(10.938rem, 7.956rem + 12.723vw, 14.063rem)'

const homeDesClampLg = 'clamp(10.938rem, 4.5rem + 13.412vw, 18.75rem)'

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
							iconSize={homeDesClampLg}
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize={homeDesClampLg}
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize={homeDesClampLg}
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
							iconSize={homeDesClampLg}
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize={homeDesClampLg}
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize={homeDesClampLg}
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
							iconSize={homeDesClampLg}
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize={homeDesClampLg}
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize={homeDesClampLg}
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
							iconSize={homeDesClampSm}
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<SuperheroIcon
							iconSize={homeDesClampSm}
							iconColor='var(--secondary)'
							fontColor='white'
						/>
						<TennesseeIcon
							iconSize={homeDesClampSm}
							iconColor='var(--secondary)'
							fontColor='white'
						/>
					</div>
				</section>
			</Mobile>
		</>
	)
}
