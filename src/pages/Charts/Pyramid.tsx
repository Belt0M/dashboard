import {
	AccumulationChartComponent,
	AccumulationDataLabel,
	AccumulationLegend,
	AccumulationSelection,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationTooltip,
	Inject,
	PyramidSeries,
} from '@syncfusion/ej2-react-charts'
import { Browser } from '@syncfusion/ej2/base'
import { useContext } from 'react'
import { Header } from '../../components'
import { StateContext } from '../../contexts/StateContext'

const Pyramid = () => {
	const { currentMode } = useContext(StateContext)

	const pyramidData: any[] = [
		{
			x: 'Milk, Youghnut, Cheese',
			y: 435,
			text: Browser.isDevice
				? 'Milk, Youghnut,<br> Cheese:  435 cal'
				: 'Milk, Youghnut, Cheese: 435 cal',
		},
		{ x: 'Vegetables', y: 470, text: 'Vegetables: 470 cal' },
		{
			x: 'Meat, Poultry, Fish',
			y: 475,
			text: Browser.isDevice
				? 'Meat, Poultry,<br> Fish: 475 cal'
				: 'Meat, Poultry, Fish: 475 cal',
		},
		{
			x: 'Rice, Pasta',
			y: 930,
			text: Browser.isDevice
				? 'Rice, Pasta:<br> 930 cal'
				: ' Rice, Pasta: 930 cal',
		},
		{
			x: 'Fruits',
			y: 520,
			text: Browser.isDevice ? 'Fruits: <br> 520 cal' : 'Fruits: 520 cal',
		},
	]

	return (
		<div className='m-4 mt-24 md:m-10 p-4 md:p-10 bg-white rounded-xl drop-shadow-md dark:bg-secondary-dark-bg'>
			<Header category='Chart' title='Eaten by day' />
			<div className='w-full'>
				<AccumulationChartComponent
					id='pyramid-chart'
					legendSettings={{
						visible: true,
						textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
					}}
					background={currentMode === 'Dark' ? 'transparent' : '#fff'}
				>
					<Inject
						services={[
							AccumulationTooltip,
							AccumulationDataLabel,
							PyramidSeries,
							AccumulationSelection,
							AccumulationLegend,
						]}
					/>
					<AccumulationSeriesCollectionDirective>
						<AccumulationSeriesDirective
							dataSource={pyramidData}
							xName='x'
							yName='y'
							type='Pyramid'
							width='50%'
							height='90%'
							dataLabel={{
								visible: true,
								position: 'Outside',
								connectorStyle: { length: '20px' },
							}}
						/>
					</AccumulationSeriesCollectionDirective>
				</AccumulationChartComponent>
			</div>
		</div>
	)
}

export default Pyramid
