import React from 'react'

export default function LinkedinIcon({ stroke, width }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height='auto'
			viewBox='0 0 110 110'
		>
			<path
				fill='none'
				stroke={stroke}
				stroke-width='5'
				stroke-linecap='round'
				stroke-linejoin='round'
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
