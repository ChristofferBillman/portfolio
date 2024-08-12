import { useEffect, useState } from "react";

export default function TransitionLifecycle({ children, transition, willRender }) {

	const [childrenMounted, setChildrenMounted] = useState(false);
	const [transitioning, setTransitioning] = useState(false);

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
