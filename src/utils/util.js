export const scrollToElement = id => {
	const el = document.getElementById(id)
	el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function isMobile() {
	return window.innerWidth < 768
}