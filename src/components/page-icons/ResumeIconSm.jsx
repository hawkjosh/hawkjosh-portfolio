import React from 'react'
import '../../assets/styles/Icons.css'

export default function ResumeIconSm({ iconSize, iconColor }) {
	return (
		<a
			href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
			target='_blank'
			rel='noreferrer'
		>
			<svg
				id='resume-btn-sm-icon'
				width={iconSize}
				stroke={iconColor}
				viewBox='0 0 31 32'
			>
				<path
					strokeWidth='1.15'
					fill='transparent'
					d='M7 25v-18h12l5 5v13h-17zM19 7v5h5M10 12h6M10 16.5h11M10 21h11'
				/>
				<rect
					strokeWidth='0.5'
					fill='transparent'
					width='28'
					height='29'
					x='1.5'
					y='1.5'
					rx='7.5'
					ry='7.5'
				/>
			</svg>
		</a>
	)
}
