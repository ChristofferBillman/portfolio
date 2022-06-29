import { useState, useRef, useEffect } from 'react'
// Import LazyMotion, domAnimation and m to reduce bundle size.
// Saves about 11 kB.
import { LazyMotion, domAnimation, AnimatePresence, m as motion } from 'framer-motion'

import '../styles/Gallery.css'

import ChevronButton from './ChevronButton'
import CrossButton from './CrossButton'
import { isMobile } from '../utils/util'


export default function Gallery({ images, isOpen, setIsOpen }) {

	const [imgOpacity, setImgOpacity] = useState(0)
	const [imgOffset, setImgOffset] = useState(40)

	const [currentImg, setCurrentImg] = useState(0)

	const galleryControlRef = useRef(null)

	useEffect(() => {
		if (!isMobile()) setIsOpen(true)
	})

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
	const getContainerWidth = () => {
		if (galleryControlRef.current === null) return
		return galleryControlRef.current.clientWidth
	}

	const toggleGallery = () => {
		console.log(isOpen)
		setIsOpen(!isOpen)
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
		<div className='gallery-container' style={isOpen ? { zIndex: 10000 } : {}} onMouseOver={onHover} onMouseLeave={onHoverOut}>

			<LazyMotion strict features={domAnimation}>
				<AnimatePresence>
					{isOpen ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
						</motion.div>
					) : null}
				</AnimatePresence>

				<div className='gallery-controls' ref={galleryControlRef}>
					{isOpen ? (
						<>
							<CrossButton
								onClick={() => { toggleGallery() }}
								style={{ position: 'absolute', right: '20px', top: '20px', zIndex: 10001 }}
							/>
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
						</>
					) : null}
				</div>
				<div className={isOpen ? ' gallery-content gallery-open' : 'gallery-content'}>
					<motion.div className={isOpen ? 'displaynone' : 'banner-mobile-overlay'} />
					<AnimatePresence initial={false} exitBeforeEnter>
						<motion.img
							src={images[currentImg]}
							style={imgStyle}
							className='gallery-img'
							key={images[currentImg]}
							onLoad={onImgLoad}
							initial={{ x: -direction * getContainerWidth(), /*opacity: 0*/ }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: direction * getContainerWidth() /*opacity: 0*/, transition: { ease: 'easeIn', duration: 0.2 } }}
							transition={{
								x: { type: "spring", stiffness: 300, damping: 30 },
								opacity: { duration: 0.2 }
							}}
						/>
					</AnimatePresence>
				</div>
			</LazyMotion>
		</div>
	);
}