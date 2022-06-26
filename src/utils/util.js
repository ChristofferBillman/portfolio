export const scrollToElement = id => {
	const el = document.getElementById(id)
	el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export const scrollTo = pixelsFromTop => {
	const app = document.getElementsByClassName('App')[0]
	app.scroll({ top: pixelsFromTop, behavior: 'smooth' })
}

export function isMobile() {
	return window.innerWidth < 768
}