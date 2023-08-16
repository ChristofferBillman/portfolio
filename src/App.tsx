/* Portfolio 4
 * Copyright (c) 2022 Christoffer Billman. All rights reserved.
*/
import Landing from './components/Landing';
import ScrollIndicator from './components/ScrollIndicator';
import Footer from './components/Footer';
import Post from './components/Post';

import './styles/App.css';
import './styles/Mobile.css'
import './styles/Type.css';

import { postsSE } from './data/postsSE';
import { postsEN } from './data/postsEN';
import React, {useRef } from 'react';
import { isMobile } from './utils/util';
import About from './components/About';
import {Language, useLanguageContext} from "./contexts/LanguageContext";

export default function App() {

	const appRef = useRef(null)

	const locale: Language = useLanguageContext()

	const posts = locale.Name === 'SE' ? postsSE : postsEN

	return (
		<div className='App' ref={appRef}>
			<Landing />
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
