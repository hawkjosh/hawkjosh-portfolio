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
			// height='auto'
			viewBox='0 0 110 110'
		>
			<path
				d='
        M 105 30
          V 80
          A 25 25 0 0 1 80 105
          H 30
          A 25 25 0 0 1 5 80
          V 30
          A 25 25 0 0 1 30 5
          H 80
          A 25 25 0 0 1 105 30

        M 30 28
          A 1 1 0 0 1 30 32
          A 1 1 0 0 1 30 28

        M 30 80
          V 45

        M 50 80
          V 65

        M 50 45
          V 65

        M 50 65
          C 50 45 80 45 80 65
          V 80
        '
			/>
		</svg>
	)
}
