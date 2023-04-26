import React, { useRef, useState } from 'react'

export const WorkSampleLinkBtn = ({ icon, text }) => {
	const [isHovered, setIsHovered] = useState(false)
	const buttonRef = useRef(null)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<div
			className='work-sample-link-btn'
			ref={buttonRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{icon}
			{isHovered && <span className='btn-text'>{text}</span>}
		</div>
	)
}
