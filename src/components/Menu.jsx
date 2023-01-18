import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Menu.css'

export default function Menu() {
	const [showMenu, setShowMenu] = useState(false)

	const menuItems = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'About',
			link: '/about',
		},
		{
			name: 'Work Samples',
			link: '/work-samples',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
	]

	return (
		<>
			<section>
				<button onClick={() => setShowMenu(!showMenu)}>
					<svg
						className='menu-icon'
						width='35px'
						height='auto'
						viewBox='0 0 100 100'
						fill='transparent'
						stroke='white'
						stroke-width='15'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path d='M-10-10H110V110H-10V-10ZM10 10H90ZM10 50H90ZM10 90H90Z' />
					</svg>
				</button>
				{showMenu && (
					<div className='menu-list'>
						{menuItems.map((item, index) => (
							<Link
								className='menu-list-item'
								key={index}
								to={item.link}
								onClick={() => setShowMenu(!showMenu)}
							>
								{item.name}
							</Link>
						))}
					</div>
				)}
			</section>
		</>
	)
}
