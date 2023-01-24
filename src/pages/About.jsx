import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/About.css'
import Toolbox from '../components/Toolbox.jsx'
import ToolboxIconLg from '../components/page-icons/ToolboxIconLg.jsx'
import ResumeIconLg from '../components/page-icons/ResumeIconLg.jsx'
import ToolboxIconSm from '../components/page-icons/ToolboxIconSm.jsx'
import ResumeIconSm from '../components/page-icons/ResumeIconSm.jsx'
import profilePhoto from '../assets/images/profile.png'

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
	const isMobile = useMediaQuery({ minWidth: 575, maxWidth: 767 })
	return isMobile ? children : null
}

const MobileSmall = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 574 })
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
							<ToolboxIconLg
								iconSize='clamp(14.063rem, 5.409rem + 9.615vw, 15.625rem)'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIconLg
								iconSize='clamp(14.063rem, 5.409rem + 9.615vw, 15.625rem)'
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
							<ToolboxIconLg
								iconSize='clamp(12.5rem, 8.654rem + 6.01vw, 14.063rem)'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIconLg
								iconSize='clamp(12.5rem, 8.654rem + 6.01vw, 14.063rem)'
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
							<ToolboxIconSm
								iconSize='clamp(4.063rem, 0.313rem + 7.813vw, 5.313rem)'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIconSm
								iconSize='clamp(4.063rem, 0.313rem + 7.813vw, 5.313rem)'
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
							<ToolboxIconLg
								iconSize='clamp(9.375rem, 4.72rem + 12.953vw, 10.938rem)'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIconLg
								iconSize='clamp(9.375rem, 4.72rem + 12.953vw, 10.938rem)'
								iconColor='white'
							/>
						</button>
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</section>
			</Mobile>

			<MobileSmall>
				<section
					id='about-mobile-small-layout'
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
							<ToolboxIconSm
								iconSize='clamp(2.822rem, 2.008rem + 3.476vw, 3.676rem)'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIconSm
								iconSize='clamp(2.822rem, 2.008rem + 3.476vw, 3.676rem)'
								iconColor='white'
							/>
						</button>
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</section>
			</MobileSmall>
		</>
	)
}
