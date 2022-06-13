/* Portfolio 4
 * Copyright (c) 2022 Christoffer Billman. All rights reserved.
*/
import Landing from './components/Landing';
import ScrollIndicator from './components/ScrollIndicator';
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
				{posts.map((post, index) => {
					return (
						<Post
							key={index}
							{...post}
							id={'post-' + index}
						/>
					)
				}
				)}
				<ScrollIndicator posts={posts} />
			</AppContextProvider>
		</div >
	);
}
