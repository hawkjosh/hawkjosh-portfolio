import React, { Fragment } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import '../assets/styles/Layout.css'

import NavbarStatic from './NavbarStatic.jsx'
// import NavbarHide from './NavbarHide.jsx'
// import NavbarShrink from './NavbarShrink.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
	const location = useLocation('/work-samples')
	return (
		<Fragment>
			<section>

				<NavbarStatic />
				{/* <NavbarHide /> */}
				{/* <NavbarShrink /> */}
				<Outlet />
				<Footer />
			</section>
		</Fragment>
	)
}
