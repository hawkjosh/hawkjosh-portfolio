import { useState, useEffect } from 'react'

export const useWindowSize = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [isTablet, setIsTablet] = useState(false)
	const [isLaptop, setIsLaptop] = useState(false)
	const [isScreenLg, setIsScreenLg] = useState(false)

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
		const handleResizeScreenLg = () => {
			setIsScreenLg(window.innerWidth >= 1024)
		}
		handleResizeScreenLg()
		window.addEventListener('resize', handleResizeScreenLg)
		return () => window.removeEventListener('resize', handleResizeScreenLg)
	}, [])

	return {
		isMobile,
		isTablet,
		isLaptop,
		isScreenLg,
	}
}
