import React from 'react'
import { Outlet } from 'react-router-dom'

import '../assets/styles/Layout.css'

import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
	return (
		<>
			<section>
				<Navbar />
				<Outlet />
				<Footer />
			</section>
		</>
	)
}
