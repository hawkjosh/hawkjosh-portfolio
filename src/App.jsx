import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/App.css'

import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import WorkSamples from './pages/WorkSamples.jsx'
import Contact from './pages/Contact.jsx'
import NoPage from './pages/NoPage.jsx'

// below is for testing purposes only
import TestPage from './pages/TestPage.jsx'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Navigation />}>
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

					{/* below is for testing purposes only */}
					<Route
						path='/test-page'
						element={<TestPage />}
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
