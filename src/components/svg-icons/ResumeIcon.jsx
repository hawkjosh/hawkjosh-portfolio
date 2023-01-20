// This is an updated version with text included in icon, previous version with icon only is commented out below

import React from 'react'
import '../../assets/styles/Icons.css'

export default function ResumeIcon({ iconSize, iconColor }) {
	return (
		<svg
			id='resume-btn-icon'
			width={iconSize}
			fill={iconColor}
			stroke={iconColor}
			// height='auto'
			viewBox='-7 -7 105 33'
		>
			<path
				strokeWidth='1.15'
				fill='none'
				d='M2 19v-18h12l5 5v13h-17zM14 1v5h5M5 6h6M5 10.5h11M5 15h11'
			/>
			<text
				strokeWidth='0'
				fontSize='12px'
				x='25'
				y='13.75'
			>
				My Resume
			</text>
			<rect
				strokeWidth='0.5'
				fill='none'
				width='100'
				height='29'
				x='-4.5'
				y='-5'
				rx='7.5'
				ry='7.5'
			/>
		</svg>
	)
}

// import React from 'react'

// export default function ResumeIcon({ fill, width }) {
// 	return (
// 		<svg
// 			width={width}
// 			// height='auto'
// 			viewBox='0 0 1024 1024'
// 		>
// 			<path
// 				fill={fill}
// 				d='M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z'
// 			/>
// 		</svg>
// 	)
// }
