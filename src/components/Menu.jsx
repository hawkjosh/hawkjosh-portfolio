import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import NavMenuIcon from '../components/page-icons/NavMenuIcon.jsx'

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

const Menu = () => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<Fragment>
			<NavMenuIcon
				className='nav-menu-icon'
				onClick={() => setShowMenu(!showMenu)}
			/>
			{showMenu && (
				<div className='nav-menu-list'>
					{menuItems.map((item, index) => (
						<Fragment key={index}>
							<Link
								className='nav-menu-list-item'
								to={item.link}
								onClick={() => setShowMenu(!showMenu)}>
								{item.name}
							</Link>
						</Fragment>
					))}
				</div>
			)}
		</Fragment>
	)
}

export default Menu
