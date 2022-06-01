export default function CrossButton({ onClick }) {
	return (
		<div className='cross-button' onClick={onClick}>
			<img src='icons/cross.svg' />
		</div>
	);
}