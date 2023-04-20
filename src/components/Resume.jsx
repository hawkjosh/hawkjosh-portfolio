import React from 'react'

import { CustomButton } from '../components/CustomButton.jsx'

import { CloseBtnIcon } from '../components/page-icons/CloseBtnIcon.jsx'

import myResume from '../assets/images/resume-73KB.png'

export const Resume = ({ setShowResume }) => {
	const handleDownload = () => {
		window.open(
			'https://1drv.ms/b/s!AjbK_Cd8W85etY8YbTzNuiafBgluAg?e=gtMTkI',
			'_blank'
		)
		setShowResume(false)
	}

	return (
		<div className='resume-background'>
			<div className='resume-container'>
				<div className='resume-content-wrapper'>
					<img
						className='resume'
						src={myResume}
						alt='resume'
					/>
					<CustomButton
						className='resume-download-btn'
						onClick={handleDownload}>
						Download
					</CustomButton>
				</div>

				<div className='resume-close-btn-wrapper'>
					<CloseBtnIcon
						className='resume-close-btn-icon'
						onClick={() => {
							setShowResume(false)
						}}
					/>
				</div>
			</div>
		</div>
	)
}
