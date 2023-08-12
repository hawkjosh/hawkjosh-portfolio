import React, { Fragment } from 'react'

export const WorkSamplesInfo = ({ item }) => {
	return (
		<Fragment>
			<h2 className='info-title'>{item.title}</h2>
			{item.index === 0 ? (
				<Fragment>
					<p className='info-text'>{item.info}</p>
					<p className='info-text'>
						<strong>BONUS</strong>: Check out an alternate version of this app
						at the link below that uses an express.js backend to save and
						retrieve notes from a JSON file.
					</p>
				</Fragment>
			) : (
				<p className='info-text'>{item.info}</p>
			)}
		</Fragment>
	)
}
