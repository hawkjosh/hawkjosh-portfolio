import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/About.css'
import Toolbox from '../components/Toolbox.jsx'
import ToolboxIconLg from '../components/page-icons/ToolboxIconLg.jsx'
import ResumeIconLg from '../components/page-icons/ResumeIconLg.jsx'
import profilePhoto from '../assets/images/profile.png'

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

export default function AboutUpdate() {
	const [showToolbox, setShowToolbox] = useState(false)

	const isLargeScreen = useMediaQuery({ minWidth: 960 })

	return (
		<>
			<Laptop>
				<main id='about-laptop'>
					<div className='about-img'>
						<img
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='about-txt'>
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

					<div className='about-btns'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIconLg
								iconSize='16rem'
								iconColor='white'
							/>
						</button>

						<button>
							<ResumeIconLg
								iconSize='16rem'
								iconColor='white'
							/>
						</button>
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</main>
			</Laptop>

			<Tablet>
				{isLargeScreen ? (
					<main id='about-tablet-large'>
						<div className='about-img'>
							<img
								src={profilePhoto}
								alt='Profile Photo'
							/>
						</div>

						<div className='about-txt'>
							<p>
								Welcome to my online portfolio! My name is Josh Hawk and I
								recently decided to forge a new path into the exciting world of
								programming and web development. Having spent the last 15 years
								as a high school educator with no real background in coding, I
								enrolled in a full stack web development boot camp through
								Georgia Tech to jumpstart this career change. I finished the
								bootcamp this past fall and have coded nearly every day since,
								each one bringing new opportunities to reinforce what I've
								already learned and to expand my knowledge base of this
								incredible and continuously evolving field.
							</p>
							<p>
								Please check out some of my favorite work samples while you're
								here. I've included individual and group projects I created
								throughout the boot camp, as well as some personal projects I
								tackled for fun. You can also look at the skills I've acquired
								and experiences I've gained by following the toolbox and resume
								links on this page. I'd love to hear from you so please feel
								free to reach out with any questions or comments using the
								contact link above. I hope you like what you see, and thanks for
								stopping by!
							</p>
						</div>

						<div className='about-btns'>
							<button
								onClick={() => {
									setShowToolbox(true)
								}}>
								<ToolboxIconLg
									iconSize='15rem'
									iconColor='white'
								/>
							</button>

							<button>
								<ResumeIconLg
									iconSize='15rem'
									iconColor='white'
								/>
							</button>
						</div>

						{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
					</main>
				) : (
					<main id='about-tablet-small'>
						<div className='about-img'>
							<img
								src={profilePhoto}
								alt='Profile Photo'
							/>
						</div>

						<div className='about-txt-1 about-txt'>
							<p>
								Welcome to my online portfolio! My name is Josh Hawk and I
								recently decided to forge a new path into the exciting world of
								programming and web development. Having spent the last 15 years
								as a high school educator with no real background in coding, I
								enrolled in a full stack web development boot camp through
								Georgia Tech to jumpstart this career change.
							</p>
						</div>

						<div className='about-txt-2 about-txt'>
							<p>
								I finished the bootcamp this past fall and have coded nearly
								every day since, each one bringing new opportunities to
								reinforce what I've already learned and to expand my knowledge
								base of this incredible and continuously evolving field.
							</p>
						</div>

						<div className='about-txt-3 about-txt'>
							<p>
								Please check out some of my favorite work samples while you're
								here. I've included individual and group projects I created
								throughout the boot camp, as well as some personal projects I
								tackled for fun. You can also look at the skills I've acquired
								and experiences I've gained by following the toolbox and resume
								links on this page. I'd love to hear from you so please feel
								free to reach out with any questions or comments using the
								contact link above. I hope you like what you see, and thanks for
								stopping by!
							</p>
						</div>

						<div className='about-btns'>
							<button
								onClick={() => {
									setShowToolbox(true)
								}}>
								<ToolboxIconLg
									iconSize='15rem'
									iconColor='white'
								/>
							</button>

							<button>
								<ResumeIconLg
									iconSize='15rem'
									iconColor='white'
								/>
							</button>
						</div>

						{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
					</main>
				)}
			</Tablet>

			<Mobile>
				<main id='about-mobile'>
					<div className='about-img'>
						<img
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='about-txt'>
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

					<div className='about-btns'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIconLg
								iconSize='14rem'
								iconColor='white'
							/>
						</button>

						<button>
							<ResumeIconLg
								iconSize='14rem'
								iconColor='white'
							/>
						</button>
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</main>
			</Mobile>
		</>
	)
}
