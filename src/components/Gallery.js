import CrossButton from './CrossButton'

import '../styles/Gallery.css'

export default function Gallery({ images, isOpen, setIsOpen }) {

	return (
		<div className={isOpen ? 'gallery-container open' : 'gallery-container'}>
			<div className='gallery-controls'>
				<CrossButton
					onClick={() => { setIsOpen(!isOpen) }}
					style={{ position: 'absolute', right: '20px', top: '20px', visibility: isOpen ? 'visible' : 'hidden' }}
				/>
			</div>
			<div className={isOpen ? 'displaynone' : 'banner-mobile-overlay'} />
			<div className='images-container'>
				{images.map(image => <img src={image} alt='gallery-img' className='gallery-item' />)}
			</div>
		</div>
	)
}