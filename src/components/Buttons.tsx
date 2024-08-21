export function ExpandButton({ onClick }) {
	return (
		<div className='expand-button' onClick={onClick}>
			<img className='expand-icon' src='icons/expand.svg' alt='Expand' />
		</div>

	)
}

export function ShrinkButton({ onClick }) {
	return (
		<div className='expand-button' onClick={onClick}>
			<img className='expand-icon' src='icons/shrink.svg' alt='Close' />
		</div>

	)
}