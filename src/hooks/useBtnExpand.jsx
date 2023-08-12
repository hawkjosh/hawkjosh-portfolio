import React, { createContext, useContext, useEffect, useState } from 'react'

const ExpandContext = createContext()

const ExpandProvider = ({ children }) => {
	const [expandBtnIndex, setExpandBtnIndex] = useState(null)

	const expandBtn = (index) => {
		setExpandBtnIndex(index)
	}

	const collapseBtn = () => {
		setExpandBtnIndex(null)
	}

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (expandBtnIndex !== null) {
				const isClickInside = e.target.closest('.work-sample-link-btn')
				if (!isClickInside) {
					collapseBtn()
				}
			}
		}

		document.addEventListener('click', handleOutsideClick)

		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [expandBtnIndex])

	return (
		<ExpandContext.Provider value={{ expandBtnIndex, expandBtn, collapseBtn }}>
			{children}
		</ExpandContext.Provider>
	)
}

const useBtnExpand = () => {
	const context = useContext(ExpandContext)
	if (!context) {
		throw new Error('useBtnExpand must be used within an ExpandProvider')
	}
	return context
}

export { ExpandProvider, useBtnExpand }
