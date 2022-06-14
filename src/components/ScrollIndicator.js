import { useEffect, useState } from 'react';

/*
 * The scroll indicator seen on the left of the page.
 * When dots are clicked, the page scrolls to the corresponding section.
 * 
 * Usage:
 * <ScrollIndicator posts={arr}/>
 * 
 * Props:
 * posts: An array in which the amount of elements will be the amount of dots displayed. 
 */

/*
 * TODO: Connect actual scroll position to the scroll indicator
 */

export default function ScrollIndicator({ posts }) {

	const [currentPage, setCurrentPage] = useState(-1);

	useEffect(() => {
		let lastKnownScrollPosition = 0;
		let ticking = false;
		let el = document.getElementsByClassName('App')[0]
		el.addEventListener('scroll', () => {
			lastKnownScrollPosition = el.scrollTop

			if (!ticking) {
				window.setTimeout(() => {
					setCurrentPage(Math.round(lastKnownScrollPosition / window.innerHeight) - 1)
					ticking = false;
				}, 50);

				ticking = true;
			}
		})
	})

	const getScrollIndicators = (posts) => {
		const scrollIndicators = []

		scrollIndicators.push(
			<div
				style={{ padding: '1rem 3rem 1rem 1rem' }}
				onClick={() => { scrollToElement('landing') }}
				key={100}
			>
				<div
					className={`scroll-indicator ${Number(currentPage) === -1 ? 'scroll-indicator-current' : ''}`}
				/>
			</div>
		)

		posts.forEach((posts, index) => {
			scrollIndicators.push(
				<div
					style={{ padding: '1rem 3rem 1rem 1rem' }}
					onClick={() => { scrollToElement(`post-${index}`) }}
					key={index}
				>
					<div
						className={`scroll-indicator ${Number(currentPage) === index ? 'scroll-indicator-current' : ''}`}
					/>
				</div>
			)
		})
		return scrollIndicators
	}

	const scrollToElement = id => {
		const el = document.getElementById(id)
		el.scrollIntoView({ behavior: 'smooth', block: 'start' })
		//if (id === 'landing') setCurrentPage(-1)
		//else setCurrentPage(id.split('-')[1])
	}

	return (
		<div className='scroll-indicator-container fadeIn stagger-1'>
			<p
				className={`attention-text ${currentPage !== -1 ? 'opacity-0' : 'opacity-1'}`}
				style={{ display: 'absolute', transform: 'translateX(60px) translateY(46px)' }}
				id='scroll-indicator-title'
			>
				Du är här!
			</p>
			{getScrollIndicators(posts)}
		</div>
	);
}