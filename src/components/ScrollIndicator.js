import { useEffect, useState } from 'react';
import { scrollTo } from '../utils/util';

/*
 * The scroll indicator seen on the left of the page.
 * When dots are clicked, the page scrolls window.innerHeight times the # dot clicked.
 * 
 * Usage:
 * <ScrollIndicator length={5}/>
 * 
 * Props:
 * length: the number of dots shown on the indicator
 */

// In ms.
const UPDATE_INTERVAL = 50;
// In px. Conversion from rem to px.
const PAGE_MARGIN = 6 * 16;

export default function ScrollIndicator({length}) {

	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		let lastKnownScrollPosition = 0;
		let ticking = false;
		let el = document.getElementsByClassName('App')[0]

		el.addEventListener('scroll', () => {
			lastKnownScrollPosition = el.scrollTop

			// since the scroll event fires very often, we need to debounce it.
			if (!ticking) {
				window.setTimeout(() => {
					setCurrentPage(Math.floor(lastKnownScrollPosition / window.innerHeight))
					ticking = false;
				}, UPDATE_INTERVAL);

				ticking = true;
			}
		})
	})

	const getScrollIndicators = () => {
		const scrollIndicators = []

		for(let i = 0; i < length; i++) {
			scrollIndicators.push(
				<div
					style={{ padding: '1rem 3rem 1rem 1rem' }}
					onClick={() => {
						// i-1 on the page margin because margin is on top,
						// and the landing page does not have this margin.
						// i.e. the first page is at 0px.
						scrollTo(i * window.innerHeight + (i-1) * PAGE_MARGIN )
						setCurrentPage(i)
					}}
					key={i}
				>
					<div
						className={`scroll-indicator ${Number(currentPage) === i ? 'scroll-indicator-current' : ''}`}
					/>
				</div>
			)}

		return scrollIndicators
	}

	return (
		<div className='scroll-indicator-container fadeIn stagger-1'>
			<p
				// If on the first page, display this text.
				className={`attention-text ${currentPage === 0 ? 'opacity-1' : 'opacity-0'}`}
				style={{ display: 'absolute', transform: 'translateX(60px) translateY(46px)' }}
				id='scroll-indicator-title'
			>
				Du är här!
			</p>
			{getScrollIndicators()}
		</div>
	);
}