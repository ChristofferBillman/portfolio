import Page from './Page'
import { animateScroll } from 'react-scroll'
import '../styles/Animations.css'

export default function Landing() {
	return (
		<Page name='landing' img='landing-img.png' navigationButtons={false}>
			<div className='inner-content-container'>
				<h1 className='fadeIn stagger-1'>Christoffer <br />Billman</h1>
				<h3 className='fadeIn stagger-2'>Civilingengörsstudent</h3>
				<h4 className='justify-text fadeIn stagger-3'>
					Studerar Civingenjör Interaktion och Design vid Umeå Universitet.
					Grafisk design, programmering och webbutveckling är saker som intresserar!
				</h4>

				<div className='vertical-spacing' />

				<div className='link-container fadeIn stagger-4'>
					<a
						href='https://github.com/ChristofferBillman'
						target='_blank'
						rel='noreferrer'
					>
						GitHub
					</a>
					<a
						href='https://www.linkedin.com/in/christoffer-billman-840029212/'
						target='_blank'
						rel='noreferrer'
					>
						LinkedIn
					</a>
					<a
						href='https://github.com/ChristofferBillman'
						target='_blank'
						rel='noreferrer'
					>
						GitHub
					</a>
				</div>

				<div className='vertical-spacing' />

				<div className='center fadeIn stagger-5' onClick={() => animateScroll.scrollMore(window.outerHeight - 6, { duration: 700, smooth: 'easeInOutQuart' })}>
					<p className='clickable-text'>Se projekt</p>
				</div>
			</div>
		</Page>
	);
}