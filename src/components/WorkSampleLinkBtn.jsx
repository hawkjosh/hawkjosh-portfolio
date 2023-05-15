import React, { Fragment, useRef, useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize.js'

export const WorkSampleLinkBtn = ({ icon, text }) => {
	const [isHovered, setIsHovered] = useState(false)
	const buttonRef = useRef(null)
	const { isTablet, isPortrait, isScreenHeightSm } = useWindowSize()

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<Fragment>
			{isTablet && !isPortrait && isScreenHeightSm ? (
				<div
					className='work-sample-link-btn'
					ref={buttonRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					{icon}
				</div>
			) : (
				<div
					className='work-sample-link-btn'
					ref={buttonRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					{icon}
					{isHovered && <span className='btn-text'>{text}</span>}
				</div>
			)}
		</Fragment>
	)
}
