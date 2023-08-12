import { useEffect } from 'react'

export const useNavbarShrink = () => {
	useEffect(() => {
		const navbarShrink = () => {
			const navShrinkElement = document.body.querySelector('nav')
			if (!navShrinkElement) {
				return
			}
			if (window.scrollY === 0) {
				navShrinkElement.classList.remove('navbar-shrink')
			} else {
				navShrinkElement.classList.add('navbar-shrink')
			}
		}

		navbarShrink()
		document.addEventListener('scroll', navbarShrink)

		return () => {
			document.removeEventListener('scroll', navbarShrink)
		}
	}, [])
}
