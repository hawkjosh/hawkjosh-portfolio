import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/About.css'
import Toolbox from '../components/Toolbox.jsx'
import ToolboxIconLg from '../components/page-icons/ToolboxIconLg.jsx'
import ResumeIconLg from '../components/page-icons/ResumeIconLg.jsx'
import ToolboxIconSm from '../components/page-icons/ToolboxIconSm.jsx'
import ResumeIconSm from '../components/page-icons/ResumeIconSm.jsx'
import profilePhoto from '../assets/images/profile.png'

const Laptop = ({ children }) => {
	const isLaptop = useMediaQuery({ minWidth: 1280 })
	return isLaptop ? children : null
}

const TabletLarge = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 950, maxWidth: 1279 })
	return isTablet ? children : null
}

const TabletSmall = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 949 })
	return isTablet ? children : null
}

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 639 })
	return isMobile ? children : null
}

export default function AboutUpdate() {
	const [showToolbox, setShowToolbox] = useState(false)

	const isTabletLandscape = useMediaQuery({ minWidth: 1024 })

	const isMobileLandscape = useMediaQuery({ maxWidth: 850 })

	return (
		<>
			<Laptop>
				<section
					id='about-laptop-layout'
					className='about-layout'>
					<div className='grid-img'>
						<img
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='grid-txt'>
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

					<div className='grid-btns'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIconLg
								iconSize='200px'
								iconColor='white'
							/>
						</button>

						<button>
							<ResumeIconLg
								iconSize='200px'
								iconColor='white'
							/>
						</button>
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</section>
			</Laptop>

			<TabletLarge>
				{isTabletLandscape ? (
					<section
						id='about-tablet-large-landscape'
						className='about-layout'>
						<div className='grid-img'>
							<img
								src={profilePhoto}
								alt='Profile Photo'
							/>
						</div>

						<div className='grid-txt'>
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

						<div className='grid-btns'>
							<button
								onClick={() => {
									setShowToolbox(true)
								}}>
								<ToolboxIconLg
									iconSize='225px'
									iconColor='white'
								/>
							</button>

							<button>
								<ResumeIconLg
									iconSize='225px'
									iconColor='white'
								/>
							</button>
						</div>

						{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
					</section>
				) : (
					<section
						id='about-tablet-large'
						className='about-layout'>
						<div className='grid-img'>
							<img
								src={profilePhoto}
								alt='Profile Photo'
							/>
						</div>

						<p className='grid-txt-1'>
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

						<p className='grid-txt-2'>
							Please check out some of my favorite work samples while you're
							here. I've included individual and group projects I created
							throughout the boot camp, as well as some personal projects I
							tackled for fun. You can also look at the skills I've acquired and
							experiences I've gained by following the toolbox and resume links
							on this page. I'd love to hear from you so please feel free to
							reach out with any questions or comments using the contact link
							above. I hope you like what you see, and thanks for stopping by!
						</p>

						<div className='grid-btns'>
							<button
								onClick={() => {
									setShowToolbox(true)
								}}>
								<ToolboxIconLg
									iconSize='225px'
									iconColor='white'
								/>
							</button>

							<button>
								<ResumeIconLg
									iconSize='225px'
									iconColor='white'
								/>
							</button>
						</div>

						{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
					</section>
				)}
			</TabletLarge>

			<TabletSmall>
				{isMobileLandscape ? (
					<section
						id='about-tablet-small-mobile-landscape'
						className='about-layout'>
						<div className='grid-img'>
							<img
								src={profilePhoto}
								alt='Profile Photo'
							/>
						</div>

						<div className='grid-txt'>
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

						<div className='grid-btns'>
							<button
								onClick={() => {
									setShowToolbox(true)
								}}>
								<ToolboxIconSm
									iconSize='clamp(6.25rem, -1.624rem + 19.685vw, 7.813rem)'
									iconColor='white'
								/>
							</button>

							<button>
								<ResumeIconSm
									iconSize='clamp(6.25rem, -1.624rem + 19.685vw, 7.813rem)'
									iconColor='white'
								/>
							</button>
						</div>

						{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
					</section>
				) : (
					<section
						id='about-tablet-small'
						className='about-layout'>
						<div className='grid-img'>
							<img
								src={profilePhoto}
								alt='Profile Photo'
							/>
						</div>

						<p className='grid-txt-1'>
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

						<p className='grid-txt-2'>
							Please check out some of my favorite work samples while you're
							here. I've included individual and group projects I created
							throughout the boot camp, as well as some personal projects I
							tackled for fun. You can also look at the skills I've acquired and
							experiences I've gained by following the toolbox and resume links
							on this page. I'd love to hear from you so please feel free to
							reach out with any questions or comments using the contact link
							above. I hope you like what you see, and thanks for stopping by!
						</p>

						<div className='grid-btns'>
							<button
								onClick={() => {
									setShowToolbox(true)
								}}>
								<ToolboxIconLg
									iconSize='225px'
									iconColor='white'
								/>
							</button>

							<button>
								<ResumeIconLg
									iconSize='225px'
									iconColor='white'
								/>
							</button>
						</div>

						{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
					</section>
				)}
			</TabletSmall>

			<Mobile>
				<section
					id='about-mobile-layout'
					className='about-layout'>
					<div className='grid-img'>
						<img
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='grid-txt'>
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

					<div className='grid-btns'>
						<button
							onClick={() => {
								setShowToolbox(true)
							}}>
							<ToolboxIconLg
								iconSize='clamp(10.938rem, 8.921rem + 8.961vw, 12.5rem)'
								iconColor='white'
							/>
						</button>

						<button>
							<ResumeIconLg
								iconSize='clamp(10.938rem, 8.921rem + 8.961vw, 12.5rem)'
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
