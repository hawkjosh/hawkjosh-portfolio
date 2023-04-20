import useTextareaScroll from '../hooks/useTextareaScroll.js'

const textareaStyle = {
	display: 'block',
	borderWidth: '0.125rem',
	borderStyle: 'solid',
	borderRadius: '0.5rem',
	padding: '0.5rem 1rem',
	resize: 'none',
}

export const CustomTextarea = ({ ...props }) => {
	const textareaRef = useTextareaScroll()

	return (
		<textarea
			ref={textareaRef}
			style={textareaStyle}
			{...props}
		/>
	)
}
