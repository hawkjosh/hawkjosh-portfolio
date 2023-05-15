import { useState, useEffect } from 'react'

export const useWindowSize = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [isTablet, setIsTablet] = useState(false)
	const [isLaptop, setIsLaptop] = useState(false)
	const [isScreenLg, setIsScreenLg] = useState(false)
	const [isPortrait, setIsPortrait] = useState(false)
	const [isScreenHeightSm, setIsScreenHeightSm] = useState(false)

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

	useEffect(() => {
		const handleOrientationChange = () => {
			setIsPortrait(window.innerWidth < window.innerHeight)
		}
		handleOrientationChange()
		window.addEventListener('orientationchange', handleOrientationChange)
		return () =>
			window.removeEventListener('orientationchange', handleOrientationChange)
	}, [])

	useEffect(() => {
		const handleResizeScreenHeightSm = () => {
			setIsScreenHeightSm(window.innerHeight < 500)
		}
		handleResizeScreenHeightSm()
		window.addEventListener('resize', handleResizeScreenHeightSm)
		return () =>
			window.removeEventListener('resize', handleResizeScreenHeightSm)
	}, [])

	return {
		isMobile,
		isTablet,
		isLaptop,
		isScreenLg,
		isPortrait,
		isScreenHeightSm,
	}
}
