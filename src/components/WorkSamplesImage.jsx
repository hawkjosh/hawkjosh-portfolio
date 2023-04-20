import React from 'react'

export const WorkSamplesImage = ({ item }) => {
	return (
		<img
			className='work-sample-image'
			src={item.image}
			alt={item.alt}
		/>
	)
}
