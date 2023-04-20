import { useState, useEffect } from 'react'

export const useWindowSize = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [isTablet, setIsTablet] = useState(false)
	const [isLaptop, setIsLaptop] = useState(false)
	const [isSpecialScreenSm, setIsSpecialScreenSm] = useState(false)
	const [isSpecialScreenLg, setIsSpecialScreenLg] = useState(false)

	useEffect(() => {
		const handleResizeMobile = () => {
			setIsMobile(window.innerWidth < 640)
		}
		handleResizeMobile()
		window.addEventListener('resize', handleResizeMobile)
		return () => window.removeEventListener('resize', handleResizeMobile)
	}, [])

	useEffect(() => {
		const handleResizeTablet = () => {
			setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1280)
		}
		handleResizeTablet()
		window.addEventListener('resize', handleResizeTablet)
		return () => window.removeEventListener('resize', handleResizeTablet)
	}, [])

	useEffect(() => {
		const handleResizeLaptop = () => {
			setIsLaptop(window.innerWidth >= 1280)
		}
		handleResizeLaptop()
		window.addEventListener('resize', handleResizeLaptop)
		return () => window.removeEventListener('resize', handleResizeLaptop)
	}, [])

	useEffect(() => {
		const handleResizeSpecialScreenSm = () => {
			setIsSpecialScreenSm(window.innerWidth >= 640 && window.innerWidth < 960)
		}
		handleResizeSpecialScreenSm()
		window.addEventListener('resize', handleResizeSpecialScreenSm)
		return () =>
			window.removeEventListener('resize', handleResizeSpecialScreenSm)
	}, [])

	useEffect(() => {
		const handleResizeSpecialScreenLg = () => {
			setIsSpecialScreenLg(window.innerWidth >= 1024)
		}
		handleResizeSpecialScreenLg()
		window.addEventListener('resize', handleResizeSpecialScreenLg)
		return () =>
			window.removeEventListener('resize', handleResizeSpecialScreenLg)
	}, [])

	return {
		isMobile,
		isTablet,
		isLaptop,
		isSpecialScreenSm,
		isSpecialScreenLg,
	}
}
