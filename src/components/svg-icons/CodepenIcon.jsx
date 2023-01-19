import React from 'react'

export default function CodepenIcon({ stroke, width }) {
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
        M105 38
          V71

        M5 71
          V38

        M55 105
          V71

        M55 5
          V38

        M55 71
          L5 38
          L55 5
          L105 38
          L55 71

        M55 105
          L5 71
          L55 38
          L105 71
          L55 105
        '
			/>
		</svg>
	)
}
