import '../styles/Gallery.css'
import ScrollIndicator from './ScrollIndicator'
import { useRef } from 'react'
import { ExpandButton, ShrinkButton } from './Buttons'
import { isMobile } from '../utils/util'

export default function Gallery({ images, setIsFullscreen, isFullscreen }) {

	const galleryRef = useRef(null)

	return (
		<div className={`gallery ${isFullscreen ? 'gallery-fullscreen' : ''}`}>
			<div className='gallery-controls'>
				<div style={{
					position: 'absolute',
					right: 0,
					bottom: '4rem',
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
				}}>
					{(!isMobile() || isFullscreen) &&
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

			<div className={isFullscreen ? 'displaynone' : 'banner-mobile-overlay'} />
			<div className='images-container' ref={galleryRef}>
				{images.map((image, index) => <img key={index} src={image} alt='gallery-img' className={`gallery-item ${isFullscreen ? 'gallery-item-fullscreen' : ''}`} />)}
			</div>
		</div>
	)
}