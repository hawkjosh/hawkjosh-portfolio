import React from 'react'
import '../../assets/styles/Icons.css'

export default function CodepenIcon({ iconSize, iconColor }) {
	return (
		<a
			href='https://codepen.io/hawkjosh'
			target='_blank'
			rel='noreferrer'>
			<svg
				id='codepen-icon'
				width={iconSize}
				stroke={iconColor}
				fill='none'
				strokeWidth='5'
				strokeLinecap='round'
				strokeLinejoin='round'
				viewBox='0 0 110 110'>
				<path d='M105 38V71M5 71V38M55 105V71M55 5V38M55 71L5 38L55 5L105 38L55 71M55 105L5 71L55 38L105 71L55 105' />
			</svg>
		</a>
	)
}
