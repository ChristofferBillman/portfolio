/*
 * The buttons used for navigation up and down in the page.
 *
 * Usage:
 * <ChevronButton 
 *     chevronDirection='up'
 *     text='Back'
 *     onClick={func}
 * 	   style={style}
 * />
 *
 * Props:
 * chevronDirection: 'up' or 'down'
 * text: The text to display on the button
 * onClick: The function to call when the button is clicked
 * style: The style to apply to the button
 */

export default function ChevronButton({ text, chevronDirection, onClick, style }) {

	const renderChevron = () => {
		switch (chevronDirection) {
			case 'up':
				return (
					<>
						<img src='icons/chevron.svg' />
						<p className='attention-text'>{text}</p>
					</>
				)
			case 'down':
				return (
					<>
						<p className='attention-text' style={{ marginTop: 'auto' }}>{text}</p>
						<img src='icons/chevron.svg' style={{ transform: 'rotate(180deg)' }} />
					</>
				)
			case 'left':
				return (
					<>
						<img src='icons/chevron.svg' style={{ transform: 'rotate(-90deg)' }} />
						<p className='attention-text' style={{ marginTop: 'auto' }}>{text}</p>
					</>
				)
			case 'right':
				return (
					<>
						<img src='icons/chevron.svg' style={{ transform: 'rotate(90deg)' }} />
						<p className='attention-text' style={{ marginTop: 'auto' }}>{text}</p>
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