import React, { Fragment } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import '../assets/styles/Layout.css'

import NavbarShrink from './NavbarShrink.jsx'
import NavbarHide from './NavbarHide.jsx'
import NavbarStatic from './NavbarStatic.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
	const location = useLocation()

	return (
		<Fragment>
			<section>
				<Fragment>
					{location.pathname === '/' && <NavbarShrink />}
					{location.pathname === '/about' && <NavbarHide />}
					{location.pathname === '/work-samples' && <NavbarStatic />}
					{location.pathname === '/contact' && <NavbarShrink />}
				</Fragment>
				<Outlet />
				<Footer />
			</section>
		</Fragment>
	)
}
