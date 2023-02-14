import React from 'react'
import { Outlet } from 'react-router-dom'

import '../assets/styles/Layout.css'

// import NavbarHide from './NavbarHide.jsx'
import NavbarShrink from './NavbarShrink.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
	return (
		<>
			<section>
				<NavbarShrink />
				<Outlet />
				<Footer />
			</section>
		</>
	)
}
