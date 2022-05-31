export default function ChevronButton({ text, chevronDirection, onClick, style }) {

	const renderChevron = () => {
		switch (chevronDirection) {
			case 'up':
				return (
					<>
						<img src='icons/chevron.svg' />
						<p className='clickable-text'>{text}</p>
					</>
				)
			case 'down':
				return (
					<>
						<p className='clickable-text' style={{ marginTop: 'auto' }}>{text}</p>
						<img src='icons/chevron.svg' style={{ transform: 'rotate(180deg)' }} />
					</>
				)
			default:
				return null;
		}
	}
	return (
		<div
			className='chevron-button'
			onClick={onClick}
			style={style}
		>
			{renderChevron(chevronDirection)}
		</div>
	);
}