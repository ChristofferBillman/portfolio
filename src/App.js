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

import AppContextProvider from './contexts/AppContext'

import { posts } from './data/posts';

export default function App() {

	return (
		<div className='App'>
			<AppContextProvider>
				<Landing />
				{posts.map((post, index) => <Post key={index} {...post} />)}
				<Footer />
				<ScrollIndicator length={posts.length + 2} />
			</AppContextProvider>
		</div >
	);
}
