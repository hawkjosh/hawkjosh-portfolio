import React from 'react'

export default function TennesseeIcon({ fill, width }) {
	return (
		<svg
			width={width}
			height='auto'
			viewBox='0 0 640 360'
		>
			<path
				fill={fill}
				d='
        M 5 15
          A 10 10 0 0 1 15 5
          H 115
          A 10 10 0 0 1 125 15
          V 225
          A 25 25 0 0 0 150 250
          H 245
          A 25 25 0 0 0 265 230
          V 155
          A 25 25 0 0 0 245 135
          H 140
          C 130 100 175 100 180 70
          C 185 35 220 35 225 20
          C 230 10 230 5 240 5
          H 360
          V 250
          L 265 355
          H 135
          A 135 130 0 0 1 5 225
          V 15
        Z

        M 370 5
          V 345
          A 10 10 0 0 0 380 355
          H 465
          A 10 10 0 0 0 475 345
          V 155
          A 25 25 0 0 1 490 135
          H 525
          C 535 135 535 125 540 115
          C 555 85 580 105 590 75
          C 605 40 635 60 635 5
          H 370
        Z'
			/>
		</svg>
	)
}
