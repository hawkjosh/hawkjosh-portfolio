import React, { useState } from 'react'

import { Toolbox } from '../components/Toolbox.jsx'
import { Resume } from '../components/Resume.jsx'

import { ToolboxBtnIcon } from '../components/page-icons/ToolboxBtnIcon.jsx'
import { ResumeBtnIcon } from '../components/page-icons/ResumeBtnIcon.jsx'

import profilePhoto from '../assets/images/profile-49KB.png'

const paragraphs = [
	{
		index: 0,
		pid: 'paragraph1of2',
		text: `Welcome to my online portfolio! I'm Josh Hawk, a dedicated professional with 15 years of experience in education and a newfound passion for programming and web development. While I began my journey as a high school educator, I made a bold decision to transition into the incredible world of software engineering. To equip myself with the necessary skills, I enrolled in a comprehensive full stack web development boot camp at Georgia Tech. Since completing the boot camp, I've immersed myself in coding projects daily, consistently reinforcing my existing knowledge and embracing the boundless growth potential of this dynamic and ever-evolving field.`,
	},
	{
		index: 1,
		pid: 'paragraph2of2',
		text: `As you explore my portfolio, you'll discover a collection of standout projects that highlight my capabilities. From collaborative team efforts during the boot camp to personal undertakings, each project showcases my commitment to creating innovative solutions. Don't miss the opportunity to explore my acquired skills and professional experiences through the toolbox and resume links provided on this page. I'm always eager to connect, so don't hesitate to reach out via the contact link above. Thank you for visiting, and I look forward to the possibility of working together!`,
	},
]

export const About = () => {
	const [showToolbox, setShowToolbox] = useState(false)
	const [showResume, setShowResume] = useState(false)

	const handleToolboxClick = () => {
		setShowToolbox(true)
		window.scrollTo(0, 0)
	}

	const handleResumeClick = () => {
		setShowResume(true)
		window.scrollTo(0, 0)
	}

	return (
		<main
			className='about-container'
			style={{
				height: showToolbox || showResume ? 'calc(100vh - 10rem)' : 'auto',
				overflowY: showToolbox || showResume ? 'hidden' : 'visible',
			}}>
			<img
				className='about-img'
				src={profilePhoto}
				alt='Profile Photo'
			/>

			<div className='about-txt-wrapper'>
				<p className='about-txt'>{paragraphs[0].text}</p>
				<p className='about-txt'>{paragraphs[1].text}</p>
			</div>

			<div className='about-btns-wrapper'>
				<ToolboxBtnIcon
					className='about-btn'
					onClick={handleToolboxClick}
				/>
				<ResumeBtnIcon
					className='about-btn'
					onClick={handleResumeClick}
				/>
			</div>

			{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
			{showResume && <Resume setShowResume={setShowResume} />}
		</main>
	)
}
