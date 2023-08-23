import {
	AccumulationChartComponent,
	AccumulationDataLabel,
	AccumulationLegend,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationTooltip,
	Inject,
	PieSeries,
} from '@syncfusion/ej2-react-charts'
import { useContext } from 'react'
import { Header } from '../../components'
import { StateContext } from '../../contexts/StateContext'
import { pieChartData } from '../../data/dummy'

const Pie = () => {
	const { currentMode } = useContext(StateContext)

	return (
		<div className='m-4 mt-24 md:m-10 p-4 md:p-10 bg-white rounded-xl drop-shadow-md dark:bg-secondary-dark-bg'>
			<Header category='Chart' title='Resource Allocation' />
			<div className='w-full'></div>
			<AccumulationChartComponent
				id='pie-chart'
				height='420px'
				tooltip={{ enable: true }}
				background={currentMode === 'Dark' ? 'transparent' : '#fff'}
				legendSettings={{
					textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
				}}
			>
				<Inject
					services={[
						PieSeries,
						AccumulationLegend,
						AccumulationTooltip,
						AccumulationDataLabel,
					]}
				/>
				<AccumulationSeriesCollectionDirective>
					<AccumulationSeriesDirective
						dataSource={pieChartData}
						xName='x'
						yName='y'
						pointColorMapping='fill'
						dataLabel={{
							visible: true,
							name: 'text',
							position: 'Outside',
							font: { fontWeight: 'bold', size: '.8rem' },
						}}
					></AccumulationSeriesDirective>
				</AccumulationSeriesCollectionDirective>
			</AccumulationChartComponent>
		</div>
	)
}

export default Pie
