import React from 'react'

export default function MenuIcon({ stroke, width }) {
	return (
		<svg
			width={width}
			height='auto'
			viewBox='0 0 100 100'
		>
			<path
				fill='transparent'
				stroke={stroke}
				stroke-width='15'
				stroke-linecap='round'
				stroke-linejoin='round'
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
