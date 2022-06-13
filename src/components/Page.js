import { useState } from 'react'
import ChevronButton from './ChevronButton'
import Gallery from './Gallery'

/*
 * The main layout of each page. Takes up the entire viewport.
 * Takes props for the image, if to display navigation buttons, and the id of its container.
 * 
 * Note: Navigation buttons displayed but non-functional.
 * 
 * Usage:
 * <Page img='labplant.png' navigationButtons={false} id='id' useGallery={true}>
 *     {children}
 * </Page>
 * 
 */
export default function Page({ children, img, navigationButtons, id, useGallery, galleryIsOpen, setGalleryIsOpen }) {

	const showNavigationButtons = () => navigationButtons === undefined || navigationButtons === true

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
				<div id={id} className='layout-grid'>
					{showNavigationButtons() ? (
						<ChevronButton
							chevronDirection='up'
							text='Tillbaka'
							onClick={() => { /* something in the future maybe? */ }}
							style={{ gridColumn: 2, gridRow: 1 }}
						/>
					) : ''}

					<div className='layout-content'>
						{children}
					</div>

					<div className={`banner-container ${useGallery ? 'banner-container-gallery' : ''}`}>
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

					{showNavigationButtons() ? (
						<ChevronButton
							chevronDirection='down'
							text='Nästa'
							onClick={() => { /* something in the future maybe? */ }}
							style={{ gridColumn: 2, gridRow: 3 }}
						/>
					) : ''}
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