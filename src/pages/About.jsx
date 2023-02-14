import React, { Fragment, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import '../assets/styles/About.css'

import profilePhoto from '../assets/images/profile.png'
import ToolboxBtnIcon from '../components/page-icons/ToolboxBtnIcon.jsx'
import ResumeBtnIcon from '../components/page-icons/ResumeBtnIcon.jsx'
import Toolbox from '../components/Toolbox.jsx'

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

const paragraph1of2 = `Welcome to my online portfolio! My name is Josh Hawk and I recently decided to forge a new path into the exciting world of programming and web development. Having spent the last 15 years as a high school educator with no real background in coding, I enrolled in a full stack web development boot camp through Georgia Tech to jumpstart this career change. I finished the bootcamp this past fall and have coded nearly every day since, each one bringing new opportunities to reinforce what I've already learned and to expand my knowledge base of this incredible and continuously evolving field.`

const paragraph2of2 = `Please check out some of my favorite work samples while you're here. I've included individual and group projects I created throughout the boot camp, as well as some personal projects I tackled for fun. You can also look at the skills I've acquired and experiences I've gained by following the toolbox and resume links on this page. I'd love to hear from you so please feel free to reach out with any questions or comments using the contact link above. I hope you like what you see, and thanks for stopping by!`

const paragraph1of3 = `Welcome to my online portfolio! My name is Josh Hawk and I recently decided to forge a new path into the exciting world of programming and web development. Having spent the last 15 years as a high school educator with no real background in coding, I enrolled in a full stack web development boot camp through Georgia Tech to jumpstart this career change.`

const paragraph2of3 = `I finished the bootcamp this past fall and have coded nearly every day since, each one bringing new opportunities to reinforce what I've already learned and to expand my knowledge base of this incredible and continuously evolving field.`

const paragraph3of3 = `Please check out some of my favorite work samples while you're here. I've included individual and group projects I created throughout the boot camp, as well as some personal projects I tackled for fun. You can also look at the skills I've acquired and experiences I've gained by following the toolbox and resume links on this page. I'd love to hear from you so please feel free to reach out with any questions or comments using the contact link above. I hope you like what you see, and thanks for stopping by!`

export default function AboutUpdate() {
	const [showToolbox, setShowToolbox] = useState(false)

	const isLargeScreen = useMediaQuery({ minWidth: 960 })

	return (
		<Fragment>
			<Laptop>
				<main id='about-laptop'>
					<div className='about-img-container'>
						<img
							className='about-img'
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='about-txt-container'>
						<p className='about-txt'>{paragraph1of2}</p>
						<p className='about-txt'>{paragraph2of2}</p>
					</div>

					<div className='about-btns-container'>
						<ToolboxBtnIcon
							className='about-btn'
							onClick={() => {
								setShowToolbox(true)
							}}
						/>
						<ResumeBtnIcon className='about-btn' />
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</main>
			</Laptop>

			<Tablet>
				{isLargeScreen ? (
					<main id='about-tablet-large'>
						<div className='about-img-container'>
							<img
								className='about-img'
								src={profilePhoto}
								alt='Profile Photo'
							/>
						</div>

						<div className='about-txt-container'>
							<p className='about-txt'>{paragraph1of2}</p>
							<p className='about-txt'>{paragraph2of2}</p>
						</div>

						<div className='about-btns-container'>
							<ToolboxBtnIcon
								className='about-btn'
								onClick={() => {
									setShowToolbox(true)
								}}
							/>
							<ResumeBtnIcon className='about-btn' />
						</div>

						{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
					</main>
				) : (
					<main id='about-tablet-small'>
						<div className='about-img-container'>
							<img
								className='about-img'
								src={profilePhoto}
								alt='Profile Photo'
							/>
						</div>

						<div className='about-txt-container-1'>
							<p className='about-txt'>{paragraph1of3}</p>
						</div>

						<div className='about-txt-container-2'>
							<p className='about-txt'>{paragraph2of3}</p>
						</div>

						<div className='about-txt-container-3'>
							<p className='about-txt'>{paragraph3of3}</p>
						</div>

						<div className='about-btns-container'>
							<ToolboxBtnIcon
								className='about-btn'
								onClick={() => {
									setShowToolbox(true)
								}}
							/>
							<ResumeBtnIcon className='about-btn' />
						</div>

						{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
					</main>
				)}
			</Tablet>

			<Mobile>
				<main id='about-mobile'>
					<div className='about-img-container'>
						<img
							className='about-img'
							src={profilePhoto}
							alt='Profile Photo'
						/>
					</div>

					<div className='about-txt-container'>
						<p className='about-txt'>{paragraph1of2}</p>
						<p className='about-txt'>{paragraph2of2}</p>
					</div>

					<div className='about-btns-container'>
						<ToolboxBtnIcon
							className='about-btn'
							onClick={() => {
								setShowToolbox(true)
							}}
						/>
						<ResumeBtnIcon className='about-btn' />
					</div>

					{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
				</main>
			</Mobile>
		</Fragment>
	)
}
