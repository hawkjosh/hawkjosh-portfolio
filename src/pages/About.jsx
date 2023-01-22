import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/About.css'
import Toolbox from '../components/Toolbox.jsx'
import ToolboxIcon from '../components/page-icons/ToolboxIcon.jsx'
import ResumeIcon from '../components/page-icons/ResumeIcon.jsx'
import profilePhoto from '../assets/images/profile_photo.jpg'

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

export default function AboutUpdate() {
	const [showToolbox, setShowToolbox] = useState(false)

	return (
		<>
			<Desktop>
				<section
					id='about-desktop-layout'
					className='about-layout'>
					<div className='img-container'>
						<img
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='text-container'>
						<p>
							Welcome to my portfolio! My name is Josh Hawk and I have been an
							educator for the past 15 years. I recently decided to forge a new
							path into the exciting world of programming and web development.
							Having very little background in coding, I enrolled in a full
							stack web development boot camp through Georgia Tech to jumpstart
							this career change.
						</p>
						<p>
							Please check out some of my favorite work samples while you're
							here. I've included various projects I created throughout the boot
							camp, as well as a few personal projects. You can also see the
							skills I've acquired in my toolbox and resume links below. Feel
							free to reach out to me with any questions or comments. I hope you
							like what you see, and thanks for stopping by!
						</p>
					</div>

					<div className='btns-container'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIcon
								iconSize='225px'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIcon
								iconSize='225px'
								iconColor='white'
							/>
						</button>
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</section>
			</Desktop>

			<Laptop>
				<section
					id='about-laptop-layout'
					className='about-layout'>
					<div className='img-container'>
						<img
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='text-container'>
						<p>
							Welcome to my portfolio! My name is Josh Hawk and I have been an
							educator for the past 15 years. I recently decided to forge a new
							path into the exciting world of programming and web development.
							Having very little background in coding, I enrolled in a full
							stack web development boot camp through Georgia Tech to jumpstart
							this career change.
						</p>
						<p>
							Please check out some of my favorite work samples while you're
							here. I've included various projects I created throughout the boot
							camp, as well as a few personal projects. You can also see the
							skills I've acquired in my toolbox and resume links below. Feel
							free to reach out to me with any questions or comments. I hope you
							like what you see, and thanks for stopping by!
						</p>
					</div>

					<div className='btns-container'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIcon
								iconSize='225px'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIcon
								iconSize='225px'
								iconColor='white'
							/>
						</button>
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</section>
			</Laptop>

			<Tablet>
				<section
					id='about-tablet-layout'
					className='about-layout'>
					<div className='img-container'>
						<img
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='text-container'>
						<p>
							Welcome to my portfolio! My name is Josh Hawk and I have been an
							educator for the past 15 years. I recently decided to forge a new
							path into the exciting world of programming and web development.
							Having very little background in coding, I enrolled in a full
							stack web development boot camp through Georgia Tech to jumpstart
							this career change.
						</p>
						<p>
							Please check out some of my favorite work samples while you're
							here. I've included various projects I created throughout the boot
							camp, as well as a few personal projects. You can also see the
							skills I've acquired in my toolbox and resume links below. Feel
							free to reach out to me with any questions or comments. I hope you
							like what you see, and thanks for stopping by!
						</p>
					</div>

					<div className='btns-container'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIcon
								iconSize='225px'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIcon
								iconSize='225px'
								iconColor='white'
							/>
						</button>
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</section>
			</Tablet>

			<Mobile>
				<section
					id='about-mobile-layout'
					className='about-layout'>
					<div className='img-container'>
						<img
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='text-container'>
						<p>
							Welcome to my portfolio! My name is Josh Hawk and I have been an
							educator for the past 15 years. I recently decided to forge a new
							path into the exciting world of programming and web development.
							Having very little background in coding, I enrolled in a full
							stack web development boot camp through Georgia Tech to jumpstart
							this career change.
						</p>
						<p>
							Please check out some of my favorite work samples while you're
							here. I've included various projects I created throughout the boot
							camp, as well as a few personal projects. You can also see the
							skills I've acquired in my toolbox and resume links below. Feel
							free to reach out to me with any questions or comments. I hope you
							like what you see, and thanks for stopping by!
						</p>
					</div>

					<div className='btns-container'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIcon
								iconSize='225px'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIcon
								iconSize='225px'
								iconColor='white'
							/>
						</button>
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</section>
			</Mobile>
		</>
	)
}
