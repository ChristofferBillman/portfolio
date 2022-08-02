import Page from './Page'
import '../styles/Animations.css'

import { isMobile } from '../utils/util'

/*
 * The landing page. The first page you see when the site loads.
 * Takes no props.
 */

export default function Landing() {
	return (
		<div>
			<Page img='landing-img.png' navigationButtons={false} id='landing' useGallery={false} contentSide='left'>
				<div className='inner-content-container'>

					<h1 className='fadeIn stagger-1'>Christoffer <br />Billman</h1>
					<h3 className='fadeIn stagger-2'>Civilingengörsstudent</h3>
					{isMobile() ? (
						<div className='fadeIn stagger-2'>
							<p className='justify-text' style={{ color: '#d48f22', fontWeight: 700 }}>
								Det verkar som om att du besöker webbplatsen från en mobiltelefon.<br /><br />
								Mobilversionen är under konstruktion och kanske inte fungerar som den ska.
							</p>
						</div>
					) : (
						null
					)}
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
							href='CV.pdf'
							download
						>
							Hämta CV
						</a>
					</div>

					<div className='vertical-spacing' />

					<div className='center fadeIn stagger-5'>
						<p className='attention-text'>Skrolla!</p>
					</div>
				</div>
			</Page>
		</div>
	);
}