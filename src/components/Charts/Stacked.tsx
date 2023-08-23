import {
	AxisModel,
	Category,
	ChartComponent,
	Inject,
	Legend,
	SeriesCollectionDirective,
	SeriesDirective,
	StackingColumnSeries,
	Tooltip,
} from '@syncfusion/ej2-react-charts'

import { useContext } from 'react'
import { StateContext } from '../../contexts/StateContext'
import { stackedCustomSeries } from '../../data/dummy.js'

interface IStackedProps {
	width: string
	height: string
}

const Stacked = ({ width, height }: IStackedProps) => {
	const { currentMode } = useContext(StateContext)

	const primaryxAxis: AxisModel = {
		majorGridLines: { width: 0 },
		minorGridLines: { width: 0 },
		majorTickLines: { width: 0 },
		minorTickLines: { width: 0 },
		interval: 1,
		lineStyle: { width: 0 },
		labelIntersectAction: 'Rotate45',
		valueType: 'Category',
	}
	const primaryyAxis: AxisModel = {
		lineStyle: { width: 0 },
		minimum: 100,
		maximum: 400,
		interval: 100,
		majorTickLines: { width: 0 },
		majorGridLines: { width: 1 },
		minorGridLines: { width: 1 },
		minorTickLines: { width: 0 },
		labelFormat: '{value}',
	}

	return (
		<ChartComponent
			width={width}
			height={height}
			id='charts'
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			primaryXAxis={primaryxAxis}
			primaryYAxis={primaryyAxis}
			legendSettings={{
				background: currentMode === 'Dark' ? 'transparent' : '#fff',
				textStyle: { color: currentMode === 'Dark' ? '#fff' : '' },
			}}
			background={currentMode === 'Dark' ? 'transparent' : '#fff'}
		>
			<Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
			<SeriesCollectionDirective>
				{stackedCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	)
}

export default Stacked
