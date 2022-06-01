import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import '../styles/Gallery.css'

import ChevronButton from './ChevronButton'


export default function Gallery({ images }) {

	const [imgOpacity, setImgOpacity] = useState(0)
	const [imgOffset, setImgOffset] = useState(40)

	const [currentImg, setCurrentImg] = useState(0)

	const galleryControlRef = useRef(null)

	const onImgLoad = () => {
		setImgOpacity(1)
		setImgOffset(0)
	}
	const imgStyle = {
		opacity: imgOpacity,
		transform: `translateY(${imgOffset}px)`,
	}

	const onHover = () => {
		galleryControlRef.current.classList.remove('opacity-0')
		galleryControlRef.current.classList.add('opacity-1')
	}

	const onHoverOut = () => {
		galleryControlRef.current.classList.remove('opacity-1')
		galleryControlRef.current.classList.add('opacity-0')
	}

	const [direction, setDirection] = useState(0)

	const getNextImg = async (forwards) => {
		if (forwards) {
			// wtf???
			await setDirection(-1)
			if (currentImg < images.length - 1) {
				setCurrentImg(currentImg + 1)
			} else {
				setCurrentImg(0)
			}
		} else {
			// varför funkar await här?!
			await setDirection(1)
			if (currentImg > 0) {
				setCurrentImg(currentImg - 1)
			} else {
				setCurrentImg(images.length - 1)
			}
		}
	}

	return (
		<div className='gallery-container' onMouseOver={onHover} onMouseLeave={onHoverOut}>
			<div className='gallery-controls' ref={galleryControlRef}>
				<ChevronButton
					chevronDirection='left'
					onClick={() => { getNextImg(false) }}
					style={{ marginLeft: '1rem' }}
				/>
				<ChevronButton
					chevronDirection='right'
					onClick={() => { getNextImg(true) }}
					style={{ marginRight: '1rem' }}
				/>
			</div>
			<div className='gallery-content'>
				<AnimatePresence initial={false} exitBeforeEnter>
					<motion.img
						src={images[currentImg]}
						className='banner-img'
						style={imgStyle}
						onLoad={onImgLoad}
						key={images[currentImg]}
						initial={{ x: -direction * 700, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: direction * 700, opacity: 0 }}
						transition={{
							ease: 'easeInOut',
							stiffness: 300,
							damping: 20,
						}}
					/>
				</AnimatePresence>
			</div>

		</div>
	);
}