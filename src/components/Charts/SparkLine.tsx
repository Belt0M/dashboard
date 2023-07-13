import {
	Inject,
	SparklineComponent,
	SparklineTooltip,
	SparklineType,
} from '@syncfusion/ej2-react-charts'

interface ISparkLineProps {
	currentColor: string
	id: string
	width: string
	height: string
	color: string
	type: SparklineType
	data: Object[]
}

const SparkLine = ({
	currentColor,
	id,
	width,
	height,
	color,
	type,
	data,
}: ISparkLineProps) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType='Numeric'
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName='xval'
			yName='yval'
			type={type}
			tooltipSettings={{
				visible: true,
				// eslint-disable-next-line no-template-curly-in-string
				format: '${xval} data: ${yval}',
				trackLineSettings: {
					visible: true,
				},
			}}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	)
}

export default SparkLine
