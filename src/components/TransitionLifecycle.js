import { useEffect, useState } from "react";

export default function AnimateLifecycle({ children, transition, willRender, verbose }) {

	const [childrenMounted, setChildrenMounted] = useState(false);
	const [transitioning, setTransitioning] = useState(false);

	// Debug
	useEffect(() => {
		if (verbose) {
			if (childrenMounted) console.log('mounted.')
			else console.log('unmounted.')
		}
	}, [childrenMounted, verbose])

	// Debug
	useEffect(() => {
		if (verbose) {
			if (willRender) {
				console.log('transitioning in...')
				setTimeout(() => {
					console.log('transition done.')
				}, transition.duration)
			}
			else {
				console.log('transitioning out...')
				setTimeout(() => {
					console.log('transition done.')
				}, transition.duration)
			}
		}
	}, [willRender, transition.duration, verbose])

	useEffect(() => {
		if (transitioning) return
		if (willRender) {
			setChildrenMounted(true)
			setTransitioning(true)
			setTimeout(() => {
				setTransitioning(false)
			}, transition.duration)
		} else {
			setTransitioning(true)
			setTimeout(() => {
				setChildrenMounted(false)
				setTransitioning(false)
			}, transition.duration);
		}
	}, [willRender, transition.duration, transitioning])

	const getCurrentStyle = () => {
		const transitionDuration = { transitionDuration: transition.duration + 'ms' }

		if (!childrenMounted)
			return { ...transition.initial, ...transitionDuration }

		if (willRender)
			return { ...(transition.transition), ...transitionDuration }

		else
			return { ...(transition.exit), ...transitionDuration }
	}

	return (
		<div style={getCurrentStyle()}>
			{childrenMounted ? children : null}
		</div>
	)
}
