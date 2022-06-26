import { useEffect, useState } from 'react';
import { scrollTo } from '../utils/util';

/*
 * The scroll indicator seen on the left of the page.
 * When dots are clicked, the page scrolls to the corresponding section.
 * 
 * Usage:
 * <ScrollIndicator posts={arr}/>
 * 
 * Props:
 * length: the number of dots shown on the indicator
 */

// In ms.
const UPDATE_INTERVAL = 50;

export default function ScrollIndicator({length}) {

	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		let lastKnownScrollPosition = 0;
		let ticking = false;
		let el = document.getElementsByClassName('App')[0]

		el.addEventListener('scroll', () => {
			lastKnownScrollPosition = el.scrollTop

			if (!ticking) {
				window.setTimeout(() => {
					setCurrentPage(Math.round(lastKnownScrollPosition / window.innerHeight))
					ticking = false;
				}, UPDATE_INTERVAL);

				ticking = true;
			}
		})
	})

	const scrollToPage = page => {
		scrollTo(page * window.innerHeight)
		setCurrentPage(page)
	}

	const getScrollIndicators = () => {
		const scrollIndicators = []

		for(let i = 0; i <= length; i++) {
			scrollIndicators.push(
				<div
					style={{ padding: '1rem 3rem 1rem 1rem' }}
					onClick={() => {
						console.log(currentPage)
						scrollToPage(i)
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