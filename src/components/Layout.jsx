import React, { Fragment } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { NavbarShrink } from './NavbarShrink.jsx'
import { NavbarHide } from './NavbarHide.jsx'
import { NavbarStatic } from './NavbarStatic.jsx'
import { Footer } from './Footer.jsx'

export const Layout = () => {
	const location = useLocation()

	return (
		<section className='layout-container'>
			<Fragment>
				{location.pathname === '/' && <NavbarShrink />}
				{location.pathname === '/about' && <NavbarHide />}
				{location.pathname === '/work-samples' && <NavbarStatic />}
				{location.pathname === '/contact' && <NavbarHide />}
			</Fragment>
			<Outlet />
			<Footer />
		</section>
	)
}
