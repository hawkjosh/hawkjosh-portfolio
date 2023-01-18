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
					className='home-layout'
				>
					<img
						src={myAvatar}
						alt='Hawk Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors-container'>
						<div className='home-descriptor'>
							<LaptopIcon
								fill='var(--secondary)'
								width='150px'
							/>
							<div>Emerging Developer</div>
						</div>
						<div className='home-descriptor'>
							<FamilyIcon
								fill='var(--secondary)'
								width='150px'
							/>
							<div>Super Dad/Husband</div>
						</div>
						<div className='home-descriptor'>
							<TennesseeIcon
								fill='var(--secondary)'
								width='150px'
							/>
							<div>Vol For Life</div>
						</div>
					</div>
				</section>
			</Desktop>

			<Laptop>
				<section
					id='home-laptop-layout'
					className='home-layout'
				>
					<img
						src={myAvatar}
						alt='Hawk Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors-container'>
						<div className='home-descriptor'>
							<LaptopIcon
								fill='var(--secondary)'
								width='125px'
							/>
							<div>Emerging Developer</div>
						</div>
						<div className='home-descriptor'>
							<FamilyIcon
								fill='var(--secondary)'
								width='125px'
							/>
							<div>Super Dad/Husband</div>
						</div>
						<div className='home-descriptor'>
							<TennesseeIcon
								fill='var(--secondary)'
								width='125px'
							/>
							<div>Vol For Life</div>
						</div>
					</div>
				</section>
			</Laptop>

			<Tablet>
				<section
					id='home-tablet-layout'
					className='home-layout'
				>
					<img
						src={myAvatar}
						alt='Hawk Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors-container'>
						<div className='home-descriptor'>
							<LaptopIcon
								fill='var(--secondary)'
								width='100px'
							/>
							<div>Emerging Developer</div>
						</div>
						<div className='home-descriptor'>
							<FamilyIcon
								fill='var(--secondary)'
								width='100px'
							/>
							<div>Super Dad/Husband</div>
						</div>
						<div className='home-descriptor'>
							<TennesseeIcon
								fill='var(--secondary)'
								width='100px'
							/>
							<div>Vol For Life</div>
						</div>
					</div>
				</section>
			</Tablet>

			<Mobile>
				<section
					id='home-mobile-layout'
					className='home-layout'
				>
					<img
						src={myAvatar}
						alt='Hawk Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors-container'>
						<div className='home-descriptor'>
							<LaptopIcon
								fill='var(--secondary)'
								width='100px'
							/>
							<div>Emerging Developer</div>
						</div>
						<div className='home-descriptor'>
							<FamilyIcon
								fill='var(--secondary)'
								width='100px'
							/>
							<div>Super Dad/Husband</div>
						</div>
						<div className='home-descriptor'>
							<TennesseeIcon
								fill='var(--secondary)'
								width='100px'
							/>
							<div>Vol For Life</div>
						</div>
					</div>
				</section>
			</Mobile>
		</>
	)
}
