import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/Resume.css'

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
						className='resume-open-btn'
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'
					>
						<svg
							width='48px'
							height='auto'
							viewBox='0 0 1024 1024'
							fill='white'
						>
							<path d='M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z' />
						</svg>
						<div className='resume-btn-title'>My Resume</div>
					</a>
				</section>
			</Desktop>

			<Laptop>
				<section id='resume-laptop-layout'>
					<a
						className='resume-open-btn'
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'
					>
						<svg
							width='42px'
							height='auto'
							viewBox='0 0 1024 1024'
							fill='white'
						>
							<path d='M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z' />
						</svg>
						<div className='resume-btn-title'>My Resume</div>
					</a>
				</section>
			</Laptop>

			<Tablet>
				<section id='resume-tablet-layout'>
					<a
						className='resume-open-btn'
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'
					>
						<svg
							width='36px'
							height='auto'
							viewBox='0 0 1024 1024'
							fill='white'
						>
							<path d='M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z' />
						</svg>
						<div className='resume-btn-title'>My Resume</div>
					</a>
				</section>
			</Tablet>

			<Mobile>
				<section id='resume-mobile-layout'>
					<a
						className='resume-open-btn'
						href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
						target='_blank'
						rel='noreferrer'
					>
						<svg
							width='32px'
							height='auto'
							viewBox='0 0 1024 1024'
							fill='white'
						>
							<path d='M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z' />
						</svg>
						<div className='resume-btn-title'>My Resume</div>
					</a>
				</section>
			</Mobile>
		</>
	)
}
