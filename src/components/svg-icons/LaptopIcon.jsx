import React from 'react'
import '../../assets/styles/Icons.css'

export default function LaptopIcon({ iconSize, iconColor, fontColor }) {
	return (
		<svg
			width={iconSize}
			fill={iconColor}
			viewBox='0 0 925 550'
		>
			<path
				id='laptop-icon'
				d='M199 69C199 34 228 5 263 5H647C682 5 711 34 711 69V257H650V66H260V257H199V69ZM140 298C140 288 149 279 159 279H751C761 279 770 288 770 298C770 321 736 355 693 355H217C174 355 140 321 140 298ZM416 141L385 172L416 202C425 212 425 228 416 237C407 246 391 246 382 237L334 189C325 180 325 164 334 155L382 107C391 98 407 98 416 107C425 116 425 132 416 141ZM528 107L576 155C585 164 585 180 576 189L528 237C519 246 503 246 494 237C485 228 485 212 494 203L525 172L494 141C485 132 485 116 494 107C503 98 519 98 528 107Z'
			/>
			<text
				fill={fontColor}
				fontSize='95px'
				x='10'
				y='515'
			>
				Emerging Developer
			</text>
		</svg>
	)
}
