import React from 'react'

export default function ResumeBtnIcon({ ...props }) {
	return (
		<a
			href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
			target='_blank'
			rel='noreferrer'>
			<svg
				{...props}
				viewBox='-7 -7 105 33'>
				<path
					strokeWidth='1.15'
					fill='none'
					d='M2 19v-18h12l5 5v13h-17zM14 1v5h5M5 6h6M5 10.5h11M5 15h11'
				/>
				<text
					strokeWidth='0'
					fontSize='12px'
					x='25'
					y='13.75'>
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
		</a>
	)
}
