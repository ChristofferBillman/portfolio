import { Link } from 'react-scroll';

export default function ScrollIndicator({ currentPage, posts }) {
	return (
		<div className='scroll-indicator-container fadeIn stagger-1'>
			<p
				className='attention-text'
				style={{ display: 'absolute', transform: 'translateX(60px) translateY(46px)' }}
			>
				Du är här!
			</p>
			{getScrollIndicators(currentPage, posts)}
		</div>
	);
}

function getScrollIndicators(currentPage, posts) {
	const scrollIndicators = []

	scrollIndicators.push(
		<Link
			className='scroll-indicator scroll-indicator-current'
			key={100}
			to='landing'
			smooth='easeInOutQuart'
			duration={1000}
		/>
	)

	posts.forEach((post, index) => {
		scrollIndicators.push(
			<Link
				className='scroll-indicator'
				key={index}
				to={post.name}
				smooth='easeInOutQuart'
				duration={700}
			/>
		)
	})
	return scrollIndicators
}