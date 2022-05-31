import { Element, animateScroll } from 'react-scroll'
import ChevronButton from './ChevronButton'

export default function Page({ name, children, img, navigationButtons }) {

	const showNavigationButtons = () => navigationButtons === undefined || navigationButtons === true

	return (
		<Element name={name} className='layout-grid'>
			{showNavigationButtons() ? (
				<ChevronButton
					chevronDirection='up'
					text='Tillbaka'
					onClick={() => { animateScroll.scrollMore(-window.outerHeight + 6, { duration: 700, smooth: 'easeInOutQuart' }) }}
					style={{ gridColumn: 2, gridRow: 1 }}
				/>
			) : ''}

			<div className='layout-content'>
				{children}
			</div>
			<img className='landing-img' src={img} alt='Christoffer' />

			{showNavigationButtons() ? (
				<ChevronButton
					chevronDirection='down'
					text='Nästa'
					onClick={() => { animateScroll.scrollMore(window.outerHeight - 6, { duration: 700, smooth: 'easeInOutQuart' }) }}
					style={{ gridColumn: 2, gridRow: 3 }}
				/>
			) : ''}
		</Element>
	)
}