import React from 'react'

export default function StackOverflowIcon({ stroke, width }) {
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
        M 98 73
          V 105
          H 5
          V 73
        
        M 78 84
          H 25
        
        M 78 72
          L 25 62
        
        M 83 59
          L 34 40
        
        M 93 49
          L 51 21
        
        M 105 39
          L 72 5
        '
			/>
		</svg>
	)
}
