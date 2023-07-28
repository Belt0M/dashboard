import {
	ChartComponent,
	DateTime,
	Inject,
	Legend,
	SeriesCollectionDirective,
	SeriesDirective,
	SplineAreaSeries,
} from '@syncfusion/ej2-react-charts'
import { useContext } from 'react'
import { Header } from '../../components'
import { StateContext } from '../../contexts/StateContext'
import { areaCustomSeries } from '../../data/dummy'

const Area = () => {
	const { currentMode } = useContext(StateContext)

	return (
		<div className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md dark:bg-secondary-dark-bg'>
			<Header category='Chart' title='Inflation Rate Area Chart' />
			<div className='w-full'>
				<ChartComponent
					height='420px'
					primaryXAxis={{
						valueType: 'DateTime',
						labelFormat: 'y',
						majorGridLines: { width: 0 },
						intervalType: 'Years',
						edgeLabelPlacement: 'Shift',
						labelStyle: { color: 'gray' },
					}}
					primaryYAxis={{
						labelFormat: '{value}%',
						lineStyle: { width: 0 },
						maximum: 4,
						interval: 1,
						majorTickLines: { width: 0 },
						minorTickLines: { width: 0 },
						labelStyle: { color: 'gray' },
					}}
					chartArea={{ border: { width: 0 } }}
					tooltip={{ enable: true }}
					background={currentMode === 'Dark' ? '#33373E' : '#fff'}
					legendSettings={{
						textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
					}}
				>
					<Inject services={[SplineAreaSeries, DateTime, Legend]} />
					<SeriesCollectionDirective>
						{areaCustomSeries.map((item, index) => (
							<SeriesDirective key={index} {...item} />
						))}
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</div>
	)
}

export default Area
