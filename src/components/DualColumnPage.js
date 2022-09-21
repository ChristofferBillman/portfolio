import { useState } from 'react'

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
export default function DualColumnPage({ leftContent, rightContent, id, style }) {

	const [loaded] = useState(true)

	return (
		<>
			{loaded ? (
				<div id={id} style={style} className={'layout-grid-both'}>

					<div className={'layout-content'}>
						{leftContent}
					</div>

					<div className={'layout-content-both'}>
						{rightContent}
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