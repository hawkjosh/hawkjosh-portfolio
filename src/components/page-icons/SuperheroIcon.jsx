import React from 'react'
import '../../assets/styles/Icons.css'

export default function SuperheroIcon({ iconSize, iconColor, fontColor }) {
	return (
		<svg
			id='superhero-icon'
			width={iconSize}
			fill={iconColor}
			viewBox='0 0 925 550'>
			<path d='M183 348L336 281L415 230L428 239L418 305L339 333A20 20 0 0 0 358 372L360 372L459 339A35 35 0 0 0 478 314L485 265L522 237A30 30 0 0 1 492 193L522 157L501 196A20 20 0 0 0 514 222L607 245A10 10 0 0 0 620 209L557 194L576 159L571 184L591 189A60 60 0 0 0 626 141L645 133A65 65 0 0 1 588 111L242 290A50 50 0 0 1 203 289L161 308A20 20 0 0 0 183 348ZM159 165L501 87C564 72 558 96 576 100L236 276A35 35 0 0 1 201 268L147 190A20 20 0 0 1 159 165ZM584 62A45 45 0 0 1 698 62A45 45 0 0 1 584 62ZM707 41L739 18A20 20 0 0 1 768 51L701 99A60 60 0 0 0 707 41Z' />
			<text
				fill={fontColor}
				stroke='none'
				fontSize='95px'
				x='10'
				y='515'>
				Super Dad/Husband
			</text>
		</svg>
	)
}