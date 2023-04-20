const inputStyle = {
	display: 'block',
	borderWidth: '0.125rem',
	borderStyle: 'solid',
	borderRadius: '0.5rem',
	padding: '0.5rem 1rem',
}

export const CustomInput = ({ ...props }) => {
	return (
		<input
			style={inputStyle}
			{...props}
		/>
	)
}
