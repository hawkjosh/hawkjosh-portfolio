import React from 'react'

export const WorkSamplesImage = ({ item }) => {
	return (
		<div
			className='image-wrapper'
			style={{ backgroundImage: `url(${item.image})` }}></div>
	)
}
