import React, { Fragment } from 'react'

export const WorkSamplesLink = ({ item }) => {
	return (
		<Fragment>
			<a
				className='link-btn'
				href={item.website}
				target='_blank'
				rel='noreferrer'>
				Web App
			</a>
			<a
				className='link-btn'
				href={item.github}
				target='_blank'
				rel='noreferrer'>
				GitHub Repo
			</a>
			{item.bonus !== null && (
				<a
					className='link-btn'
					href={item.bonus}
					target='_blank'
					rel='noreferrer'>
					Bonus
				</a>
			)}
		</Fragment>
	)
}
