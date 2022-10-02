import { useState, useEffect } from "react"
import { scrollTo } from '../utils/util';

const UPDATE_INTERVAL = 1;

export default function ScrollIndicator({ length, orientation, viewRef, offset, style, extraElement }) {

	if (offset === undefined) offset = 0

	const [currentPage, setCurrentPage] = useState(0)

	// Runs on first render.
	useEffect(() => {
		let lastKnownScrollPosition = 0;
		let ticking = false;
		let widthOrHeight = 0;

		viewRef.current.addEventListener('scroll', () => {
			if (orientation === 'vertical') {
				lastKnownScrollPosition = viewRef.current.scrollTop
				widthOrHeight = viewRef.current.clientHeight + offset
			}
			else {
				lastKnownScrollPosition = viewRef.current.scrollLeft
				widthOrHeight = viewRef.current.clientWidth + offset
			}

			// since the scroll event fires very often, we need to debounce it.
			if (!ticking) {
				window.setTimeout(() => {
					setCurrentPage(Math.round(lastKnownScrollPosition / widthOrHeight))
					ticking = false;
				}, UPDATE_INTERVAL);

				ticking = true;
			}
		})
	}, [orientation, viewRef, offset, setCurrentPage])

	const handlePageChange = nextPage => {
		let scrollDistance = 0
		if (orientation === 'vertical') {
			scrollDistance = (viewRef.current.clientHeight + offset) * nextPage
		}
		else {
			scrollDistance = (viewRef.current.clientWidth + offset) * nextPage
		}
		scrollTo(scrollDistance, viewRef, orientation)
	}

	const getScrollIndicators = () => {
		const scrollIndicators = []

		for (let i = 0; i < length; i++) {
			scrollIndicators.push(
				<div
					key={i}
					style={{
						padding: '1rem 1rem 1rem 1rem',
						WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
					}}
					onClick={() => handlePageChange(i)}
				>
					<div
						className={
							`scroll-indicator ${Number(currentPage) === i ?
								orientation === 'vertical' ?
									'scroll-indicator-current-vertical' :
									'scroll-indicator-current-horizontal'
								:
								''
							}`}
					/>
				</div>
			)
		}

		return scrollIndicators
	}

	return (
		<div
			className={
				orientation === 'vertical' ?
					'scroll-indicator-container' :
					'scroll-indicator-container row'
			}
			style={style}
		>
			{getScrollIndicators()}
			{extraElement}
		</div>
	)
}