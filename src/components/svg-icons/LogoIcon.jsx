import React from 'react'

export default function LogoIcon({ fill, stroke, width }) {
	return (
		<svg
			width={width}
			// height='auto'
			viewBox='0 0 110 110'
		>
			<path
				fill={fill}
				stroke={stroke}
				strokeWidth='5'
				d='
        M 15 5
          H 95
          A 10 10 0 0 1 105 15
          V 95
          A 10 10 0 0 1 95 105
          H 15
          A 10 10 0 0 1 5 95
          V 15
          A 10 10 0 0 1 15 5
        Z

        M 30 30
          A 1 1 0 0 1 37 30
          V 80
          A 1 1 0 0 1 30 80
          V 30
        Z

        M 32.5 27.5
          V 82.5
        Z

        M 73 30
          A 1 1 0 0 1 80 30
          V 80
          A 1 1 0 0 1 73 80
          V 30
        Z

        M 77.5 27.5
          V 82.5
        Z

        M 30 52.5
          H 80
        Z

        M 30 57.5
          H 80
        Z'
			/>
		</svg>
	)
}
