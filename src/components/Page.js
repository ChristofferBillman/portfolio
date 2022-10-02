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

const galleryContainerStyle = {
	position: 'absolute',
	width: 'fit-content',
	height: '100vh',
	top: 0,
	backgroundColor: 'var(--white)',
	zIndex: 10000
}
export default function Page({ children, img, style, useGallery, galleryIsOpen, setGalleryIsOpen, contentSide, id }) {
	return (
		<div className='layout-grid-container' id={id}>
			<div style={style} className={contentSide === 'left' ? 'layout-grid' : 'layout-grid-right'}>

				<div className={contentSide === 'left' ? 'layout-content' : 'layout-content-right'}>
					{children}
				</div>

				<div className={contentSide === 'left' ? 'banner-container' : 'banner-container-right'}>
					{!useGallery && (
						<>
							<div className='banner-mobile-overlay' />
							<img
								className='banner-img'
								src={img}
								alt='Christoffer'
							/>
						</>
					)}
				</div>
			</div>

			{useGallery && (
				<div style={contentSide === 'left' ?
					{ ...galleryContainerStyle, right: 0 } :
					{ ...galleryContainerStyle, left: 0 }
				}>
					<Gallery images={img} isOpen={galleryIsOpen} setIsOpen={setGalleryIsOpen} />
				</div>
			)}
		</div>
	)
}