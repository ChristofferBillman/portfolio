import Page from './Page'

import { isMobile } from '../utils/util'

import {Language, useLanguageContext} from '../contexts/LanguageContext'

export default function About() {

    const locale: Language = useLanguageContext()

	return (
        <Page
            img='./about2.webp'
            useGallery={false}
            contentSide="left"
        >
            <div style={{overflowY: 'scroll', height: '90vh', maxWidth: '500px', padding: '0 1rem 0 0'}}>
                {isMobile() && <div style={{height: '10rem'}}/>}
                <h1>{locale.AboutTitle}</h1>
                <p> {locale.AboutP1}
                    <br/><br/>
                    {locale.AboutP2}
                    <br/><br/>
                    {locale.AboutP3}
                    <br/><br/>
                    <b>{locale.AboutBold}</b>
                    <br/><br/>
                    {locale.AboutP5}
                    <br/><br/>
                    {locale.AboutP6}
                </p>
            </div>
        </Page>
	)
}