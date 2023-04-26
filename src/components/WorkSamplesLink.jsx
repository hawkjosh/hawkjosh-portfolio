import React, { Fragment } from 'react'

import { WebAppIconBtn } from '../components/page-icons/WebAppIconBtn.jsx'
import { GithubIconBtn } from '../components/page-icons/GithubIconBtn.jsx'
import { BonusIconBtn } from '../components/page-icons/BonusIconBtn.jsx'

import { WorkSampleLinkBtn } from '../components/WorkSampleLinkBtn.jsx'

export const WorkSamplesLink = ({ item }) => {
	return (
		<Fragment>
			<a
				href={item.website}
				target='_blank'
				rel='noreferrer'>
				<WorkSampleLinkBtn
					icon={<WebAppIconBtn />}
					text='Web App'
				/>
			</a>
			<a
				href={item.github}
				target='_blank'
				rel='noreferrer'>
				<WorkSampleLinkBtn
					icon={<GithubIconBtn />}
					text='Github Repo'
				/>
			</a>
			{item.bonus !== null && (
				<a
					href={item.bonus}
					target='_blank'
					rel='noreferrer'>
					<WorkSampleLinkBtn
						icon={<BonusIconBtn />}
						text='Bonus'
					/>
				</a>
			)}
		</Fragment>
	)
}
