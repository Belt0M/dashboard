import {
	ChartComponent,
	DateTime,
	Inject,
	Legend,
	LineSeries,
	SeriesCollectionDirective,
	SeriesDirective,
	Tooltip,
} from '@syncfusion/ej2-react-charts'
import {} from '@syncfusion/ej2-react-popups'
import { useContext } from 'react'
import { StateContext } from '../../contexts/StateContext'
import { lineCustomSeries } from '../../data/dummy'

const LineChart = () => {
	const { currentMode } = useContext(StateContext)

	return (
		<ChartComponent
			height='420px'
			primaryXAxis={{
				valueType: 'DateTime',
				labelFormat: 'y',
				intervalType: 'Years',
				edgeLabelPlacement: 'Shift',
				majorGridLines: { width: 0 },
			}}
			primaryYAxis={{
				labelFormat: '{value}%',
				rangePadding: 'None',
				minimum: 0,
				maximum: 100,
				interval: 20,
				lineStyle: { width: 0 },
				majorTickLines: { width: 0 },
				minorTickLines: { width: 0 },
			}}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			background={currentMode === 'Dark' ? '#33373E' : '#fff'}
			legendSettings={{
				textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
			}}
		>
			<Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
			<SeriesCollectionDirective>
				{lineCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	)
}

export default LineChart
