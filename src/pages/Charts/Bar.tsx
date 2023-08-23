import {
	Category,
	ChartComponent,
	ColumnSeries,
	DataLabel,
	Inject,
	Legend,
	SeriesCollectionDirective,
	SeriesDirective,
	Tooltip,
} from '@syncfusion/ej2-react-charts'
import { useContext } from 'react'
import { Header } from '../../components'
import { StateContext } from '../../contexts/StateContext'
import { barCustomSeries } from '../../data/dummy'

const Bar = () => {
	const { currentMode } = useContext(StateContext)

	return (
		<div className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md dark:bg-secondary-dark-bg'>
			<Header category='Chart' title='Inflation Rate Bar Chart' />
			<div className='w-full'></div>
			<ChartComponent
				id='bar-charts'
				primaryXAxis={{
					valueType: 'Category',
					interval: 1,
					majorGridLines: { width: 0 },
				}}
				primaryYAxis={{
					majorGridLines: { width: 0 },
					majorTickLines: { width: 0 },
					lineStyle: { width: 0 },
					labelStyle: { color: 'transparent' },
				}}
				height='420px'
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === 'Dark' ? 'transparent' : '#fff'}
				legendSettings={{
					textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
				}}
			>
				<Inject
					services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
				/>
				<SeriesCollectionDirective>
					{barCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	)
}

export default Bar
