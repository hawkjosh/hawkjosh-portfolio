import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Menu.css'

import MenuIcon from '../components/page-icons/MenuIcon.jsx'

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
			<main>
				<button onClick={() => setShowMenu(!showMenu)}>
					<MenuIcon
						iconSize='30px'
						iconColor='white'
					/>
				</button>
				{showMenu && (
					<div className='menu-list'>
						{menuItems.map((item, index) => (
							<Link
								className='menu-list-item'
								key={index}
								to={item.link}
								onClick={() => setShowMenu(!showMenu)}>
								{item.name}
							</Link>
						))}
					</div>
				)}
			</main>
		</>
	)
}
