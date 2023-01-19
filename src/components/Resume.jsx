import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/Resume.css'

import ResumeIcon from '../components/svg-icons/ResumeIcon.jsx'

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

export default function Toolbox() {
	return (
		<>
			<Desktop>
				<section id='resume-desktop-layout'>
					<a
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'>
						<ResumeIcon
							iconSize='225px'
							iconColor='white'
						/>
					</a>
					{/* <a
						className='resume-open-btn'
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'
					>
						<ResumeIcon
							fill='white'
							width='48px'
						/>
						<div className='resume-btn-title'>My Resume</div>
					</a> */}
				</section>
			</Desktop>

			<Laptop>
				<section id='resume-laptop-layout'>
					<a
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'>
						<ResumeIcon
							iconSize='175px'
							iconColor='white'
						/>
					</a>
					{/* <a
						className='resume-open-btn'
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'>
						<ResumeIcon
							fill='white'
							width='42px'
						/>
						<div className='resume-btn-title'>My Resume</div>
					</a> */}
				</section>
			</Laptop>

			<Tablet>
				<section id='resume-tablet-layout'>
					<a
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'>
						<ResumeIcon
							iconSize='175px'
							iconColor='white'
						/>
					</a>
					{/* <a
						className='resume-open-btn'
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'>
						<ResumeIcon
							fill='white'
							width='36px'
						/>
						<div className='resume-btn-title'>My Resume</div>
					</a> */}
				</section>
			</Tablet>

			<Mobile>
				<section id='resume-mobile-layout'>
					<a
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'>
						<ResumeIcon
							iconSize='175px'
							iconColor='white'
						/>
					</a>
					{/* <a
						className='resume-open-btn'
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'>
						<ResumeIcon
							fill='white'
							width='32px'
						/>
						<div className='resume-btn-title'>My Resume</div>
					</a> */}
				</section>
			</Mobile>
		</>
	)
}
