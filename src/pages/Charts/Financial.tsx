import {
	BollingerBands,
	CandleSeries,
	Category,
	ChartComponent,
	Crosshair,
	DateTime,
	IndicatorDirective,
	IndicatorsDirective,
	Inject,
	Legend,
	LineSeries,
	Logarithmic,
	RangeAreaSeries,
	SeriesCollectionDirective,
	SeriesDirective,
	Tooltip,
	Zoom,
} from '@syncfusion/ej2-react-charts'
import { useContext } from 'react'
import { Header } from '../../components'
import { StateContext } from '../../contexts/StateContext'
import { financialChartData2 } from '../../data/dummy'

const Financial = () => {
	const { currentMode } = useContext(StateContext)

	return (
		<div className='m-4 mt-24 md:m-10 p-4 md:p-10 bg-white rounded-xl drop-shadow-md dark:bg-secondary-dark-bg'>
			<Header category='Chart' title='Financial Chart' />
			<div className='w-full'>
				<ChartComponent
					id='charts'
					style={{ textAlign: 'center' }}
					primaryXAxis={{
						valueType: 'DateTime',
						majorGridLines: { width: 0 },
						zoomFactor: 0.2,
						zoomPosition: 0.6,
						crosshairTooltip: { enable: true },
					}}
					primaryYAxis={{
						title: 'Price (in Million)',
						intervalType: 'Months',
						labelFormat: '${value}M',
						minimum: 50,
						maximum: 170,
						interval: 30,
						majorGridLines: { width: 1 },
						lineStyle: { width: 0 },
					}}
					chartArea={{ border: { width: 0 } }}
					tooltip={{ enable: true, shared: true }}
					legendSettings={{
						visible: false,
						textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
					}}
					height='420px'
					crosshair={{ enable: true, lineType: 'Vertical' }}
					title='AAPL Stock Price 2012-2017'
					titleStyle={{ color: currentMode === 'Dark' ? '#fff' : '#000' }}
					background={currentMode === 'Dark' ? 'transparent' : '#fff'}
				>
					<Inject
						services={[
							CandleSeries,
							Category,
							Tooltip,
							DateTime,
							Legend,
							Zoom,
							Logarithmic,
							Crosshair,
							LineSeries,
							RangeAreaSeries,
							BollingerBands,
						]}
					/>
					<SeriesCollectionDirective>
						<SeriesDirective
							dataSource={financialChartData2}
							width={2}
							xName='period'
							yName='y'
							low='low'
							high='high'
							close='close'
							volume='volume'
							open='open'
							name='Apple Inc'
							bearFillColor='#2ecd71'
							bullFillColor='#e74c3d'
							type='Candle'
							animation={{ enable: false }}
						/>
					</SeriesCollectionDirective>
					<IndicatorsDirective>
						<IndicatorDirective
							type='BollingerBands'
							field='Close'
							seriesName='Apple Inc'
							fill='#606eff'
							period={14}
							animation={{ enable: true }}
							upperLine={{ color: '#ffb735', width: 1 }}
							lowerLine={{ color: '#f2ec2f', width: 1 }}
						/>
					</IndicatorsDirective>
				</ChartComponent>
			</div>
		</div>
	)
}

export default Financial
