const buttonStyle = {
	textTransform: 'uppercase',
	borderWidth: '0.125rem',
	borderStyle: 'solid',
	borderRadius: '0.75rem',
	padding: '0.5rem 1rem',
	cursor: 'pointer',
}

export default ({ ...props }) => {
	return (
		<button
			style={buttonStyle}
			{...props}
		/>
	)
}
