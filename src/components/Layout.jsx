import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { NavbarShrink } from './NavbarShrink.jsx'
import { NavbarStatic } from './NavbarStatic.jsx'
import { Footer } from './Footer.jsx'

export const Layout = () => {
	const location = useLocation()

	return (
		<section className='layout-container'>
			{location.pathname === '/work-samples' ? (
				<NavbarStatic />
			) : (
				<NavbarShrink />
			)}
			<Outlet />
			<Footer />
		</section>
	)
}
