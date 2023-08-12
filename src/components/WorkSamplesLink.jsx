import React from 'react'

import { WebAppIconBtn } from '../components/page-icons/WebAppIconBtn.jsx'
import { GithubIconBtn } from '../components/page-icons/GithubIconBtn.jsx'
import { BonusIconBtn } from '../components/page-icons/BonusIconBtn.jsx'

import { WorkSampleLinkBtn } from '../components/WorkSampleLinkBtn.jsx'
import { ExpandProvider } from '../hooks/useBtnExpand.jsx'

export const WorkSamplesLink = ({ item }) => {
	return (
		<ExpandProvider>
			<WorkSampleLinkBtn
				icon={<WebAppIconBtn />}
				text='Web App'
				link={item.website}
				index={0}
			/>
			<WorkSampleLinkBtn
				icon={<GithubIconBtn />}
				text='Github Repo'
				link={item.github}
				index={1}
			/>
			{item.bonus !== null && (
				<WorkSampleLinkBtn
					icon={<BonusIconBtn />}
					text='Bonus'
					link={item.bonus}
					index={2}
				/>
			)}
		</ExpandProvider>
	)
}
