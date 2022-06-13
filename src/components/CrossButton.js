export default function CrossButton({ onClick, style }) {
	return (
		<div className='cross-button' onClick={onClick} style={style}>
			<img src='icons/cross.svg' />
		</div>
	);
}