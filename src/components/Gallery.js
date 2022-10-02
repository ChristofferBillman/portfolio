import '../styles/Gallery.css'
import ScrollIndicator from './ScrollIndicator'
import { useRef, useState } from 'react'
import { ExpandButton, ShrinkButton, CrossButton } from './Buttons'

export default function Gallery({ images, isOpen, setIsOpen }) {

	const galleryRef = useRef(null)

	const [isFullscreen, setIsFullscreen] = useState(false)

	return (
		<div className={`gallery-container ${isOpen ? 'open' : ''} ${isFullscreen ? 'gallery-fullscreen' : ''}`}>
			<div className='gallery-controls'>
				<CrossButton
					onClick={() => { setIsOpen(!isOpen) }}
					style={{ position: 'absolute', right: '20px', top: '20px', visibility: isOpen ? 'visible' : 'hidden' }}
				/>
				<div style={{
					position: 'absolute',
					right: 0,
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
							extraElement={isFullscreen ? <ShrinkButton onClick={() => setIsFullscreen(false)} /> : <ExpandButton onClick={() => setIsFullscreen(true)} />}
						/>
					}
				</div>
			</div>

			<div className={isOpen ? 'displaynone' : 'banner-mobile-overlay'} />
			<div className='images-container' ref={galleryRef}>
				{images.map((image, index) => <img key={index} src={image} alt='gallery-img' className={`gallery-item ${isFullscreen ? 'gallery-item-fullscreen' : ''}`} />)}
			</div>
		</div>
	)
}