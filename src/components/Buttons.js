export function CrossButton({ onClick, style }) {
	return (
		<div className='cross-button' onClick={onClick} style={style}>
			<img src='icons/cross.svg' alt='X' />
		</div>
	);
}

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