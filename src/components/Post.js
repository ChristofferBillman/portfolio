import Page from './Page';

/*
 * A post. A wrapper for a Page, which takes props related to a post instead of children.
 * 
 * Usage:
 * <Post {...post}/>
 * 
 * Where post is an object with the props.
 * 
 */
export default function Post({ name, img, title, subtitle, body, images, ghlink, tags, year, id }) {
	return (
		<div className='layout-grid-container' id={id}>
			<Page
				name={name}
				img={images}
				navigationButtons={false}
				useGallery={true}
			>

				<div className='inner-content-container'>
					<h1>{title}</h1>
					<div className='link-container'>
						<h3>{subtitle}</h3>
						<h4>{year}</h4>
					</div>
					<div className='link-container'>
						{tags ? tags.map(tag => <p className='attention-text'>{tag}</p>) : ''}
					</div>

					<p className='justify-text'>{body}</p>

					<div className='row'>
						{ghlink ? <a href={ghlink}>Källkod</a> : ''}
						<p className='clickable-text nomargin'>Visa bilder</p>
					</div>


				</div>
			</Page>
		</div >
	);
}