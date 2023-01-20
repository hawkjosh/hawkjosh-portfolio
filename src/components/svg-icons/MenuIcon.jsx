import React from 'react'
import '../../assets/styles/Icons.css'

export default function MenuIcon({ iconSize, iconColor }) {
	return (
		<svg
			id='menu-icon'
			width={iconSize}
			stroke={iconColor}
			fill='none'
			strokeWidth='15'
			strokeLinecap='round'
			strokeLinejoin='round'
			// height='auto'
			viewBox='0 0 100 100'
		>
			<path
				d='
        M -10 -10
          H 110
          V 110
          H -10
          V -10
        Z

        M 10 10
          H 90
        Z

        M 10 50
          H 90
        Z

        M 10 90
          H 90
        Z
        '
			/>
		</svg>
	)
}
