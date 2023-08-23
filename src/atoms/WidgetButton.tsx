interface IButtonProps {
	color: string
	bgColor: string
	size: string
	text: string
	borderRadius: string
	width: string
}

const WidgetButton = ({
	color,
	bgColor,
	size,
	text,
	borderRadius,
	width,
}: IButtonProps) => {
	return (
		<button
			type='button'
			style={{ backgroundColor: bgColor, color, borderRadius, width: width }}
			className={`text-${size} p-3 hover:drop-shadow-xl mb-4`}
		>
			{text}
		</button>
	)
}

export default WidgetButton
