import React from 'react'
import { Outlet } from 'react-router-dom'

import '../assets/styles/Layout.css'

import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {

	return (
		<>
      <section>
        <Navbar id='navbar-section' />
        <Outlet />
        <Footer />
        {/* <div id='navbar-section'><Navbar /></div>
        <div id='main-section'><Outlet /></div>
        <div id='footer-section'><Footer /></div> */}
      </section>
		</>
	)
}
