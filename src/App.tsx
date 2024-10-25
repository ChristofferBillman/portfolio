/* Portfolio 4
 * Copyright (c) 2022 Christoffer Billman. All rights reserved.
*/
import { useEffect, useRef } from 'react';

import Landing from './components/Landing';
import ScrollIndicator from './components/ScrollIndicator';
import Footer from './components/Footer';
import Post from './components/Post';
import About from './components/About'

import './styles/App.css';
import './styles/Mobile.css'
import './styles/Type.css';

if(/Chrome/.test(navigator.userAgent)) {
	import('./styles/ChromeOnly.css')
}

import { postsSE } from './data/postsSE';
import { postsEN } from './data/postsEN';

import { isMobile } from './utils/util';
import { Language, useLanguageContext } from "./contexts/LanguageContext";
import useRainbow from "./hooks/useRainbow";

export default function App() {

	const appRef = useRef(null)

	const locale: Language = useLanguageContext()

	const posts = locale.Name === 'SE' ? postsSE : postsEN

	useRainbow()

	return (
		<div className='App' ref={appRef}>
			<Landing />
			<About/>
			{posts.map((post, index) => <Post key={index} {...post} />)}
			<Footer />

			{!isMobile() &&
				<ScrollIndicator
					length={posts.length + 2}
					orientation='vertical'
					viewRef={appRef}
					offset={6 * 16}
					style={{
						position: 'fixed',
						top: '50vh',
						transform: 'translateY(-50%)',
						left: '1rem',
						padding: '1rem'
					}}
				/>
			}
		</div >
	);
}
