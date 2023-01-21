import React from 'react'
import '../../assets/styles/Icons.css'

export default function LinkedinIcon({ iconSize, iconColor }) {
	return (
		<svg
			id='linkedin-icon'
			width={iconSize}
			stroke={iconColor}
			fill='none'
			strokeWidth='5'
			strokeLinecap='round'
			strokeLinejoin='round'
			viewBox='0 0 110 110'
		>
			<path d='M105 30V80A25 25 0 0 1 80 105H30A25 25 0 0 1 5 80V30A25 25 0 0 1 30 5H80A25 25 0 0 1 105 30M30 28A1 1 0 0 1 30 32A1 1 0 0 1 30 28M30 80V45M50 80V65M50 45V65M50 65C50 45 80 45 80 65V80' />
		</svg>
	)
}
