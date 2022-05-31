import ChevronButton from './ChevronButton';
import Page from './Page';

export default function Post({ name, img, title, subtitle, body, images, ghlink, tags }) {
	return (
		<div style={{ marginTop: '6rem' }}>
			<Page
				name={name}
				img={images[0]}
			>

				<div className='inner-content-container'>
					<h1>{title}</h1>
					<h3>{subtitle}</h3>
					<div className='link-container'>
						{tags ? tags.map(tag => <p className='muted-text'>{tag}</p>) : ''}
					</div>

					<p className='justify-text'>{body}</p>

					<a href={ghlink}>Källkod</a>


				</div>
			</Page>
		</div>
	);
}