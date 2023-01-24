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
							Welcome to my online portfolio! My name is Josh Hawk and I
							recently decided to forge a new path into the exciting world of
							programming and web development. Having spent the last 15 years as
							a high school educator with no real background in coding, I
							enrolled in a full stack web development boot camp through Georgia
							Tech to jumpstart this career change. I finished the bootcamp this
							past fall and have coded nearly every day since, each one bringing
							new opportunities to reinforce what I've already learned and to
							expand my knowledge base of this incredible and continuously
							evolving field.
						</p>
						<p>
							Please check out some of my favorite work samples while you're
							here. I've included individual and group projects I created
							throughout the boot camp, as well as some personal projects I
							tackled for fun. You can also look at the skills I've acquired and
							experiences I've gained by following the toolbox and resume links
							on this page. I'd love to hear from you so please feel free to
							reach out with any questions or comments using the contact link
							above. I hope you like what you see, and thanks for stopping by!
						</p>
					</div>

					<div className='btns-container'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIconLg
								iconSize='225px'
								// iconSize='250px'
								// iconSize='clamp(14.063rem, 5.409rem + 9.615vw, 15.625rem)'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIconLg
								iconSize='225px'
								// iconSize='250px'
								// iconSize='clamp(14.063rem, 5.409rem + 9.615vw, 15.625rem)'
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
							Welcome to my online portfolio! My name is Josh Hawk and I
							recently decided to forge a new path into the exciting world of
							programming and web development. Having spent the last 15 years as
							a high school educator with no real background in coding, I
							enrolled in a full stack web development boot camp through Georgia
							Tech to jumpstart this career change. I finished the bootcamp this
							past fall and have coded nearly every day since, each one bringing
							new opportunities to reinforce what I've already learned and to
							expand my knowledge base of this incredible and continuously
							evolving field.
						</p>
						<p>
							Please check out some of my favorite work samples while you're
							here. I've included individual and group projects I created
							throughout the boot camp, as well as some personal projects I
							tackled for fun. You can also look at the skills I've acquired and
							experiences I've gained by following the toolbox and resume links
							on this page. I'd love to hear from you so please feel free to
							reach out with any questions or comments using the contact link
							above. I hope you like what you see, and thanks for stopping by!
						</p>
					</div>

					<div className='btns-container'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIconLg
								iconSize='200px'
								// iconSize='250px'
								// iconSize='clamp(12.5rem, 8.654rem + 6.01vw, 14.063rem)'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIconLg
								iconSize='200px'
								// iconSize='250px'
								// iconSize='clamp(12.5rem, 8.654rem + 6.01vw, 14.063rem)'
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
							Welcome to my online portfolio! My name is Josh Hawk and I
							recently decided to forge a new path into the exciting world of
							programming and web development. Having spent the last 15 years as
							a high school educator with no real background in coding, I
							enrolled in a full stack web development boot camp through Georgia
							Tech to jumpstart this career change. I finished the bootcamp this
							past fall and have coded nearly every day since, each one bringing
							new opportunities to reinforce what I've already learned and to
							expand my knowledge base of this incredible and continuously
							evolving field.
						</p>
						<p>
							Please check out some of my favorite work samples while you're
							here. I've included individual and group projects I created
							throughout the boot camp, as well as some personal projects I
							tackled for fun. You can also look at the skills I've acquired and
							experiences I've gained by following the toolbox and resume links
							on this page. I'd love to hear from you so please feel free to
							reach out with any questions or comments using the contact link
							above. I hope you like what you see, and thanks for stopping by!
						</p>
					</div>

					<div className='btns-container'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIconSm
								iconSize='75px'
								// iconSize='85px'
								// iconSize='clamp(4.063rem, 0.313rem + 7.813vw, 5.313rem)'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIconSm
								iconSize='75px'
								// iconSize='85px'
								// iconSize='clamp(4.063rem, 0.313rem + 7.813vw, 5.313rem)'
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
							Welcome to my online portfolio! My name is Josh Hawk and I
							recently decided to forge a new path into the exciting world of
							programming and web development. Having spent the last 15 years as
							a high school educator with no real background in coding, I
							enrolled in a full stack web development boot camp through Georgia
							Tech to jumpstart this career change. I finished the bootcamp this
							past fall and have coded nearly every day since, each one bringing
							new opportunities to reinforce what I've already learned and to
							expand my knowledge base of this incredible and continuously
							evolving field.
						</p>
						<p>
							Please check out some of my favorite work samples while you're
							here. I've included individual and group projects I created
							throughout the boot camp, as well as some personal projects I
							tackled for fun. You can also look at the skills I've acquired and
							experiences I've gained by following the toolbox and resume links
							on this page. I'd love to hear from you so please feel free to
							reach out with any questions or comments using the contact link
							above. I hope you like what you see, and thanks for stopping by!
						</p>
					</div>

					<div className='btns-container'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIconLg
								iconSize='100px'
								iconColor='white'
							/>
						</button>
						<button>
							<ResumeIconLg
								iconSize='100px'
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
