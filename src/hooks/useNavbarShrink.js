// Function to shrink the navbar when scrolling

window.addEventListener('DOMContentLoaded', (event) => {
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav')
		if (!navbarCollapsible) {
			return
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink')
		} else {
			navbarCollapsible.classList.add('navbar-shrink')
		}
	}

	navbarShrink()

	document.addEventListener('scroll', navbarShrink)
})