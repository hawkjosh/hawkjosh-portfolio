import React, { Fragment } from 'react'

export const WorkSamplesInfo = ({ item }) => {
	return (
		<Fragment>
			<h2 className='info-title'>{item.title}</h2>
			<p className='info-text'>{item.info}</p>
		</Fragment>
	)
}
