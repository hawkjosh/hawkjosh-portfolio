import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Menu.css'

import MenuIcon from '../components/svg-icons/MenuIcon.jsx'

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
					<MenuIcon
						stroke='white'
						width='35px'
					/>
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
