import React from 'react'

export default function GithubIcon({ stroke, width }) {
	return (
		<svg
			width={width}
			// height='auto'
			viewBox='0 0 110 110'
		>
			<path
				fill='transparent'
				stroke={stroke}
				strokeWidth='5'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='
        M 75 105
          V 91
          A 16 16 0 0 0 70 78
          A 31.5 31.5 0 0 0 95 24
          A 22 22 0 0 0 94 5
          A 35 35 0 0 0 75 12
          A 67 67 0 0 0 40 12
          A 35 35 0 0 0 21 5
          A 22 22 0 0 0 20 24
          A 31.5 31.5 0 0 0 45 78
          A 16 16 0 0 0 40 91
          V 105

        M 40 95
          C 25 100 13 95 5 80
        '
			/>
		</svg>
	)
}
