import { useState } from 'react';
import Page from './Page';

import { isMobile, scrollToElement } from '../utils/util';
import {Language, useLanguageContext} from "../contexts/LanguageContext";
import React from 'react';

/*
 * A post. A wrapper for a Page, which takes props related to a post instead of children.
 * 
 * Usage:
 * <Post {...post}/>
 * 
 * Where post is an object with the props.
 * 
 */
export default function Post({ name, img, title, subtitle, body, images, ghlink, tags, year, id, link }) {

	const [isFullscreen, setIsFullscreen] = useState(false)
	const locale: Language = useLanguageContext()

	let linkText

	if(link && link.text) {
		linkText = link.text[locale.Name]
	} else {
		linkText = locale.VisitWebsite
	}

	return (
		<Page
			name={name}
			img={images}
			useGallery={true}
			contentSide='left'
			isFullscreen={isFullscreen}
			setIsFullscreen={setIsFullscreen}
			id={name}
		>

			<div className='inner-content-container'>
				<h1>{title}</h1>
				<div style={{background: 'none'}}>
				<div className='link-container'>
					<h3>{subtitle}</h3>
					<h4>{year}</h4>
				</div>
				<div className='link-container'>
					{tags ? tags.map((tag, index) => <p className='attention-text' key={index}>{tag}</p>) : ''}
				</div>

				<p className='justify-text'>{body}</p>

				<div className='row gap-40'>
					{ghlink ? <a href={ghlink} target='__blank'>{locale.SourceCode}</a> : ''}
					{link ? <a href={link.url} target='__blank'>{linkText}</a> : ''}
					{isMobile() ? (
						<p className='clickable-text nomargin' onClick={() =>  {setIsFullscreen(true); scrollToElement(name)}}>Visa bilder</p>
					) : null}
				</div>

				</div>
			</div>
		</Page>
	)
}