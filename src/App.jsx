import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/App.css'

import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
// import Menu from './components/Menu.jsx'
import About from './pages/About.jsx'
import WorkSamples from './pages/WorkSamples.jsx'
import Contact from './pages/Contact.jsx'
import NoPage from './pages/NoPage.jsx'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          {/* <Route path='/menu' element={<Menu />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/work-samples' element={<WorkSamples />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  )
}