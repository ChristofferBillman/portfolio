import DualColumnPage from './DualColumnPage'
import { scrollToElement } from '../utils/util';

import '../styles/Footer.css'
import {Language, useLanguageContext} from "../contexts/LanguageContext";

/*
 * Footer
 */

export default function Footer() {

	const locale: Language = useLanguageContext()

	const content =
		<div className='footer-content'>
			<div>
				<h1 className='white'>{locale.FooterHeader}</h1>
			</div>

			<div className='contact-section'>
				<h1 className='white'>{locale.Contact}</h1>
				<div className='contact'>
					<h4 className='white nomargin'>{locale.Email}</h4>
					<p className='white nomargin'>christofferbillman@gmail.com</p>
				</div>
				<div className='contact'>
					<h4 className='white nomargin'>{locale.Phone}</h4>
					<p className='white nomargin'>070 577 22 97</p>
				</div>
				<div className='contact'>
					<h4 className='white nomargin'>LinkedIn</h4>
					<p className='white nomargin'>Christoffer Billman</p>
				</div>

				<p className='clickable-text' style={{marginTop: '3rem', marginBottom: '3rem'}} onClick={() => scrollToElement('landing')}>{locale.ReturnToTop} ^</p>

				<p style={{ marginTop: '3em' }} className='white nomargin'>© Christoffer Billman 2024</p>
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