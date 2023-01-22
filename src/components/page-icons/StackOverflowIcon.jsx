import React from 'react'
import '../../assets/styles/Icons.css'

export default function StackOverflowIcon({ iconSize, iconColor }) {
	return (
		<a
			href='https://stackoverflow.com/users/19513873/hawkjosh?tab=profile'
			target='_blank'
			rel='noreferrer'>
			<svg
				id='stack-overflow-icon'
				width={iconSize}
				stroke={iconColor}
				fill='none'
				strokeWidth='5'
				strokeLinecap='round'
				strokeLinejoin='round'
				viewBox='0 0 110 110'>
				<path d='M98 73V105H5V73M78 84H25M78 72L25 62M83 59L34 40M93 49L51 21M105 39L72 5' />
			</svg>
		</a>
	)
}
