import { CSSProperties, Dispatch, ReactNode, SetStateAction } from 'react'

import Gallery from './Gallery'
import '../styles/Gallery.css'
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

interface Props {
	children: ReactNode
	img?: string
	style?: CSSProperties
	useGallery?: boolean
	isFullscreen?: boolean
	setIsFullscreen?: Dispatch<SetStateAction<boolean>>
	contentSide?: 'left' | 'right'
	id?: string
}

export default function Page({ children, img, style, useGallery, isFullscreen, setIsFullscreen, contentSide, id}: Props) {

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
				<div
					className={`gallery-container ${isFullscreen ? 'gallery-container-fullscreen' : ''}`}
					style={contentSide === 'left' ? { right: 0 } : { left: 0 }}
				>
					<Gallery
						images={img}
						isFullscreen={isFullscreen}
						setIsFullscreen={setIsFullscreen}
					/>
				</div>
			)}
		</div>
	)
}