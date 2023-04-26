import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { WorkSamples } from './pages/WorkSamples.jsx'
import { Contact } from './pages/Contact.jsx'
import { NoPage } from './pages/NoPage.jsx'
import { WorkSamplesAlt } from './components/WorkSamplesAlt.jsx'

import './App.css'

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/work-samples'
						element={<WorkSamples />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
					<Route
						path='/work-samples-alt'
						element={<WorkSamplesAlt />}
					/>
				</Route>
				<Route
					path='*'
					element={<NoPage />}
				/>
			</Routes>
		</Router>
	)
}
