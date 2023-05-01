import { useState } from 'react';
import Page from './Page';

import { isMobile, scrollToElement } from '../utils/util';

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
				<div style={{backgroundColor: 'var(--white)'}}>
				<div className='link-container'>
					<h3>{subtitle}</h3>
					<h4>{year}</h4>
				</div>
				<div className='link-container'>
					{tags ? tags.map((tag, index) => <p className='attention-text' key={index}>{tag}</p>) : ''}
				</div>

				<p className='justify-text'>{body}</p>

				<div className='row gap-40'>
					{ghlink ? <a href={ghlink} target='__blank'>Källkod</a> : ''}
					{link ? <a href={link} target='__blank'>Besök webbplats</a> : ''}
					{isMobile() ? (
						<p className='clickable-text nomargin' onClick={() =>  {setIsFullscreen(true); scrollToElement(name)}}>Visa bilder</p>
					) : null}
				</div>

				</div>
			</div>
		</Page>
	)
}