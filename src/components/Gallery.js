import CrossButton from './CrossButton'

import '../styles/Gallery.css'
import ScrollIndicator from './ScrollIndicator'
import { useRef } from 'react'

export default function Gallery({ images, isOpen, setIsOpen }) {

	const galleryRef = useRef(null)

	return (
		<div className={isOpen ? 'gallery-container open' : 'gallery-container'}>
			<div className='gallery-controls'>
				<CrossButton
					onClick={() => { setIsOpen(!isOpen) }}
					style={{ position: 'absolute', right: '20px', top: '20px', visibility: isOpen ? 'visible' : 'hidden' }}
				/>
				<div style={{
					position: 'absolute',
					bottom: '4rem',
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
				}}>
					{images.length !== 1 &&
						<ScrollIndicator
							length={images.length}
							orientation='horizontal'
							viewRef={galleryRef}
							style={{
								backgroundColor: 'rgba(255,255,255)',
								boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)'
							}}
						/>
					}
				</div>
			</div>

			<div className={isOpen ? 'displaynone' : 'banner-mobile-overlay'} />
			<div className='images-container' ref={galleryRef}>
				{images.map((image, index) => <img key={index} src={image} alt='gallery-img' className='gallery-item' />)}
			</div>
		</div>
	)
}