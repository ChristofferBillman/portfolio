import { useState } from 'react'
import ChevronButton from './ChevronButton'
import Gallery from './Gallery'

/*
 * The main layout of each page. Takes up the entire viewport.
 * Takes props for the image and the id of its container.
 * 
 * Usage:
 * <Page img='labplant.png' id='id' useGallery={true}>
 *     {children}
 * </Page>
 * 
 */
export default function Page({ children, img, id, useGallery, galleryIsOpen, setGalleryIsOpen, contentSide }) {

	const [loaded, setLoaded] = useState(true)
	const [imgOpacity, setImgOpacity] = useState(0)
	const [imgOffset, setImgOffset] = useState(40)

	const onImgLoad = () => {
		setLoaded(true)
		setImgOpacity(1)
		setImgOffset(0)
	}
	const imgStyle = {
		opacity: imgOpacity,
		transform: `translateY(${imgOffset}px)`,
	}

	return (
		<>
			{loaded ? (
				<div id={id} className={contentSide === 'left' ? 'layout-grid' : 'layout-grid-right'}>
					
					<div className={contentSide === 'left' ? 'layout-content' : 'layout-content-right'}>
						{children}
					</div>

					<div className={contentSide === 'left' ? 'banner-container' : 'banner-container-right'}>
						{!useGallery ? (
							<>
								<div className='banner-mobile-overlay' />
								<img
									className='banner-img'
									src={img}
									alt='Christoffer'
									onLoad={onImgLoad}
									style={imgStyle}
								/>
							</>
						) : (
							<Gallery images={img} isOpen={galleryIsOpen} setIsOpen={setGalleryIsOpen} />
						)}
					</div>
				</div>
			) : (
				<div className='layout-grid'>
					<div className='layout-content'>
						<p>Laddar...</p>
					</div>
				</div>
			)
			}
		</>
	)
}