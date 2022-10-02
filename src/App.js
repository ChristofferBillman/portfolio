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

import { posts } from './data/posts';
import { useRef } from 'react';
import { isMobile } from './utils/util';

export default function App() {

	const appRef = useRef(null)

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
