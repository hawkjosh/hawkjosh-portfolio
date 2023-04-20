import React, { Fragment, useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize.js'

import { Toolbox } from '../components/Toolbox.jsx'

import { ToolboxBtnIcon } from '../components/page-icons/ToolboxBtnIcon.jsx'
import { ResumeBtnIcon } from '../components/page-icons/ResumeBtnIcon.jsx'

import profilePhoto from '../assets/images/profile.png'

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
	{
		index: 2,
		pid: 'paragraph1of3',
		text: `Welcome to my online portfolio! My name is Josh Hawk and I recently decided to forge a new path into the exciting world of programming and web development. Having spent the last 15 years as a high school educator with no real background in coding, I enrolled in a full stack web development boot camp through Georgia Tech to jumpstart this career change.`,
	},
	{
		index: 3,
		pid: 'paragraph2of3',
		text: `I finished the bootcamp this past fall and have coded nearly every day since, each one bringing new opportunities to reinforce what I've already learned and to expand my knowledge base of this incredible and continuously evolving field.`,
	},
	{
		index: 4,
		pid: 'paragraph3of3',
		text: `Please check out some of my favorite work samples while you're here. I've included individual and group projects I created throughout the boot camp, as well as some personal projects I tackled for fun. You can also look at the skills I've acquired and experiences I've gained by following the toolbox and resume links on this page. I'd love to hear from you so please feel free to reach out with any questions or comments using the contact link above. I hope you like what you see, and thanks for stopping by!`,
	},
]

export const About = () => {
	const { isSpecialScreenSm } = useWindowSize()

	const [showToolbox, setShowToolbox] = useState(false)

	return (
		<main className='about-container'>
			<div className='about-img-wrapper'>
				<img
					className='about-img'
					src={profilePhoto}
					alt='Profile Photo'
				/>
			</div>

			{isSpecialScreenSm ? (
				<Fragment>
					<div className='about-txt-wrapper'>
						<p className='about-txt'>{paragraphs[2].text}</p>
					</div>

					<div className='about-txt-wrapper'>
						<p className='about-txt'>{paragraphs[3].text}</p>
					</div>

					<div className='about-txt-wrapper'>
						<p className='about-txt'>{paragraphs[4].text}</p>
					</div>
				</Fragment>
			) : (
				<Fragment>
					<div className='about-txt-wrapper'>
						<p className='about-txt'>{paragraphs[0].text}</p>
						<p className='about-txt'>{paragraphs[1].text}</p>
					</div>
				</Fragment>
			)}

			<div className='about-btns-wrapper'>
				<div className='about-btn'>
					<ToolboxBtnIcon
						onClick={() => {
							setShowToolbox(true)
						}}
					/>
				</div>
				<div className='about-btn'>
					<ResumeBtnIcon />
				</div>
			</div>

			{showToolbox && <Toolbox setShowToolbox={setShowToolbox} />}
		</main>
	)
}
