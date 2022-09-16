export const scrollToElement = id => {
	const el = document.getElementById(id)
	el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export const scrollTo = (pixelsFromStart, viewRef, direction) => {
	switch (direction) {
		case 'vertical':
			viewRef.current.scrollTo({ top: pixelsFromStart, behavior: 'smooth' })
			break
		case 'horizontal':
			viewRef.current.scrollTo({ left: pixelsFromStart, behavior: 'smooth' })
			break
		default:
			throw new Error('Invalid value ' + direction + ' of parameter direction.')
	}

}

export function isMobile() {
	let isStandalone = window.navigator.standalone
	let ua = window.navigator.userAgent.toLowerCase()
	let isSafari = /safari/.test(ua)
	let isMobile = /Android|webOS|iPhone|iPod/i.test(ua)

	if (isMobile) {
		if (!isStandalone && !isSafari) {
			// Is iOS WKWebView or UIWebView
			// Only for Instagram and Facebook in-app browsers
			return true
		}
		return window.innerWidth < 768
	}
	return false
}