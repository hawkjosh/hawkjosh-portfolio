import React from 'react'
import { Link } from 'react-router-dom'

export const NoPage = () => {
	return (
		<main className='no-page-container'>
			<div className='no-page-header'>
				<h1 className='no-page-title'>Page Not Found</h1>
				<h2 className='no-page-subtitle'>(404 Error)</h2>
			</div>
			<div className='no-page-body'>
				<p className='no-page-message'>
					Uh oh, something went wrong. Click below to return.
				</p>
				<Link
					className='no-page-link'
					to='/'>
					Hawk's Nest Home
				</Link>
			</div>
		</main>
	)
}
