import DualColumnPage from './DualColumnPage'
import { scrollToElement } from '../utils/util';

import '../styles/Footer.css'

/*
 * Footer
 */

export default function Footer() {

	const content =
		<div className='footer-content'>
			<div>
				<h1 className='white'>Nu tog det slut</h1>
				<p className='clickable-text' onClick={() => scrollToElement('landing')}>Till toppen ^</p>
			</div>

			<div className='contact-section'>
				<h1 className='white'>Kontakt</h1>
				<div className='contact'>
					<h4 className='white nomargin'>Mejl</h4>
					<p className='white nomargin'>christofferbillman@gmail.com</p>
				</div>
				<div className='contact'>
					<h4 className='white nomargin'>Telefon</h4>
					<p className='white nomargin'>070 577 22 97</p>
				</div>
				<div className='contact'>
					<h4 className='white nomargin'>LinkedIn</h4>
					<p className='white nomargin'>Christoffer Billman</p>
				</div>

				<p style={{ marginTop: '3em' }} className='white nomargin'>© Christoffer Billman 2023</p>
			</div>
		</div>
	return (
		<DualColumnPage
			style={{ background: 'var(--black)' }}
			id='footer'
			leftContent={content}
		/>
	);
}