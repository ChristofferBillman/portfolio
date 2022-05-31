import Landing from './components/Landing';
import ScrollIndicator from './components/ScrollIndicator';
import Post from './components/Post';
import './styles/App.css';
import './styles/Mobile.css'
import './styles/Type.css';

import { posts } from './data/posts';

export default function App() {
  return (
    <div className='App'>
      <Landing />
      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            {...post}
          />
        )
      }
      )}
      <ScrollIndicator currentPage={0} posts={posts} />
    </div >
  );
}
