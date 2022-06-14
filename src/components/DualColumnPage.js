import { useState } from 'react'
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
export default function DualColumnPage({ children, id }) {

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
				<div id={id} className={'layout-grid-both'}>
					
					<div className={'layout-content'}>
						{children[0]}
					</div>

					<div className={'layout-content-both'}>
                    {children[1]}
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