import React from 'react'

export default function useWindowSize() {
	const isSSR = typeof window !== 'undefined'
	const [windowSize, setWindowSize] = React.useState({
		width: isSSR ? 1200 : window.innerWidth,
		height: isSSR ? 800 : window.innerHeight,
	})

	function changeWindowSize() {
		setWindowSize({ width: window.innerWidth, heigth: window.innerHeight })
	}

	React.useEffect(() => {
		window.addEventListener('resize', changeWindowSize)

		return () => {
			window.removeEventListener('resize', changeWindowSize)
		}
	}, [])

	return windowSize
}
