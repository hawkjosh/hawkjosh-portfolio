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
		text: `Welcome to my online portfolio! My name is Josh Hawk and I recently decided to forge a new path into the exciting world of programming and web development. Having spent the last 15 years as a high school educator with no real background in coding, I enrolled in a full stack web development boot camp through Georgia Tech to jumpstart this career change. I finished the bootcamp this past fall and have coded nearly every day since, each one bringing new opportunities to reinforce what I've already learned and to expand my knowledge base of this incredible and continuously evolving field.`,
	},
	{
		index: 1,
		pid: 'paragraph2of2',
		text: `Please check out some of my favorite work samples while you're here. I've included individual and group projects I created throughout the boot camp, as well as some personal projects I tackled for fun. You can also look at the skills I've acquired and experiences I've gained by following the toolbox and resume links on this page. I'd love to hear from you so please feel free to reach out with any questions or comments using the contact link above. I hope you like what you see, and thanks for stopping by!`,
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
		<main className='about-container'
		style={{height: showToolbox || showResume ? 'calc(100vh - 10rem)' : 'auto', overflowY: showToolbox || showResume ? 'hidden' : 'visible'}}
		>
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
