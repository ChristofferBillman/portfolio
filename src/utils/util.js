export const scrollToElement = id => {
	const el = document.getElementById(id)
	el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export const scrollTo = pixelsFromTop => {
	const app = document.getElementsByClassName('App')[0]
	app.scroll({ top: pixelsFromTop, behavior: 'smooth' })
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