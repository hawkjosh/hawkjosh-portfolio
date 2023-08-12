import React, { Fragment } from 'react'
import { useWindowSize } from '../hooks/useWindowSize.jsx'
import { useBtnExpand } from '../hooks/useBtnExpand.jsx'

export const WorkSampleLinkBtn = ({ icon, text, link, index }) => {
	const { expandBtnIndex, expandBtn, collapseBtn } = useBtnExpand()
	const { isTablet, isPortrait, isScreenHeightSm } = useWindowSize()

	const handleExpand = () => {
		if (expandBtnIndex === index) {
			collapseBtn()
			console.log(expandBtnIndex)
		} else {
			expandBtn(index)
		}
	}

	const handleLinkClick = () => {
		window.open(link, '_blank', 'noopener,noreferrer')
	}

	return (
		<Fragment>
			{isTablet && !isPortrait && isScreenHeightSm ? (
				<div
					className='work-sample-link-btn'
					index={expandBtnIndex}
					onClick={handleLinkClick}>
					{icon}
				</div>
			) : (
				<div
					className={`work-sample-link-btn ${
						expandBtnIndex === index ? 'expanded' : ''
					}`}
					onClick={handleExpand}>
					{icon}
					{expandBtnIndex === index && (
						<span
							className='btn-text'
							onClick={handleLinkClick}>
							{text}
						</span>
					)}
				</div>
			)}
		</Fragment>
	)
}
