import Page from './Page'
import '../styles/Animations.css'
import {Language, useLanguageContext, useLanguageContextSetter} from "../contexts/LanguageContext"

/*
 * The landing page. The first page you see when the site loads.
 * Takes no props.
 */

export default function Landing() {
	const locale: Language = useLanguageContext()
	const setLang = useLanguageContextSetter()

	const switchLanguage = () => {
		if(locale.Name === 'SE') {
			setLang('EN')
			return
		}
		setLang('SE')
	}

	return (
		<div>
			<button id="switchLang" className='clickable-text' onClick={switchLanguage}>{locale.InOppositeLang}?</button>

			<Page img='img/landing.webp' id='landing' useGallery={false} contentSide='left'>
				<div className='inner-content-container'>

					<h1 className='fadeIn stagger-1'>Christoffer <br />Billman</h1>

					<div style={{background: 'none'}}>

					<h3 className='fadeIn stagger-2'>{locale.EngineeringStudent}</h3>

					<h4 className='justify-text fadeIn stagger-3'>
						{locale.LandingText}
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
							href={locale.Name === "EN" ? 'CV Christoffer Billman EN.pdf' : 'CV Christoffer Billman SE.pdf'}
							download
						>
							{locale.DownloadCV}
						</a>
					</div>

					<div className='vertical-spacing' />

					<div className='center fadeIn stagger-5'>
						<p className='attention-text'>{locale.Scroll}!</p>
					</div>
					</div>
				</div>
			</Page>
		</div>
	);
}