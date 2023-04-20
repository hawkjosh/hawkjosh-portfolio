import { useEffect, useState } from 'react'

export const useNavbarHide = (callback, delay) => {
	const [, setScrollPosition] = useState(0)
	let prevScrollTop = 0

	const handleScroll = () => {
		const { scrollTop: currScrollTop } =
			document.documentElement || document.body

		setScrollPosition((prevPosition) => {
			prevScrollTop = prevPosition
			return currScrollTop
		})

		callback({ prevScrollTop, currScrollTop })
	}

	let timeoutId = null

	const handleScrollThrottle = () => {
		if (!timeoutId) {
			timeoutId = setTimeout(() => {
				handleScroll()
				timeoutId = null
			}, delay)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScrollThrottle)

		return () => window.removeEventListener('scroll', handleScrollThrottle)
	}, [])
}
